// creates the message to backend
const xhr = new XMLHttpRequest(); 

// waits for the even before execusting 
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

// set up the request, include type of message and url
xhr.open('GET', 'https://supersimplebackend.dev');

// send the message
xhr.send();

// gets a response, undefined at first and need to wait for response to come back, so asynchornous
// xhr.response // problematic, so use event listener