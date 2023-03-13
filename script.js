//selection sort javascript

let myarr = [39, 62, 1100, 76346, 2234];

for (let x = 0; x < myarr.length; x++) {
  for (let y = x+1; y < myarr.length; y++) {
    if (myarr[x]>myarr[y]){
        [myarr[x],myarr[y]]=[myarr[y],myarr[x]]
    }
  }
}
console.log(myarr);
console.log('maximum value is : ',myarr[myarr.length-1]);
console.log('minimum value is : ',myarr[0]);
