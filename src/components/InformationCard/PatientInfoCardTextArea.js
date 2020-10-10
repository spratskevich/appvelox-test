import React from 'react';
import styled from 'styled-components';

const PatientInfoCardTextArea = () => {
    return (
        <Layout>
            <h1>Информация о пациенте</h1>
            <ul>
                <li>Ваши личные данные</li>
                <li>Рекомендации врачей</li>
                <li>История болезней</li>
            </ul>
        </Layout>
    );
};

const Layout = styled.div `
    box-sizing: border-box;
    float: left;
    width: 407px;
    height: 183px;
    
    h1 {
        box-sizing: border-box;
        padding: 0;
        display: block;
        height: 43px;
        border-bottom: 2px solid #EBE7FF;
        margin: 20px 36px 15px 36px;

        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 33px;
    }

    ul {
        list-style: none;
        
        li::before {
            content: "•";
            color: #EBE7FF;
            display: inline-block;
            width: 1em;

        }
        li {
            margin-bottom: 7px;
            font-family: Rubik, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
        }
    }
`;

export default PatientInfoCardTextArea;