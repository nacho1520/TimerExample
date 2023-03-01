import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

const EditableTimer = props => {
    const [ editFormOpen, setEditFormOpen ] = useState(null);

    useEffect(() => {
        setEditFormOpen(false);
    }, []);

    if(editFormOpen) {
        return(
            <TimerForm
                id = { props.id }
                title = { props.title }
                project = { props.project }
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
            />
        );
    }
}

export default EditableTimer;