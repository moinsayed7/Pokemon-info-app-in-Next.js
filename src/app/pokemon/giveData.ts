export type pokeDataType={
    id:number;
    name:string;
    height:number;
    weight:number;
    front_default:string;
}

export async function getPokeData(inp:string):Promise<pokeDataType|null> {
    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${inp}`);
        if(!response.ok){
            return null
        };
        let data=await response.json();
        let {id, name, height, weight,sprites:{front_default}}=data;

        return {id, name, height ,weight ,front_default}

}
    catch(err)
    {return null}}






