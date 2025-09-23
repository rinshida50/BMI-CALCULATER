products=[
    {pid:100,pName:'Apple',band:'5g',price:120000,dispaly:'led'},
    {pid:101,pName:'Samsung',band:'5g',price:45000,dispaly:'led'},
    {pid:102,pName:'Blueberry',band:'4g',price:50000,dispaly:'led'},
    {pid:103,pName:'Nokia',band:'3g',price:1200,dispaly:'lcd'},
    {pid:104,pName:'Motorola',band:'4g',price:10000,dispaly:'lcd'},


]

// 1.print product name only

products.forEach(pro => console.log(pro.pName));

console.log("--------------------------------");

// 2.print all mobile details whose display is lcd

let display=products.filter(item=>item.dispaly==='lcd').forEach(item=>console.log(item.pName)
)

// 3.print 5g mobile phone name
console.log("--------------");

band=products.filter(item=>item.band=='5g').forEach(item=>console.log(item.pName)
)
// 4.dispaly mobile names and price based on price on descending order
console.log("--------------");

products.sort((a,b)=>b.price-a.price).forEach(item=>console.log(item.pName , item.price)
)
// 5.print costly mobile
console.log("--------------");
console.log(products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName);

// 6.print low cost mobile
console.log("--------------");
console.log(products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pName);


