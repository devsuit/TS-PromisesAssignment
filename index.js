"use strict";
// ====================Implementation of Promises++++++++++++++++++++++
function carMaintenance() {
    console.log("I leave my car at 9 in the workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    });
    return result;
}
function pickDress() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("Pick your dress");
        }, 100);
    });
    return promise;
}
function attendEvent() {
    return Promise.resolve("Now you can attend the event");
}
function backToHome() {
    console.log("Go back to home");
    console.log("Reached home!");
}
//======================================Call Promises++++++++++++++++++++++++++++++++++++
carMaintenance()
    .then((carMessage) => {
    console.log(carMessage);
    return pickDress();
})
    .then((dressMessage) => {
    console.log(dressMessage);
    return attendEvent();
})
    .then((eventMessage) => {
    console.log(eventMessage);
    backToHome();
})
    .catch((error) => {
    console.error("An error occurred:", error);
});
