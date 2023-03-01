import React from "react";
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

const EditableTimer = props => {
    if(props.editFormOpen) {
        return(
            <TimerForm
                title = { props.title }
                project = { props.project }
            />
        );
    } else {
        return(
            <Timer 
                title = { props.title }
                project = { props.project }
                elapsed = { props.elapsed }
                runningSince = { props.runningSince }
            />
        );
    }
}

export default EditableTimer;