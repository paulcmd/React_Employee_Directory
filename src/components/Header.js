import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="container-fluid">
            <header className="z-depth-3 col s12">
                <div className="row">
                    <div className="col s6">
                        <h3 className="right-align headerText">Employee Directory</h3>
                    </div>
                    <div className="col s6 ">
                        <div className="col s6 inputAndButton right-align ">
                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className="inputBox "
                                placeholder="Search by name"
                            />
                        </div>