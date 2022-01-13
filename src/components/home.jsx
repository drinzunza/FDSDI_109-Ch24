import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Organika</h1>
          <h2>Fresh food, healthier life.</h2>
        </div>
        <img src="/images/wrap2.jpg" alt="fresh food"></img>
      </div>

      <div className="jumbotron mb-0">
        <div className="jumbo-message pr-5 pt-5">
          <h1 className="display-4">Always fresh at your door</h1>
          <p className="lead">Check out extensive catalog of fresh products 1-click away from your table.</p>
          <hr className="my-4" />
          <Link className="btn btn-info btn-lg" to="/catalog">
            Check our fresh catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="main-image">
          <img src="https://www.goalternative.com.au/wp-content/uploads/2016/12/4-simple-steps-for-growing-your-own-organic-food-01.jpg" alt="main"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
