import { posts } from "../posts";
export default async function BlogPost({ params }: {params: Promise<{slug:string}>}) {  
  const { slug } = await params;
  let post=posts.find((ele)=> ele.slug===slug)
  if(!post){
    return ( 
      <div>Post not found</div>
    )
  }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}