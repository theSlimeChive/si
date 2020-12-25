const axios = require('axios').default;


// make a request using axios that has parameters 
// (the type of resource,
// path of API Call, and URL Configurations)

const makeRequest = (resourceType, URLPath, Configurations) => {
    return new Promise( (resolve, reject ) => {
        axios.get(URLPath, Configurations)
        .then(response => {
            let result ;
            if(resourceType == 'Articles') { result = response.data.articles }
            else if( resourceType == 'Sources') { result = response.data.sources }
            else { result = null }
            //console.log(`Processing '${URLPath}' `);
            resolve(result);
        }).catch(err => {
            if (err.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else if (err.request) {
                console.log(err.request);
            } else { 
                console.log(`Error: ${err.message} `);
            }
            reject(err); 
        });
    })
}


module.exports = makeRequest;