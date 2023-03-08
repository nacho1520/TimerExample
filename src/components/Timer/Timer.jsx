import React, { useState, useEffect }  from "react";
import * as helpers from '../../helpers/helpers';
import TimerActionButton from "../TimerActionButton/TimerActionButton";

const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue( value => value + 1 );
}

const Timer = props => {
    const forceUpdate = useForceUpdate();
    const elapsedString = helpers.renderElapsed(props.elapsed, props.runningSince);

    useEffect(() => {
        let forceUpdateInterval = setInterval(forceUpdate, 50);
        return () => {
            clearInterval(forceUpdateInterval);
        };
    }, []);

    const handleTrashClick = () => {
        props.onTrashClick(props.id);
    };

    const handleStartClick = () => {
        props.onStartClick(props.id);
    };

    const handleStopClick = () => {
        props.onStopClick(props.id);
    };

    return(
        <div className="ui centered card">
            <div className="content">
                <div className="header">
                    { props.title }
                </div>
                <div className="meta">
                    { props.project }
                </div>
                <div className="center aligned description">
                    <h2>
                        { elapsedString }
                    </h2>
                </div>
                <div className="extra content">
                    <span className="rigth floated edit icon" onClick={ props.onEditClick }>
                        <i className="edit icon" /> 
                    </span>
                    <span className="rigth floated trash icon" onClick={ handleTrashClick }>
                        <i className="trash icon" />
                    </span>
                </div>
            </div>
            <TimerActionButton  
                timerIsRunning={ !!props.runningSince }
                onStartClick={ handleStartClick }
                onStopClick={ handleStopClick }
            />
        </div>
    );
}

export default Timer;