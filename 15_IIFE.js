// IIFE - Immmediately Invoked Functions & Expressions
// The function is immediately invoked and the return value is assigned to `module.exports`.
// It also helps prevent pollution of the global namespace.

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})() ; // We need to use semi - colon to end such functions .

//(function)(excecution)
// The code inside the function is executed immediately when it's called. In this case, we call the function right after defining it, so // Self executing function, immediately invoking the function // Self executing function, immediately invoking the function .

( () => {
    // Unnamed  IIFE
    console.log(`DB CONNECTED TWO`);
})();

( (NAME) => {
    console.log(`DB CONNECTED TWO ${NAME}`); 
})('Gaurav')

/*.......To write two IIFE togethere we add a semi-colon to end the first IIFE function ..........*/