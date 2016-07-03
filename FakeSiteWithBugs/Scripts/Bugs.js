function bug1() {
    try{
        console.log("Bug1");
        throw new ReferenceError();

    } catch (e) {
        CWITracker.track({
            Trace: e,
            Status: CWITracker.ERROR,
            Tags: ["critical"]
        }, function a(error, success) {
            console.log(error || success)
        });
    }
}
function bug2() {
    try {
        console.log("Bug2");
        kaleur(dda);

    } catch (e) {
        CWITracker.track({
            Trace: e,
            Status: CWITracker.WARNING,
            Tags: ["Teste"]
        }, function a(error, success) {
            console.log(error || success)
        });
    }
}
function bug3() {
    try {
        console.log("Bug3");
        throw new URIError();

    } catch (e) {
        CWITracker.track({
            Trace: e,
            Status: CWITracker.INFO,
            Tags: ["Teste"]
        }, function a(error, success) {
            console.log(error || success)
        });
    }
}