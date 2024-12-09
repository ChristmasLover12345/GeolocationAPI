import { APIKEY } from "./environment.js";


// this is a built in API that will allow the user to get their current location upon accepting the prompt
// navigator returms the geolocation object
// getCurrentPosition() returns the current position of the user
navigator.geolocation.getCurrentPosition( success. errorFunc);
// think of this as a if else statement. if the user accepts it is succesful, if not its an error

// Example of a geolocation object
{
    cords: {
        latitude: 37.3214;
        longitude: -24,1243;
    }
}


function success(position){
    console.log(position);
    console.log("Our latitude is: " + position.coords.latitude);
    console.log("Our latitude is: " + position.coords.longitude);
    console.log("Get doxxed brah");
}


function errorFunc(error){
    console.log(error.message)
}

success()

function apiCall() {
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=52.3676&lon=4.9041&appid={API key}${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall()