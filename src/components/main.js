import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox/Searchbox';
import FilterBox from './FilterBox/filterbox';
import CountryCard from './CountryCard/Countrycard';
import './main.css';
import styled from "styled-components";

const Page = styled.div`
  background-color: ${props => props.theme.mainColor};
  transition: all .5s ease;
`;


const url = "https://restcountries.eu/rest/v2/all"
function Main() {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    const [countries, setCountries] = useState([])
    const fetchCountryData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
    }

    

    useEffect(() => {
        fetchCountryData();
    }, [])

    
    const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      
      const filteredRegions = countries.filter(country => {
        return country.region.toLowerCase().indexOf(region.toLowerCase()) !== -1;
      });

    
     
    return (

       <Page> 
        <div className="main">
            <div className="filter-flex">
                <SearchBox onChange={value => setSearch(value)}  box={search}/>
                <FilterBox onChange={value => setRegion(value) }  box={region}/>
            </div>
            <div className="card">
            
             {search !== "" ? <CountryCard value={search} filter={filteredCountries} />  : <CountryCard value={region} filter={filteredRegions}/> }      
            </div>    
        </div>
        </Page>
    )
}

export default Main
