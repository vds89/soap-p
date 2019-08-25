import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (

    <main id="main">
      <div id="home" data-section-name="home" class="block-container gradient-back">
        <div class="block-contents">
          <div class="container w-container">
            <div class="columns w-row">
              <div class="column-left-top w-col w-col-6">
                <h1 class="heading heading-hero">Our mission is to empower you to achieve financial success</h1>
                <div class="h1-subsubtext">Our fully automated trading platform ensures you get the best results in any market conditions</div>
                <div class="toppad">Beta launching soon</div>
                <a href="#pricing" class="button-cta toppad w-button">Pre-Order Now</a>
              </div>
              <div class="column-right-bottom w-col w-col-6">
                <img src="https://uploads-ssl.webflow.com/5d3331a532a801f87af75ae6/5d3b6a6f73102cbefbbd18ab_cm_1_cr2.jpg" alt="crypto trading bots proprietary analytics " title="crypto trading bots credium img 1" data-w-id="c893e0a8-93cb-799d-0174-1ac32dfd6031" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: '1', transformStyle: 'preserve-3d'}} class="image-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="intro" data-section-name="intro" class="block-container">
        <div class="block-contents">
          <div class="container w-container">
            <div class="div-pad-small">
              <h2 class="heading text-centre pad-middle">An investment platform designed to give you control</h2>
              <img src="https://uploads-ssl.webflow.com/5d3331a532a801f87af75ae6/5d5d58cb267fe7472981277f_credium_app_design_site.jpg" width="900" alt="credium investment platform crypto trading bots" srcset="https://uploads-ssl.webflow.com/5d3331a532a801f87af75ae6/5d5d58cb267fe7472981277f_credium_app_design_site-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5d3331a532a801f87af75ae6/5d5d58cb267fe7472981277f_credium_app_design_site-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5d3331a532a801f87af75ae6/5d5d58cb267fe7472981277f_credium_app_design_site.jpg 1800w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 708px, 900px" class="image-2"/>
              <div class="toppad text-centre pad-middle">
              Credium is an investment platform built around trading bots specialised in crypto assets. We use a variety of mathematical and statistical techniques to achieve superior risk adjusted returns whilst giving you full control and immediate access to your investments.
              90% of every day investors lose money.
              <strong>We believe that you deserve better.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
      /*
      <section class="jss91">
        <div class="MuiContainer-root-96 jss92 MuiContainer-maxWidthLg-101">

          <h1 class="MuiTypography-root-57 MuiTypography-h2-63 MuiTypography-colorInherit-79 MuiTypography-alignCenter-73">
            Upgrade your Sundays
            <span class="jss103"></span>
          </h1>
          <h3 class="MuiTypography-root-57 jss89 MuiTypography-h5-66 MuiTypography-colorInherit-79 MuiTypography-alignCenter-73">
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
          </h3>
          <a class="MuiButtonBase-root-127 MuiButton-root-110 jss107 jss88 MuiButton-contained-118 MuiButton-containedSecondary-120 MuiButton-sizeLarge-125 jss109" tabindex="0" aria-disabled="false" href="/premium-themes/onepirate/sign-up/">
            <span class="MuiButton-label-111">Register</span>
            <span class="MuiTouchRipple-root-350"></span>
          </a>
          <p class="MuiTypography-root-57 jss90 MuiTypography-body2-58 MuiTypography-colorInherit-79">
            Discover the experience
          </p>
          <div class="jss93"></div>
          <div class="jss94 jss87"></div>
          <img class="jss95" src="/images/productHeroArrowDown.png" height="16" width="12" alt="arrow down" />
        </div>
      </section>
      */
      /*
      <div class="home">
        <h1>Natural SOAp-p</h1>
        <h2>Online shop of handemaded natural soaps</h2>
        <p> <span class='bigger'>Welcome everybody</span><br/> Jolanda & Vincenzo
        would like to thank you to visit our online shop<br/>
        In our web site you will find variuos kind of handemaded soaps done by us
        with high quality raw materials <br/>
        In our shop you will find also: No ads, no fluff. No sposorized post. <br/>
        <br/>In order to find all our soaps, please visit "Product" section.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>


    <div id="container">
        <div id="flex-content">
          <div id="content_tyosgrb6j" class="content-gallery" data-sort="1">
            <div class="content-container" style={{backgroundColor: 'transparent', padding: '0px', marginTop: '0px', marginBottom: '0px'}} data-content-id="content_tyosgrb6j" data-content-type="content-gallery">
              <div class="slider-wrapper ">
                <div class="is-gallery">
                </div>
                <div class="gallery-preview">
                  <img src="/images/soap_cover.jpg"></img>
                </div>
              </div>
            </div>
          </div>

        <div id="content_bnw5cl32y" class="content-p" data-sort="1" style={{}}>
          <div class="content-container" style={{padding: '18.75px 0px', backgroundColor: 'rgb(0, 0, 0)', marginTop: '0px', marginBottom: '0px'}} data-content-id="content_bnw5cl32y" data-content-type="content-p">
            <div class="container">
              <div class="row">
                <div data-content-id="content_bnw5cl32y" data-paragraph-id="content_bnw5cl32y" data-content-type="content-p" class="wysiwyg-ce no-offset span12">
                  <h3 style={{textAlign: 'center'}}>
                    <a target="_blank" href="https://shop.apothecarymilano.com">
                      <span style={{color: '#D3D3D3'}}>DISCOVER OUR SHOP ON LINE</span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="content_hf5evfmd4" class="content-p" data-sort="1">
      	 <div class="content-container" style={{padding: '50px 0px 0px', backgroundColor: 'transparent', marginTop: '0px', marginBottom: '0px'}} data-content-id="content_hf5evfmd4" data-content-type="content-p">
          <div class="container">
            <div class="row">
              <div data-content-id="content_hf5evfmd4" data-paragraph-id="content_hf5evfmd4" data-content-type="content-p" class="wysiwyg-ce no-offset span12">
                <p style={{textAlign: 'center'}} data-font-size="18px">
                  <span class="regular">
                    <a href="http://www.apothecarymilano.com/">ITA</a> | <a href="http://www.apothecarymilano.com/?lang=en">ENG</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>


      <div id="content_n1zhlb54j" class="content-p" data-sort="1">
        <div class="content-container" style={{padding: '50px 0px 0px', backgroundColor: 'rgb(255, 255, 255)', display: 'block', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', marginTop: '0px', marginBottom: '0px'}} data-content-id="content_n1zhlb54j" data-content-type="content-p">
          <div class="container">
            <div class="row">
              <div data-content-id="content_n1zhlb54j" data-paragraph-id="content_n1zhlb54j" data-content-type="content-p" class="wysiwyg-ce offset3 span6">
                <p data-font-size="26px" style={{textAlign: 'center'}}>
                  <span class="custom_one_italic">
                    <span style={{color:'#000000'}}>Passavamo sulla terra leggeri come acqua, come acqua che scorre, salta, giù dalla conca della fonte, scivola e serpeggia fra muschi e felci, fino alle radici delle sughere e dei mandorli o scende scivolando sulle pietre, per i monti e i colli fino al piano, dai torrenti al fiume,&nbsp;a farsi lenta verso le paludi e il mare, chiamata in vapore dal sole a diventare nube dominata dai venti e pioggia benedetta.</span>
                  </span>
                </p>
                <p style={{textAlign: 'center'}} data-font-size="14px">
                  <span style={{color:'#000000'}}>
                    <span class="regular">(Sergio Atzeni)</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content_6puzns7e5" class="content-p" data-sort="1">
      	<div class="content-container" style={{padding: '50px 0px 0px', display: 'block', backgroundColor: 'rgb(255, 255, 255)', marginTop: '0px', marginBottom: '0px'}} data-content-id="content_6puzns7e5" data-content-type="content-p">
          <div class="container">
            <div class="row">
              <div data-content-id="content_6puzns7e5" data-paragraph-id="content_6puzns7e5" data-content-type="content-p" class="wysiwyg-ce no-offset span12">
                <p data-font-size="72px">
                  <span style={{color: '#8e7c63'}}>
                    <span class="bold">CONTENTS</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    */


    );
  }
}

export default Home;
