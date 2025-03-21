"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import PostCard from "@/components/cards/PostCard"
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile"
import styles from "@/styles/cards/AllPosts.module.css"

type Post = {
  id: number
  title: string
  body: string
  image?: string
  amountOfComments: number
  createdAt: string
  user: {
    id: number
    firstName: string
    lastName: string
  }
}

export default function AllPosts() {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  })

  const {
    data: posts,
    isLoading: isPostsLoading,
    error,
  } = useQuery({
    queryKey: ["posts", profile?.youthMovementId],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3001/api/posts/youthMovement/${profile?.youthMovementId}`
      )
      if (!res.ok) throw new Error("Failed to fetch posts")
      return res.json()
    },
    enabled: !!profile?.youthMovementId,
  })

  if (isProfileLoading || isPostsLoading)
    return <p className={styles.loading}>Loading posts...</p>

  if (error) return <p className={styles.error}>Error loading posts</p>

  return (
    <div className={styles.wrapper}>
      {posts?.length > 0 ? (
        posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
            createdAt={post.createdAt}
            amountOfComments={post.amountOfComments}
            likesCount={0} 
            currentUserId={profile?.id ?? 0}
            user={{
              id: post.user.id,
              firstName: post.user.firstName,
              lastName: post.user.lastName,
            }}
          />
        ))
      ) : (
        <p>Er zijn nog geen posts in deze jeugdbeweging.</p>
      )}
    </div>
  )
}
