
module.exports = {
    "port": "8080",
    "uri": "/v0/virtual_agent/appeal",
    "method": "GET",
    response: {
        body: {
            data: [{
                appeal_type: "Compensation",
                filing_date: "02/02/2020",
                appeal_status: "Please review your Statement of the Case"
            }]
        }
    }
};

