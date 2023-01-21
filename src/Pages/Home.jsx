import "./Home.css";
import {Link} from 'react-router-dom'
const Home = () => {
  const style = {
    width: "80%",
    height: "300px",
    borderRadius: "21px 21px 0 0"
  };
  return (
    <>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Catch Your Favorite Pokemon!</h1>
            <p className="lead fw-normal">
              Do you have what it takes to catch them all?
            </p>
            <Link to="signup">
              <p className="btn btn-outline-secondary" href="#">
                Sign Up
              </p>
            </Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Catch Legendary Pokemon</h2>
              <p className="lead">Feeling lucky enough to catch a legendary pokemon?</p>
            </div>
            <div className="bg-light shadow-sm mx-auto" style={style}></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Save Your Favorites</h2>
              <p className="lead">Keep tabs on your favorites and save them to your profile</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={style}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
