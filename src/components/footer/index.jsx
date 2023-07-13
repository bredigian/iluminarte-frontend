import { Link } from "react-router-dom"
import React from "react"
import { sections } from "../../constants"
import { social } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_cafe.svg"
import { useUserStore } from "../../store"

const Footer = () => {
  const { token } = useUserStore()

  return (
    <footer className="footer bg-[#f4e5e1] flex xs:flex-col xs:items-center xs:gap-8 lg:items-start lg:flex-row lg:justify-evenly w-full xs:py-10 xs:px-4 xl:py-xl">
      <div className="footer-logo flex flex-col xs:w-full xs:items-center lg:items-start gap-8 max-w-4">
        <div className="footer-logo__img xs:w-[200px] xl:w-3">
          <img className="w-full" src={svgLogo} alt="logo" />
        </div>
        <p className="text-dark xs:text-center lg:text-start xs:text-sm xl:text-xl">
          Detrás de nuestras marcas, hay mucho más que velas, hay historia y
          tradición, y el deseo de iluminar cada momento de tu vida.
        </p>
        <div className="xs:hidden lg:flex flex-col items-start gap-2 mt-24">
          <a
            className="text-dark text-xs"
            href="https://wa.me/50240037831"
            target="_blank"
          >
            Designed with love by Azul Marino © 2023
          </a>
          <a
            className="text-dark text-xs"
            href="https://instagram.com/gianlucabredice"
            target="_blank"
          >
            Gianluca Bredice Developer
          </a>
        </div>
      </div>
      <ul className="footer-sections flex flex-col xs:w-full lg:w-fit xs:justify-center xs:items-center lg:items-start xs:gap-4 xl:gap-8">
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
      <aside className="footer-contact flex flex-col xs:w-full lg:w-max xs:justify-center xs:items-center lg:items-start gap-4">
        <div className="footer-contact__info flex flex-col xs:items-center xs:gap-1 lg:gap-0 lg:items-start">
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
      <div className="lg:hidden flex flex-col items-center w-full gap-2 mt-12">
        <a
          className="text-dark text-xs"
          href="https://wa.me/50240037831"
          target="_blank"
        >
          Designed with love by Azul Marino © 2023
        </a>
        <a
          className="text-dark text-xs"
          href="https://instagram.com/gianlucabredice"
          target="_blank"
        >
          Gianluca Bredice Developer
        </a>
      </div>
    </footer>
  )
}

export default Footer
