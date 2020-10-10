import React from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from "uuid";
import { Scrollbars } from 'react-custom-scrollbars';


import AppointmentCard from '../AppointmentCard';

const AppointmentsViewArea = (props) => {
    const { cardsList, top, left } = props;

    function renderThumbVertical({ style, ...props }) {
        const thumbStyle = {
            width: '8px',
            right: 0,
            backgroundColor: '#003B72', 
            'border-radius': '5px',
        };
        return (
            <div style={{ ...style, ...thumbStyle }} {...props} />
        );
    };

    function renderTrackVertical({ style, ...props }) {
        const trackStyle = {
            width: '8px',
            height: '100%',
            top: 0,
            right: 0,
            backgroundColor: '#EBE7FF',
            'border-radius': '5px'
        };

        return (
            <div style={{ ...style, ...trackStyle }} {...props}/>
        );
    };

    function showCards() {
        return cardsList.map(item => {
            return (
                <div className="card" key={uuidv4()}><AppointmentCard {...item}/></div>
            );
        })
    }

    return (
    <StyledCardsList top={top} left={left}>
        {
            cardsList.length > 3 ? (
                <Scrollbars style={{ width: '100%', height: '100%' }}
                    renderThumbVertical={renderThumbVertical}
                    renderTrackVertical={renderTrackVertical}>
                    {showCards()}
                </Scrollbars>
            ) : (
                showCards()
            )
        }
    </StyledCardsList>
    );
}

const StyledCardsList = styled.section `
    position: absolute;
    box-sizing: border-box;
    width: 505px;
    height: 646px;
    left: ${props => props.left};
    top: ${props => props.top};
    
    & .card {
        margin-bottom: 15px;
        margin-left: 2px;
        margin-top: 2px;
    }
`;

export default AppointmentsViewArea;