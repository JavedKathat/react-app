import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-4">
      <img src="/logo.svg" alt="logo" width={150} height={100} />

      <ul className="hidden md:flex space-x-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <UserButton />
          <Button>Submit Listing </Button>
        </div>
      ) : (
        <Button>Submit Listing </Button>
      )}
    </div>
  );
};

export default Header;
