import React from "react";
import EditableTimer from "../EditableTimer/EditableTimer";

const EditableTimerList = props => {
    return(
        <div>
            {
                props.timers.map((timer) => {
                    return(
                        <EditableTimer 
                            key = { timer.id }
                            title = { timer.title }
                            project = { timer.project }
                            elapsed = { timer.elapsed }
                            runningSince = { timer.runningSince }
                        />
                    );
                })
            }
        </div>
    );
}

export default EditableTimerList;