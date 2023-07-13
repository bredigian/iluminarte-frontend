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
  const DESCRIPCION_FORMATED = data?.DESCRIPCION.replace(/\\n/g, "\n")
  return (
    <div className="blog-container__item-detail flex xs:flex-col-reverse sm:flex-row xs:w-screen xs:m-auto sm:m-0 sm:w-full xs:h-screen sm:h-full bg-white">
      <div className="information xs:w-full sm:w-[60%] xs:h-full sm:h-full flex flex-col items-start gap-4 xs:py-4 sm:py-8 xs:px-8 sm:px-16">
        <button
          onClick={closeModal}
          className="w-full flex items-center justify-start gap-1 text-dark"
        >
          <ChevronLeftIcon width={15} />
          <p className="xs:text-xs sm:text-sm">Regresar</p>
        </button>
        <h1 className="font-bold xs:text-sm sm:text-xl lg:text-3xl">
          {data?.TITULO}
        </h1>
        <p className="xs:text-xs xs:max-w-full sm:text-xs 2xxl:text-sm max-h-[500px] overflow-auto">
          {DESCRIPCION_FORMATED}
        </p>
        <div className="flex items-end justify-between flex-grow w-full">
          {slideIndex > 0 && (
            <button
              onClick={prevPost}
              className="w-fit flex items-center justify-start gap-1 font-bold text-dark"
            >
              <ChevronLeftIcon width={15} />
              <p className="text-dark italic xs:text-[9px] sm:text-sm p-1">
                Leer articulo anterior
              </p>
            </button>
          )}
          {slideIndex !== slideMax && (
            <button
              onClick={nextPost}
              className="w-fit flex items-center justify-end gap-1 font-bold text-dark p-1"
            >
              <p className="text-dark italic xs:text-[9px] sm:text-sm">
                Leer siguiente articulo
              </p>
              <ChevronRightIcon width={15} />
            </button>
          )}
        </div>
      </div>
      <div className="img xs:w-full xs:h-[250px] object-cover sm:w-[40%] sm:h-full">
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
