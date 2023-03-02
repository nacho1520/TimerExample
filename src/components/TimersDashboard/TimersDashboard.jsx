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

    const handleEditFormSubmit = timer => {
        updateTimer(timer);
    };

    const handleTrashClick = timerId => {
        deleteTimer(timerId);
    }

    const createTimer = timer => {
        const newTimer = helpers.newTimer(timer);
        setTimers( timers.concat(newTimer) );
    };

    const updateTimer = timer => {
        setTimers( timers.map( t => {
            if( t.id === timer.id ) { 
                return Object.assign({ }, t, {
                    title: timer.title,
                    project: timer.project
                });
            } else {
                return t;
            }
        }));
    };

    const deleteTimer = timerId => {
        setTimers( timers.filter(t => t.id !== timerId) );
    };

    return(
        <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList timers={ timers } onFormSubmit= { handleEditFormSubmit } onTrashClick={ handleTrashClick } />
                <ToggleableTimerForm onFormSubmit={ handleCreateFormSubmit } />
            </div>
        </div>
    );
}

export default TimersDashboard;