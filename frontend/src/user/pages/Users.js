import react,{useEffect,useState} from 'react';
import UsersList from '../components/UsersList';

const Users=()=>{
    const [loadedUsers,setLoadedUsers]=useState();
    useEffect(()=>{
        const sendreq=async ()=>{
            try{const res=await fetch('http://localhost:5000/api/users');
            const resdata=await res.json();
            if(!res.ok){
                throw new Error(resdata.message);
            }
             setLoadedUsers(resdata.users);
            }
            catch(err){
            console.log(4);
            }
            
            
        }; sendreq();
    },[]);
    
    return<div>{loadedUsers&&<UsersList items={loadedUsers}/>}</div>;
}
export default Users;