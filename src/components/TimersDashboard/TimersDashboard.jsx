import React, { useState, useEffect } from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";
import uuid from "react-uuid";
import * as helpers from '../../helpers/helpers';

const TimersDashboard = () => {
    const [ timers, setTimers ] = useState([]);

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

    const handleCreateFormSubmit = timer => {
        createTimer(timer);
    };

    const createTimer = timer => {
        const newTimer = helpers.newTimer(timer);
        setTimers( timers.concat(newTimer) );
    };

    return(
        <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList timers={ timers } />
                <ToggleableTimerForm onFormSubmit={ handleCreateFormSubmit } />
            </div>
        </div>
    );
}

export default TimersDashboard;