'use strict';

function CwiTracker() {
    this.hashCode = '6d1ea610-243a-436c-a3bc-f9830a616e56121';
    this.urlPost = 'http://bugtracker-5.apphb.com/BugTracker/Add';
    this.ERROR = 1;
    this.INFO = 2;
    this.WARNING = 3;
}

CwiTracker.prototype.track = function (obj, callback) {
    var errors = this.partialValidate(obj);

    if (errors.length !== 0) {
        callback(errors, null); return false;
    }

    if (typeof callback !== "function") {
        console.log('The second parameter should a function.'); return false;
    }

    obj['HashCode'] = this.hashCode;
    obj['Trace'] = JSON.stringify(obj['Trace']);

    $.ajax({
        url: this.urlPost,
        data: obj,
        type: 'POST',
        success: function (success) {
            callback(null, success.msg);
        },
        error: function (error) {
            callback(error.responseText, null);
        }
    });
}

CwiTracker.prototype.partialValidate = function (obj) {
    var errors = "";

    if (typeof (obj.Trace) === 'undefined')
        errors += " Field 'TRACE' is required.";

    if (typeof (obj.Status) === 'undefined')
        errors += " Field 'STATUS' is required.";

    if (typeof (obj.Tags) === 'undefined')
        errors += " Field 'TAGS' is required.";

    return errors;
};

var CWITracker = new CwiTracker();
