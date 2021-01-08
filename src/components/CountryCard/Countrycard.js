import React from 'react';
import { Link } from 'react-router-dom';
import './Countrycard.css';
import styled from "styled-components";

const Page = styled.div`
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  box-shadow: 0 0 12px ${props => props.theme.shadowColor};
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;



const Countrycard = (prop)  =>{


    return (
        <>
          
           {prop.filter.map((country) =>{
                const {numericCode, name, population, region, capital, flag} = country
                return <article  key={numericCode}>
                    <Page>
                    <Link  to = {`/countries/${name}`} className="link_card">
                    <div className="countrycard">
                        <img  alt={name} src={flag} className="card_img" />
                        <Title>
                        <ul className="card_items">
                            <li>
                                <h2 className="card_label">{name}</h2>
                            </li>
                            <li className="card_item"><span>population: </span>{population}
                            </li>
                            <li className="card_item"><span>region: </span>{region}</li>
                            <li className="card_item"><span>capital: </span>{capital}
                            </li>
                        </ul>
                        </Title>
                    </div>
                    </Link>
                    </Page>
                </article>
                
            })}
           

           
        </>
    )
}

export default Countrycard
