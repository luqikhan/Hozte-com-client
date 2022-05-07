import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { CommonHero, Table } from "../components";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function ReportsSection() {
  return (
    <div className="row">
      <div className="col-md-6">
        <section className="appie-about-area mb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="appie-about-box wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="appie-about-content">
                        <span>Marketing</span>
                        <h3 className="title">Today's Report</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-6">
        <section className="appie-about-area mb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="appie-about-box wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="appie-about-content">
                        <span>Marketing</span>
                        <h3 className="title">Total's Records</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [todaysOrders, setTodaysOrders] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [todaysQuestions, setTodaysQuestions] = useState(0);
  const [todaysQuotes, setTodaysQuotes] = useState(0);
  const [loading, setLoading] = useState(true);

  const reqOrders = axios.get("http://localhost:5000/getaquote/api");
  const reqQuestions = axios.get("http://localhost:5000/questions/api");
  const reqTotalOrders = axios.get(
    "http://localhost:5000/orders/api/total-orders"
  );
  const reqTodaysOrders = axios.get(
    "http://localhost:5000/orders/api/todays-orders"
  );
  const reqTodaysQuotes = axios.get(
    "http://localhost:5000/getaquote/api/todays-quotes"
  );
  const reqTodaysQuestions = axios.get(
    "http://localhost:5000/questions/api/todays-questions"
  );

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

  const fetchData = async () => {
    await axios
      .all([
        reqOrders,
        reqQuestions,
        reqTotalOrders,
        reqTodaysOrders,
        reqTodaysQuotes,
        reqTodaysQuestions,
      ])
      .then(
        axios.spread((...responses) => {
          if (responses) {
            const orders = responses[0].data.orders;
            const questions = responses[1].data.questions;
            const totalOrders = responses[2].data.count;
            const todaysOrders = responses[3].data.count;
            const todaysQuotes = responses[4].data.count;
            const todaysQuestions = responses[5].data.count;

            setOrders(orders);
            setQuestions(questions);
            setTotalOrders(totalOrders);
            setTodaysOrders(todaysOrders);
            setTodaysQuotes(todaysQuotes);
            setTodaysQuestions(todaysQuestions);
          }
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };

  const quotesData = useMemo(() => [...orders], [orders]);
  const questionsData = useMemo(() => [...questions], [questions]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CommonHero title="Dashboard" pageTitle="DASHBOARD" />
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
          <h4 className="mb-32">Quotes List</h4>
          <Table columns={quoteColumns} data={quotesData} />
        </div>
        <div className="mt-90">
          <h4 className="mb-32">Messages List</h4>
          <Table columns={messagesColumns} data={questionsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
