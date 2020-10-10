import styled from 'styled-components';

const StyledNavigation = styled.section `
    position: absolute;
    top: 0;
    left: 0;
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

export default StyledNavigation;