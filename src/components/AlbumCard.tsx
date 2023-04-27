import { Album } from "../models/Album";

export const AlbumCard = ({ title, artist, year, label }: Album) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{artist}</h4>
      <p>
        Släpptes: {year} av {label} records.
      </p>
    </div>
  );
};
