import React,{useCallback,useReducer,useContext}  from 'react';
import {AuthContext} from '../../user/pages/auth-context';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/Validator';
import {useForm} from '../../shared/formHook';
import {useHistory} from 'react-router-dom';
const NewPlace =()=>{
    const history=useHistory();
    const auth=useContext(AuthContext);
  const [formState,inputHandler]=  useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        prix:{
            value:'',
            isValid:false
        }
    },false);
    


     const submitHandler=async (e)=>{
         e.preventDefault();
         try{
        
            const response= await fetch('http://localhost:5000/api/listings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title:formState.inputs.title.value,
                description:formState.inputs.description.value,
                prix:formState.inputs.prix.value,
                creator:auth.userId
            })
           }); 
          
          const responseData= await response.json();
          
         console.log(responseData);
          if(!response.ok){
           throw new Error(responseData.message);
          }//here
            history.push('/');
           }catch(err){
            console.log("TESTTTTT");
           }



         
     }
    return(<form onSubmit={submitHandler}>
        <Input id="title" type="text" element="input" label="Title" validators={[VALIDATOR_REQUIRE()]} errortxt="enter a valid value" onInput={inputHandler}/>
        <Input id="description"  element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(10)]} errortxt="enter atleast 10 characters" onInput={inputHandler}/>
        <Input id="prix" type="text" element="input" label="Prix" validators={[VALIDATOR_REQUIRE()]} errortxt="enter a valid value" onInput={inputHandler}/>
          <Button type='submit' disabled={!formState.isValid}>Add</Button> </form>);
}
export default NewPlace; 