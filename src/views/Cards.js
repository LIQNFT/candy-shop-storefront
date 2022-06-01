import { Link } from "react-router-dom";
function Cards() {
  return (
     <>
 <div class="display">
      <Link to="/homeqube-items" className="href">
      <div class="card-container container-fluid">
          <div class="upper-container">
            <div class="image-container">
              <img src="../0.png" />
            </div>
          </div>
          <div class="lower-container">
            <div>
              <h3>Homeqube</h3>
              <h4>2ND TITLE</h4>
            </div>
            <div>
              <p>
                sodales accumsan ligula. Aenean sed diam tristique, fermentum mi
                nec, ornare arch.
              </p>
            </div>
          </div>
        </div>
      </Link>
        
      <Link to="/home-design-items" className="href">
      <div class="card-container container-fluid">
        <div class="upper-container">
          <div class="image-container">
            <img src="../0.png" />
          </div>
        </div>
        <div class="lower-container">
          <div>
            <h3>Home-design</h3>
            <h4>2ND TITLE</h4>
          </div>
          <div>
            <p>
              sodales accumsan ligula. Aenean sed diam tristique, fermentum mi
              nec, ornare arch.
            </p>
          </div>
        </div>
      </div>
      </Link>
      
      <Link to="/just-for-fun-items" className="href">
      <div class="card-container container-fluid">
        <div class="upper-container">
          <div class="image-container">
            <img src="../0.png" />
          </div>
        </div>
        <div class="lower-container">
          <div>
            <h3>Just-for-fun</h3>
            <h4>2ND TITLE</h4>
          </div>
          <div>
            <p>
              sodales accumsan ligula. Aenean sed diam tristique, fermentum mi
              nec, ornare arch.
            </p>
          </div>
        </div>
      </div>
      </Link>
      
    </div>
    <div class="display2">
    <Link to="/OSAP-item" className="href">
    <div class="card-container">
        <div class="upper-container">
          <div class="image-container">
            <img src="../0.png" />
          </div>
        </div>
        <div class="lower-container">
          <div>
            <h3>Other-System-Architecture-Product</h3>
            <h4>2ND TITLE</h4>
          </div>
          <div>
            <p>
              sodales accumsan ligula. Aenean sed diam tristique, fermentum mi
              nec, ornare arch.
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>
    
    
     </>
   
    
  );
}

export default Cards;
