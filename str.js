str="c++"

console.log(str.length);

str1="java script"

console.log(str1.substring(5,11));

console.log(str1.startsWith("java"));
console.log(str1.endsWith("script"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());


str2 ="oreo"
console.log(str2);
console.log(str2.trim());         //remove white space

console.log(str1.split(" "));



//check an email is valid or not
console.log("-------------------");

//const prompt=require (`prompt-sync`)({sigint:true})

//let email = prompt("enter the email")
//console.log(email.endsWith("@gmail.com"));

email="lena@gmail.com"
console.log(email.endsWith("@gmail.com")?'valid email' : 'invalid email');




//check given word start with ma
console.log("---------------------------");

word="Malayalam"
console.log(word.startsWith("Ma")?"yes":"no");




//display word count of given para
console.log("----------------");

para="powerful,extencible an future-packed any items can "

//console.log(para.length);
console.log(`word count : ${para.split(" ").length}`);



//display all vowelsfrom given data
 data="hello hai"
vowels=['a','e','i','o','u']
console.log(data.split("").filter(char=>vowels.includes(char)));

 //[id,name,price,stock]
products = [
  [1, 'hide and seek', 50, 20],
  [2, 'lays', 20, 80],
  [3, 'oreo', 40, 100],
  [4, 'parleG', 25, 0],
  [5, 'tiger', 20, 30],
  [6, 'UNIBIC', 60, 20],
  [7, 'goodday',70,20]
]
//search a string available in the product array .it return array of product which includes the given string ,otherwise display no prpducts are available

search = "a"
filterArray=products.filter(p=>p[1].includes(search))
//console.log(filterArray);

if(filterArray.length>0){
    console.log( filterArray.map(pro=>pro[1]));
    
}
else{
    console.log("no products are available");
    
}


console.log(str1.slice(-6,-3));
