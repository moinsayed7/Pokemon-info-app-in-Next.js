
import Link from "next/link";


async function extractData():Promise<string[]|null> {

    try{
        let response=await fetch(`http://localhost:3000/api/pokemon`);
        if(!response.ok){
            return null
        }
        let data=await response.json()
        return data.names
    }
    catch (err){
        return null
    }
}


export default async function PokePage(){

    let data=await extractData();

    
    if(data===null){
        return (
            <div>Pokemon not found</div>
        )
    }


    let x=data.map((ele:string)=>{       
        return (
            
        

        <Link href={`/pokemon/${ele}/` }  key={ele}>
            <div className="bg-black rounded-lg p-4 shadow hover:shadow-lg transition text-center capitalize">
                <p className="text-white font-bold ">{ele}</p>
            </div>
        </Link>

        )
    })
    return (
        <div className="grid grid-cols-3 gap-4 p-8">{x}</div>
    )
}



