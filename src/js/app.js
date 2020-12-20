let messages = require('./messages.js');
let $ = require('jquery');

console.log(messages[0].text);

let f1 = () => {
    console.log('Hello from f1');
}

f1();

$.each(messages, (index, message) => {
    console.log('$ each: ' + message.text);
    $('body').append('<h4>' + messages[index].text + '</h4>');
});
