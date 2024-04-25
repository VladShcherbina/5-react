import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css'



function ErrorPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
}

  return (
    <div className={styles.wrapper}>
       <p className={styles.title}>404</p>
       <p className={styles.text}>Данна сторінка відсутня</p>
       <button className={styles.goBackBtn} onClick={goBack}>Go Back</button>
    </div>
  );
  }
  
  export default ErrorPage;