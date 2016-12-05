/**
 * Created by PHILIP_Mi on 23/11/2016.
 */

/*Fonction test localStorage*/
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return "Yes";
    } catch(e) {
        return "No";
    }
}

/*Fonction test sessionStorage*/
function ssTest(){
    var test = 'test';
    try {
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return "Yes";
    } catch(e) {
        return "No";
    }
}

/*console.log(navigator.userAgent); // User Agent OK
//HTTP Accept
console.log(navigator.plugins); // tableau des plugins
//Font
console.log(navigator.doNotTrack); // tableau des plugins
console.log(navigator.cookieEnabled); // si les cookies sont activés ou non
console.log(navigator.platform); // nom du système d'exploitation
console.log(navigator.oscpu);//OS  (via flash)
console.log(screen.width + "*"+  screen.height);
console.log(new Date().getTimezoneOffset());
console.log(ssTest());//DOM Session Storage
console.log(lsTest());//DOM Local Storage
console.log(window.sessionStorage); //I.E User data
console.log(navigator);*/

var str = navigator+ssTest()+lsTest()+window.sessionStorage+new Date().getTimezoneOffset()+screen.height+screen.width;
var hash = hashCode(str);

function hashCode(str){
    var hash = 0;

    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);       hash = ((hash*40)-hash)+char;     hash = hash & hash; // Convert to 40bit integer
    }
    console.log(hash);
    return hash;
}