import React,{useEffect,useState} from 'react';   
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';
 

const UserPlaces=()=>{
    const[loadedListings,setLoadedListings]=useState();
    const userID=useParams().userid;
    useEffect(()=>{
     const  fetchListings=async ()=>{
         try{
          
            const res=await fetch(`http://localhost:5000/api/listings/user/${userID}`);
            const resdata=await res.json();
            if(!res.ok){
                throw new Error(resdata.message);
            }
             setLoadedListings(resdata.listings);
         }
         catch(err){
            console.log(4);

         }

      };fetchListings();



    },[userID])
    
    return(<div>{loadedListings&& <PlaceList items={loadedListings}/>}</div>);

}
export default UserPlaces;
