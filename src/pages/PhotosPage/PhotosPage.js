import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import styles from './PhotosPage.module.css'

function PhotosPage() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumid=${id}&_limit=2`)
        .then(res => res.json())
        .then(photo => setPhotos(photo))
    },[id])

    const goBack = () => {
        navigate('/')
    }

  return (
    <div className={styles.wrapper}>  
    {photos.map((photo) => {
        return (<img alt="" key={photo.id} src={photo.url}></img> )})
    } 
        <button onClick={goBack} className={styles.goBackBtn}>Go Back</button>  
    </div>
  );
  }
  
  export default PhotosPage;