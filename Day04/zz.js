function arrayToList(arr) {
  //create list object with only nill value
  var list = null;

  //create a list from the inside out --
  //iterate over the array argument backward
  for (var i = arr.length - 1; i >= 0; i--) {
    //create list
    list = { value: arr[i], rest: list };
  }
  return list;
}
console.log(arrayToList([10, 20]));
// console.log(arrayToList([10,20]));

function listToArray(list) {
  //create emty array
  var array = [];

  //iterate through the list argument
  //setting i = list sets i equal to the first item
  // in the list
  //the for loop will run util i evaluates to false,
  //which occurs at the end of the list
  //i = i.rest sets i equal to the next item in the list--
  //this is what causes the for loop to iterate
  for (var i = list; i; i = i.rest) {
    //push current value on the list item to the array
    array.push(i.value);
  }
  return array;
}

function prepend(value, list) {
  //returns an object with the value argument,followed by
  //the remainder of thelist in the rest property
  return { value: value, rest: list };
}
function nth(list, nbr) {
  debugger
  //if the element specified in arguments does not exist,
  //return undefined
  if (!list) {
    return undefined;

    //if the number provided is equal to zero,
    //then return the value for that list item
    //this is the exit statement for the recursive call
  } else if (nbr === 0) {
    return list.value;

    //recursively iterate through the lists & numbers
    //to identify the value for the list & numbers provided
  } else {
    return nth(list.rest, nbr - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
