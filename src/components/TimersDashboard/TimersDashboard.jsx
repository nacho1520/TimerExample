import React, { useState, useEffect } from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";
import uuid from "react-uuid";

const TimersDashboard = () => {
    const [ timers, setTimers ] = useState();

    useEffect(() => {
        const staticTimers = [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid(),
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squat',
                project: 'Kitchen Chores',
                id: uuid(),
                elapsed: 1273998,
                runningSince: null
            }
        ];
        setTimers(staticTimers);
    }, []);

    return(
        <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList timers={ timers } />
                <ToggleableTimerForm isOpen={ true } />
            </div>
        </div>
    );
}

export default TimersDashboard;