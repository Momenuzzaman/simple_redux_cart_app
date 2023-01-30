import React from 'react';
import classes from './NotificationUi.module.css'

const NotificationUi = (props) => {
    let specialClasses = '';

    const cssClasses = `${classes.notification} ${specialClasses}`;

    if (props.status === 'error') {
        specialClasses = classes.error;
    }
    if (props.status === 'success') {
        specialClasses = classes.success
    };
    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default NotificationUi;