import react,{useState,useContext} from 'react';
import {AuthContext} from './auth-context'
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import{VALIDATOR_EMAIL,VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE} from '../../shared/Validator';
import {useForm} from '../../shared/formHook';
const Auth=()=>{
    const auth=useContext(AuthContext);
    const [isLoginMode,setIsLoginMode]=useState(true);
  const [formState,inputHandler,setFormData]=  useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false);

    const submitLogin=async (e)=>{
    e.preventDefault();
    if(isLoginMode){
        try{
            const response= await fetch('http://localhost:5000/api/users/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },        
            body: JSON.stringify({
                 
                email:formState.inputs.email.value,
                password:formState.inputs.password.value
            })
           }); 
          const responseData= await response.json();
         
          if(!response.ok){
           throw new Error(responseData.message);
          }auth.login(responseData.user.id);
    
           }catch(err){
           alert(err);
           }
    }
    else{
       try{
        const response= await fetch('http://localhost:5000/api/users/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:formState.inputs.name.value,
            email:formState.inputs.email.value,
            password:formState.inputs.password.value
        })
       }); 
      const responseData= await response.json();
     
      if(!response.ok){
       throw new Error(responseData.message);
      }auth.login(responseData.user.id);

       }catch(err){
        console.log("test");
       }
    }
     
    
    }
    
    const SwitchMode=()=>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name:undefined
            },formState.inputs.email.isValid&&formState.inputs.password.isValid);
        }
        else{
            setFormData({...formState.inputs,
            name:{value:'',
            isValid:false}},false);
        }
      setIsLoginMode(prevMode=>!prevMode);

    }

return (<div style={{textAlign:'center'}} >
   
    <hr/>
    <div className="container" style={{width:"25%"}}>
    <form onSubmit={submitLogin} className="form-container col-12">
    {isLoginMode?<h2 >Login</h2>:<h2>Register</h2>}
    {!isLoginMode&&<Input id="name"
       element="input"
       type="name" 
       placeholder="enter your full name"
       label="Your Name" 
       validators={[VALIDATOR_REQUIRE()]}
       errortxt="please enter a valid USERNAME"
       onInput={inputHandler}
       />}

    <Input id="email"
       element="input"
       type="Email" 
       label="Email" 
       placeholder="enter your email "
       validators={[VALIDATOR_EMAIL()]}
       errortxt="please enter a valid"
       onInput={inputHandler}
       />
       <Input id="password"
       element="input"
       type="password" 
       placeholder="enter your password"
       label="Password" 
       validators={[VALIDATOR_MINLENGTH(8)]}
       errortxt="please enter a valid"
       onInput={inputHandler}
       />
       <Button disabled={!formState.isValid}>
           {isLoginMode?'LOGIN':'SIGN UP'}  
           </Button>
    </form>
      <Button onClick={SwitchMode}>Switch TO  {isLoginMode?'SIGN UP':'LOGIN'}</Button> 
      </div>
</div>);
}
export default Auth;