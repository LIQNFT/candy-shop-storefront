import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class ClaimQubes extends Component {
  state = {
    URL: "",
    isTrueVal: false,
    email: "",
    subject: "",
  };
  urlPatternValidation = (URL) => {
    const SOLSCAN = "explorer.solana.com/address/";
    const regex = new RegExp("(https?://)?" + SOLSCAN + "[/\\w .-]*/?");
    return regex.test(URL);
  };
  changeUrl = (event) => {
    const { value } = event.target;
    const isTrueVal = !value || this.urlPatternValidation(value);
    this.setState({
      URL: value,
      isTrueVal,
    });
  };
  onSubmit = () => {
    const { URL, user_email, user_name } = this.state;
    console.log("Here is the site url: ", URL);
    let templateParams = {
      from_name: user_email,
      to_name: user_email,
      // subject: user_name,
      message: URL,
    };
    emailjs.send(
      "service_7lhctnf",
      "template_hb7zy83",
      templateParams,
      "GAyktw5BJ0aDCY2Wb"
    );
    this.resetForm();
  };
  resetForm() {
    this.setState({
      URL: "",
    });
    alert("  explorer solana com address has been send.")
  }
  

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { URL, email, subject } = this.state;
  //   let templateParams = {
  //     from_name: email,
  //     to_name: "GAyktw5BJ0aDCY2Wb",
  //     subject: subject,
  //     message_html: URL,
  //   };
  //   emailjs.send(
  //     "service_7lhctnf",
  //     "template_hb7zy83",
  //     templateParams,
  //     "GAyktw5BJ0aDCY2Wb"
  //   );
  //   this.resetForm();
  // }
  // resetForm() {
  //   this.setState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // }
  // handleChange = (param, e) => {
  //   this.setState({ [param]: e.target.value });
  // };
  render() {
    const { isTrueVal, URL } = this.state;
    
    return (
      <>
        <section className="showcase1 text-dark p-2 text-center text-sm-start">
          <div className="if-container container-fluid">
            <section className="mt-5 text-center">
              <p className="people-title">CLAIM YOUR QUBES HERE</p>
              {/* <img src="./QR-Claimqubes.png"
            className="qr-qubes"
            style={{
              height: "200px"
            }}></img> */}
              <p className="q-tokenomics-showcase-intro-lead text-uppercase">
              UPON SENDING THE TOKEN ADDRESS, YOU WILL BE ABLE TO CLAIM YOUR QUBE WITHIN 2 DAYS.
              </p>
            </section>
            {/* <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=DkLuQR_jeEC790tUrUu03ZWkblj4qK1EhjVnKc5qoVxUODFPVURGQ1A5WDhLTjZQM05JRkxVTk83RS4u&embedded=true" width="640" height="613" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
          </div>
        </section>
        <section className="p-5">
          <div className="container contacts">
            <form id="form-contact">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div className="col-md-3">
                  <span className="details text-uppercase">
                  explorer solana com address&nbsp;
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    required
                    type="text"
                    name="URL"
                    value={URL}
                    onChange={this.changeUrl}
                  />
                </div>
              </div>
              <div className="col link d-flex align-items justify-content-center">
                <div
                  className=""
                  style={{
                    width: "100px",
                  }}
                >
                  <button
                    className="contact-send-button btn btn-lg rounded-pill"
                    id="sendbtn"
                    type="button"
                    onClick={this.onSubmit}
                    disabled={!isTrueVal}
                  >
                    submit
                  </button>
                </div>
              </div>
              {!this.state.isTrueVal ? (
                    <div
                      id="errorMsg"
                      style={{
                        color: "red",
                      }}
                    >
                      Enter Valid explorer.solana.com address
                    </div>
                  ) : (
                    <div
                      id="errorMsg"
                      style={{
                        display: "none",
                      }}
                    >
                      {/* Invalid SOLSCAN Address */}
                    </div>
                  )}
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default ClaimQubes;
// constructor(){
//   super()
//   this.state={
//     url:"",
//     isValid:false
//   }
// }

// handleOnchange=(e)=>{
//   const regExQ=/^$(https:\/\/www\.|http:\/\/www\.|www\.|https:\/\/)[s+o+l+c+a+n]+\.[io]{2,5}/g;

//   if(e.target.value.match(regExQ)){
//     this.setState({
//       [e.target.name]:e.target.value,
//       isValid:true
//     })
//   }
//   else{
//     this.setState({
//       [e.target.name]:e.target.value,
//       isValid:false
//     })
//   }
// }
// render() {
//   return (
//     <>
//       <section className="showcase1 text-dark p-2 text-center text-sm-start">
//         <div className="container">
//           <section className="mt-5 text-center">
//             <p className="people-title">CLAIM YOUR QUBES HERE</p>
//             <p className="q-tokenomics-showcase-intro-lead">
//               Upon purchase of NFT, you will be able to claim your <br />
//               QUBES within 24 hours.
//             </p>
//           </section>
//         </div>
//       </section>
//       <section className="p-5">
//         <div className="container contacts">
//           <form id="form-contact">
//             <div
//               className="row"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//               }}
//             >
//               <div className="col-md-3">
//                 <span className="details">
//                   SOLSCAN LINK&nbsp;
//                   <span
//                     style={{
//                       color: "red",
//                     }}
//                   >
//                     *
//                   </span>
//                 </span>
//                 <br />
//                 <input
//                   className="form-control form-control-lg"
//                   required
//                   name="url"
//                   value={this.state.url}
//                   onChange={this.handleOnchange}
//                 />
//               </div>
//             </div>
//             <div className="col link d-flex align-items justify-content-center">
//               <div className="">
//                 <button
//                   className="contact-send-button btn btn-lg rounded-pill"
//                   id="sendbtn"
//                   type="button"
//                 onClick={this.onSubmit} disabled={!this.state.isValid}
//                 >
//                   submit
//                 </button>
//                 {/* {!this.state.isTrueVal && ( )} */}
//                 {!this.state.isValid?<div
//                      id="errorMsg"
//                      style={{
//                        color: "red",
//                      }}
//                    >
//                      Invalid SOLSCAN URL
//                    </div>:<div
//                      id="errorMsg"
//                      style={{
//                        color: "red",
//                      }}
//                    >
//                      Valid SOLSCAN URL
//                    </div>
//                    }

//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// function ClaimQubes() {

//         return (
//             <>
//                 <section className="showcase1 text-dark p-2 text-center text-sm-start">
//                     <div className="container">
//                         <section className="mt-5 text-center">
//                             <p className="people-title">CLAIM YOUR QUBES HERE</p>
//                             <p className="q-tokenomics-showcase-intro-lead">
//                                 Upon purchase of NFT, you will be able to claim your <br />QUBES within 24 hours.
//                             </p>
//                         </section>
//                     </div>
//                 </section>
//                 <section className="p-5">
//                     <div className="container contacts">
//                         <form id="form-contact">
//                         <div className="row" style={{
//                         display: 'flex',
//                         justifyContent: 'space-around'
//                     }}>
//                                 <div className="col-md-3">
//                                     <span className="details">SOLSCAN LINK&nbsp;<span style={{
//                                         color: 'red'
//                                     }}>*</span></span>
//                                     <br />
//                                     <input type="text" id="lastname" className="form-control form-control-lg" required value=" " />
//                                 </div>
//                             </div>

//                             <div className="col link d-flex align-items justify-content-center">
//                                 <div className="">
//                                     <button className="contact-send-button btn btn-lg rounded-pill" id="sendbtn" type="button">submit</button>
//                                     <div id="errorMsg"></div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </section>
//             </>
//         );

// }
// export default ClaimQubes;
