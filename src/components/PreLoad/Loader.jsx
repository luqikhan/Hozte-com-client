import React, { Fragment } from "react";

function Loader() {
  return (
    <Fragment>
      <div id="preloader-wrap">
        <div id="loading">
          <span id="loading-img">Loading...</span>
        </div>
      </div>

      <div id="preloading">
        <img src="./assets/images/traffic-thumb.png" alt="" />
      </div>
    </Fragment>
  );
}

export default Loader;
