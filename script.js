const myList = [
    "Crayons",
    "Pencils",
    "Books",
    "Colorpencils",
    "Canvas",
    "Brushes",
  ];
  var users = [
    { user: "barney", age: 16, active: true },
    { user: "fred", age: 24, active: false },
    { user: "John", age: 15, active: true },
    { user: "Belly", age: 19, active: false },
    { user: "Stephen", age: 44, active: true },
    { user: "Angel", age: 92, active: true },
    { user: "Chris", age: 08, active: false },
  ];
  
  //chunk() Method
  const chunk = _.chunk(myList, 2);
  console.log(chunk);
  document.write(chunk);
  //reduce() method
  const reduce = _.reduce(
    myList,
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    },
    []
  );
  console.log(reduce);
  
  //filter() method
  const filter = _.filter(users, function (result) {
    return !result.active;
  });
  console.log(filter);
  
  //find() method
  const find = _.find(users, function (result) {
    return result.age < 30;
  });
  console.log(find);
  
  //sum() method
  const sum = _.sum([15,10,15]);
  console.log(sum);