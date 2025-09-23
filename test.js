//-------Giweaway--------

comments1=['nisha','arjun','nisha','vicky','arjun','meera']
//output: Vicky 
comments2=['alex','alex','sam','sam']
//output : no unique Commentor 

function findUniqueComentor(input){
    let users ={}
    for(let user of input){
       // if(users.hasOwnProperty(user)){
        //    users[user]+=1
        //}
        //else{
         //   users[user]=1
      //  }

      users[user]=(users[user]||0)+1
    }
    for(let user in users){
        if(users[user]==1){
            return user
            
        }
    }
    return 'no unique commentor'
    
}
console.log(findUniqueComentor(comments2));



//---------Card Game----------

moves1=['place Ace','place King','remove','place Queen']
//output : Queen
moves1=['remove','place Jack','remove','remove']
//output : no card left

function topCard(moves){
    let stack=[]
    for (let move of moves) {      //'place Ace'
       if(move.startsWith('place')){


            const card=move.split(" ")[1]
            stack.push(card)


        }else if (move=='remove' && stack.length>0){
            stack.pop()
        }


    }  
    return stack.length>0?stack[stack.length-1]: 'no card left'

}

console.log(topCard(moves1));






//find second largest number from the array
array=[3,1,5,5,2,4]

//find unique elements from the array 
arr=[1,5,5,6,6,3,2]
