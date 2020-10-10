import styled from 'styled-components';

const StyledContentArea = styled.section `
    position: absolute;
    top: 55px;
    left: 190px;
    width: 1176px;
    height: 713px;

    font-family: Rubik, sans-serif;
    font-style: normal;

    header {
        position: absolute;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }

    .appointments-header {
        left: 40px;
        top: 15px;
    }

    .back-to-notes {
        left: 40px;
        top: 15px;
        cursor: pointer;
        img {
            margin-right: 14px; 
        }
    }

    .e-card-header {
        left: 40px;
        top: 258px;
    }

    .cnt-detail {
        position: absolute;
        top: 116px;
        left: 1010px;
        display: flex;
        flex-direction: column;
        justifu-content: center;

        font-weight: normal;
        font-size: 14px;
        line-height: 20px;

        p {            
            margin: 0;
        }

        button {
            box-sizing: border-box;
            margin: auto;
            border: none;
            background-color: #FFF;
            color: #50CAFF;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export default StyledContentArea;