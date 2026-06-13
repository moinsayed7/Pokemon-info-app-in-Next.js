import Link from "next/link";
import {posts} from "./posts";

type Post={
    title:string;
    slug:string
}



function RenderTitles({data}:{data:Post[]}){

    let each=data.map((ele, ind)=>{
        return (

            <Link key={ind} href={`/blog/${ele.slug}`}>{ele.title}</Link>

        )
    })

    return (
        <>{each}</>
    )
}






export default function Blog(){
    
    return (
        <div>
        <h1>Blog Page</h1>

        <RenderTitles data={posts}/>

        </div>
    )
}




