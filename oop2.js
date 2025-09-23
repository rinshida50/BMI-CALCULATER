class Bank{

accountDetails={

1000: {acno: 1000, username: "uscrone", password: "userone", blance: 50000},
1001: {acno: 1001, username: "usertwo", password:"usertwo", blance:5000},
1002: {acno: 1002, username: "userthree", password: "userthree", blance: 10000},
1003: {acno:1003, username: "userfour", password: "userfour", blance:6000},
}



// validate account number function
validateAccount(acno){
    return  this. accountDetails.hasOwnProperty(acno)?true:false
}




//authenticate account function

authenticateAccount(acno,password){
    if (this.validateAccount(acno)){
        if(this.accountDetails[acno].password==password){
            console.log("authentication Successfull");
            
        }
        else{
            console.log("authentiacation failed invalid password");
            
        }

    }
    else{
        console.log("invalid account");
        
    }


}


// balance enquiry function
blanceEnquiry(acno){
    if(this.validateAccount(acno)){
        console.log(`Account ${acno}balance is ${this.accountDetails[acno].balance}`);
        
    }
    else{
        console.log("invalid account");
        
    }
}

// function for fund transfer

fundTransfer(fromaccno,toaccno,amount){
    if(this.validateAccount(fromaccno) && this.validateAccount(toaccno)){
        if(this.accountDetails[fromaccno].balance>=amount){

            console.log("--------before transaction------------");
            this.blanceEnquiry(fromaccno)
            this.blanceEnquiry(toaccno)
            this.accountDetails[fromaccno].balance-=amount
            this.accountDetails[toaccno].balance+=amount
            console.log("---------transation completed successfully----------");
            this.blanceEnquiry(fromaccno)
            this.blanceEnquiry(toaccno)
        }
        else{
            console.log("insufficient balance");
            
        }
       
       
    }
    else{
        console.log("invalid fromaccno/toaccno");
        
    }
}




}

const accNholder=new Bank();
//console.log (accNholder.validateAccount(1007)?`Valid Account`:`Invalid Account`);

//accNholder.authenticateAccount(1001,"usertwo")

//accNholder.blanceEnquiry(1002)

accNholder.fundTransfer(1000,1001,6000)





