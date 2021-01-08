import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import './Country.css';
import styled from "styled-components";

const Page = styled.div`
  background-color: ${props => props.theme.mainColor};
  transition: all .5s ease;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const Button = styled.button`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
    color:  ${props => props.theme.titleColor};
    box-shadow: 0 0 4px ${props => props.theme.shadowColor};
`;


const Country = ({profile}) => {
    const [country, setCountry] = useState([])
    const { id } = useParams()
    const url = `https://restcountries.eu/rest/v2/name/${id}?fullText=true`;

    const fetchCountry = async () => {
        const response = await fetch(url);
        const countryProfile = await response.json();
        setCountry(countryProfile);
    }


    useEffect(() => {
        fetchCountry();
    }, []);
           
    

    return (
        <>
            <Page>
            {country.map((cou) => {
                const { numericCode, name, population, region, capital, flag, nativeName, subregion, topLevelDomain, currencies, languages, borders } = cou
                return <article key={numericCode} dependency={name}>

                    <div className="country_profile">
                        <Link to={'/country-app'}>
                            <Button className="undefined_button">
                                <FaArrowLeft />
                                    Back
                            </Button>
                        </Link>
                        <Title>  
                        <div className="country_info">
                            <img alt={name} src={flag} className="country_flag" />
                            <div className="country_info_detail">
                                <h2>{name}</h2>
                                <ul>
                                    <li><span>native Name: </span>{nativeName}</li>
                                    <li><span>population: </span>{population}</li>
                                    <li ><span>region: </span>{region}</li>
                                    <li><span>subregion: </span>{subregion}</li>
                                    <li><span>capital: </span>{capital}</li>
                                </ul>

                                <ul>
                                    <li><span>top Level Domain: </span>{topLevelDomain}</li>
                                    <li><span>currencies: </span>{currencies.map(currency => currency.name )}
                                    </li>
                                    <li><span>languages: </span>{languages.map(language =><span>{language.name} </span>  )}
                                    </li>
                                </ul>

                                <div className="borders">
                                    <h3>Border Countries:</h3>
                                    {borders.map(border => <Button> {border}</Button> )}
                                    
                                </div>
                            </div> 
                        </div>
                        </Title>
                    </div>                
                </article>

            })}
            </Page>
        </>
        
    )
}

export default Country
