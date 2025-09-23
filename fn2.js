globalData = "globalData!!!"

function parent(){
    parentData = "parentData!!"
    console.log("Inside parent function");
    console.log(`Inside parent function globaldata=${globalData}and parentdata=${parentData}`);

        return function child(){

         childData = "childData!!"
        console.log("Inside child function");
        console.log(`Inside child function globaldata=${globalData}and childdata=${childData} and parentData=${parentData}`);


        }
   
}

child=parent()
child()