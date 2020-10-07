import React from 'react';

import CardLayout from './CardLayout.js';
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

export default AppointmentCard;