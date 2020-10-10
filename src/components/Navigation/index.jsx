import React from 'react';

import StyledNavigation from './StyledNavigation.js';
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

export default Navigation;