import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


import styles from './AlbumPage.module.css'



function AlbumPage() {
    const {id} = useParams()

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(res => res.json())
        .then(album => setAlbums(album))
    },[id])
    


  return (
    <div className={styles.wrapper}>
        <h1>Альбоми користувача номер {id}</h1>
        {albums.map((elem) => {
            return (
                <Link to={`/photos/${elem.id}`} className={styles.items}  key={elem.id}>Title: {elem.title}</Link>
            )
        })}
    </div>
  );
  }
  
  export default AlbumPage;