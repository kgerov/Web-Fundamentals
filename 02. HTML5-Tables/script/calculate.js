// function clear(val) {
// 	document.getElementById("screen").value=val;
// }
// function add(val) {
// 	document.getElementById("screen").value+=val;
// }
// function evaluate() {
// 	try {
// 		clear(eval(document.getElementById("screen").value))
// 	}
// 	catch(evaluate) {
// 		clear('error')
// 	}
// }

function cal(val) {
    var display = document.getElementById("screen").value;
    switch(val) {
        case "c": display = "";
        	break;
        case "=": display = eval(display);
        	break;
        default: display += val; 
        	break;
    }
    document.getElementById('screen').value = display;
}