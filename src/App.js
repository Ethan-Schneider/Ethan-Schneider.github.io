import React, {useState, useEffect} from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/academicons/css/academicons.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/css/style.css'

import LinkedIn_img from './assets/img/linkedin_icon_sld_backgrnd.png'
import GoogleScholar_img from './assets/img/google_scholar_icon-removebg.png'
import profile from './assets/img/profile_pics/london_pic.jpeg'
import CV from './assets/files/Ethan_Schneider_CV_2024.pdf'

import CEMRS_diag from "./assets/img/CEMRS_diagram.png"
function App() {
  return (
    <div className="App">
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="d-flex flex-column justify-content-center">

        <nav class="nav-menu">
          <ul>
            <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#portfolio"><i class="bx bx-book-content"></i> <span>Research</span></a></li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}

      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Ethan Schneider</h1>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/ethanschneiders/" target="_blank" rel="noopener noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            <a href="https://scholar.google.com/citations?user=0ubC95wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="google-scholar"><i style={{height:"42px"}} class="ai ai-google-scholar"></i></a>
            <a href="https://x.com/EthanSchneider_" target="_blank" rel="noopener noreferrer" class="twitter"><i class="bx bxl-twitter"></i></a>
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" class='github'><i class="bx bxl-github"></i></a> */}
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-download"> Download CV</a>
        </div>     
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>About</h2>
            </div>

            <div class="row">
              <div class="col-3 px-4">
                <img src={profile} class="img-fluid" alt=""/>
              </div>
              <div class="col-9 content">
                <p class="lead">

                  I'm a first year Ph.D. student at the Georgia Institute of Technology, advised by <a href="https://faculty.cc.gatech.edu/~chernova/" target="_blank" rel="noopener noreferrer">Sonia Chernova</a> as a part of the <a href="https://rail.gatech.edu/">Robot Autonomy and Interactive Learning (RAIL) Lab</a>. My research focuses on Task Allocation and Motion Planning (TAMP) for large-scale homogeneous systems in structured environments and improving the explainability of multi-agent systems using Explainable AI (XAI) techniques.
                  <br/> <br/>
                  Previously, I graduated with a B.S. in Mechatronoics Engineering from Kennesaw State University, graduated with <em>summa cum laude</em> and honors. During this time, I worked as a co-op at Georgia Tech Research Institute (GTRI), developing Windows and embedded software for aircraft systems and aircraft protection
systems test applications. After my undergrad, I began my M.S. in Robotics at Georgia Institute of Technology in Fall 2022, then transferred to the Ph.D. in Robotics as of January 2024.

                </p>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" class="portfolio section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Research</h2>
            </div>

            <div class="row my-5">
                <div class="col-sm text-center">
                    <img style={{height:"250px"}} src={CEMRS_diag} class="img-fluid pr-3" alt="Responsive image"/>
                </div>
                <div class="col-sm">
                <h5>CE-MRS: Contrastive Explanations for Multi-Robot Systems </h5>          
                <p>
                By <b>Ethan Schneider</b>, Daniel Wu, Devleena Das, and Sonia Chernova <br/>
                <i>Under Review</i> <br/> <br/></p>  
               
                {/* <a href="https://arxiv.org/abs/2310.16776" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-paper btn-sm"> Preprint</a> */}
              </div>
            </div>            

            {/* <div class="row my-5">
                <div class="col-sm text-center">
                    <img style={{height:"150px"}} src={DEFT_diag} class="img-fluid pr-3" alt="Responsive image"/>
                </div>
                <div class="col-sm">
                <h5>DEFT: Data Efficient Fine-Tuning for Large Language Models via Unsupervised Core-Set Selection </h5>          
                <p>
                By <b>Devleena Das</b> and Vivek Khetan <br/>
                <i>Under Review</i> <br/> <br/>  <span style={{color:"#2471A3"}}>Work contributed as part of an internship at Accenture Labs - AI Team</span></p>  
               
                <a href="https://arxiv.org/abs/2310.16776" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-paper btn-sm"> Preprint</a>
              </div>
            </div> */}

        </div>     
        </section>
        {/* <!-- End Portfolio Section --> */}

      </main>
  </div>
  );
}

export default App;
