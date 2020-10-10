import styled from 'styled-components';

export const CalendarCell = styled.div `
    position: relative;
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
    line-height: 20px;

    p {
        position: absolute;
        top: 10px;
        left: 10px;
        margin-top: 0;
    }

    div {
        position: absolute;
        display: flex;
        bottom: 10px;
        right: 10px;
        width: 22px;
        height: 22px;
        background-color: #50CAFF;
        border-radius: 100px;
        color: white;
        align-items: center;
        justify-content: center;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
    }
`;

export const CalendarHeader = styled.section `
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
    left: 563px;
    top: 48px;
    overflow: hidden;
    background-color: #EBE7FF;
    border-radius: 5px;
`;

export const DaysNames = styled.section `
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

export const CalendarBody = styled.section `
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

export default StyledCalendar;