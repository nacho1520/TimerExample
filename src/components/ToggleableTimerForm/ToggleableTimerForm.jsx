import React from "react";
import TimerForm from "../TimerForm/TimerForm";

const ToggleableTimerForm = props => {
    if(props.isOpen) {
        return(
            <TimerForm />
        );
    } else {
        return(
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon">
                    <i className="plus icon" />
                </button>
            </div>
        );
    }
}

export default ToggleableTimerForm;