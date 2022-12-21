import React from "react";

import allStyles from "../../utils/AllStyles/AllStyles";
const {
  template: { fluid, div },
} = allStyles;

export default function Template() {
  return (
    <div className={fluid} id="tempName1">
      <div className={div} id="tempName2">
        {/* content */}
      </div>
    </div>
  );
}
