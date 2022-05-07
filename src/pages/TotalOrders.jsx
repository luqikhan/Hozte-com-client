import React, { Fragment, useMemo, useState, useEffect } from "react";
import axios from "axios";

import { CommonHero, Table } from "../components";

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/orders/api`);
      const { orders } = response.data;
      if (orders.length) {
        setOrders(orders);
      }

      console.log("ordr", orders);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const ordersColumns = useMemo(
    () => [
      {
        Header: "Contact Details",
        columns: [
          {
            Header: "Full Name",
            accessor: "fullName",
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
            Header: "Nature of Business",
            accessor: "businessNature",
          },
          {
            Header: "Payment",
            accessor: "offer.paymentStatus",
          },
          {
            Header: "Date",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => value.split("T")[0],
          },
        ],
      },
      {
        Header: "Package",
        columns: [
          {
            Header: "Package Title",
            accessor: "offer.title",
          },
          {
            Header: "Total Price",
            accessor: "offer.price",
          },
          {
            Header: "Services",
            accessor: "offer.services",
            Cell: ({ cell: { value } }) => value + " , ",
          },
        ],
      },
    ],
    []
  );
  const ordersData = useMemo(() => [...orders], [orders]);
  return (
    <Fragment>
      <CommonHero title="Dashboard" pageTitle="DASHBOARD" />
      <div className="container mt-90 mb-90">
        <h4 className="mb-32">Orders List</h4>
        <Table columns={ordersColumns} data={ordersData} />
      </div>
    </Fragment>
  );
}

export default Order;
