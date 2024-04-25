import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import styles from './AlbumPage.module.css'



function AlbumPage() {
    const {id} = useParams()

    const [albums, setAlbums] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res => res.json())
        .then(album => setAlbums(album))
    },[id])


  return (
    <div className={styles.wrapper}>
        <Link to={`/photos/${albums.id}`} className={styles.items}  key={albums.id}>Title: {albums.title}</Link>
    </div>
  );
  }
  
  export default AlbumPage;