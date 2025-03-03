import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <nav>
          <div className="left">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="center">
            <h3><b>Landing</b></h3>
          </div>
          <div className="right">
            <button>Buy Now</button>
          </div>
        </nav>
        <section className="hero">
          <div className="left">
            <h1>Introduce Your Product Quickly & Effectively</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div className='col'>
              <button className='col1'>Purchase UI kit</button>
              <button className='col1 light'>Learn More</button>
            </div>
          </div>
          <div className="right">
          </div>
        </section>
        <section>
          <div className="left">
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div className='col'>
              <div className='col1'>
                <img src="src/assets/Icon.svg" alt="" />
                <h4>Title Goes Here</h4>
                <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h5>
              </div>
              <div className='col1'>
                <img src="src/assets/Icon.svg" alt="" />
                <h4>Title Goes Here</h4>
                <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h5>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="src\assets\undraw_mobile_login_ikmv.svg" alt="" />
          </div>
        </section>
        <section className="alt">
          <div className="left">
            <img src="src\assets\undraw_happy_news_hxmt.svg" alt="" />
          </div>
          <div className="right">
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
        </section>
        <section className="alt">
          <div className="left">
            <img src="src\assets\undraw_social_influencer_sgsv.svg" alt="" />
          </div>
          <div className="right">
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
        </section>
        <section className="alt">
          <div className="left">
            <img src="src\assets\undraw_mention_6k5d.svg" alt="" />
          </div>
          <div className="right">
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br/><br/>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <button>Purchase Now</button>
          </div>
        </section>
      </div>
      <section className="background-img">
          <div>
            <h2>A Price To Suit Everyone</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <h1>$40</h1>
            <h4>UI Design Kit</h4>
            <br /><br />
            <h5>See, One price. Simple.</h5>
            <button>Purchase Now</button>
          </div>
        </section>
    </>
  )
}

export default App
