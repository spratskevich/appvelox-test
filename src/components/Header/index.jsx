import React from 'react';
import styled from 'styled-components';

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

const StyledHeader = styled.section `
    box-sizing: border-box;
    position: relative;
    width: 1176px;
    height: 55px;
    background-color: #50CAFF;

    h1 {
        position: absolute;
        width: 179px;
        height: 33px;
        margin: 0;
        left: 40px;
        top: 12px;

        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 33px;

        color: #FFFFFF;
    }

    & > img {
        position: absolute;
        width: 18px;
        height: 18px;
    }

    .glass-icon {
        top: 19px;
        left: 950px;
    }

    .ring-icon {
        top: 19px;
        left: 988px;
    }

    .eye-icon {
        top: 19px;
        left: 1026px;
    }

    .profile {
        position: absolute;
        width: 72px;
        height: 49px;
        left: 1064px;
        top: 3px;
        display: flex;
        align-items: center;
        
        .avatar-img {
            border-radius: 100px;
            padding: 1px;
            margin-right: 9px;
            border: 2px solid white;
        }
    }
`;

export default Header;
