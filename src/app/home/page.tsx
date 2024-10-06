"use client"

import React from 'react'
import { useGetPosts } from '../../Requests/postRequest'
import LoadingComponent from '../../components/LoadingComponent.tsx/LoadingComponent';
import PostComponent from '../../components/PostComponent/PostComponent';
import { PostInterface } from '../../models/posts.model';

const HomePage = () => {
    const { posts, isLoading, isValidating} = useGetPosts();
    const postlist = posts?.posts;
  return (
    <div>
        {
            isValidating || isLoading && (
                <LoadingComponent />
            )
        }
        <div className='grid grid-flow-row grid-cols-4 gap-5'>
        {
            postlist?.map((post: PostInterface) => (
                <div key={post.id}>
                    <PostComponent {...post} />
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default HomePage