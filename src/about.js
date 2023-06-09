import React from 'react';
import vision from './heart.png';
import trust from './partners.png';
import connect from './trust (1).png';

export default function About() {
  return (
    <div>
      <div style={{ backgroundColor: '#101010da', padding: '10px' }}>
        <h1 style={{ textAlign: 'center', color: 'white', margin: '0px' }}>About Us</h1>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Organ Connect</h2>
      <p style={{ color: 'black', textAlign: 'center', maxWidth: '1200px', fontSize: '20px', marginLeft: '250px' }}>
        Organ Connect is a platform dedicated to connecting organ donors with recipients in need. We provide a secure and reliable platform for individuals to register as organ donors and help save lives through organ transplantation.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px',marginLeft:'90px',marginRight:'10px',maxHeight:'550px',maxWidth:'1500px' }}>
        <div style={{ backgroundColor: '#101010da', padding: '20px', borderRadius: '10px', marginRight: '50px' }}>
          <img src={vision} alt="vision" style={{ width: '250px', height: '250px',marginLeft:'85px' }}></img>
          <div style={{ textAlign: 'center' }}>
            <h1 className="headtru" style={{ color: 'white' }}>Be a Lifesaver</h1>
            <p className="about-description" style={{ color: 'white', maxWidth: '1000px', maxHeight: '600px', fontSize: '19px' }}>
              By registering as an organ donor, you have the power to give the gift of life. Your selfless act can make a difference in the lives of those waiting for organ transplantation.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#101010da', padding: '20px', borderRadius: '10px',marginLeft:'30px' }}>
          <img src={connect} alt="connect" style={{ width: '250px', height: '250px',marginLeft:'85px' }}></img>
          <div style={{ textAlign: 'center' }}>
            <h1 className='headcon' style={{ color: 'white' }}>Trust</h1>
            <p className='para2' style={{ color: 'white', maxWidth: '1000px', fontSize: '18px' }}>
              Organ Connect provides a simple and secure registration process ensuring Trust. After registering as a donor, your details will be stored confidentially and made available to authorized medical professionals when needed for organ transplantation.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#101010da', padding: '10px', borderRadius: '10px', marginLeft: '70px' }}>
          <img src={trust} alt="trust" style={{ width: '250px', height: '250px',marginLeft:'85px' }}></img>
          <div style={{ textAlign: 'center' }}>
            <h1 className='headtran' style={{ color: 'white' }}>Join Us Today</h1>
            <p className="about-description" style={{ color: 'white', maxWidth: '1000px', fontSize: '20px' }}>
              Join Organ Connect today and become a part of our community dedicated to saving lives through organ donation. Together, we can make a meaningful impact and bring hope to those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
