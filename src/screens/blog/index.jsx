import { BlogDetail, BlogItem, Modal } from "../../components"
import React, { useState } from "react"

import Carousel from "nuka-carousel"
import { Pulsar } from "@uiball/loaders"
import { useBlogStore } from "../../store"
import { useEffect } from "react"

const Blog = () => {
  const { blog, getBlog } = useBlogStore()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const indexMax = blog?.length - 1
  const [slideIndex, setSlideIndex] = useState(0)

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
  }

  const handleNextSlide = () => {
    if (slideIndex < indexMax) {
      setSlideIndex(slideIndex + 1)
    }
  }

  const openModal = (index) => {
    setModalIsOpen(true)
    setSlideIndex(index)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    getBlog()
  }, [])
  return (
    <section className="blog flex flex-col items-center">
      <div className="blog-header bg-blog-section bg-center bg-cover grid place-items-center h-2 w-full">
        <h1 className="text-white font-serif text-6xl font-bold ">
          Nuestro blog
        </h1>
      </div>
      <div className="blog-container flex items-center gap-12 flex-wrap p-8">
        {blog?.length > 0 ? (
          blog?.map((post, index) => {
            return (
              <BlogItem
                key={post.ID}
                data={post}
                openModal={() => openModal(index)}
              />
            )
          })
        ) : (
          <Pulsar color="#292929" size={50} />
        )}
      </div>
      <Modal show={modalIsOpen} width={"w-[820px]"}>
        <Carousel
          slideIndex={slideIndex}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          renderBottomCenterControls={false}
          renderTopCenterControls={false}
          speed={0}
          dragging={false}
          className="h-full"
        >
          {blog?.map((post) => {
            return (
              <BlogDetail
                key={post.ID}
                data={post}
                closeModal={closeModal}
                nextPost={handleNextSlide}
                prevPost={handlePrevSlide}
                slideIndex={slideIndex}
                slideMax={indexMax}
              />
            )
          })}
        </Carousel>
      </Modal>
    </section>
  )
}

export default Blog
