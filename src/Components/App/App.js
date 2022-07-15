import styles from './App.module.css'
import { useState } from 'react';
import Users from '../Users/Users';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [users,setusers] = useState([]);
  const [clicked,setclicked] = useState(false);
  const [loaded,setloaded]=useState(false);
  async function handlegetusers(){
    const response = await fetch("https://reqres.in/api/users?page=1");
    const users = await response.json();
    setusers(users.data);
    setloaded(true);
  }
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.nav_left}>
          <h1>RC USERS</h1>
        </div>
        <div className={styles.nav_right}>
          <button className={styles.getusers} onClick={()=>{
            setclicked(true);
            console.log(clicked);
            handlegetusers();
          }}
          >
            Get Users
          </button>
        </div>
      </div>
      {clicked
       ?
       <div className={styles.align_container}>
        {
          loaded
           ? 
           <div className={styles.users_container}>
            <Users users={users}/>
           </div>
           : 
           <div className={styles.spinner_container}>
             <Spinner animation='border' variant='primary'/>
           </div>
        }
       </div>
       :
       <div>
        <h1 className={styles.getusers_heading}>GET USERS</h1>
       </div>
      }
    </div>
  );
}

export default App;
