import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import styles from './PhotosPage.module.css'



function PhotosPage() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [photos, setPhotos] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(photo => setPhotos(photo))
    },[id])

    const goBack = () => {
        navigate('/')
    }

  return (
    <div className={styles.wrapper}>   
        <img alt="photo" key={photos.id} src={photos.url}></img> 
        <button onClick={goBack} className={styles.goBackBtn}>Go Back</button>  
    </div>
  );
  }
  
  export default PhotosPage;