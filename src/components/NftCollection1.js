function NFTCollection1() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid ">
      <img src="../systemconcept.png"  alt=""  style={{
        width: '100%'
      }}/>
        {/* <div class="container">
          <h1 class="system-title text-start">
            SYSTEM <p class="concepts-title text-start">CONCEPTS</p>
          </h1>
        </div> */}
      </div>
      <div className="container-grid d-flex container mb-3 cards">
        <div className="card">
          <div className="imgcon">
            <img className="imgNFT" src="../img1.svg" />
            <div className="cubeName">
              <p className="name">
                STRUCTURAL SYSTEM <br />
                WITH cantilever FOR <br />
                3D PRINTING{" "}
              </p>
              <hr></hr>
              <p className="desname">
                <img className="solLogoPrice" src="../solLogo.svg" /> 27.27SOL
                <p>BUY NOW</p>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgcon">
            <img className="imgNFT" src="../img2.svg" />
            <div className="cubeName">
              <p className="name">
                STRUCTURAL SYSTEM
                <br />
                FOR 3D PRINTING,
                <br />
                PURCHASE WITH QUBE CLAIMS
              </p>
              <hr></hr>
              <p className="desname">
                <img className="solLogoPrice" src="../solLogo.svg" /> 27.27SOL
                <p>BUY NOW</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTCollection1;
