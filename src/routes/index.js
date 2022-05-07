import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./ProtectedRoutes";
import {
  Home,
  Contactus,
  Aboutus,
  Services,
  GetAQuote,
  Login,
  Dashboard,
  Packages,
  Blogs,
  SingleBlog,
  TotalOrders,
  SharedLayout,
  NewBlog,
  NewOrder,
} from "../pages";
import {
  Checkout,
  Success,
  Cancel,
  WhatsappButton,
  PreLoader,
} from "../components";

function index() {
  return (
    <>
      <PreLoader />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="ourservices" element={<Services />} />
          <Route path="getaquote" element={<GetAQuote />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="packages/:id" element={<Packages />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
          <Route
            path="orders"
            element={
              <AuthGuard>
                <TotalOrders />
              </AuthGuard>
            }
          />
          <Route
            path="dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="create-blog"
            element={
              <AuthGuard>
                <NewBlog />
              </AuthGuard>
            }
          />
          <Route path="create-order" element={<NewOrder />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <div>
              <h6>Page not found!</h6>
            </div>
          }
        />
      </Routes>
      <WhatsappButton />
    </>
  );
}

export default index;
