import React from "react";

class AddMyCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "Country",
      selectedState: "State",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    //https://reactjs.org/docs/react-component.html#componentdidmount
    this.setState({
      countries: [
        {
          name: "Home Designs",
          states: [
            {
              name: "Highlighted Projects",
            },
            { name: " Community Projects" },
          ],
        },
        {
          name: "System Architecture",
          states: [
            {
              name: "Parts",
            },
            { name: "PBU" },
          ],
        },
        {
          name: "Products",
          states: [
            {
              name: "Marine Leisure",
            },
          ],
        },
      ],
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  render() {
    return (
      <>
        <section className="showcase1 text-dark p-2 text-center text-sm-start">
          <div className="if-container container-fluid">
            <section className="mt-5 text-center">
              <p className="people-title">LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
              <p className="q-tokenomics-showcase-intro-lead text-uppercase">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
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
                  <br />
                  <input
                    className="form-control form-control-md"
                    required
                    type="text"
                    name="URL"
                  /> 
                  <br />
                  <span className="details text-uppercase">
                  Symbol
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
                  className="form-control form-control-md"
                  required
                  type="text"
                  name="URL"
                />
                  
                  <br />
                  <select
                    className="form-select form-control-lg"
                    placeholder="Categories"
                    value={this.state.selectedCountry}
                    onChange={this.changeCountry}
                  >
                    <option>Categories</option>
                    {this.state.countries.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                    })}
                  </select>
                  <br />
                  <select
                    className="form-select form-control-lg"
                    placeholder="Sub-Categories"
                    value={this.state.selectedState}
                    onChange={this.changeState}
                  >
                    <option>Sub-Categories</option>
                    {this.state.states.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                    })}
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
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default AddMyCollections;
// Just some styles
const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },
  btn: {
    width: 250,
    marginLeft: 15,
    marginTop: 15,
  },
};
