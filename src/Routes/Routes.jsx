import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import SuccessStories from "../Pages/SuccessStories/SuccessStories";
import GetInvolved from "../Pages/GetInvolved/GetInvolved";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: 'pet-listing',
            element: <PetListing/>,
        },
        {
            path: 'donation-campaigns',
            element: <DonationCampaigns/>,
        },
        {
          path: 'success-stories',
          element: <SuccessStories/>
        },
        {
          path: 'get-involved',
          element: <GetInvolved/>,
        }
      ]
    },
  ]);