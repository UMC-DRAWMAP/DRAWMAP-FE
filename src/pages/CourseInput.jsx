import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../pages/CourseInput.scss'
import ButtonSelect from '../components/ButtonSelect.jsx';
import cameraicon from '../assets/images/camera.svg'
import fileuploadicon from '../assets/images/file-upload.svg'
import { useState, useRef } from 'react';
import Button from '../components/Button.jsx';
import character from '../assets/images/character.png';

const CourseInput = () => {

    const [isClicked1, setIsClicked1] = useState('--back-color');
    const [isClicked2, setIsClicked2] = useState('--back-color');
    const [isClicked3, setIsClicked3] = useState('--back-color');

    const selectFile = useRef("");
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (e) => {
        const file = e.target.files;
        setSelectedFiles([...selectedFiles, ...file]);
    }

    const handleFileRemove = () => {
        
    };

    const handleClick1 = () => {
        setIsClicked2('--back-color');
        setIsClicked3('--back-color');
        if (isClicked1 === '--green-color') {
            setIsClicked1('--back-color');
        } else {
            setIsClicked1('--green-color');
        }
    };

    const handleClick2 = () => {
        setIsClicked1('--back-color');
        setIsClicked3('--back-color');
        if (isClicked2 === '--green-color') {
            setIsClicked2('--back-color');
        } else {
            setIsClicked2('--green-color');
        }
    };

    const handleClick3 = () => {
        setIsClicked1('--back-color');
        setIsClicked2('--back-color');
        if (isClicked3 === '--green-color') {
            setIsClicked3('--back-color');
        } else {
            setIsClicked3('--green-color');
        }
    };


    return (
        <div className="CourseInput">
            <Header />
            <p className='pagetitle'>드로맵 개발 코스 작성하기</p>
            <div className='inputcontainer'>
                <div className='titleinputcontainer'>
                    <p className='inputitem'>코스명</p>
                    <input type="text" className='titleinput'/>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start', width: '864px', marginTop: '31px'}}>
                    <div className='placeinputcontainer'>
                        <p className='inputitem'>지역</p>
                        <ButtonSelect />
                        <ButtonSelect />
                    </div>
                    <div className='levelinputcontainer'>
                        <p className='inputitem'>난이도</p>
                        <button className='levelbutton' style={{backgroundColor: `var(${isClicked1})`}} onClick={handleClick1}>상</button>
                        <button className='levelbutton' style={{backgroundColor: `var(${isClicked2})`}} onClick={handleClick2}>중</button>
                        <button className='levelbutton' style={{backgroundColor: `var(${isClicked3})`}} onClick={handleClick3}>하</button>
                    </div>
                </div>
                <div className='detailinputcontainer'>
                    <p className='inputitem'>한줄소개</p>
                    <textarea className='detailinput'></textarea>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '30px'}}>
                    <p className='inputitem'>코스 경로</p>
                    <div className='courseinputcontainer'>
                        <div className='courseimagebox'>
                            <img src={cameraicon} alt="" className='courseimage'/>
                        </div>
                        <div className='courseroutecontainer'>
                            <textarea className='courseroute'></textarea>
                            <div className='filecontainer'>
                                <input type="file" multiple={true} style={{display: "none"}} ref={selectFile} onChange={handleFileSelect} />
                                <div className='uploadedfilecontainer'>
                                    {selectedFiles.map((file) => (
                                        <div className='uploadedfile'>{file.name}
                                            <div style={{display: 'inline-block', marginLeft: '10px'}} onClick={handleFileRemove}>
                                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M6.80446 1.13967L4.44413 3.5L6.80446 5.86033C6.92966 5.98553 7 6.15534 7 6.3324C7 6.50946 6.92966 6.67926 6.80446 6.80446C6.67926 6.92966 6.50946 7 6.3324 7C6.15534 7 5.98553 6.92966 5.86033 6.80446L3.5 4.44413L1.13967 6.80446C1.01447 6.92966 0.844662 7 0.667602 7C0.490543 7 0.320736 6.92966 0.195536 6.80446C0.0703365 6.67926 2.25099e-07 6.50946 2.25099e-07 6.3324C2.25099e-07 6.15534 0.0703365 5.98553 0.195536 5.86033L2.55587 3.5L0.195536 1.13967C0.0703365 1.01447 0 0.844662 0 0.667603C0 0.490543 0.0703365 0.320736 0.195536 0.195537C0.320736 0.0703368 0.490543 2.25098e-07 0.667602 2.25098e-07C0.844661 2.25098e-07 1.01447 0.0703368 1.13967 0.195537L3.5 2.55587L5.86033 0.195537C5.98553 0.0703368 6.15534 0 6.3324 0C6.50946 0 6.67926 0.0703368 6.80446 0.195537C6.92966 0.320736 7 0.490543 7 0.667602C7 0.844662 6.92966 1.01447 6.80446 1.13967Z" fill="black"/>
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button img={fileuploadicon} type={"default"} onClick={() => selectFile.current.click()} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttoncontainer'>
                    <button className='registerbutton'>등록하기</button>
                </div>
            </div>
            <img src={character} alt="" style={{width:'1286px', marginTop: '163px', marginBottom: '50px'}}/>
            <Footer />
        </div>
    );
};

export default CourseInput;