import { getPokeData } from "../giveData";
import { pokeDataType } from "../giveData";
export default async function RenderPokemonCard({params}:{params:Promise<{name:string}>}) {
    let {name}=await params;
    const data:pokeDataType|null=await getPokeData(name);
    if(data===null){
        return (
            <div>Unable to load</div>
        )
    }
    return (
        <div>
            <p>ID: {data.id}</p>
            <p>{data.name}</p>
            <p>{data.height*10+"cm"}</p>
            <p>{data.weight/10+"kg"}</p>
            <img src={`${data.front_default}`} alt="" />
        </div>  )  }










