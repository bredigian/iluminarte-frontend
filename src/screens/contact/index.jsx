import { API_URL, contact } from "../../constants"

import { Input } from "../../components"
import React from "react"
import { social } from "../../constants"
import { toast } from "sonner"
import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    if (e.target.id === "name") setName(e.target.value)
    if (e.target.id === "email") setEmail(e.target.value)
    if (e.target.id === "phone") setPhone(e.target.value)
    if (e.target.id === "message") setMessage(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const dataForm = {
      name,
      email,
      phone,
      message,
    }
    try {
      const result = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      })
      if (!result.ok) {
        throw new Error(result.json())
      }
      const { message } = await result.json()
      toast.success(message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fields = [
    {
      id: "name",
      type: "text",
      placeholder: "Nombre completo",
      name: "name",
      value: name,
    },
    {
      id: "phone",
      type: "tel",
      placeholder: "Teléfono",
      name: "phone",
      value: phone,
    },
    {
      id: "email",
      type: "email",
      placeholder: "Correo electrónico",
      name: "email",
      value: email,
    },
    {
      id: "message",
      type: "textarea",
      placeholder: "Mensaje",
      name: "message",
      value: message,
    },
  ]
  return (
    <section className="contact flex flex-col items-center">
      <div className="flex items-center justify-center gap-32 bg-contact-section bg-no-repeat bg-auto bg-center w-full p-8">
        <div className="contact-icons flex flex-col items-center gap-16">
          {contact.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                href={item.url}
                className="contact-icons__item flex flex-col justify-end items-center gap-8 p-4 rounded-2xl bg-[#00000095] w-[200px] h-[80px]"
              >
                <div
                  className={`contact-icons__item-icon absolute ${
                    item.id === 1 ? "bg-[#e8cdd8]" : "bg-[#efdbc7]"
                  } rounded-full -translate-y-[40px] p-2`}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base">{item.value}</h3>
              </a>
            )
          })}
        </div>
        <div className="contact-form flex flex-col items-center gap-8">
          <h1 className="text-6xl text-white font-bold font-serif">
            Contáctanos
          </h1>
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-3 gap-8 max-w-[600px]"
          >
            {fields.map((field) => {
              return (
                <Input
                  key={field.id + field.name}
                  styles={`placeholder:text-white text-white ${
                    field.id === "message" && "min-h-[200px]"
                  }`}
                  data={field}
                  value={field.value}
                  id={field.id}
                  onChangeValue={(e) => handleChange(e)}
                />
              )
            })}
            <button
              className="bg-secondary w-fit place-self-center col-span-3 text-white text-lg font-bold px-20 py-1 rounded-full hover:bg-white hover:text-secondary duration-150 ease-in-out"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="contact-social w-full flex items-center justify-center gap-8 p-8">
        <h1 className="text-dark text-4xl font-bold">Síguenos en</h1>
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
