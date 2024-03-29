import { NextResponse } from 'next/server'
import connect from "@/utils/db"
import Post from "@/models/Post"

export async function GET(request) {
  const url=new URL(request.url)
  const username=url.searchParams.get("username")
  try {
    await connect()
   const posts=await Post.find(username&&{username})
   
   return new NextResponse( JSON.stringify(posts), { status: 200 })
  }
  catch (error) {
    return new NextResponse( 'Error in fetching posts' +error, { status: 500 })

  }
}

export async function POST(request) {
const body=await request.json()
const newPost=new Post(body)
  try {
    await connect()
  await newPost.save()
  
   return new NextResponse("Post has been created",{status:201})
   
  }
  catch (error) {
    return new NextResponse( 'Error in fetching posts' +error, { status: 500 })

  }
}