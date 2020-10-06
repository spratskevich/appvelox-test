import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const AppointmentCard = ({ 
    dateTime, institutionName, address, medicInfo: { name, specialization, avatarImg } 
}) => {
    return (
        <CardLayout>
            <p className="dateTime">{dateTime}</p>
            <p className="institutionInfo">{`${institutionName},
            ${address}`}</p>
            
            <section className="medicInfo">
                <img className="avatarImg" src={avatarImg} />
                <p className="name">{name}</p>
                <br />
                <p className="specialization">{specialization}</p>
            </section>
            <div className="btn">
                <Button title="Отменить" width="98px" height="40px" handleClick={()=>console.log("click")}/>
            </div>
        </CardLayout>
    );
};

const CardLayout = styled.section `
    position: absolute;
    box-sizing: border-box;
    padding: 20px;
    height: 174px;
    width: 475px;
    left: 210px;
    top: 104px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 4px #EBE7FF, -1px -1px 4px #EBE7FF;
    
    .dateTime, .institutionInfo, .medicInfo {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Rubik', sans-serif;
        font-style: normal;
    }
    
    .dateTime {
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }

    .institutionInfo {
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        white-space: pre-line;
    }

    .medicInfo {
        position: absolute;
        display: inline-block;
        bottom: 20px;
        left: 20px;

        .avatarImg, .name, .specialization {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        
        .avatarImg {
            float: left;
            width: 60px;
            height: 60px;
            border-radius: 50px;
        }
        .name {
            float: left;
            margin-top: 13px;
            margin-left: 10px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
        }

        .specialization {
            float:left;
            margin-left: 10px;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #EBE7FF;
        }
    }

    .btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
`;

export default AppointmentCard;