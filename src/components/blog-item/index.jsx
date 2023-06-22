import { ChevronRightIcon } from "@heroicons/react/24/outline"
import React from "react"

const BlogItem = ({ data, openModal, showComplete }) => {
  const maxLength = 175
  const description = data?.DESCRIPCION
  const truncatedDescription =
    description?.length > maxLength
      ? description?.substring(0, maxLength) + "..."
      : description
  const DESCRIPCION_FORMATED = data?.DESCRIPCION.replace(/\\n/g, "\n")
  return (
    <div
      className={`blog-container__item w-[320px] h-[480px] bg-tertiary-lighter flex flex-col items-center ${
        !showComplete ? "overflow-auto" : "overflow-hidden"
      } rounded-[33px] shadow-xl`}
    >
      <div className="blog-container__item-img w-full">
        <img className="w-full" src={data?.IMG} alt="" />
      </div>
      <div className="blog-container__item-information h-full flex flex-col items-start gap-1 p-4">
        <h2 className="font-bold text-dark text-lg">{data?.TITULO}</h2>
        {!showComplete ? (
          <p className="text-dark text-xs">{truncatedDescription}</p>
        ) : (
          <p className="text-dark text-xs h-[110px] overflow-auto">
            {DESCRIPCION_FORMATED}
          </p>
        )}
        {!showComplete && (
          <button
            onClick={openModal}
            className="flex flex-grow items-end gap-2 w-full text-dark font-bold"
          >
            <ChevronRightIcon width={15} />
            <p className="text-xs">Leer más</p>
          </button>
        )}
      </div>
    </div>
  )
}

export default BlogItem
