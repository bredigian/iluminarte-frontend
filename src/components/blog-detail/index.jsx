import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

import React from "react"

const BlogDetail = ({
  data,
  closeModal,
  nextPost,
  prevPost,
  slideIndex,
  slideMax,
}) => {
  return (
    <div className="blog-container__item-detail flex w-full h-full bg-white">
      <div className="information w-[60%] h-full flex flex-col items-start gap-4 py-8 px-16">
        <button
          onClick={closeModal}
          className="w-full flex items-center justify-start gap-1 text-dark"
        >
          <ChevronLeftIcon width={15} />
          <p className="text-sm">Regresar</p>
        </button>
        <h1 className="font-bold text-3xl">{data?.TITULO}</h1>
        <p className="sm:text-[10px] 2xxl:text-xs">{data?.DESCRIPCION}</p>
        <div className="flex items-end justify-between flex-grow w-full">
          {slideIndex > 0 && (
            <button
              onClick={prevPost}
              className="w-fit flex items-center justify-start gap-1 font-bold text-dark"
            >
              <ChevronLeftIcon width={15} />
              <p className="text-dark italic text-sm">Leer articulo anterior</p>
            </button>
          )}
          {slideIndex !== slideMax && (
            <button
              onClick={nextPost}
              className="w-fit flex items-center justify-end gap-1 font-bold text-dark"
            >
              <p className="text-dark italic text-sm">
                Leer siguiente articulo
              </p>
              <ChevronRightIcon width={15} />
            </button>
          )}
        </div>
      </div>
      <div className="img w-[40%] h-full">
        <img
          className="w-full h-full object-cover object-center"
          src={data?.IMG_DETAIL}
          alt={`Imagen de posteo ${data?.IMG_DETAIL}`}
        />
      </div>
    </div>
  )
}

export default BlogDetail
