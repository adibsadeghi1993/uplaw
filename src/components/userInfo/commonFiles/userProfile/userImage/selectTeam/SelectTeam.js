import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

import { useSelector } from "react-redux";
import styles from "./selectTeam.module.css";

const SelectTeam = () => {
  const userTeams = useSelector((state) => state.team.myTeam);
  console.log(userTeams);

  const [options, setOptions] = useState([]);
 
 
  useEffect(() => {
    const arrayTeam = userTeams.map((item) => {
      return {
        label: item.teamName,
        value: item.teamName,
        id: item.id,
        src: item.src,
      };
    });
    console.log(arrayTeam);

    setOptions(arrayTeam);
  }, [userTeams]);

  console.log(options);

  const { Option, SingleValue } = components;
  const IconOption = (props) => (
    <Option {...props}>
      {props.data.src && (
        <img
          src={props.data.src}
          style={{ width: "40px" }}
          alt={props.data.label}
        />
      )}
      <span style={{ marginRight: "8px" }}> {props.data.label}</span>
    </Option>
  );
  const onchange = (adib) => {
    console.log(adib);
  };

  const ValueOption = (props) => (
    <SingleValue {...props}>
      {props.data.src && (
        <img
          src={props.data.src}
          style={{ width: "40px" }}
          alt={props.data.label}
        />
      )}
      <span style={{ marginRight: "8px" }}> {props.data.label}</span>
    </SingleValue>
  );

  const customStyles = {
    control: () => ({
      display: "flex",
      alignItems: "center",
      paddingBottom: "2px",
      height: "50px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div style={{ width: "100%" }}>
    {options.length &&   <Select
        styles={customStyles}
        defaultValue={options[0]}
        singleValue
        options={options}
        components={{ Option: IconOption, SingleValue: ValueOption }}
        isRtl={true}
        onChange={onchange}
       
      />}
    </div>
  );
};

export default SelectTeam;
