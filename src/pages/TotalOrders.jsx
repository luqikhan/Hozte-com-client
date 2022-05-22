import React, {
  Fragment,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";

import { CommonHero, Spinner, Table } from "../components";

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get(`/orders/api`);
      const { orders } = response.data;
      if (orders.length) {
        setOrders(orders);
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, []);

  const SaveData = useCallback(
    async (row) => {
      setLoading(true);
      try {
        const response = await axios.put(
          `orders/api/status/${row.original._id}`,
          row.original
        );
        const { success, message } = response.data;

        if (success) {
          fetchOrders();
          toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    [fetchOrders]
  );

  // Create an editable cell renderer

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const options = [
    { label: "Pending", value: "Pending" },
    { label: "Completed", value: "Completed" },
    { label: "Accepted", value: "Accepted" },
    { label: "Rejected", value: "Rejected" },
  ];

  // Create an editable cell renderer
  const EditableCell = React.memo(
    ({
      value: initialValue,
      row: { index },
      column: { id },
      updateMyData, // This is a custom function that we supplied to our table instance
    }) => {
      // We need to keep and update the state of the cell normally
      const [value, setValue] = useState(initialValue);

      const onChange = (e) => {
        setValue(e.target.value);
      };

      // We'll only update the external data when the input is blurred
      const onBlur = () => {
        updateMyData(index, id, value);
      };

      // If the initialValue is changed external, sync it up with our state
      useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <select value={value} onChange={onChange} onBlur={onBlur}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
  );

  const ordersColumns = useMemo(
    () => [
      {
        Header: "Contact Details",
        columns: [
          {
            Header: "Col Index",
            accessor: "no",
            Cell: ({ row }) => <p>{row.index + 1}</p>,
          },
          {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => (
              <button
                type="button"
                onClick={() => SaveData(row)}
                className="btn btn-outline-primary"
              >
                Save
              </button>
            ),
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: EditableCell,
          },

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
            Header: "Country",
            accessor: "country",
          },
          {
            Header: "Nature of Business",
            accessor: "businessNature",
          },
          {
            Header: "Payment",
            accessor: "paymentStatus",
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
            Header: "Package Name",
            accessor: "offer.name",
          },
          {
            Header: "Package Title",
            accessor: "offer.title",
          },
          {
            Header: "Total Price",
            Cell: ({ row }) => (
              <p>
                {row.original.offer.totalPrice > 0
                  ? row.original.offer.totalPrice
                  : row.original.offer.price}
              </p>
            ),
          },
          {
            Header: "Services",
            accessor: "offer.services",
            Cell: ({ cell: { value } }) => value + " , ",
          },
        ],
      },
    ],
    [SaveData, EditableCell]
  );
  const ordersData = useMemo(() => [...orders], [orders]);

  const [skipPageReset, setSkipPageReset] = useState(false);

  const updateMyData = useCallback((rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setOrders((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  }, []);

  return (
    <Fragment>
      <CommonHero title="Dashboard" pageTitle="DASHBOARD" />

      <div className="container mt-90 mb-90">
        <h4 className="mb-5">Orders List</h4>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        ) : (
          <Table
            columns={ordersColumns}
            data={ordersData}
            setOrders={setOrders}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
          />
        )}
      </div>
    </Fragment>
  );
}

export default Order;
