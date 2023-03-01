import React, { useState, useEffect } from "react";
import TimerForm from "../TimerForm/TimerForm";

const ToggleableTimerForm = props => {
    const [ isOpen, setIsOpen ] = useState(null);

    useEffect(() => {
        setIsOpen(false);
    }, []);

    const handleFormOpen = () => {
        setIsOpen(true);
    }

    if(isOpen) {
        return(
            <TimerForm />
        );
    } else {
        return(
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon" onClick={handleFormOpen}>
                    <i className="plus icon" />
                </button>
            </div>
        );
    }
}

export default ToggleableTimerForm;