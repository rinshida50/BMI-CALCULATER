weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Eranakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Eranakulam',temp:31}



]
// print districts with its highest temperature
// output{'Thrissur:32,Kottayam:30,Palakkad:34,Eranakulam:33}

output={}
weatherData.forEach(dist=>{
    const district=dist['district']    //thrissur
    const currentTemp=dist['temp']   //29
    if(output.hasOwnProperty(district)){
        const prevTemp=output[district]
        if(currentTemp>prevTemp){
            output[district]=currentTemp
        }
        else{
            output[district]=prevTemp
        }
    }
    else{
        output[district]=currentTemp
    }
})
console.log(output);
