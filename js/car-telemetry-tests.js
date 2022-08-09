"use strict";
// TEST
testRunner();
function testRunner() {
    console.log("Passed 'returns valid mileage': " + getCarTelemetry_GivenValidCar_ReturnsMileage());
    console.log("Passed 'returns string message': " + getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage());
    console.log("Passed 'returns helpful message': " + getCarTelemetry_GivenNonValidMileage_ReturnHelpfulMessage());
    console.log("Passed 'returns mileage with one decimal place': " + getCarTelemetry_GivenDecimalNumber_ReturnOneDecimalPlace());
}
// AC-1: given a valid car, returns the mileage of that car
function getCarTelemetry_GivenValidCar_ReturnsMileage(){
    // Arrange
    // Gather all the data, and any setup needed
    const car = {
        mileage: 67922
    };

    const expectedMileage = car.mileage;

    // Act
    // Execute testable code and store results as needed
    const actualMileage = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return actualMileage === expectedMileage.toFixed(1);
}

// AC-2: given no mileage, returns helpful message.
function getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage() {
    // Arrange
    const car = {};

    // Act
    const message = getCarTelemetry(car);

    // Assert
    return typeof message === "string";
}

// AC-3: given any non-valid mileage(numbers and numerical strings are valid), returns helpful message.
function getCarTelemetry_GivenNonValidMileage_ReturnHelpfulMessage() {
    // Assert
    const car = {
        mileage: "alskfa;fl"
    };
    // Act
    const helpfulMessage = getCarTelemetry(car);
    // Assert
    return helpfulMessage === "No mileage provided...";
}

// AC-4: given a numeric with more than one decimal place, returns mileage with only one decimal place (ie: 6853.5234 -> 6853.5)
// TODO: 1. write test for decimal place here
function getCarTelemetry_GivenDecimalNumber_ReturnOneDecimalPlace() {
    const car = {
        mileage: 67900.12
    }

    const expectedMileage = car.mileage;

    const actualMileage = getCarTelemetry(car);

    return actualMileage === expectedMileage.toFixed(1);
}


// ACTUAL CODE

function getCarTelemetry(carObj){
    // TODO: 3. modify code for decimal place handling here

    return parseInt(carObj.mileage) ? carObj.mileage.toFixed(1) : "No mileage provided...";
}