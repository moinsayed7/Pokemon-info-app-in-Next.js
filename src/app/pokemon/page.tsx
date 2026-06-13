
import Link from "next/link";


async function extractData():Promise<poke[]|null> {

    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
        if(!response.ok){
            return null
        }
        let data=await response.json()
        let {results}=data
        return results
    }
    catch (err){
        return null
    }
}
type poke={
    name:string;
    url:string;
}
export default async function PokePage(){

    let data=await extractData();

    
    if(data===null){
        return (
            <div>Pokemon not found</div>
        )
    }


    let x=data.map((ele:poke,ind:number)=>{       
        return (
            
        

        <Link href={`/pokemon/${ele.name}/` }  key={ele.name}>
            <div>{ele.name}</div>
        </Link>

        )
    })
    return (
        <div>{x}</div>
    )
}



