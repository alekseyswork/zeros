myzeros = (expression) => {
  // var matches = '{example1}{example2}{example3}'.match(/\{.*?\}/g);
  let array = expression.match(/[0-9]+[!]+/g);
  let getarrayofnumbers = array.map(x => [x, Returnnubmbers(x)]);

  // let getarrayofnumbers2 = array.map(x =>  Returnnubmbers(x));

  // var temp3 = getarrayofnumbers2.reduce(function (a, b) {
  //   // return a * b;
  //   return BigInt(a * b)+"";
  // }, 1);
  // let zeros = (temp3).toLocaleString('fullwide', {useGrouping:false}).match(/[0]+$/g);
  // if(zeros ==null){
  //   return 0;
  // }
  // return zeros.length;
  getarrayofnumbers.forEach(element => {
    expression = expression.replace(element[0], element[1]);
  });

  let value =eval(expression);
  let stringreverse = value.toString().split("").reverse().join("");
  // let temp2 = value.match(/[0]+$/)
  var splitString =parseInt(stringreverse);
  let temp = value.toString().length - splitString.toString().length;
  return temp;
  
}
Returnnubmbers = (item) => {
  let j = 1;
  let num = parseInt(item, 10);
  if (item.indexOf('!!') >= 0) {
    j = 2;
  } else if (item.indexOf('!') >= 0) {
    j = 1;
  } else {
    return num;
  }
  let array = [];
  for (i = num; i > 0; i = i - j) {
    array.push(i);
  }
  let temp = array.reduce(function (a, b) {
    return BigInt(a * b)+"";
    // return a * b;
  }, 1);
  return temp;
}


myzeros('5!');
module.exports = function zeros(expression) {
  return myzeros(expression);
}