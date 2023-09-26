/*Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/

const createCounter = function(n) {
    
    return function() {
         return n++;
    };
};


//So what they do is return function n, n means the args, so they are saying that when they type const counter = createCounter (10), it means that 10 has to returns 1 more than the previous value

const counter = createCounter(10);

counter();