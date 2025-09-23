//district,+ve,death rate,curred rate,1 st dose,2nd dose,
covid=[
    [1,"ernakulam",34000,2000,23000,20000,2000],
    [2,"idukki",14000,3000,25000,30000,1000],
    [3,"trissur",24000,4000,33000,24000,2500],
    [4,"pathanamthitta",20000,2000,45000,22000,1500],
    [5,"Kozhikkode",44000,5000,12000,21000,500],
    [6,"palakkad",12000,1000,20000,23000,3400],
    [7,"kottayam",27000,1500,27000,14000,1000],
    [8,"kollam",14000,2500,25000,18000,2700],
]


//district having highest +ve case

console.log(covid.reduce((a,b)=>a[2]>b[2]?a:b)[1]);
console.log("----------------------------------")

//district having  highest 1st dose vaccine
console.log(covid.reduce((a,b)=>a[5]>b[5]?a:b)[1])
 console.log("--------------------------------")

// //   lowest death rate
console.log(covid.reduce((a,b)=>a[3]<b[3]?a:b)[1])
console.log("-----------------------------------")

// //+ve case in descending order
covid.sort((a,b)=>b[2]-a[2]).forEach(d=>console.log(d[1],d[2]))
console.log("-----------------------------------------------")



// // is district with +ve case>15000

 console.log(covid.some(a=>a[2]>15000)?"yes":"No")
 console.log("--------------------------------------")
// //district with 1st dose vaccine in ascending order
 covid.sort((a,b)=>a[5]-b[5]).forEach(d=>console.log(d[1],d[5]));
console.log("-------------------------------------------------------")

//print thrissur details

 console.log(covid.find(d=>d[1]=='trissur'))
console.log("-----------------------------------------------------")

// //print total number of +ve cases
console.log(covid.reduce((sum,dis)=>sum+dis[2],0))
console.log("----------------------------------------------------")

// //total num of curred case
 console.log(covid.reduce((sum,dis)=>sum+dis[4],0))
 console.log("------------------------------------------")


// //print curred case in idukki
console.log(covid.find(dis=>dis[1]=="idukki")[4])