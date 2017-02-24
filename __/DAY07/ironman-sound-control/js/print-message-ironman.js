/*! print-message-ironman.js © yamoo9.net, 2016 */

var message_count = 0;
var about_function_messages = [];

about_function_messages.push('This is a function object.');
about_function_messages.push('Function object has an attribute.');
about_function_messages.push('Function objects can be invoked later.');
about_function_messages.push('Function is usafull feature.');

// console.log('about_function_messages:', about_function_messages);

function printFunctionMessage() {
  // console.log(about_function_messages[ message_count++ % about_function_messages.length ]);
  // return undefined;
  return about_function_messages[ message_count++ % about_function_messages.length ];
  // message_count = (message_count + 1) % about_function_messages.length;
}

var ironman       = document.querySelector('.ironman');
var ironman_message = ironman.querySelector('.message');
var print_button  = ironman.querySelector('.ironman-print-button');

// console.log('print_button:', print_button);

print_button.onclick = function() {
  var print_message = printFunctionMessage();
  console.log('click function 내부: ', print_message);
  ironman_message.textContent = print_message;
};
