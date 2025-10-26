import React from 'react';
import NavbarComponent from '../../Components/NavbarComponent';
import Wedding from '../../assets/wedding.jpeg';
import Baby from '../../assets/baby.jpeg';
import Maternity from '../../assets/Maternity.jpeg';
import PrePost from '../../assets/Pre_Post_Wedding.jpeg';
const BabyPhotos = () => {
  return (
    <div className='home' style={{backgroundColor: '#222', padding:'0px'}}>
        <NavbarComponent />
      <h1>Welcome to baby photography section</h1>
      <div className="home-grid">
        
        <div className="home-item">
          <img src={Wedding} alt="Wedding" />
          {/* <p className="overlay-text">Wedding Photography</p> */}
        </div>

        <div className="home-item">
          <img src={Baby} alt="Baby" />
          {/* <p className="overlay-text">Baby Photography</p> */}
        </div>

        <div className="home-item">
          <img src={Maternity} alt="Maternity" />
          {/* <p className="overlay-text">Maternity Photography</p>/ */}
        </div>

        <div className="home-item">
          <img src={PrePost} alt="Pre & Post Wedding" />
          {/* <p className="overlay-text">Pre & Post Wedding Photography</p> */}
        </div>
    </div>
    </div>
  );
};

export default BabyPhotos;