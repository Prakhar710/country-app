import React from 'react';
import './filterbox.css';
import styled from "styled-components";

const Select = styled.select.attrs({ type: 'text' })`
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  color : ${props => props.theme.toggleColor};
  box-shadow: 0 0 8px ${props => props.theme.shadowColor};
`;

function Filterbox(prop) {
    return (
        <div className="filterbox">
            <Select value={prop.box} onChange={event => prop.onChange(event.target.value)}>
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </Select>
        </div>
    )
}

export default Filterbox
