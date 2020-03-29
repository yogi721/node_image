function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = val => collection.unshift(val);
  this.dequeue = () => collection.pop();
  this.front = () => collection[collection.length - 1];
  this.size = () => collection.length;
  this.isEmpty = () => collection.length === 0;
  // Only change code above this line
}
