import React from 'react';
import { FaSearch } from "react-icons/fa";
import './searchbox.css'
import styled from "styled-components";

const Input = styled.input.attrs({ type: 'text' })`
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  color : ${props => props.theme.toggleColor};
  box-shadow: 0 0 8px ${props => props.theme.shadowColor};
`;

const Icon = styled.h1`
  color : ${props => props.theme.toggleColor};
  transition: all .5s ease;
  position: absolute;
  font-size: 1rem;
  left: 2em;
  top: 19px;
`;


function Searchbox(prop) {


    return (

        <div className="searchbox">
            <Icon>
                <FaSearch />
            </Icon>
                <Input 
                type="text" 
                name="search" 
                placeholder="Search for a country..." 
                value={prop.box} 
                onChange={event => prop.onChange(event.target.value)} />
            

        </div>
        
    ) 
}

export default Searchbox;
