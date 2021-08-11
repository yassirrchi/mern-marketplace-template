import react,{useReducer,useEffect} from 'react';
import { validate} from'./Validator';
const inputReducer=(state,action)=>{
switch(action.type){

    case'CHANGE':
    return{
        ...state,value:action.val,isValid:validate(action.val,action.validators)
    };
    case'TOUCH':
    return{...state,isTouched:true};
    default:
        return state;
}
};
const Input =props=>{
     
    const [inputState,dispatch]=useReducer(inputReducer,{value:props.initialValue||'',isValid:props.initialValid||false,isTouched:false});
    const changeHandler=e=>{dispatch({type:'CHANGE',val:e.target.value,validators:props.validators}); };
    const onblurHandler=()=>{dispatch({type:'TOUCH'})}
    const {id,onInput}=props;
    const {value,isValid}=inputState;
    useEffect(()=>{props.onInput(id, value, isValid)},[id,value,isValid,onInput ]); 
     const element=props.element==='input'?(<input id={props.id} type={props.type}  placeholder={props.placeholder } className="form-control" onChange={changeHandler} onBlur={onblurHandler} value={inputState.value}/>):(<textarea id={props.id}   onChange={changeHandler} className="form-control"  onBlur={onblurHandler} value={inputState.value }/>);
    
     return <div className="form-group"><label htmlFor={props.id}>{props.label}</label>{element}{!inputState.isValid&&inputState.isTouched&&<p>{props.errortxt}</p>} </div>
};
export default Input;