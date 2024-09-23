import { API_URL, contact } from "../../constants"

import React from "react"
import { social } from "../../constants"
import { toast } from "sonner"
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()

  const onSubmit = async (values) => {
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await res.json()

      if (!res.ok) {
        console.log(data)
        throw new Error(data.message)
      }

      const { message } = data
      toast.success(message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section className="contact flex flex-col items-center w-full">
      <div className="flex xs:flex-col-reverse md:flex-row items-center md:justify-center xs:gap-16 md:gap-32 bg-contact-section bg-no-repeat bg-auto bg-center xs:w-full p-8">
        <div className="contact-icons flex flex-col items-center xs:gap-8 md:gap-16">
          {contact.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                href={item.url}
                className="contact-icons__item flex flex-col justify-end items-center gap-8 p-4 rounded-2xl bg-[#00000095] xs:w-[160px] md:w-[200px] xs:h-[70px] md:h-[80px]"
              >
                <div
                  className={`contact-icons__item-icon absolute ${
                    item.id === 1 ? "bg-[#e8cdd8]" : "bg-[#efdbc7]"
                  } rounded-full xs:-translate-y-[30px] md:-translate-y-[40px] p-2`}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold xs:text-xs md:text-base">
                  {item.value}
                </h3>
              </a>
            )
          })}
        </div>
        <div className="contact-form flex flex-col items-center gap-8 xs:w-full md:max-w-[600px]">
          <h1 className="xs:text-4xl md:text-6xl text-white font-bold font-serif">
            Contáctanos
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-4 gap-6 xs:w-[85%] md:w-full"
          >
            <div className="col-span-full flex flex-col gap-2">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre es requerido.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe contener al menos 4 caracteres.",
                  },
                })}
                placeholder="Nombre completo"
                className="w-full bg-[#ffffff65] rounded-full text-sm outline-none px-4 py-2 text-white placeholder:text-white"
              />
              {errors?.name && (
                <small className="text-white">{errors.name?.message}</small>
              )}
            </div>
            <div className="col-span-full flex flex-col gap-2 lg:col-span-2">
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "El teléfono es requerido.",
                  },
                })}
                type="number"
                placeholder="Teléfono"
                className="w-full bg-[#ffffff65] rounded-full text-sm outline-none px-4 py-2 text-white placeholder:text-white"
              />
              {errors?.phone && (
                <small className="text-white">{errors.phone?.message}</small>
              )}
            </div>
            <div className="col-span-full flex flex-col gap-2 lg:col-span-2">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "El email es requerido.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El email no es válido.",
                  },
                })}
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-[#ffffff65] rounded-full text-sm outline-none px-4 py-2 text-white placeholder:text-white"
              />
              {errors?.email && (
                <small className="text-white">{errors.email?.message}</small>
              )}
            </div>
            <div className="col-span-full flex flex-col gap-2">
              <textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "El mensaje es requerido.",
                  },
                  minLength: {
                    value: 10,
                    message: "Debe contener al menos 10 caracteres.",
                  },
                })}
                placeholder="Mensaje"
                className="resize-none w-full bg-[#ffffff65] rounded-xl text-sm outline-none px-4 text-white placeholder:text-white py-4 h-48"
              />
              {errors?.phone && (
                <small className="text-white">{errors.phone?.message}</small>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="bg-secondary place-self-center md:place-self-end md:col-span-full xs:col-span-4 text-white xs:text-base md:text-lg font-bold xs:px-16 md:px-20 py-1 rounded-full hover:bg-white hover:text-secondary duration-150 ease-in-out"
              type="submit"
            >
              {!isSubmitting ? "Enviar" : "Enviando..."}
            </button>
          </form>
        </div>
      </div>
      <div className="contact-social w-full flex items-center justify-center gap-8 p-8">
        <h1 className="text-dark xs:text-xl md:text-4xl text-center font-bold">
          Síguenos en
        </h1>
        <div className="contact-social__container flex items-start gap-4 border-2 p-4 rounded-full border-[#a87061]">
          {social.map((s) => {
            return (
              <li key={s.id} className="footer-contact__social-item list-none">
                <a href={s.link} target="_blank">
                  {s.logo}
                </a>
              </li>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
