import React from 'react';
import styled from 'styled-components';

const InformationCard = (props) => {
    const { cardImg, infoElement } = props;
    return (
        <StyledInformationCard>
            <div className="icon-area">
                <img className="icon" src={cardImg} alt="Card icon"/>
            </div>
            {infoElement}
        </StyledInformationCard>
    );
};

const StyledInformationCard = styled.section `

    box-sizing: border-box;
    width: 540px;
    height: 183px;
    padding: 0;
    background: #FFFFFF;
    //border: 2px solid #50CAFF;
    box-shadow: 0px 0px 5px #EBE7FF;
    border-radius: 5px;
    
    .icon-area {
        float: left;
        box-sizing: border-box;
        width: 133px;
        height: 183px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;

        .icon {
            display: block;
            width: 50px;
            height: 50px;
        }
    }
`;

export default InformationCard;