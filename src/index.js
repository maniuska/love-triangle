/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
   var a, b, c, counter=0;

  for ( i=0; i<preferences.length; i++ ){
    if (typeof (preferences [i]) == "number"){
      a = preferences [i];
      b = preferences [a-1];
      c = preferences [b-1];
      if (( i+1==c ) && ((a!==b) && (b!==c))){
        counter ++;
        preferences [i] = undefined;
        preferences [a-1] = undefined;
        preferences [b-1] = undefined;
      }
    }
  }
  return counter;
};
