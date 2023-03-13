import React, { useState, useEffect } from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";
import * as Client from '../../client';

const TimersDashboard = () => {
    const [ timers, setTimers ] = useState([]); 

    useEffect(() => {
        loadTimersFromServer();
        setInterval(loadTimersFromServer, 1000);
    }, []);

    const loadTimersFromServer = () => {
        Client.getTimers((serverTimers) => {
            setTimers(serverTimers.data);
        }
        );
    }

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
        Client.postTimer({ title: timer.title, project: timer.project })
            .then(loadTimersFromServer);
    };

    const updateTimer = timer => {
        Client.updateTimer(timer.id, { title: timer.title, project: timer.project })
            .then(loadTimersFromServer);
    };

    const deleteTimer = timerId => {
        Client.deleteTimer(timerId)
            .then(loadTimersFromServer);
    };

    const handleStartClick = timerId => {
        startTimer(timerId);
    };

    const handleStopClick = timerId => {
        stopTimer(timerId);
    };

    const startTimer = timerId => {
        const now = Date.now();
        Client.startTimer(timerId, { runningSince: now })
            .then(loadTimersFromServer);
    };

    const stopTimer = timerId => {
        Client.stopTimer(timerId)
            .then(loadTimersFromServer);
    };

    return(
        <>
            {
                timers && (
                <div className="ui three column centered grid">
                    <div className="column">
                        <EditableTimerList 
                            timers={ timers } 
                            onFormSubmit= { handleEditFormSubmit } 
                            onTrashClick={ handleTrashClick } 
                            onStartClick={ handleStartClick } 
                            onStopClick={ handleStopClick }
                        />
                        <ToggleableTimerForm onFormSubmit={ handleCreateFormSubmit } />
                    </div>
                </div> 
                )
            }
        </>
    );
    
}

export default TimersDashboard;