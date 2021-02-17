/**
 * @ES5_JAVASCRIPT
 */
window.onload = function(){
     // GET ELEMENT DOM IN ES5 JAVASCRIPT
     /**
      * @getElementById
      * @getElementsByClassName
      * @getElementsByTagName 
      * */ 
     // New Javascript Browser
      /**
       * @querySelector
       * @querySelectorAll
       */
     var myDiv = document.querySelectorAll('.maDiv[data-type="toto"]');
     console.log(myDiv);  
    /**
     * @ES5_DECLARATION_VARIABLE
     * @ES5_DATA_TYPE
     */
     var a = "";
     var b = 2;
     var d = true || false
     var c = [];
     var e = {};
     var f = function(){}
     /**
      * @ES6_AND_MORE
      * @DECLARATION_VARIABLE
      * @ES6_DATA_TYPE
      * @CONST_DECLARATION
      * @DESCRIPTION SHOULD to declare constante value, it doesn"t change with execution 
      */
     const a = "";
     const b = 2;
     const d = true || false
     const c = [];
     const e = {};
     const f = function(){}

     /**
      * @ES6_AND_MORE
      * @DECLARATION_VARIABLE
      * @ES6_DATA_TYPE
      * @LET_DECLARATION
      * @DESCRIPTION SHOULD to declare dynamic value, this variable change in run-time process 
      */
     let a = "";
     let b = 2;
     let d = true || false
     let c = [];
     let e = {};
     let f = function(){}

}