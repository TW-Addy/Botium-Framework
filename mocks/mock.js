let firstCall = true;

const waitingForData = {
    meta: {
        sync_status: 'REQUESTED', 
    },
    data: null
}

const data = {
    meta: {
        sync_status: 'COMPLETE'
    },
    data: []
}

module.exports = {
    "port": "8080",
    "uri": "/v0/virtual_agent/claim",
    "method": "GET",
    handler: (request, response) => {
        if(firstCall) {
            response.send(waitingForData);
            firstCall = false;
        }
        else {
            response.send(data);
        }
    }
};