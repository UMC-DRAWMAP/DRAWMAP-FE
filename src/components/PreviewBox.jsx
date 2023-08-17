import cameraicon from '../assets/images/camera.svg';
import '../components/PreviewBox.scss';

import { useState, useRef } from "react";

const PreviewBox = () => {

    const imgRef = useRef();
    const [imgFile, setImgFile] = useState("");

    const handleImageUpload = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
   	    };
    };

    return (
        <div className="PreviewBox">
            <label htmlFor="previewImg">
                <img src={imgFile ? imgFile : cameraicon} alt="" className='courseimage'/>
            </label>
            <input type="file" accept="image/*" id="previewImg" onChange={handleImageUpload} ref={imgRef} style={{display: 'none'}}/>
        </div>
    );
};

export default PreviewBox;