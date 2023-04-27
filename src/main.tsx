import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Error } from "./pages/Error.tsx";
import { ShowAlbums } from "./pages/ShowAlbums.tsx";
import { AlbumCard } from "./components/AlbumCard.tsx";
import { AlbumView } from "./pages/AlbumView.tsx";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/albums",
    element: <ShowAlbums></ShowAlbums>,
    errorElement: <Error></Error>,
  },
  {
    path: "/albums/:id",
    element: <AlbumView></AlbumView>,
    errorElement: <Error></Error>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
