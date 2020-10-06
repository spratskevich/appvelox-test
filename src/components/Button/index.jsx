import React from 'react';
import styled from 'styled-components';

const Button = ({ title, handleClick, width, height }) => {
    return (
        <StyledButton width={width} height={height} onClick={handleClick}>
            {title}
        </StyledButton>
    );
};

const StyledButton = styled.button `
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 12px 15px 11px;
    border-radius: 5px;
    border: none;
    background-color: #7761FF;
    color: #fff;
    font-family: Rubic, sans-serif; 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    &::active {
        outline: none;
    }
`;

export default Button;