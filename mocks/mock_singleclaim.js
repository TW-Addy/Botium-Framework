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
    data: [{
        "claim_type": "Compensation",
        "claim_status": "UNDER REVIEW",
        "filing_date": "08/13/2021",
        "evss_id": "600118851"
    }]
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