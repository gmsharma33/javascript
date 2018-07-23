var runNum = 0;
var runner = function(addNum, multNum) {
debugger
	runNum += addNum * multNum;
	
	self.postMessage({ 'newNum': runNum });
	setTimeout(function() { self.runner(addNum, multNum); }, 1000);
};

self.onmessage = function(e) { // How to receive a message in a web worker
	debugger
	runner(e.data.numberToAdd, e.data.multiply);
}