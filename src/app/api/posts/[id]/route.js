import { NextResponse } from 'next/server'
import connect from "@/utils/db"
import Post from "@/models/Post"

export async function GET(request,{params}) {
    const {id}=params
    try{
    await connect()
   const post=await Post.findById(id)
   return new NextResponse( JSON.stringify(post), { status: 200 })
  }
  catch (error) {
    return new NextResponse( 'Error in fetching posts' +error, { status: 500 })

  }
}
