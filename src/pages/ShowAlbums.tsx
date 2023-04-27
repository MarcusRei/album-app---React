import { Link } from "react-router-dom";
import { albums } from "../mockdata/data";
import { IndividualAlbum } from "../components/IndividualAlbum";
import { NavBar } from "../components/NavBar";
import { Album } from "../models/Album";

const allAlbums = albums;

export interface ILoader {
  albums: Album[];
}

export function albumLoader() {
  const data: ILoader = { albums: [] };
  data.albums = allAlbums;

  return data;
}

export const ShowAlbums = () => {
  return (
    <>
      <NavBar></NavBar>
      {allAlbums.map((album, index) => (
        <Link key={index} to={album.id}>
          <IndividualAlbum {...album}></IndividualAlbum>
        </Link>
      ))}
    </>
  );
};
