/* import B1 from 'public/assets/journey_imgs/B1.jpg'
import B2 from 'public/assets/journey_imgs/B2.jpg'
import B3 from 'public/assets/journey_imgs/B3.jpg'
import B4 from 'public/assets/journey_imgs/B4.jpg'
import b1l1 from 'public/assets/journey_imgs/b1l1.png'
import b1l2 from 'public/assets/journey_imgs/b1l2.png'
import b1l3 from 'public/assets/journey_imgs/b1l3.png'
import b1l4 from 'public/assets/journey_imgs/b1l4.png'
import b1l5 from 'public/assets/journey_imgs/b1l5.png'
import b3l1 from 'public/assets/journey_imgs/b3l1.png'
import b3l2 from 'public/assets/journey_imgs/b3l2.png'
import b3l3 from 'public/assets/journey_imgs/b3l3.png'
import b3l4 from 'public/assets/journey_imgs/b3l4.png'
import b3l5 from 'public/assets/journey_imgs/b3l5.png'
import b2l1 from 'public/assets/journey_imgs/p6.png'
import b2l2 from 'public/assets/journey_imgs/b2l2.png'
import b2l3 from 'public/assets/journey_imgs/b2l3.png'
import b2l4 from 'public/assets/journey_imgs/b2l4.png'
import b4l1 from 'public/assets/journey_imgs/B4l1.png'
import b4l2 from 'public/assets/journey_imgs/B4l2.png'
import b4l3 from 'public/assets/journey_imgs/B4l3.png'
import b4l4 from 'public/assets/journey_imgs/B4l4.png'
import b4l5 from 'public/assets/journey_imgs/b2l1.png'
import style from './style.module.css'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

export default class Carasol extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageStyle: {
        width: '100%',
      }
    };

  }

  render() {
    return (
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={2000}>
                <div className='carousel_banner' style={this.state.imageStyle}>
          <div className=''>
            <div className={style.l1}>
              <img  src={b4l1.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%"}} />
            </div>
            <div className={style.l2}>
              <img className='' src={b4l2.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l3}>
              <img className='' src={b4l3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l4}>
              <img className='' src={b4l5.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>,
            <div className={style.l5}>
              <img className='' src={b4l4.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className=''>
              <img src={B4.src} style={{ width: "100vw", height: '100vh', }} />
            </div>
          </div>
        </div>
        <div className='carousel_banner' style={this.state.imageStyle}>
          <div className=''>
            <div className={style.l1}>
              <img  src={b1l2.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%"}} />
            </div>
            <div className={style.l2}>
              <img className='' src={b1l1.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l3}>
              <img className='' src={b1l4.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l4}>
              <img className='' src={b1l3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>,
            <div className={style.l5}>
              <img className='' src={b1l5.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className=''>
              <img src={B1.src} style={{ width: "100vw", height: '100vh', }} />
            </div>
          </div>
        </div>
        <div className='carousel_banner' style={this.state.imageStyle}>
          <div className=''>
            <div className={style.l1}>
              <img  src={b3l2.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%"}} />
            </div>
            <div className={style.l2}>
              <img className='' src={b3l1.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l3}>
              <img className='' src={b3l4.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l4}>
              <img className='' src={b3l3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>,
            <div className={style.l5}>
              <img className='' src={b3l5.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className=''>
              <img src={B2.src} style={{ width: "100vw", height: '100vh', }} />
            </div>
          </div>
        </div>
        <div className='carousel_banner' style={this.state.imageStyle}>
          <div className=''>
            <div className={style.l1}>
              <img  src={b2l2.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%"}} />
            </div>
            <div className={style.l2}>
              <img className='' src={b2l1.src} style={{ width: "100%", height: '100%', border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l3}>
              <img className='' src={b2l4.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className={style.l4}>
              <img className='' src={b2l3.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>,
            <div className={style.l5}>
              <img className='' src={b2l4.src} style={{ width: "100%", height: '100%',border: "5px solid #CC454C", borderRadius: "50%" }} />
            </div>
            <div className=''>
              <img src={B3.src} style={{ width: "100vw", height: '100vh', }} />
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
 */