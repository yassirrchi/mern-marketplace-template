import React,{useContext, useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/Validator';
import {useForm} from '../../shared/formHook';
import {AuthContext} from '../../user/pages/auth-context';
 
const UpdateListing=()=>{
    const[isLoading,setIsLoading]=useState(true);
    const history=useHistory();
    const auth=useContext(AuthContext);
    const listId=useParams().listId;
    const [loadedListings,setLoadedListings]=useState();
     //   initial
    const [formState,inputHandler,setFormData]=useForm({
       title:{
      value:'',
      isValid:false
     },
      description:{
      value:'',
      isValid:false
     }
    },false);
    // }
////////////////////////////
useEffect(()=>{
  const  fetchListings=async ()=>{
      try{
       
         const res=await fetch(`http://localhost:5000/api/listings/${listId}`);
         const resdata=await res.json();
         if(!res.ok){
             throw new Error(resdata.message);
         }
          setLoadedListings(resdata.listing);

      setFormData({
            title:{
             value:resdata.listing.title,
             isValid:true
       },
        description:{
        value:resdata.listing.description,
        isValid:true
       }
      },true);
     
      }
      catch(err){
         console.log(4);

      }

   };fetchListings();



 },[listId,setFormData])

//////////////////////////////
      
    ///////////////////////ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 
     const UpdateSubmit=async (e)=>{
       e.preventDefault();
       try{
        
        const response= await fetch(`http://localhost:5000/api/listings/${listId}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },        
        body: JSON.stringify({
             
            title:formState.inputs.title.value,
            description:formState.inputs.description.value
        })
       }); 
      const responseData= await response.json();
     
      if(!response.ok){
       throw new Error(responseData.message);
      } history.push(`/${auth.userId}`);

       }catch(err){
       
       }
       







     }
      
  ////ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 
    if(!loadedListings){return(<div>could not find place</div>)};

return <div> <h2>edit place  </h2><form onSubmit={UpdateSubmit}>
     <Input id="title"
       element="input"
       type="text" 
       label="Title" 
       validators={[VALIDATOR_REQUIRE()]}
       errortxt="please enter a valid"
       onInput={inputHandler}
       initialValue={loadedListings.title}
       initialValid={formState.inputs.title.isValid}/>
     <Input id="description"
       element="textarea"
       label="Description" 
       validators={[VALIDATOR_MINLENGTH(5)]}
       errortxt="please enter a valid"
       onInput={inputHandler}
       initialValue={loadedListings.description}
        initialValid={formState.inputs.description.isValid}/>
      
       <Button type="submit" disabled={!formState.isValid}>Update</Button>
</form></div>
}
export default UpdateListing;