import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-4">
      <Link to="/">
      <img src="/logo.svg" alt="logo" width={150} height={100} />
      </Link>

      <ul className="hidden md:flex space-x-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"><Link to="/">Home</Link></li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
      </ul>
      {isSignedIn? (
        <div className="flex items-center space-x-4">
          <UserButton />
          <Link to='/profile'>
            <Button>Submit Listing </Button>
          </Link>
        </div>
      ) : (
        <>
        <Link to='/login'>
            <Button>Submit Listing </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
