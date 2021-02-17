
 /**
  * @LOOP_FOR_JAVASCRIPT
  * @DESCRIPTION designed to iterate multiple time given action
  */

 for(let i = 0; i <= 9; i++) {
     console.log('i: ', i);
 }

 const obj = {
     x: 5,
     y: 6
 } //DICTIONNARY OR COLLECTION OR MAP 

console.log("key x  get his value:", obj.x);
console.log("key y  get his value:", obj.y);

for(let key in obj){
    console.log('key in loop for in:', key);
    console.log('get value with current iterate key in obj: ', obj[key]);
}

const tableau = ["foo", "bar", "foo", "baz"];

for(let index in tableau){
    console.log("index tableau: ", index);
    console.log("get value tableau with current iterate index:", tableau[index]);
}

for(let value of tableau){
    console.log('get current iterate value of array: ', value);
}

// for(let valueObj of obj){
//     console.log('get current iterate value of collection/Dictionnary/Map: ', valueObj);
// }

/**
 * @AVANCED_LOOP_JAVASCRIPT
 */

/**
 * @ForEach doesn't return value this function just iterate on iterable element like array
 */
tableau.forEach(function(item, index){
    console.log('forEach item:', item);
    console.log('forEach index: ', index);
});

/**
 * @Map it return an array with the same size than input
 */

 const newTableauMap = tableau.map(function(item, index){
    return item + index;
 });

 console.log('oldTableau: ', tableau);
 console.log('newTableau:', newTableauMap);

 /**
  * @Filter iterate on iterable element like array and choose what element you want to keep
  */

  const tableauFiltered = tableau.filter(function(item, index) {
    return item === "foo";
  });

  console.log('old tableau without filter function: ', tableau);
  console.log('tableau filtered: ', tableauFiltered);

 /**
  * @Reduce it can handle any iterable element to transforme in any type data
  */

  const transformTableauTypeToACollectionWidthReducer = tableau.reduce(function(acc, item, index){
    acc[index] = item;
    return acc;
  }, {});

  console.log('tableau type array without transform it on collection: ', tableau);
  console.log('transformTableauTypeToACollectionWidthReducer: ', transformTableauTypeToACollectionWidthReducer);
