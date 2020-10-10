import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from "uuid";
import moment from 'moment';
import 'moment/locale/ru';

import StyledCalendar, { CalendarCell, CalendarHeader, DaysNames, CalendarBody } from './CalendarStyles.js';

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

    const calculateAppoinments = (day) => {
        const currentDate = currentCalendarState.date.clone().date(day);
        let cntAppointments = appointmentsDates.reduce((cnt, item) => {
            let sameYear = moment(item.date, "MM-DD-YYYY", "ru").isSame(currentDate, "year");
            let sameMonth = moment(item.date, "MM-DD-YYYY", "ru").isSame(currentDate, "month");
            let sameday = moment(item.date, "MM-DD-YYYY", "ru").isSame(currentDate, "day");
            if(sameYear && sameMonth && sameday) {
                return ++cnt;
            }
            return cnt;
        }, 0);
        return cntAppointments ? <div>{cntAppointments}</div> : null;
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
                        const newClickedDate = currentCalendarState.date.clone().date(i);
                        arrayDateCells.push(
                        <CalendarCell key={uuidv4()} column={`${firstDay % 7 + 1}`} opacity={i>=currentDate}>
                            <p>{i}</p>
                            {calculateAppoinments(i)}
                        </CalendarCell>);
                        firstDay++;
                    }
                    return arrayDateCells;
                })()}
            </CalendarBody>
        </StyledCalendar>
      );
};

export default Calendar;