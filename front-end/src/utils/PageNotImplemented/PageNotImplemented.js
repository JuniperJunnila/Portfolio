import React from "react";
import bootstrapStyles from "../BootstrapStyles/BootstrapStyles.js";

const {
  pageNotImplemented: { wrapper, header1 },
} = bootstrapStyles;

export default function PageNotImplemented({ pageName }) {
  return (
    <div className={wrapper} id="wrapper">
      <h1 className={header1} id="header1">
        Sorry, the {pageName} page has not yet been implemented.
      </h1>
    </div>
  );
}
