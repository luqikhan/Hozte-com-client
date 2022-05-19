import React, { useMemo, useState, useEffect } from "react";
import axios from "../utils/axios";
import { CommonHero, Spinner, CommonTable } from "../components";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [todaysOrders, setTodaysOrders] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [todaysQuestions, setTodaysQuestions] = useState(0);
  const [todaysQuotes, setTodaysQuotes] = useState(0);
  const [loading, setLoading] = useState(true);

  const reqOrders = axios.get("/getaquote/api");
  const reqQuestions = axios.get("/questions/api");
  const reqTotalOrders = axios.get("/orders/api/total-orders");
  const reqTodaysOrders = axios.get("/orders/api/todays-orders");
  const reqTodaysQuotes = axios.get("/getaquote/api/todays-quotes");
  const reqTodaysQuestions = axios.get("/questions/api/todays-questions");

  const quoteColumns = useMemo(
    () => [
      {
        Header: "Contact Details",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Country",
            accessor: "country",
          },
          {
            Header: "Nature of Business",
            accessor: "businessNature",
          },
          {
            Header: "Date",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => value.split("T")[0],
          },
        ],
      },
      {
        Header: "Interested Services",
        columns: [
          {
            Header: "Services",
            accessor: "services",
            Cell: ({ cell: { value } }) => value + ",",
          },
          {
            Header: "Addtional Information",
            accessor: "addtionalInformation",
          },
        ],
      },
    ],
    []
  );

  const messagesColumns = useMemo(
    () => [
      {
        Header: "Contact Details",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Date",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => value.split("T")[0],
          },
        ],
      },
      {
        Header: "Question",
        columns: [
          {
            Header: "Subject",
            accessor: "subject",
          },
          {
            Header: "Message",
            accessor: "message",
          },
        ],
      },
    ],
    []
  );

  const quotesData = useMemo(() => [...orders], [orders]);
  const questionsData = useMemo(() => [...questions], [questions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          reqOrders,
          reqQuestions,
          reqTotalOrders,
          reqTodaysOrders,
          reqTodaysQuotes,
          reqTodaysQuestions,
        ]);
        const data = res.map((res) => res.data);

        setLoading(false);
        if (data) {
          setOrders(data[0].orders);
          setQuestions(data[1].questions);
          setTotalOrders(data[2].count);
          setTodaysOrders(data[3].count);
          setTodaysQuotes(data[4].count);
          setTodaysQuestions(data[5].count);
        }
      } catch (error) {
        setLoading(false);
        throw Error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CommonHero title="Dashboard" pageTitle="DASHBOARD" />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      ) : (
        <div className="container pb-100">
          {/* <!--====== APPIE SERVICES PART START ======--> */}

          <section
            className="appie-service-area appie-service-3-area pt-100 pb-100"
            id="service"
          >
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <div className="appie-section-title">
                    <h3 className="appie-title">Our Dashboard Analytics</h3>
                    <p>See all your website latest orders and messages.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="appie-single-service appie-single-services-3 text-center mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                  >
                    <div className="icon">
                      <IoCartOutline size={25} color="#fff" />
                    </div>
                    <h4 className="appie-title">Today Orders </h4>

                    <h2>{todaysOrders}</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="appie-single-service appie-single-services-3 text-center  mt-30 item-2 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <div className="icon">
                      <FaRegEnvelope size={25} color="#fff" />
                    </div>
                    <h4 className="appie-title">Today Quote</h4>
                    <h2>{todaysQuotes}</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div
                    className="appie-single-service appie-single-services-3 text-center mt-30 item-3 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="600ms"
                  >
                    <div className="icon">
                      <FaRegEnvelope size={25} color="#fff" />
                    </div>
                    <h4 className="appie-title">Today Contact</h4>
                    <h2>{todaysQuestions}</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="appie-single-service appie-single-services-3 text-center mt-30 item-4 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="800ms"
                  >
                    <div className="icon">
                      <IoCartOutline size={25} color="#fff" />
                    </div>
                    <h4 className="appie-title">Total Orders</h4>
                    <h2>{totalOrders}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--====== APPIE SERVICES PART ENDS ======--> */}
          <div>
            <h4 className="mb-5">Quotes List</h4>
            <CommonTable columns={quoteColumns} data={quotesData} />
          </div>
          <div className="mt-90">
            <h4 className="mb-5">Messages List</h4>
            <CommonTable columns={messagesColumns} data={questionsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
