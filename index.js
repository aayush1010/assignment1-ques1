function callback(n) {
    var d = new Date();
    var i = d.getTime();
    var u = i+n;
    while (new Date().getTime() <= u){
    }
     console.log("THIS IS FROM CALLBACK " );
}

function setTimeoutsync(callback, n) {
       console.log("THIS IS FROM SETTIMEOUTSYNC FUNCTION");
       callback(n);
}



setTimeoutsync(callback, 5000);