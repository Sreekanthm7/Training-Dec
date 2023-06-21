fetch("./data.json")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    fetch_failed_job(data)
  })

function fetch_failed_job(data) {
  let sellerID = "AKNG0CK8GJI4B"
  for (i = 0; i < data.failures.length; i++) {
    // console.log(data.failures[i]);
    for (j = 0; j < data.failures[i].sellers.length; j++) {
      // console.log(data.failures[i].sellers[j]);
        for(k = 0; k < data.failures[i].sellers[j].reports; k++){
      if (sellerID == data.failures[i].sellers[j].sellerID) {
        // console.log(data.failures[i].sellers[j].reports)

        retry_failed_job(
          data.failures[i].sellers[j].sellerID,
          data.failures[i].sellers[j].reports[k]
        )
      }
    }
}
  }
}
function retry_failed_job(sellerid, api_name) {
  console.log(sellerid, api_name)
}
