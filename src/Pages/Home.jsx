import "./Home.css";
import {Link} from 'react-router-dom'
const Home = () => {
  const style = {
    width: "80%",
    height: "300px",
    borderRadius: "21px 21px 0 0",
  };
  return (
    <>
      <main>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">Catch Your Favorite Pokemon!</h1>
            <p class="lead fw-normal">
              Do you have what it takes to catch them all?
            </p>
            <Link to="signup">
              <p class="btn btn-outline-secondary" href="#">
                Sign Up
              </p>
            </Link>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Catch Legendary Pokemon</h2>
              <p class="lead">Feeling lucky enough to catch a legendary pokemon?</p>
            </div>
            <div class="bg-light shadow-sm mx-auto" style={style}></div>
          </div>
          <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Save Your Favorites</h2>
              <p class="lead">Keep tabs on your favorites and save them to your profile</p>
            </div>
            <div class="bg-dark shadow-sm mx-auto" style={style}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
