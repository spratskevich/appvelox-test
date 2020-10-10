import React from 'react';
import styled from 'styled-components';

const CardsTextArea = ({ title, text }) => {
    return (
        <Layout>
            <div className="text-block">
                <h1 className="title">{title}</h1>
                <p className="text">{text}</p>
            </div>
        </Layout>
    );
};

const Layout = styled.div `
    box-sizing: border-box;
    float: left;
    width: 407px;
    height: 183px;
    padding: 36px;

    .text-block {
        box-sizing: border-box;
        width: 335px;
        height: 111px;

        .title {
            box-sizing: border-box;
            padding: 0;
            display: block;
            height: 43px;
            border-bottom: 2px solid #EBE7FF;
            margin-bottom: 20px;
            margin-top: 0;

            font-family: Rubik, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 33px;
        }

        .text {
            font-family: Rubik, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
        }
    }

`;

export default CardsTextArea;