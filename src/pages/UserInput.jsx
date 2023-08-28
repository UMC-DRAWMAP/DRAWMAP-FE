import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../components/UserInput.scss'
import charpencil from '../assets/images/char-pencil-handsup.svg'
import eraser from '../assets/images/char-eraser-handsup.svg'
import { useState, useRef } from 'react';
import cameraicon from '../assets/images/camera.svg'
import check from '../assets/images/check.svg'
import welcome from '../assets/images/welcome.svg'
const UserInput = () => {

  const [isClicked1, setIsClicked1] = useState('--back-color');
  const [isClicked2, setIsClicked2] = useState('--back-color');
  const [isClicked3, setIsClicked3] = useState('--back-color');
  const [isClicked4, setIsClicked4] = useState('--back-color');
  const [isClicked5, setIsClicked5] = useState('--back-color');
  const [isClicked6, setIsClicked6] = useState('--back-color');
  const [isClicked7, setIsClicked7] = useState('--back-color');
  const [isClicked8, setIsClicked8] = useState('--back-color');
  const [isClicked9, setIsClicked9] = useState('--back-color');
  const [isClicked10, setIsClicked10] = useState('--back-color');
  const [isClicked11, setIsClicked11] = useState('--back-color');
  const [isClicked12, setIsClicked12] = useState('--back-color');
  const [isClicked13, setIsClicked13] = useState('--back-color');
  const [isClicked14, setIsClicked14] = useState('--back-color');
  
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
  const handleClick4 = () => {
    setIsClicked1('--back-color');
    setIsClicked2('--back-color');
    if (isClicked4 === '--green-color') {
        setIsClicked4('--back-color');
    } else {
        setIsClicked4('--green-color');
    }
};
const handleClick5 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked5 === '--green-color') {
      setIsClicked5('--back-color');
  } else {
      setIsClicked5('--green-color');
  }
};
const handleClick6 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked6 === '--green-color') {
      setIsClicked6('--back-color');
  } else {
      setIsClicked6('--green-color');
  }
};
const handleClick7 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked7 === '--green-color') {
      setIsClicked7('--back-color');
  } else {
      setIsClicked7('--green-color');
  }
};
const handleClick8 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked8 === '--green-color') {
      setIsClicked8('--back-color');
  } else {
      setIsClicked8('--green-color');
  }
};
const handleClick9 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked9 === '--green-color') {
      setIsClicked9('--back-color');
  } else {
      setIsClicked9('--green-color');
  }
};
const handleClick10 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked10 === '--green-color') {
      setIsClicked10('--back-color');
  } else {
      setIsClicked10('--green-color');
  }
};
const handleClick11 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked7 === '--green-color') {
      setIsClicked11('--back-color');
  } else {
      setIsClicked11('--green-color');
  }
};
const handleClick12 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked12 === '--green-color') {
      setIsClicked12('--back-color');
  } else {
      setIsClicked12('--green-color');
  }
};
const handleClick13 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked13 === '--green-color') {
      setIsClicked13('--back-color');
  } else {
      setIsClicked13('--green-color');
  }
};
const handleClick14 = () => {
  setIsClicked1('--back-color');
  setIsClicked2('--back-color');
  if (isClicked14 === '--green-color') {
      setIsClicked14('--back-color');
  } else {
      setIsClicked14('--green-color');
  }
};
  return (
    <div className= "UserInput">
      <Header />
      <p className ='pagetitle'>정보입력</p>
      <div className ='inputcontainer'>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px',marginLeft : '540px'}}>

                    <div className='courseinputcontainer'>
                        <div className='courseimagebox'>
                            <label htmlFor="previewImg">
                                <img src={imgFile ? imgFile : cameraicon} alt="" className='courseimage'/>
                            </label>
                            <input type="file" accept="image/*" id="previewImg" onChange={handleImageUpload} ref={imgRef} style={{display: 'none'}}/>
                        </div>
                      </div>
        </div>
        <img src={charpencil} alt="" style={{width:'120px', marginTop: '-20px', marginLeft: '-700px'}}/>
        
        <div className='titleinputcontainer'>
                    <p className='inputitem'>유저닉네임</p>
                    <input type="text" className='titleinput'/>
                    <p className='inputitem' style ={{marginTop : '30px'}}>생년월일</p>
                    <input type="text" className='titleinput'/>
                </div>
                <div className='regioninputcontainer' style = {{marginLeft:'20px',marginTop: '30px'}}>
                        <p className='inputitem'>활동 지역</p>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked1})`}} onClick={handleClick1}>서울</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked2})`}} onClick={handleClick2}>경기</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked3})`}} onClick={handleClick3}>인천</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked4})`}} onClick={handleClick4}>강원</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked5})`}} onClick={handleClick5}>대전</button>
                    </div>
                    <div className='regioninputcontainer' style = {{marginLeft:'20px',marginTop: '10px'}}>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked6})`}} onClick={handleClick6}>충청</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked7})`}} onClick={handleClick7}>대구</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked8})`}} onClick={handleClick8}>부산</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked9})`}} onClick={handleClick9}>울산</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked10})`}} onClick={handleClick10}>경상</button>
                    </div>
                    <div className='regioninputcontainer' style = {{marginLeft:'-80px',marginTop: '10px'}}>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked11})`}} onClick={handleClick11}>광주</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked12})`}} onClick={handleClick12}>전라</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked13})`}} onClick={handleClick13}>제주</button>
                        <button className='regionbutton' style={{backgroundColor: `var(${isClicked14})`}} onClick={handleClick14}>기타</button>
                    </div>
                

                    <img src={eraser} alt="" style={{width:'120px', marginTop: '-160px', marginLeft: '700px'}}/>
                    <div className='titleinputcontainer'style={{ marginTop: '100px'}}>
                    <p className='inputitem'>자전거 기종</p>
                    <input type="text" className='titleinput'/> 
                    </div>
                    <div className='buttoncontainer'>
                    <button className='registerbutton'style={{marginTop: '100px', marginRight: '160px'}}><img src={check} alt=""></img></button>
                </div>
      </div>
      <img src={welcome} alt="" style={{width:'150px', marginTop: '80px', marginBottom: '50px',marginLeft:'550px'}}/>
      <img src={char} alt="" style={{width:'1286px', marginTop: '0px', marginBottom: '50px'}}/>
            <Footer />
      
    </div>
    
  );
  };

  export default UserInput;
