import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <MainSearch>
            
        </MainSearch>
     )
}

const MainSearch  = (props)=>{
    return (
        <div className="adjust">
            <form>
                <div class="input-field">
                <input 
                id="search" 
                type="search" 
                className="adjust"
                placeholder="Search Items"
                ></input>
                <div className="search-icon"><i class="left black-text material-icons">search</i></div>
                </div> 
            </form>   
              
        </div>
    )
}
export default Search
