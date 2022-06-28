import * as React from "react";
import { Link } from "react-router-dom";

// function Footer()
// {
//     return(
//         <footer className="p-3 bg-dark text-white text-center position-relative pt-5 pb-5 text-uppercase">
//             <div className="container px-4">
//                 <div className="row gx-3">
//                     <div className="col-md-6 container-fluid">
//                         <img src='/Homeqube-logo-black_small 1.svg' className="footer-logo" style={{
//                             float: 'left',
//                             padding: '0 20px 20px 0',
//                             height: '155px'
//                         }} alt="" />
//                         <p className="text-uppercase footer-text pt-3"
//                         style={{
//                             textAlign: 'left',
//                             fontSize: '17px',
//                             lineHeight: '28px',
//                             color: 'white',
//                             marginTop: '25px',
//                             fontFamily: 'Rajdhani, sans-serif'
//                         }}
//                         >home building process accessible to all through
//                         <br/> AI and blockchain technology</p>
//                     </div>
//                     <div className="col link d-flex align-items justify-content-center">
//                         <div>
//                             <a href="https://www.instagram.com/homeqube.ai/" target="_blank" rel="noreferrer noopener" class="flink-icon" style={{
//                                   color: 'dark',
//                                   textDecoration: 'none'
//                             }}>
//                                 <img className="footer-icon me-2 mr-1" src="/instagram.svg" alt=""/>
//                             </a>
//                             <a href="https://twitter.com/homeqube_ai" target="_blank" rel="noreferrer noopener" class="flink-icon" style={{
//                                   color: 'dark',
//                                   textDecoration: 'none'
//                             }}>
//                                 <img className="footer-icon me-2 mx-1" src="/twitter.svg" alt=""/>
//                             </a>
//                             <a href="https://www.facebook.com/Homeqube-Pte-Ltd-SG-110205561591276" target="_blank" rel="noreferrer noopener" class="flink-icon" style={{
//                                   color: 'dark',
//                                   textDecoration: 'none'
//                             }}>
//                                 <img className="footer-icon me-2 mx-1" src="/facebook.svg" alt=""/>
//                             </a>
//                             <a href="https://www.linkedin.com/company/homeqube-pte-ltd/" target="_blank" rel="noreferrer noopener" class="flink-icon" style={{
//                                   color: 'dark',
//                                   textDecoration: 'none'
//                             }}>
//                                 <img className="footer-icon me-2 mx-1" src="/linkedin.svg" alt=""/>
//                             </a>
//                             <a href="https://t.me/homeqube" target="_blank" rel="noreferrer noopener" class="flink-icon" style={{
//                                   color: 'dark',
//                                   textDecoration: 'none'
//                             }}>
//                                 <img className="footer-icon me-2 mx-1" src="/telegram.svg" alt=""/>
//                             </a>
//                             <p className="footer-text-2 mt-2" style={{
//                                  fontSize: '16px',
//                                  fontStyle: 'normal',
//                                  fontWeight: '400',
//                                  lineHeight: '28px',
//                                  letterSpacing: '0em',
//                                  textAlign: 'left',
//                                  fontFamily: 'Rajdhani, sans-serif',
//                                  color: 'white'
//                             }}>
//                                 about@homeqube.com
//                                 <br/>
//                                 Terms of Use
//                                 <br/>
//                                 Privacy Policy
//                                 <br/>
//                                 Homeqube Pte. Ltd.™
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

function Footer() {
  return (
    <footer className="p-3 bg-dark text-white text-center pt-5 pb-5 text-uppercase ">
      <div className="container px-4">
        <div className="row gx-3">
          <div className="col-md-6 container-fluid">
            <img
              src="../Homeqube-logo-black_small 1.svg"
              className="footer-logo"
              alt=""
            />
            
              <p className="text-uppercase footer-text pt-4 mt-5 "><b> POWERED BY CANDY.LIQNFT.COM</b></p>
              
            

           
          </div>
          <div className="col link d-flex align-items justify-content-center">
            <div>
              <a
                href="https://www.instagram.com/homeqube.ai/"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mr-1"
                  src="../instagram.svg"
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/homeqube_ai"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../twitter.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/Homeqube-Pte-Ltd-SG-110205561591276"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../facebook.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/homeqube-pte-ltd/"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../linkedin.svg"
                  alt=""
                />
              </a>
              <a
                href="https://t.me/homeqube"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../telegram.svg"
                  alt=""
                />
              </a>
              <p className="footer-text-2 mt-2">
                {/* about@homeqube.com
                <br /> */}
                <Link to="/terms" className="ahref">
                  Terms of Use
                </Link>
                {/* <a href='' className='ahref'>Terms of Use</a> */}
                <br />
                <Link to="/policy" className="ahref">
                  Privacy Policy
                </Link>
                {/* <a href='https://www.qube.homeqube.com/terms.html' className='ahref'>Privacy Policy</a> */}
                <br />
                Homeqube Pte. Ltd.™
                <br />
                Homeqube inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
