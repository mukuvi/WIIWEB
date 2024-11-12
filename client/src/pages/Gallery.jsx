import { useEffect, useState } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => res.json())
      .then((pictures) => setPhotos(pictures));
  }, []);

  console.log(photos);
  return (
    <div>
      <p>{photos.title}</p>
      <img src={photos.thumbnailUrl} />
    </div>
  );
}
