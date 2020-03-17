
exports.min = function min (array) {
  if (array==null || array.length==0) return 0;
  else{
  array.sort(function(a, b) {
  return a - b;});
  return array[0];}
}

exports.max = function max (array) {
  if (array==null || array.length==0) return 0;
  else{
  array.sort(function(a, b) {
  return b - a;});
  return array[0];}
}

exports.avg = function avg (array) {
  if (array==null || array.length==0) return 0;
  else{
  let sum=0;
  for (let i=0;i<array.length;i++)
  {
      sum+=array[i]/array.length;
  }  
  return (Math.round(sum*100)/100);}
}
