import { NextResponse } from "next/server";



export async function GET() {

    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);


    let data=await response.json();
    let names=data.results.map((ele:{name:string,url:string},ind:number)=>{
        return ele.name;
    })
    
    return NextResponse.json({names});
    }

    catch (err){
        return NextResponse.json({error: "Something went wrong"})
    }
    




}










