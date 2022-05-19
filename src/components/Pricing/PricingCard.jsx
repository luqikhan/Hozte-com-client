import React from "react";
import { Link } from "react-router-dom";

const PricingCard = (props) => {
  const {
    title,
    price,
    services,
    extra,
    options,
    totalPrice,
    extraType,
    extraPrice,
    extraLimit,
  } = props.data;

  function handleChange(event) {
    let updatedValue = {};

    let extraWords = Number(event.target.value) / extraLimit;
    let extraVal = Number(extraWords.toString().split(".")[0]);

    let totalPrice = extraVal * extraPrice;
    updatedValue = {
      extra: Number(event.target.value || 0),
    };
    // Here, we invoke the callback with the new value

    props.onChange({ ...updatedValue }, totalPrice);
  }

  const goldStyle =
    "pricing-one__single pricing-one__single_2 wow animated active fadeInUp";
  const silverStyle =
    "pricing-one__single pricing-one__single_2 wow animated fadeInLeft";
  const platinumStyle =
    "pricing-one__single pricing-one__single_2 wow animated fadeInRight";

  return (
    <div className="col-lg-4 col-md-6 pricing-section">
      <div
        className={
          title === "Silver"
            ? silverStyle
            : title === "Gold"
            ? goldStyle
            : platinumStyle
        }
      >
        <div className="pricig-heading">
          <h6>{title}</h6>
          <div className="price-range">
            <sup>$</sup> <span>{totalPrice === 0 ? price : totalPrice}</span>
          </div>
          {extraType.length > 1 && (
            <p>
              Extra ${extraPrice} for every {extraLimit} extra {extraType}.
            </p>
          )}
        </div>
        <div className="pricig-body">
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <i className="fal fa-check"></i> {service}
              </li>
            ))}
            {extra > 0 && (
              <li>
                <i className="fal fa-check"></i> {`Extra ${extra} ${extraType}`}
              </li>
            )}
          </ul>
          {options && (
            <div className="input-group mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={`Extra ${extraType}`}
                name="extra"
                defaultValue={extra}
                onChange={handleChange}
              />
            </div>
          )}
          {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
          <div className="pricing-btn mt-35">
            <Link to="/create-order" className="main-btn" state={props.data}>
              Choose Package
            </Link>
          </div>
          {title === "Gold" && (
            <div className="pricing-rebon">
              <span>Most Popular</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
