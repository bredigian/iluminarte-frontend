import { Input } from "../../components"
import React from "react"
import { contact } from "../../constants"
import { social } from "../../constants"

const Contact = () => {
  const fields = [
    {
      id: 1,
      type: "text",
      placeholder: "Nombre completo",
    },
    {
      id: 2,
      type: "tel",
      placeholder: "Teléfono",
    },
    {
      id: 3,
      type: "email",
      placeholder: "Correo electrónico",
    },
    {
      id: 4,
      type: "textarea",
      placeholder: "Mensaje",
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
          <form className="grid grid-cols-3 gap-8 max-w-[600px]">
            {fields.map((field) => {
              return <Input data={field} />
            })}
          </form>
          <button
            className="bg-secondary text-white text-lg font-bold px-20 py-1 rounded-full"
            type="submit"
          >
            Enviar
          </button>
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
