import React, { useState } from "react"

const ProductItem = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(data.IMAGENES[0])
  const handleSelectedImage = (image) => {
    setSelectedImage(image)
  }
  return (
    <div className="item flex flex-col items-start gap-4 w-3 h-5 justify-between border-2 border-tertiary p-8">
      <h3 className="font-serif text-dark text-center font-bold  w-full">
        {data.NOMBRE}
      </h3>
      <img
        style={{ backgroundColor: "transparent" }}
        src={selectedImage.url}
        alt={`Vela de color ${selectedImage.color}, imagen ${selectedImage.url}`}
      />
      <div className="item-colors flex items-center flex-wrap gap-4">
        {data.IMAGENES.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => handleSelectedImage(image)}
              className={
                "w-[20px] h-[20px] rounded-full border-[1px] border-dark cursor-pointer"
              }
              style={
                image.color !== "multicolor"
                  ? { backgroundColor: image.color }
                  : {
                      backgroundColor: "black",
                    }
              }
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductItem
