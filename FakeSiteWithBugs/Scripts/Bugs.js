﻿function bug1() {
    try{
        console.log("Bug1");
        throw new ReferenceError();

    } catch (e) {
        CWITracker.track(e);
    }
}
function bug2() {
    try {
        console.log("Bug2");
        kaleur(dda);

    } catch (e) {
        CWITracker.track(e);
    }
}
function bug3() {
    try {
        console.log("Bug3");
        throw new URIError();

    } catch (e) {
        CWITracker.track(e);
    }
}