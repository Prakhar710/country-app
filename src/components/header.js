import React from 'react';
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import './header.css';

const Toggle = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.pageBackground};
    color : ${props => props.theme.toggleColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  box-shadow: 0 0 8px ${props => props.theme.shadowColor};
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;


function Header(props) {

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <HiMoon size={25} /> : <CgSun  size={25} />;

    return (
        <Page>
        <div className="header">
            <div className="inner-header">
                <Title>Where in the world?</Title>
            
                <div className="header-right">
                    <Toggle onClick={changeTheme} >
                        {icon}
                    </Toggle>
                </div>
            </div>

        </div>
        </Page>
        
    )
}

export default Header;
