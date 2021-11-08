import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  LogInPage,
  PrivateRoute,
  PrivateRouteLogin,
  MovieDetailesPage,
} from "./Pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase/init-firebase";
import { useDispatch } from "react-redux";
import { signInUser } from "./features/userSlice";
import { setMovies } from "./features/moviesSlice";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const dispatch = useDispatch();

  //  get movies
  useEffect(() => {
    getMovies();
  }, []);

  // get user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };

        dispatch(signInUser(userInfo));
      }
    });

    return () => unsubscribe();
  }, []);

  const getMovies = async () => {
    const moviesActionRef = collection(db, "movies");

    try {
      const response = await getDocs(moviesActionRef);

      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      let original = [];
      let neW = [];
      let trending = [];
      let recomended = [];

      data.forEach((curData) => {
        if (curData.type === "new") {
          neW.push(curData);
        } else if (curData.type === "trending") {
          trending.push(curData);
        } else if (curData.type === "original") {
          original.push(curData);
        } else if (curData.type === "recommend") {
          recomended.push(curData);
        }
      });

      dispatch(setMovies({ neW, trending, recomended, original }));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouteLogin exact path="/">
          <LogInPage />
        </PrivateRouteLogin>
        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
        <Route exact path="/movies/:id">
          <MovieDetailesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
