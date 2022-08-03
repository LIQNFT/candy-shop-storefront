import * as React from "react";
import { useState } from "react";
const Practice = () => {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = React.useState("");

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  /** Different arrays for different dropdowns */
  const homeDesign = ["Highlighted Projects", "Community Projects"];
  const systemArchiture = ["Parts", "PBU"];
  const products = ["Marine Leisure"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Home Designs") {
    type = homeDesign;
  } else if (selected === "System Architecture") {
    type = systemArchiture;
  } else if (selected === "Products") {
    type = products;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const [subCategory, setSubCategory] = useState("");

  const handleSubmit = (e) => {
    const data = {selected, subCategory};
    console.log(data);
  }
  
  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div>
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <select onChange={changeSelectOptionHandler}>
            <option></option>
            <option>Home Designs</option>
            <option>System Architecture</option>
            <option>Products</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => {
              const selectedOption = e.target.value;
              setSubCategory(selectedOption);
            }}
          >
            <option> </option>
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        </div>
        {selected}
        {subCategory}
        <button
          className="contact-send-button btn btn-lg rounded-pill"
          id="sendbtn"
          type="button"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Practice;
