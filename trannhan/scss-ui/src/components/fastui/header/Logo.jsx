import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="logo">
      <img
        src="https://fastui.vercel.app/assets/images/logo.svg"
        alt="Fast UI"
      />
      <span className="logo__name">Fast UI</span>
    </Link>
  );
};

export default Logo;
