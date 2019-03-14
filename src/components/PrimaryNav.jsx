import React from 'react'
import Button from '@material/react-button';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Cell, Row } from '@material/react-layout-grid';

const StyledAnchor = styled(Link)`
    text-transform: uppercase;
    color: #4D2C91;
    text-decoration: none;
    &:hover {
      border-bottom: 4px solid currentColor;
      display: inline-block;
    }
    `

const PrimaryNav = () => {
    return (
        < Row >
            <Cell columns={8}>
                <svg width="150" height="100"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <a href="/">
                        <image xlinkHref="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg" height="100" width="150" />
                    </a>
                </svg>
            </Cell>
            <Cell columns={4} style={{ justifyContent: `space-around`, display: `flex`, alignItems: `center` }}>
                <StyledAnchor to="/about">About</StyledAnchor>
                <StyledAnchor to="/contact">Contact</StyledAnchor>
                <StyledAnchor to="/blog">Blog</StyledAnchor>
                <Button outlined={true}>Sign In</Button>
            </Cell>
        </Row >
    )
}

export default PrimaryNav