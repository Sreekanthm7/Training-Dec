fetch('./data.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    fetch_failed_job(data)
})

function fetch_failed_job(data) {

    for(i = 0; i < data.failures.length; i++){

        // console.log(data.failures[i]);

        if(data.failures[i].count == 3) {
            console.log();
        }
    }
}