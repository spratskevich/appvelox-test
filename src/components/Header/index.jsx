import React from 'react';

import StyledHeader from './StyledHeader.js';

import glassIcon from '../../assets/images/glassIcon.svg';
import ringIcon from '../../assets/images/ringIcon.svg';
import eyeIcon from '../../assets/images/eyeIcon.svg';
import downArrow from '../../assets/images/downArrow.svg';

const Header = (props) => {
    const { avatarImg } = props;
    return (
        <StyledHeader>
            <h1>Мой профиль</h1>
            <img src={glassIcon} className="glass-icon" alt="Glass icon"/>
            <img src={ringIcon} className="ring-icon" alt="Ring icon"/>
            <img src={eyeIcon} className="eye-icon" alt="Eye icon"/>
            <div className="profile">
                <img src={avatarImg} className="avatar-img" alt="Avatar image"/>
                <img src={downArrow} className="down-arrow" alt="Down arrow"/>
            </div>
        </StyledHeader>
    );
};

export default Header;
