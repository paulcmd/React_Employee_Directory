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