import { BlogForm, BlogItem, Input, Modal } from "../../components"
import React, { useEffect, useState } from "react"

import { XMarkIcon } from "@heroicons/react/24/solid"
import { useBlogStore } from "../../store"

const AdministrationBlog = () => {
  const { blog, getBlog } = useBlogStore()
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(!showModal)
  }
  useEffect(() => {
    getBlog()
  }, [])
  return (
    <section className="adminstration-blog flex items-center w-full p-8">
      <div className="administration-blog__items flex flex-col w-full">
        <div className="administration-blog__items-header flex gap-24 items-start justify-between w-full px-8">
          <h1 className="font-serif text-3xl text-dark flex-grow">Blog</h1>
          <button
            type="button"
            onClick={handleModal}
            className="font-serif text-xl text-dark hover:underline"
          >
            Agregar post
          </button>
        </div>
        <div className="administration-blog__items-container justify-center flex flex-wrap gap-4 p-8">
          {blog?.map((post) => {
            return <BlogItem key={post.ID} data={post} showComplete={true} />
          })}
        </div>
      </div>
      <Modal show={showModal}>
        <div className="modal-addProduct flex flex-col items-center gap-4 bg-white p-8">
          <div className="flex items-start justify-between w-full p-2">
            <h1 className="font-serif text-3xl text-dark">Agregar post</h1>
            <button type="button" onClick={handleModal}>
              <XMarkIcon width={40} color="#292929" />
            </button>
          </div>
          <BlogForm handleModal={handleModal} />
        </div>
      </Modal>
    </section>
  )
}

export default AdministrationBlog
