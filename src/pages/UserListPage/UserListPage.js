import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



import styles from './UserListPage.module.css'


function UserListPage() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => setUsers(user))
    },[])


  return (
    <div className={styles.wrapper}>
        {users.map((user) => {
            return (
                <Link to={`/album/${user.id}`} className={styles.items} key={user.id}>Name: {user.name}</Link>
            )
        })}
    </div>
  );
}

export default UserListPage;