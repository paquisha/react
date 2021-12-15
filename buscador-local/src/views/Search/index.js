import SearchBox from "./components/SearchBox";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function Search(){
    
    const [isAtTop, setIsAtTop] = useState(false);

    const handleSearchClick = () => {
        alert(12);
    };
    const handleCloseClick = () => {};

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
        </div>
    );
}