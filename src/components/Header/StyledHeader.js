import styled from 'styled-components';

const StyledHeader = styled.section `
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 190px;
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

export default StyledHeader;