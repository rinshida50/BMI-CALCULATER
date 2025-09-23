accounts=[
    {
       acno:1000,ac_type:'savings',balance:45000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1001,ac_type:'current',balance:30000,transaction:[
           {
               to:1000,amount:1000,msg:'grossary',mode:'gpay'
           },
           {
               to:1002,amount:7000,msg:'gift',mode:'phonePay'
           },
           {
               to:1003,amount:10000,msg:'emi',mode:'neft'
           },
       ]
   
    },
    {
       acno:1002,ac_type:'fixed',balance:100000,transaction:[
           {
               to:1000,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1001,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1003,ac_type:'savings',balance:30000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'n ef'
           },
           {
               to:1000,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    
   ]

   

// 1.print total number of accounts
console.log("-------number of ac-----------");
console.log(accounts.length);

// 2.print acount number whose account type is savings
console.log("--------savings ac----------");
let type=accounts.filter(item=>item.ac_type=='savings').forEach(item=>console.log(item.acno));


// 3.print balance of account number 1000
console.log("---------balance of ac nmbr---------");
console.log(accounts.find(item=>item.acno== '1000').balance);


// 4.print all gpay transactions
console.log("------gpay--------");
accounts.forEach(acc=>{
    acc.transaction.forEach(tran=>{
        if(tran.mode=='gpay'){
            console.log(tran);
            
        }

    })
})



// 5.print all transactions whose amount>5000
console.log("-------->5000----------");
accounts.forEach(acc=>{
    acc.transaction.forEach(trans=>{
        if(trans.amount>=5000){
            console.log(trans);
            
        }
    })
})


// 6.print credit transaction of account 1002
console.log("--------credit transactions----------");
accounts.forEach(acc=>{
    acc.transaction.forEach(trans=>{
        if(trans.to==1002){
            console.log(trans);
            
        }
    })
})


// 7.print total credit amount to the account 1002
console.log("--------credit amount--------");



// 8.print debit transaction of account 1002
console.log("--------debit transaction----------");

debt=accounts.find(a=>a.acno==1002).transaction
console.log(debt);


// 9.print total debit amount from the account 1002
console.log("-------debit amount-----------");

totaldebit=debt.reduce((a,b)=>a+b.amount,0)
console.log(totaldebit);




//10. print transaction history of 1002
console.log("--------transaction history----------");

let newArr=[]
newArr.push()



    
            

//11.current balance of 1002
console.log("-------current balance-----------");
console.log(accounts.find(item=>item.acno== '1002').balance);


//12. print highest  balance account details
console.log("--------highest balance----------");











