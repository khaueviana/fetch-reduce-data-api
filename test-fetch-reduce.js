var fetch = require("node-fetch");


const cityJobsData = fetch('https://data.cityofnewyork.us/resource/swhp-yxa4.json');
cityJobsData
    .then(data => {
        return data.json()
    })
    .then(data => {
        const agencyFrequency = data.reduce((agencies, value) => {
            agencies[value.agency] = agencies[value.agency] ? agencies[value.agency] + 1 : 1;
            return agencies;
        }, {});
        console.log(agencyFrequency);
    })
    .catch(err => console.log(err));