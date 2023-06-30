import { Link } from "react-router-dom"
import React from "react"
import { sections } from "../../constants"
import { social } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_cafe.svg"
import { useUserStore } from "../../store"

const Footer = () => {
  const { token } = useUserStore()
  return (
    <footer className="footer bg-[#f4e5e1] flex xs:flex-col xs:items-start xs:gap-8 lg:flex-row lg:items-center justify-evenly w-full xs:py-10 xs:px-4 xl:py-xl">
      <div className="footer-logo flex flex-col items-start gap-8 max-w-4">
        <div className="footer-logo__img xs:w-3 xl:w-3">
          <img className="w-full" src={svgLogo} alt="logo" />
        </div>
        <p className="text-dark xs:text-base xl:text-xl">
          Detrás de nuestras marcas, hay mucho más que velas, hay historia y
          tradición, y el deseo de iluminar cada momento de tu vida.
        </p>
      </div>
      <ul className="footer-sections flex flex-col items-start xs:gap-4 xl:gap-8">
        {sections.map((section) => {
          if (token) {
            return (
              <li
                key={section.id}
                className="footer-sections__item text-dark hover:text-tertiary font-bold xs:text-base xl:text-lg"
              >
                <Link to={section.path}>{section.title}</Link>
              </li>
            )
          } else {
            if (section.title !== "Administrador") {
              return (
                <li
                  key={section.id}
                  className="footer-sections__item text-dark hover:text-tertiary font-bold xs:text-base xl:text-lg"
                >
                  <Link to={section.path}>{section.title}</Link>
                </li>
              )
            }
          }
        })}
      </ul>
      <aside className="footer-contact flex flex-col items-start gap-4">
        <div className="footer-contact__info flex flex-col items-start">
          <a
            className="text-dark xs:text-xs lg:text-sm xl:text-lg font-bold"
            href="tel:+50222264600"
            target="_blank"
          >{`(Tel) +502 2226-46000`}</a>
          <a
            className="text-dark xs:text-xs lg:text-sm xl:text-lg font-bold"
            href="https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522"
            target="_blank"
          >{`(Ubicación) 14 Calle 34-24 Zona 7`}</a>
        </div>
        <ul className="footer-contact__social flex items-center gap-4">
          {social.map((s) => {
            return (
              <li key={s.id} className="footer-contact__social-item">
                <a href={s.link} target="_blank">
                  {s.logo}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    </footer>
  )
}

export default Footer
