//print the pattern
input =[4,5,6]
output=[11,10,9]

output=[]
let sum=0
for(let num of input){
    sum+=num

}
for(let num of input ){
    output.push(sum-num)
}
console.log(output);

console.log("---------------");



// print all duplicate number


let duplicateArray=[10,29,40,20,10,11,29];
let duplicates=[];

for(let i=0;i<duplicateArray.length;i++){
    for(let j=i+1;j<duplicateArray.length;j++){
        if (duplicateArray[i]===duplicateArray[j]) {
            duplicates.push(duplicateArray[i])
            break
        }
    }
}
console.log("duplicate numbers are" ,duplicates);

console.log("---------------");


//print the pairs whose sum=7

pairSumArray=[2,3,4,5]

let pairSums = {};

for (let i = 0; i < pairSumArray.length; i++) {
    for (let j = i + 1; j < pairSumArray.length; j++) {
        if (pairSumArray[i]+pairSumArray[j]==7) {
            console.log(`pair ${pairSumArray[i]} , ${pairSumArray[j]}`);
            
        }
        let sum = pairSumArray[i] + pairSumArray[j];
        let pair = [pairSumArray[i], pairSumArray[j]];

    }
}

console.log("---------------");



//print all commmon numbers 
p=[10,22,12,20,30]
q=[11,20,21,30,31]

let common=[]
for(let n1 of p){
    for(let n2 of q){
        if(n1==n2){
            console.log([n1]);
            

        }
    }


    }




console.log("common numbers are:",common);

