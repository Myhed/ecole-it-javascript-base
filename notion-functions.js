/**
 * @FUNCTION_NAMED
 */

function maFunction() {
    return "hello";
}

/**
 * @FUNCTION_ANNONYME
 */
const maFunctionAnonyme = function () {
    return "hello";
}
/**
 * @ARROW_FUNCTION
 * @DESCRIPTION this keyword is not the context of the current arrow function
 */

const monArrowFunction = () => {
    return "hello";
}

const monArrowFunction2 = () => "Hello";

/**
 * @CALLBACK_FUNCTION
 */

function attachFamilyNameToTheName(name, familyName) {
    return `${name} ${familyName}`;
}

function hello(name, cb) {
    const string = "hello";
    cb(`${string} ${name}`);
}

/**
 * @HOW_TO_USE_CALLBACK
 */

hello('Myhed', function (resultat) {
    setTimeout(() => {
        console.log('resulat callback: ', resultat);
    }, 1000);
});

/**
 * @CLOSURE_FUNCTION
 * @DESCRIPTION main CONCEPTE IS parent drive the child function parameter to complete the return result
 */
function hello2(name) {
    const string = "hello";
    return attachFamilyNameToTheName(`${string} ${name}`, "Ben Rhouma");
}

const resultat = hello2("Myhed");


console.log('resultat: ', resultat);

/**
 * @param {INT => Number} x
 * @DESCRIPTION parente return a child function
 */
function parente(x) {
    /**
     * @param {INT => Number} y
     * @DESCRIPTION fille return result parameter parente added to his parameter
     */
     function fille(y) { return x + y; } 
     return fille;
}
console.log('parente result: ', parente(3)(4));

/**
 * @PROMISE 
 * @DESCRIPTION HOW TO USE IT
 */

 function MyPromise(a, b){
    return new Promise(function(resolve, reject){
        if(a > 10){
            reject(new Error('a must be in range 0 to 9'))
        }
        resolve(a + b);
    }); 
 }

 MyPromise(11, 3)
  .then(result => {
    console.log('promise result: ', result);
 })
  .catch(error => {
      console.log('error thrown: ', error);
 });

 async function resultMyPromise(a, b){
    const result = await MyPromise(a, b);
    console.log("result promise with async await", result);
    return result;
 } 

 const  resultAsyncAwait = resultMyPromise(3, 4);

 console.log("resultAsyncAwait: ", resultAsyncAwait)
 
 resultAsyncAwait.then(res => {
     console.log('res: ', res);
 });



