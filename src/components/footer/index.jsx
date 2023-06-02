import { Link } from "react-router-dom"
import React from "react"
import fbIcon from "../../assets/images/icons/fb-icon.png"
import igIcon from "../../assets/images/icons/ig-icon.png"
import pIcon from "../../assets/images/icons/pinterest-icon.png"
import { sections } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"
import wazeIcon from "../../assets/images/icons/waze-icon.png"

const Footer = () => {
  const social = [
    {
      id: 1,
      logo: <img className="xs:w-0-2 xl:w-0-3" src={fbIcon} alt="facebook" />,
      link: "https://www.facebook.com/VelasJesusNazareno",
    },
    {
      id: 2,
      logo: <img className="xs:w-0-2 xl:w-0-3" src={igIcon} alt="instagram" />,
      link: "https://www.instagram.com/iluminartegt/",
    },
    {
      id: 3,
      logo: <img className="xs:w-0-2 xl:w-0-3" src={pIcon} alt="pinterest" />,
      link: "https://www.pinterest.com/Iluminartegt/?invite_code=b2dc96b8d1f6413a98a11710ac3a5299&sender=1128785231512415350",
    },
    {
      id: 4,
      logo: <img className="xs:w-0-2 xl:w-0-3" src={wazeIcon} alt="waze" />,
      link: "https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522",
    },
  ]
  return (
    <footer className="footer bg-primary flex xs:flex-col xs:items-start xs:gap-8 lg:flex-row lg:items-center justify-evenly w-full xs:py-10 xs:px-4 xl:py-xxl">
      <div className="footer-logo flex flex-col items-start gap-8 max-w-7">
        <div className="footer-logo__img xs:w-3 xl:w-4-5">
          <img className="w-full" src={svgLogo} alt="logo" />
        </div>
        <p className="text-white xs:text-base xl:text-3xl">
          Detrás de nuestras marcas, hay mucho más que velas, hay historia y
          tradición, y el deseo de iluminar cada momento de tu vida.
        </p>
      </div>
      <ul className="footer-sections flex flex-col items-start xs:gap-4 xl:gap-8">
        {sections.map((section) => {
          return (
            <li
              key={section.id}
              className="footer-sections__item text-white font-bold xs:text-base xl:text-2xl"
            >
              <Link to={section.path}>{section.title}</Link>
            </li>
          )
        })}
      </ul>
      <aside className="footer-contact flex flex-col items-start gap-4">
        <div className="footer-contact__info flex flex-col items-start">
          <a
            className="text-white xs:text-xs lg:text-base xl:text-2xl"
            href="tel:+50222264600"
            target="_blank"
          >{`(Tel) +502 2226-46000`}</a>
          <a
            className="text-white xs:text-xs lg:text-base xl:text-2xl"
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
