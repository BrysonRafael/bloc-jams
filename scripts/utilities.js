function forEach(callback){
    callback();
}

function pointsCallback() {
    for (var i = 0; i < points.length; i++) {
        revealPoint(i);
    };
}

forEach(pointsCallback);