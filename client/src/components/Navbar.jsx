import { Link } from "react-router-dom";
import { assets } from "../data/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <>
      <div className="flex items-center justify-between py-3 lg:mx-44">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn({})}>
            Get Started <img src={assets.arrow_icon} alt="" />{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
