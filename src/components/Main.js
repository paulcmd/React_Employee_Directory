import API from "../utils/API";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import TableData from "./TableData";
import "./style.css";

const Main = () => {
  const [employeeState, setEmployeeState] = useState([]);
  const [searchState] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [orderState, setOrderState] = useState("");

  // Getting users on initial load
  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setEmployeeState(res.data.results);
        setFilteredEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //Clicking "name" switches  order between ascending and descending

  const sortByName = () => {
    if (orderState === "asc") {
      const sortedEmployees = filteredEmployees.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sortedEmployees);

      setFilteredEmployees(sortedEmployees);
      setOrderState("desc");
    } else {
      const sortedEmployees = filteredEmployees.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setFilteredEmployees(sortedEmployees);
      setOrderState("asc");
    }
  };
  //Dynamically changes Employees names as they are typed
  const handleInputChange = (e) => {
    const UserInput = e.target.value;
    const filteredEmployees = employeeState.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );

    setFilteredEmployees(filteredEmployees);
  };

  //when search button is clicked...
  const handleSearch = (e) => {
    e.preventDefault();
    // if no input from user, ask to enter a name
    if (!searchState) {
      alert("Enter a name");
    }

    //filters looking for the value that matches the value entered by the user
    const filteredEmployees = employeeState.filter((employee) =>
      employee.name.first.toLowerCase().includes(searchState.toLowerCase())
    );

    setFilteredEmployees(filteredEmployees);
  };

  return (
    <div>
      <Header
        employee={employeeState}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <TableData results={filteredEmployees} sortByName={sortByName} />
    </div>
  );
};

export default Main;
