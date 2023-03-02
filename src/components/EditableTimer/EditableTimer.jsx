import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

const EditableTimer = props => {
    const [ editFormOpen, setEditFormOpen ] = useState(null);

    useEffect(() => {
        setEditFormOpen(false);
    }, []);

    const openForm = () => {
        setEditFormOpen(true);
    };

    const closeForm = () => {
        setEditFormOpen(false);
    };

    const handleEditClick = () => {
        openForm();
    };

    const handleFormClose = () => {
        closeForm();
    };

    const handleFormSubmit = timer => {
        props.onFormSubmit(timer);
        closeForm();
    };

    if(editFormOpen) {
        return(
            <TimerForm
                id = { props.id }
                title = { props.title }
                project = { props.project }
                onFormClose = { handleFormClose }
                onFormSubmit = { handleFormSubmit }
            />
        );
    } else {
        return(
            <Timer 
                id = { props.id }
                title = { props.title }
                project = { props.project }
                elapsed = { props.elapsed }
                runningSince = { props.runningSince }
                onEditClick = { handleEditClick }
                onTrashClick = { props.onTrashClick }
            />
        );
    }
}

export default EditableTimer;