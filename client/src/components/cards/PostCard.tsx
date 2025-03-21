"use client"

import React, { useState } from "react"
import styles from '@/styles/cards/PostCard.module.css'
import { Heart, MessageCircle, MoreVertical, Trash2, Pencil } from "lucide-react"
import Image from "next/image"

type PostCardProps = {
  id: number
  title: string
  body: string
  createdAt: string
  user: { firstName: string; lastName: string; id: number }
  image?: string
  amountOfComments: number
  likesCount: number
  currentUserId: number
}

export default function PostCard({
  id,
  title,
  body,
  createdAt,
  user,
  image,
  amountOfComments,
  likesCount,
  currentUserId,
}: PostCardProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedBody, setEditedBody] = useState(body)
  const [newImageFile, setNewImageFile] = useState<File | null>(null)

  const formattedDate = new Date(createdAt).toLocaleDateString()
  const isAuthor = user?.id === currentUserId

  const handleDelete = async () => {
    const confirmed = window.confirm("Weet je zeker dat je deze post wilt verwijderen?")
    if (!confirmed) return

    try {
      await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: "DELETE",
      })
      window.location.reload()
    } catch (error) {
      console.error("❌ Error deleting post:", error)
    }
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", editedTitle)
    formData.append("body", editedBody)
    if (newImageFile) {
      formData.append("image", newImageFile)
    }

    try {
      await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: "PUT",
        body: formData,
      })
      setIsEditing(false)
      window.location.reload()
    } catch (error) {
      console.error("❌ Error editing post:", error)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>{title}</h3>
          <p className={styles.meta}>
            Gepost door <strong>{user.firstName} {user.lastName}</strong> op {formattedDate}
          </p>
        </div>

        {isAuthor && (
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
              <MoreVertical size={20} />
            </button>
            {menuOpen && (
              <div className={styles.menuOptions}>
                <button onClick={() => setIsEditing(true)}><Pencil size={16} /> Bewerken</button>
                <button onClick={handleDelete}><Trash2 size={16} /> Verwijderen</button>
              </div>
            )}
          </div>
        )}
      </div>

      {image && (
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}

      <p className={styles.body}>{body}</p>

      <div className={styles.footer}>
        <div className={styles.countContainer}><Heart size={16} /> {likesCount}</div>
        <div className={styles.countContainer}><MessageCircle size={16} /> {amountOfComments}</div>
      </div>

      {/* ✨ Edit Overlay Modal */}
      {isEditing && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>Post bewerken</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                className={styles.input}
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                className={styles.textarea}
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImageFile(e.target.files?.[0] || null)}
              />
              <div className={styles.modalActions}>
                <button type="submit">Opslaan</button>
                <button type="button" onClick={() => setIsEditing(false)}>Annuleer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
