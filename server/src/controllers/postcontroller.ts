import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { uploadToS3 } from "../utils/s3Uploader"; 

const prisma = new PrismaClient();


export const uploadMiddleware = uploadToS3.single("image");


export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, body, userId, groupId } = req.body;
    const image = req.file ? (req.file as any).location : null; 

    if (!title || !body || !userId) {
      res.status(400).json({ error: "Title, body, and userId are required." });
      return;
    }


    const post = await prisma.post.create({
      data: {
        title,
        body,
        userId: parseInt(userId),
        groupId: groupId ? parseInt(groupId) : null,
        image,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post with S3:", error);
    res.status(500).json({ error: "Failed to create post." });
  }
};

export const getPostsByYouthMovement = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { youthMovementId } = req.params;

  if (!youthMovementId) {
    res.status(400).json({ error: "Youth movement ID is required." });
    return;
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        group: {
          youthMovementId: Number(youthMovementId),
        },
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { title, body } = req.body
  const image = req.file ? (req.file as any).location : null

  try {
    const existingPost = await prisma.post.findUnique({ where: { id: Number(id) } })
    if (!existingPost) {
      res.status(404).json({ error: "Post not found" })
      return
    }

    const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        body,
        image: image || existingPost.image,
      },
    })

    res.status(200).json(updatedPost)
  } catch (error) {
    console.error("Error updating post:", error)
    res.status(500).json({ error: "Failed to update post" })
  }
}


export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.post.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
};