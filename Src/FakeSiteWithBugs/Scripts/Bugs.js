function bug1() {
    try{
        console.log("Bug1");
        throw new ReferenceError();

    } catch (e) {
        CwiTracker.track(e);
    }
}
function bug2() {
    try {
        console.log("Bug2");
        kaleur(dda);

    } catch (e) {
        CwiTracker.track(e);
    }
}
function bug3() {
    try {
        console.log("Bug3");
        throw new URIError();

    } catch (e) {
        CwiTracker.track(e);
    }
}