import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import styled from 'styled-components';

import backArrow from '../../assets/images/backArrow.svg';
import nextArrow from '../../assets/images/nextArrow.svg';

moment.updateLocale('ru', {
    week: {
        dow: 1
    }
});

// let weekdaysShort = moment.weekdaysShort();

// let weekDayShortName = weekdaysShort.map(day => {
//     return (
//         <p key={day}>
//            {day}
//         </p>
//       );
// });

const Calendar = ({ appointmentsDates }) => {
    let [currentCalendarState, setDate] = useState({});
    useEffect(() => {
        setDate({ 
            date: moment(),
            cntDays: moment().daysInMonth(),
            dayOfWeek: moment().startOf('month').day()
        });
    }, []);

    const handleArrowClick = (direction) => {
        let newDate = currentCalendarState.date.clone();
        if(!direction.localeCompare('prevMonth')) {
            newDate.subtract(1, 'month');
            newDate.startOf('month');
        } else if (!direction.localeCompare('nextMonth')){
            newDate.add(1, 'month');
            newDate.startOf('month');
        }
        setDate({
            date: newDate,
            cntDays: newDate.daysInMonth(),
            dayOfWeek: newDate.day()
        });
    };

    return (
        <StyledCalendar>
            <CalendarHeader>
                <img className="backArrow" src={backArrow} onClick={()=>handleArrowClick('prevMonth')}/>
                <p>{
                    (() => {
                        let formatDate = moment(currentCalendarState.date).format("MMMM, YYYY");
                        formatDate = formatDate[0].toUpperCase() + formatDate.slice(1);
                        return formatDate;
                    })()
                }</p>
                <img className="nextArrow" src={nextArrow} onClick={()=>handleArrowClick('nextMonth')}/>
            </CalendarHeader>
            <DaysNames>
                <p>{'Пн'}</p> <p>{'Вт'}</p> <p>{'Ср'}</p>
                <p>{'Чт'}</p> <p>{'Пт'}</p> <p>{'Сб'}</p>
                <p>{'Вс'}</p>
            </DaysNames>
            <CalendarBody>
                {(() => {
                    let arrayDateCells = [];
                    let firstDay = (currentCalendarState.dayOfWeek + 6) % 7;
                    let currentDate = moment(currentCalendarState.date).date();
                    for(let i = 1; i <= currentCalendarState.cntDays; i++) {
                        arrayDateCells.push(
                        <CalendarCell column={`${firstDay % 7 + 1}`} opacity={i>=currentDate}>
                            {i}
                        </CalendarCell>);
                        firstDay++;
                    }
                    return arrayDateCells;
                })()}
            </CalendarBody>
        </StyledCalendar>
      );
};

const CalendarCell = styled.div `
    box-sizing: border-box;
    padding: 10px;
    width: 79px;
    height: 63px;
    background-color: RGB(255, 255, 255, ${props => props.opacity ? 1 : 0});
    grid-column-start: ${props => props.column};
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px
`;

const CalendarHeader = styled.section `
    position: absolute;
    top: 0;
    left: 0;
    width: 573px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: #7761FF;
    color: #fff;

    p {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
    }

text-align: center;
    }

    img {
        display:block;
        box-sizing: border-box;
        padding: 0;
        width: 14px;
        height: 14px;
    }

    .backArrow {
        margin-right: 35px;
    }

    .nextArrow {
        margin-left: 35px;
    }
`;

const StyledCalendar = styled.article `
    position: absolute;
    width: 573px;
    height: 481px;
    left: 753px;
    top: 103px;
    overflow: hidden;
    background-color: #EBE7FF;
    border-radius: 5px;
`;

const DaysNames = styled.section `
    position: absolute;
    top: 57px;
    left: 0;
    width: 573px;
    height: 37px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    p {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #000;
    }
`;

const CalendarBody = styled.section `
    position: absolute;
    top: 94px;
    left: 0;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

export default Calendar;