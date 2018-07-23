// Web workers must exist in a seperate file or in seperate script tags as above
// A blob allows us to gather data from elsewhere on the page
var blob = new Blob([document.getElementById('worker').textContent]);
// We must call the Worker as a URL which is why we must gather the blob from above
var worker = new Worker(window.URL.createObjectURL(blob));

worker.onmessage = (e) => { // All messages from the worker must be dealt with like this
	document.getElementsByClassName('output')[0].innerHTML  = e.data.newNum;
};

// Web workers are kicked off usually with a Post Message as here
worker.postMessage({ // initiate a message to a web worker
	'numberToAdd': 10,
	'multiply': 100
});