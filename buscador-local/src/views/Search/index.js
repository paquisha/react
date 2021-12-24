import SearchBox from "./components/SearchBox";
import React, { useEffect, useState } from "react";
import "./style.css";

import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search(){
    
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    };

    const handelSearchclick = (searchText) => {
        setIsAtTop(true);
        if(userData?.length){
            const serachtextMinus = searchText.toLowerCase();
            const filterdData = userData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(serachtextMinus) || 
                    value.phone.toLowerCase().includes(serachtextMinus) ||
                    value.email.toLowerCase().includes(serachtextMinus) ||
                    value.username.toLowerCase().includes(serachtextMinus)
                )
            });
            setResults(filterdData);
        }
    };
    console.log(results);

    /*const handleSearchClick = () => {
        setIsAtTop(!isAtTop);
    };
    const handleCloseClick = () => {
        setIsAtTop(!isAtTop);
    };*/

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handelSearchclick} onClose={handleCloseSearch} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}