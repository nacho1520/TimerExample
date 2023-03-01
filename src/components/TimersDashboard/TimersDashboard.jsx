import React from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

const TimersDashboard = () => {
    return(
        <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList />
                <ToggleableTimerForm isOpen={ true } />
            </div>
        </div>
    );
}

export default TimersDashboard;