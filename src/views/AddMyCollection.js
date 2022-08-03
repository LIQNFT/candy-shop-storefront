import * as React from "react";
import { useState } from "react";
function AddMyCollections() {
  const [selected, setSelected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const homeDesign = ["Highlighted Projects", "Community Projects"];
  const systemArchiture = ["Parts", "PBU"];
  const products = ["Marine Leisure"];

  let type = null;

  let options = null;

  if (selected === "Home Designs") {
    type = homeDesign;
  } else if (selected === "System Architecture") {
    type = systemArchiture;
  } else if (selected === "Products") {
    type = products;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const [subCategory, setSubCategory] = useState("");

  const [mintAdress, setMintAdress] = useState("");
  const [symbol, setSymbol] = useState("");

  const data = { mintAdress, symbol, selected, subCategory };

  const handleSubmit = (e) => {
    // console.log(data);

    fetch(
      "https://2trles4boa.execute-api.ap-southeast-1.amazonaws.com/addCollectionEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          senderName: "claim.qubes@gmail.com",
          senderEmail: "about@homeqube.com",
          mintAddress: mintAdress,
          symbol: symbol,
          categories: selected,
          subCategory: subCategory,
          date: new Date(),
        }),
      }
    ).then(() => {
      window.location.reload(false);
      alert("Add my collection data has been send.")
    });
  };
  return (
    <>
      <section className="showcase1 text-dark p-2 text-center text-sm-start">
        <div className="if-container container-fluid">
          <section className="mt-5 text-center">
            <p className="people-title">LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
            <p className="q-tokenomics-showcase-intro-lead text-uppercase">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </section>
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
                  Mint address
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </span>
                <input
                  className="form-control form-control-md mb-2"
                  required
                  type="text"
                  value={mintAdress}
                  onChange={(e) => setMintAdress(e.target.value)}
                />
                <span className="details text-uppercase">
                  Symbol
                  <span style={{ color: "red" }}>*</span>
                </span>
                <br />
                <input
                  className="form-control form-control-md"
                  required
                  type="text"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                />
                <br />
                <select
                  onChange={changeSelectOptionHandler}
                  className="form-select form-control-lg"
                  placeholder="Categories"
                >
                  <option></option>
                  <option>Home Designs</option>
                  <option>System Architecture</option>
                  <option>Products</option>
                </select>
                <br />
                <select
                  className="form-select form-control-lg"
                  placeholder="Sub-Categories"
                  onChange={(e) => {
                    const selectedOption = e.target.value;
                    setSubCategory(selectedOption);
                  }}
                >
                  <option> </option>
                  {options}
                </select>
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
                  onClick={handleSubmit}
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
    // <div
    //   style={{
    //     padding: "16px",
    //     margin: "16px",
    //   }}
    // >
    //   <form>
    //     <div>
    //       <select onChange={changeSelectOptionHandler}>
    //         <option></option>
    //         <option>Home Designs</option>
    //         <option>System Architecture</option>
    //         <option>Products</option>
    //       </select>
    //     </div>
    //     <div>
    //       <select onChange={(e) => {
    //         const selectedOption = e.target.value;
    //         setSubCategory(selectedOption);
    //       }}>
    //       <option> </option>
    //         {
    //           /** This is where we have used our options variable */
    //           options
    //         }
    //       </select>
    //     </div>
    //     {selected}
    //     {subCategory}
    //   </form>
    // </div>
  );
};

export default AddMyCollections;

// import React from "react";

// class AddMyCollections extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countries: [],
//       states: [],
//       cities: [],
//       selectedCountry: "Country",
//       selectedState: "State",
//     };
//     this.changeCountry = this.changeCountry.bind(this);
//     this.changeState = this.changeState.bind(this);
//   }

//   componentDidMount() {
//     //https://reactjs.org/docs/react-component.html#componentdidmount
//     this.setState({
//       countries: [
//         {
//           name: "Home Designs",
//           states: [
//             {
//               name: "Highlighted Projects",
//             },
//             { name: "Community Projects" },
//           ],
//         },
//         {
//           name: "System Architecture",
//           states: [
//             {
//               name: "Parts",
//             },
//             { name: "PBU" },
//           ],
//         },
//         {
//           name: "Products",
//           states: [
//             {
//               name: "Marine Leisure",
//             },
//           ],
//         },
//       ],
//     });
//   }

//   changeCountry(event) {
//     this.setState({ selectedCountry: event.target.value });
//     this.setState({
//       states: this.state.countries.find(
//         (cntry) => cntry.name === event.target.value
//       ).states,
//     });
//   }

//   changeState(event) {
//     this.setState({ selectedState: event.target.value });
//     const stats = this.state.countries.find(
//       (cntry) => cntry.name === this.state.selectedCountry
//     ).states;
//     this.setState({
//       cities: stats.find((stat) => stat.name === event.target.value).cities,
//     });
//   }

//   render() {
//     return (
//       <>
//         <section className="showcase1 text-dark p-2 text-center text-sm-start">
//           <div className="if-container container-fluid">
//             <section className="mt-5 text-center">
//               <p className="people-title">LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
//               <p className="q-tokenomics-showcase-intro-lead text-uppercase">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book
//               </p>
//             </section>
//           </div>
//         </section>
//         <section className="p-5">
//           <div className="container contacts">
//             <form id="form-contact">
//               <div
//                 className="row"
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                 }}
//               >
//                 <div className="col-md-3">
//                   <span className="details text-uppercase">
//                   Mint address
//                     <span
//                       style={{
//                         color: "red",
//                       }}
//                     >
//                       *
//                     </span>
//                   </span>
//                   <br /e="URL"
//                   />
//                   <br />
//                   <span className="details text-uppercase">
//                   Symbol
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
//                   classN>
//                   <input
//                     className="form-control form-control-md"
//                     required
//                     type="text"
//                     namame="form-control form-control-md"
//                   required
//                   type="text"
//                   name="URL"
//                 />

//                   <br />
//                   <select
//                     className="form-select form-control-lg"
//                     placeholder="Categories"
//                     value={this.state.selectedCountry}
//                     onChange={this.changeCountry}
//                   >
//                     <option>Categories</option>
//                     {this.state.countries.map((e, key) => {
//                       return <option key={key}>{e.name}</option>;
//                     })}
//                   </select>
//                   <br />
//                   <select
//                     className="form-select form-control-lg"
//                     placeholder="Sub-Categories"
//                     value={this.state.selectedState}
//                     onChange={this.changeState}
//                   >
//                     <option>Sub-Categories</option>
//                     {this.state.states.map((e, key) => {
//                       return <option key={key}>{e.name}</option>;
//                     })}
//                   </select>
//                 </div>
//               </div>
//               <div className="col link d-flex align-items justify-content-center">
//                 <div
//                   className=""
//                   style={{
//                     width: "100px",
//                   }}
//                 >
//                   <button
//                     className="contact-send-button btn btn-lg rounded-pill"
//                     id="sendbtn"
//                     type="button"
//                   >
//                     submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>
//       </>
//     );
//   }
// }
// export default AddMyCollections;
// // Just some styles
// const styles = {
//   lbl: {
//     marginTop: 5,
//     marginBottom: 5,
//   },
//   btn: {
//     width: 250,
//     marginLeft: 15,
//     marginTop: 15,
//   },
// };
