function checkHumidityLevel(humedad) {
    if (humedad >= 70) {
        throw "Demasiada humedad";
    }
    return undefined
}

function OverheatingError(message) {
    const error = new Error(message);
    return error;
}

function reportOverheating(temperatura) {
    if (temperatura == null) {
        throw new ArgumentError();
    } else if (temperatura > 500) {
        throw new OverheatingError('temperatura: ' + temperatura);
    }
    return temperatura
}

function monitorTheMachine(actions) {
    actions.check();
    actions.alertDeadSensor();
    actions.alertOverheating();
    actions.shutdown();
}