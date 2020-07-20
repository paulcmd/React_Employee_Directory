import React from "react";
import Moment from "react-moment";
import "./style.css";

function TableData(props) {
    return (
        <table className="tableEmployee ">
            <thead>
            <tr>
                <th></th>
                <th onClick={props.sortByName}>Name</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>D-O-B</th>
            </tr>
            </thead>

            <tbody className="">


                    <td>{result.name.first + " " + result.name.last} </td>

                    <td>{result.cell}</td>
                    <td className="email">
                        <a href={result.email}>{result.email}</a>
                    </td>

                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TableData;
