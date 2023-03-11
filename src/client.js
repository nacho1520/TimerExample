export const getTimers = success => {
    return fetch('/api/timers')
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
};

export const postTimer = (data) => {
    console.log(JSON.stringify(data));
    return fetch('/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

export const checkStatus = response => {
    if(response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
};

export const parseJSON = response => {
    return response.json();
};

export const startTimer = (id, data) => {
    console.log(JSON.stringify(data));
    return fetch('/api/update/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}; 

export const stopTimer = id => {
    return fetch('/api/stop/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

