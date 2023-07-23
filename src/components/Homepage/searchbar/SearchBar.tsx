import { useState } from "react";
import "./SearchBar.css";
import srchsvg from "../../../assets/search.svg";

export const SearchBar = () => {

    const [transH3, setTransH3] = useState(-100);

    setTimeout(() => {
        setTransH3(0);
    }, 200);

    return (
        <div className="searchbar">
            <table className="searchbartable" cellSpacing="0">
                <tbody>
                    <tr>
                        <td className="searchbarlinks">
                        LINK
                        </td>
                        <td className="searchbarlinks">
                        LINK
                        </td>
                        <td className="searchbarlinks">
                        LINK
                        </td>
                        
                        {/*
                        <td><input className="search" type="text" placeholder="Search" /></td>
                        <td style={{width:"40px"}}><div className="submitsearch"><img className="srchsvg" src={srchsvg}></img></div></td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}