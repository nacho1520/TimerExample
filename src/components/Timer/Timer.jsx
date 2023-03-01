import React from "react";
import * as helpers from '../../helpers/helpers';

const Timer = props => {
    const elapsedString = helpers.renderElapsed(props.elapsed);
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
                    <span className="rigth floated edit icon">
                        <i className="edit icon" /> 
                    </span>
                    <span className="rigth floated trash icon">
                        <i className="trash icon" />
                    </span>
                </div>
            </div>
            <div className="ui bottom attached blue basic button">
                Start
            </div>
        </div>
    );
}

export default Timer;