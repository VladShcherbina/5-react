
import styles from './ErrorPage.module.css'



function ErrorPage() {
   


  return (
    <div className={styles.wrapper}>
       <h1 className={styles.title}>404</h1>
       <p className={styles.text}>Данна сторінка відсутня</p>
    </div>
  );
  }
  
  export default ErrorPage;