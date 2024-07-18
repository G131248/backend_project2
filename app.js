const forcast = require("./forcast_application/forcast")
const geocode = require("./forcast_application/geocode")
const country = process.argv[2]





geocode (country, (error, data)=>{

    console.log("error:", error)
    console.log("data:", data)

    
forcast ( data.latitude,  data.longtitude, (error, data)=>{
    console.log("error:", error)
    console.log("data:", data)
    
    })
})









// const request = require("request")
// const forcast = (latitude, longtitude, callback) =>{
// const url = "https://api.weatherapi.com/v1/current.json?key=f4e8d3fed94c4c2c97e63736241607&q=colombia&aqi="+ latitude + "," + longtitude
// request({url, json: true}, (error, response) =>{

//     // console.log(response.body)

//     // const data1 = JSON.parse(response.body)
//     // console.log(data1)

//     if(error) {
//        callback("error has occured" , undefined)
//     } else if (response.body.error){
//         callback("response.body.error.message" , undefined)                             
//     } else{
//         callback(undefined , response.body.location.name + "it is " + response.body.current.condition.text) 

//     }   

// }) 
// }



/////////////////////////////////////////////////////////////////////////////////////

// const request = require("request")
// const geocode = (adress , callback)=>{

// const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ adress +".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
// request({url : geocodeurl , json : true}, (error, response) =>{

//     if (error){
//         callback("unable to connect server", undefined)

//     } else if (response.body.message) {
//         callback(response.body.message, undefined)
        
//     }
//     else if (response.body.features.length==0) {
//         callback("unable to find location", undefined)
        
//     }
//      else{
//         callback(undefined, {
//         longtitude : response.body.features[0].center[0],
//         latitude : response.body.features[0].center[1]
//         })
       
//     }
// })
// }

