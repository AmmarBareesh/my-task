import React from "react";
import Select from "react-select";

import "./select-filter.component.css";

const SelectFilter: React.FC = () => {
  // const searchText = "";

  const options = [{ value: 1, label: "ewrwer" }];

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-12">
        <Select options={options} />
      </div>
      <div className="col-lg-4 col-md-12">
        <Select options={options} />
      </div>
    </div>
  );
};

export default SelectFilter;
