function bug1() {
    try{
        console.log("Bug1");
        throw new ReferenceError();

    } catch (e) {
        CWITracker.track({
            Trace: "Banco de dados caiu. [error]",
            Status: CWITracker.ERROR,
            Tags: ["critical", "danger"]
        }, function callback(error, success) {
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
            Trace: "Teste [warning]",
            Status: CWITracker.WARNING,
            Tags: ["Teste"]
        }, function callback(error, success) {
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
            Trace: "Você teve 1000 mil acessos [info]",
            Status: CWITracker.INFO,
            Tags: ["Teste"]
        }, function callback(error, success) {
            console.log(error || success)
        });
    }
}