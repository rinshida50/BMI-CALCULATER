// [id, name, price, stock]
products = [
  [1, 'hide and seek', 50, 20],
  [2, 'lays', 20, 80],
  [3, 'oreo', 40, 100],
  [4, 'parleG', 25, 0],
  [5, 'tiger', 20, 30],
  [6, 'UNIBIC', 60, 20],
  [7, 'goodday',70, 20]

]


//display all product name

console.log("---------------------");

console.log(products.map(a=>a[1]));


//display products whose price greater than<50
console.log("-------------------");

products.filter(a=>a[2]>=50).forEach(a=>console.log(a[1],a[2]));






//print price of oreo

console.log("-------------------");

console.log(products.find(p=>p[1]=="oreo")[2]);



//print costly product name

console.log("----------------");
console.log(products.reduce((a,b)=>a[2]>b[2]?a:b)[1]);



//display out of stock product
console.log("----------------------");
console.log(products.find(a=>a[3]==0)[1]);



//display product with stock decenting order
console.log("-----------------------");
products.sort((a,b)=>b[3]-a[3]).forEach(s=>console.log(s[1],s[3]));



//print product having maximum available stock
console.log("---------------------------");
console.log(products.reduce((a,b)=>a[3]>b[3]?a:b)[1]);


//is there is any product can be purchased by Rs.10
console.log("-------------------");
console.log(products.some(a=>a[2]<=10)?"Yes":"No");


//is there is any product in the range of 20-30
console.log("-------------------");
console.log(products.some((a=>a[2]>=20 && a[2]<=30))?"Yes":"No");



//print all product in the range of 35-55

products.filter(a=>a[2]>=35 && a[2]<=55).forEach(a=>console.log(a[1],a[2]));
