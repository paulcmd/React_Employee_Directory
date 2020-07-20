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