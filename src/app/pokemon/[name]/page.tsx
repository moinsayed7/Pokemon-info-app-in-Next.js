import { getPokeData } from "../giveData";
import { pokeDataType } from "../giveData";
import Link from "next/link";

export default async function RenderPokemonCard({params}:{params:Promise<{name:string}>}) {
    let {name}=await params;
    const data:pokeDataType|null=await getPokeData(name);
    if(data===null){
        return (
            <div>Unable to load</div>
        )
    }
    return (

        <>
            
        
        <Link href={"/pokemon"} className="my-5 ml-4 text-blue-500 underline mb-4">← ⟵ Back to Pokemon List</Link>

        <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center bg-blue-100 py-2 px-4 text-center rounded-lg w-60">
            <p className="py-2  font-bold text-2xl">ID: {data.id}</p>
            <p className="text-2xl py-2">{data.name}</p>
            <p className="py-2 text-xl">{data.height*10+"cm"}</p>
            <p className="py-2 text-xl">{data.weight/10+"kg"}</p>
            <img className="h-36 " src={`${data.front_default}`} alt="" />
            </div>
        </div>  
        </>
        )  }










