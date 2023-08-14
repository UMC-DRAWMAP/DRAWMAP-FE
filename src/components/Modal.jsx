import '../components/Modal.scss'
import logoImage from '../assets/images/logo_middle.png'
import googleIcon from '../assets/images/google_icon.png'
import kakaoIcon from '../assets/images/kakao_icon.png'
import naverIcon from '../assets/images/naver_icon.png'
import xIcon from '../assets/images/x_btn.png'
// test import
import test1 from '../assets/images/speech_bubble.png'
import test2 from '../assets/images/congratulation.png'
// test import
import { useState, useRef } from 'react'


const alarms = [
	{
		icon: test1,
		text: "내 코스에 후기가 등록되었습니다."
	},
	{
		icon: test2,
		text: "드로맵 TOP3 유저로 선정되었습니다."
	}
];

export const ModalLogin = () => {
    return (
        <div className="ModalLogin">
            <img src={xIcon} alt="" className='xbutton'/>
            <div className="alignbox">
                <img src={logoImage} alt="" className="logoimage"/>
                <p className="loginmodaltext">드로맵 코스에 도전해보세요!</p>
                <div className='loginboxgroup'>
                    <LoginBox icon={googleIcon} text={"구글 소셜 로그인"} imgwidth={'24px'} imgheight={'24px'} imgleftmargin={'65px'} imgrightmargin={'38px'} />
                    <LoginBox icon={kakaoIcon} text={"카카오 소셜 로그인"} imgwidth={'24px'} imgheight={'24px'} imgleftmargin={'65px'} imgrightmargin={'38px'} />
                    <LoginBox icon={naverIcon} text={"네이버 소셜 로그인"} imgwidth={'18px'} imgheight={'18px'} imgleftmargin={'68px'} imgrightmargin={'41px'} />
                </div>
            </div>
        </div>
    );
};

export const LoginBox = ({ icon, text, imgwidth, imgheight, imgleftmargin, imgrightmargin }) => {
    return (
        <div className="LoginBox">
            <img src={icon} alt="" style={{width: imgwidth, height: imgheight, marginLeft: imgleftmargin, marginRight: imgrightmargin}}/>
            <p className="loginboxtext">{text}</p>
        </div>
    );
};

export const ModalUpload = () => {

    const selectFile = useRef("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const handleFileSelect = (e) => {
        const file = e.target.files;
        setSelectedFiles([...selectedFiles, ...file]);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const newSelectedFiles = [...selectedFiles];
        console.log(files.length);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            newSelectedFiles.push(file);
        }
        setSelectedFiles(newSelectedFiles);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        const targetDiv = event.currentTarget;
        //console.log(targetDiv);
        //targetDiv.focus();
        setIsDraggingOver(true);
    };

    const handleDragLeave = (event) => {
        setIsDraggingOver(false);
    }


    return (
        <div className="ModalUpload">
            <img src={xIcon} alt="" className='xbutton'/>
            <p className="uploadmodaltext">코스 파일 업로드</p>
            <div className={isDraggingOver ? 'filechoiceboxover' : 'filechoicebox'} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} >
                <p className="filechoicetext">업로드할 파일 선택</p>
                <p className="filechoicesubtext">또는 GPX 등 파일 끌어 놓기</p>
                <input type="file" multiple={true} style={{display: "none"}} ref={selectFile} onChange={handleFileSelect} />
                <button onClick={() => selectFile.current.click()}>파일선택</button>
            </div>
            <div>
                {selectedFiles.map((file, index) => (
                    <div key={index}>{file.name}</div>
                ))}
            </div>
        </div>
    );
};

export const ModalAlarm = () => {
    return (
        <div className='ModalAlarm'>
            <img src={xIcon} alt="" className='xbutton'/>
            {alarms.map((it) => (
                <Alarm icon={it.icon} text={it.text}/>
            ))}
        </div>
    );
};

export const Alarm = ({ icon, text }) => {
    return (
        <div className='Alarm'>
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    )  
};