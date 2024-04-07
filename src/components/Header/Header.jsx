import moment from "moment";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="max-w-md mx-auto text-center space-y-5">
        <Link to={"/"}>
          <img className="w-full" src={logo} alt="" />
        </Link>
        <p className="text-lg text-neutral-700">
          Journalism Without Fear or Favour
        </p>
        <p className="font-medium text-xl">
          {moment().format("dddd,  MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
