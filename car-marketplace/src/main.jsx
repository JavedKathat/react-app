import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.jsx";
import Contact from "./contact";
import Profile from "./profile";
import AddListing from "./add-listing";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "./components/ui/sonner";
import UserLogIn from "./components/UserLogIn";
import SearchByCategory from "./search/[category]";
import SearchByOptions from "./search";
import ListingDetails from "./listing-details/[id]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-listing",
    element: <AddListing title={"Add New"} action={"Save"} />,
  },
  {
    path: "/edit-listing",
    element: <AddListing title={"Edit"} action={"Update"} />,
  },
  {
    path: "/search/:category/",
    element: <SearchByCategory />,
  },
  {
    path: "/search/",
    element: <SearchByOptions />,
  },
  {
    path: "/listing-details/:id",
    element: <ListingDetails />,
  },
  { path: "/login", element: <UserLogIn /> },
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
