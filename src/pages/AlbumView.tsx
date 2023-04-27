import { useLoaderData, useParams } from "react-router";
import { ILoader } from "./ShowAlbums";
import { AlbumCard } from "../components/AlbumCard";

export const AlbumView = () => {
  const params = useParams();
  const { albums } = useLoaderData() as ILoader;

  const chosenAlbum = albums.find((album) => album.id === params.id);
  if (chosenAlbum === undefined) {
    return <h2>Sorry, finns inget här för dig att se!</h2>;
  } else {
    return <AlbumCard {...chosenAlbum}></AlbumCard>;
  }
};
