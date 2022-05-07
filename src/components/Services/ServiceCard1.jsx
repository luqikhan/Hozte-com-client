import React from "react";

const ServiceCard1 = (props) => {
  const { title, text, item, Icon } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div
          className={`appie-single-service-2 mt-30 wow animated fadeInUp ${item}`}
          data-wow-duration="2000ms"
          data-wow-delay="200ms"
        >
          <div className="icon">
            <i className={`${Icon}`}></i>
          </div>
          <h4 className="title">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard1;
