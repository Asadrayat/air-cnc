import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import AddHome from "../Pages/AddHome"
import Checkout from "../Pages/Checkout"
import AllBookings from "../Pages/Dashboard/AllBookings"
import AllUsers from "../Pages/Dashboard/AllUsers"
import BecomeAHost from "../Pages/Dashboard/BecomeAHost"
import MyBookings from "../Pages/Dashboard/MyBookings"
import Welcome from "../Pages/Dashboard/Welcome"
import Details from "../Pages/Details"
import Home from "../Pages/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import SearchResult from "../Pages/SearchResult"
import ComingSoon from "../Pages/Shared/ComingSoon"
import ErrorPage from "../Pages/Shared/ErrorPage"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/service-details',
        element: <Details></Details>,
      },
      {
        path: '/search-result',
        element: <SearchResult></SearchResult>,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Welcome></Welcome>,
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: 'become-host',
        element: (
          <PrivateRoute>
            <BecomeAHost></BecomeAHost>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-users',
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-bookings',
        element: (
          <PrivateRoute>
            <AllBookings></AllBookings>
          </PrivateRoute>
        ),
      },
      {
        path: 'add-home',
        element: (
          <PrivateRoute>
            <AddHome></AddHome>
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router