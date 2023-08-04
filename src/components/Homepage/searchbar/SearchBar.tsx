import { useState } from "react";
import "./SearchBar.css";

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
                        SERVICES
                        </td>
                        <td className="searchbarlinks">
                        LINK
                        </td>
                        <td className="searchbarlinks">
                        LINK
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}