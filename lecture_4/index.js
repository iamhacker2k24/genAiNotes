import { GoogleGenAI, Type } from '@google/genai';
import readlineSync from "readline-sync"
import 'dotenv/config'



const ai = new GoogleGenAI({});


// this is  is a very importtant project like here i am creating a project of function call by ai 


//crypto function 

const cryptoCurrency = async (coin) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coin}`)
    const data = await response.json();
    console.log(data)
    return data;
}


//weather function 

const weatherInformation = async (city) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d6a3bcd7a43c4ed59c2155208252404&q=${city}&aqi=no`)
    const data = await response.json();
    return data;
}


// ow we need to define function informations ok
const  cryptoInfo={
    name:"cryptoCurrency",
    description:"we can give you  the current price or other  information rralted to crytocurrency  like bitcoin and ethereum ",
    parameters:{
        type:Type.OBJECT,
        properties:{
            coin:{
                type:Type.STRING,
                description:"It will be the name of crypto coin like bicoin , ethereum ect "
            }
        },
        require:['coin']
    }
}

// now weather info .

