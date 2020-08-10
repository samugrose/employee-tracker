import React from 'react'
import Search from "../Search/search"


export default function Header(props) {
    return (
        <div className="jumbotron">
            <div className="filter">
                <h1 className="display-4 text-center">Employee Directory</h1>
                <p className="lead text-center">Great employees doing great things!</p>
            </div>
                <hr className="my-4"/>
                    <Search value={props.value} handleInputChange={props.handleInputChange}/> 
        </div>
    )}

    export default Header;