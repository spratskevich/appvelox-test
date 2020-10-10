import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

import listIcon1 from '../../assets/images/list1.svg';
import listIcon2 from '../../assets/images/list2.svg';
import listIcon3 from '../../assets/images/list3.svg';
import listIcon4 from '../../assets/images/list4.svg';
import listIcon5 from '../../assets/images/list5.svg';
import helpIcon from '../../assets/images/helpIcon.svg';
import appvelox from '../../assets/images/appvelox.png';

const Navigation = () => {
    return (
        <StyledNavigation>
            <div className="logo">
                <p>Логотип</p>
            </div>
            <button className="navElm" type="button"><img src={listIcon1}/>Профиль</button>
            <button className="navElm" type="button"><img src={listIcon2}/>Врачи и клиники</button>
            <button className="navElm" type="button"><img src={listIcon3}/>Сообщения</button>
            <button className="navElm" type="button"><img src={listIcon4}/>Тестирование</button>
            <button className="navElm" type="button"><img src={listIcon5}/>Полезно знать</button>
            <div className="btnContainer"><Button title="Подать заявку" width="150px" height="40px"/></div>
            <button className="help" type="button"><img src={helpIcon}/>Помощь</button>
            <div className="appvelox"><img  src={appvelox} alt="appvelox"/></div>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.section `
    position: relative;
    box-sizing: border-box;
    width: 190px;
    height: 768px;
    background-color: #003B72;
    padding-top: 1px;
    

    .logo {
        box-sizing: border-box;
        width: 190px;
        height: 54px;
        
        p {
            margin-left: 20px;
            color: white;
            font-family: Rubik, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
        }
    }

    .navElm {
        box-sizing: border-box;
        width: 190px;
        height: 46px;
        padding: 14px 20px;
        margin-bottom: 10px;
        border: none;
        background-color: #003B72;
        color: #fff;
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        img {
            float: left;
            margin-right: 14px;
        }
        text-align: left;
    }

    .btnContainer {
        display: flex;
        justify-content: center;
    }

    .help {
        position: absolute;
        bottom: 40px;
        box-sizing: border-box;
        width: 190px;
        height: 46px;
        padding: 14px 20px;
        margin-bottom: 10px;
        border: none;
        background-color: #003B72;
        color: #fff;
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        img {
            float: left;
            margin-right: 14px;
        }
        text-align: left;
    }

    .appvelox {
        position: absolute;
        left: 20px;
        bottom: 16px;
        img {
            height: 20px;
            width: 113.32px;
        }
    }

`;

export default Navigation;