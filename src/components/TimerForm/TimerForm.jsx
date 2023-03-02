import React, { useState, useEffect } from "react";

const TimerForm = props => {
    const [ state, setState ] = useState({
        title: props.title ? props.title : '',
        project: props.project ? props.project : ''
    });

    const handleTitleChange = e => {
        const updateState = Object.assign({}, state, { title: e.target.value });
        setState(updateState);
    };

    const handleProjectChange = e => {
        const updateState = Object.assign({}, state, { project: e.target.value });
        setState(updateState);
    };

    const handleSubmit = () => {
        props.onFormSubmit({
            id: props.id,
            title: state.title,
            project: state.project
        });
    };

    const submitText = props.id ? 'Update' : 'Create';
    return(
        <div className="ui centered card">
            <div className="content">
                <div className="ui form">
                    <div className="field">
                        <label>
                            Title
                        </label>
                        <input type='text' value={ state.title } onChange={ handleTitleChange } />
                    </div>
                    <div className="field">
                        <label>
                            Project
                        </label>
                        <input type='text' value={ state.project } onChange={ handleProjectChange } />
                    </div>
                    <div className="ui two bottom attached buttons">
                        <button className="ui basic blue button" onClick={ handleSubmit }>
                            { submitText }
                        </ button>
                        <button className="ui basic red button" onClick={ props.onFormClose }>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimerForm;