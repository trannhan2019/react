import { Link } from 'react-router-dom';
import { RiProductHuntLine } from 'react-icons/ri';

import './Home.scss';
import heroImg from '../../assets/inv-img.png';
import {
  ShowOnLogin,
  ShowOnLogout,
} from '../../components/protect/hiddenLink';

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
