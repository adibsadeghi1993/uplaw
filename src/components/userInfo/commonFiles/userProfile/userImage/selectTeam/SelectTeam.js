import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

import { useDispatch, useSelector } from "react-redux";
import "./selectTeam.css";
import { selectedTeamAction } from "../../../../../../redux/Actions/TeamActions";

const SelectTeam = () => {
  const userTeams = useSelector((state) => state.team.myTeam);
  const dispatch = useDispatch()
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
    dispatch(selectedTeamAction(arrayTeam[0].value))
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
  const onchange = (team) => {
    console.log(team);
    dispatch(selectedTeamAction(team.value))

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
      height: "49px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (styles) => {
     
      return {
        ...styles,
        display: "flex",
        alignItems: "center",
        height: "49px",

        
       
      
      };
    },
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
        className="select-team"
        classNamePrefix="select-team"
      
       
      />}
    </div>
  );
};

export default SelectTeam;
