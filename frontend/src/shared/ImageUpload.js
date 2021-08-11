import React, {useRef,useState} from 'react';
import './ImageUpload.css';
import Button from './Button';
const ImageUpload=props=>{
const [file,setFile]=useState();
const [previewUrl,setPreviewUrl]=useState();
const filePickerRef=useRef();
const pickHandler=(e)=>{
e.target.files;

}
const pickImageHandler=()=>{
    filePickerRef.current.click();
};
return (<div>
    <input id={props.id}  ref={filePickerRef} style={{display:'none'}} type="file" accept=".jpeg,.png,.jpg"/>
    <div className={`image-upload ${props.center && 'center'}`} >
    <div className="image-upload__preview">
        <img src="" alt="preview"></img>
    </div>
    <Button type="button" onClick={pickImageHandler}>Select an image</Button>
    </div>
</div>);

};
export default ImageUpload;