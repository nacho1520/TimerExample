import React, { useState, useEffect } from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

const TimersDashboard = () => {
    const [ timers, setTimers ] = useState();

    useEffect(() => {
        const staticTimers = [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: 1,
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squat',
                project: 'Kitchen Chores',
                id: 2,
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