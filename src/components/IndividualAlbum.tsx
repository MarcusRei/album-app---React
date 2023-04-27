import { Album } from "../models/Album";

export const IndividualAlbum = ({ ...Album }: Album) => {
  return (
    <div>
      <h2>{Album.title}</h2>
      <h4>{Album.artist}</h4>
    </div>
  );
};
