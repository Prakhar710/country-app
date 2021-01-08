import React from 'react'
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Page = styled.div`
  background-color: ${props => props.theme.mainColor};
  transition: all .5s ease;
  align-items: center;
  
  padding: 1.5em 2.5em;
  min-height: 79.9vh;
`;

const Button = styled.button`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
    color:  ${props => props.theme.titleColor};
    box-shadow: 0 0 4px ${props => props.theme.shadowColor};
    margin-top: 10px;
`;
const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const NotFoundPage = () => {
    return (
        <Page>
            <div className="error-page">
                <Title>Page Not Found</Title>
                <Link to={'/country-app'}>
                    <Button className="undefined_button">
                        <FaArrowLeft />
                            Back
                        </Button>
                </Link>
            </div>
        </Page>
    )
}

export default NotFoundPage;