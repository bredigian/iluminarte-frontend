import { Link } from "react-router-dom"
import React from "react"
import fbIcon from "../../assets/images/icons/fb-icon.png"
import igIcon from "../../assets/images/icons/ig-icon.png"
import pIcon from "../../assets/images/icons/pinterest-icon.png"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"
import wazeIcon from "../../assets/images/icons/waze-icon.png"

const Footer = () => {
  const sections = [
    {
      title: "Inicio",
      route: "/",
    },
    {
      title: "Nosotros",
      route: "/about",
    },
    {
      title: "Productos",
      route: "/products",
    },
    {
      title: "Blog",
      route: "/blog",
    },
    {
      title: "Contacto",
      route: "/contact",
    },
  ]
  const social = [
    {
      logo: <img className="w-0-3" src={fbIcon} alt="facebook" />,
      link: "https://www.facebook.com/VelasJesusNazareno",
    },
    {
      logo: <img className="w-0-3" src={igIcon} alt="instagram" />,
      link: "https://www.instagram.com/iluminartegt/",
    },
    {
      logo: <img className="w-0-3" src={pIcon} alt="pinterest" />,
      link: "https://www.pinterest.com/Iluminartegt/?invite_code=b2dc96b8d1f6413a98a11710ac3a5299&sender=1128785231512415350",
    },
    {
      logo: <img className="w-0-3" src={wazeIcon} alt="waze" />,
      link: "https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522",
    },
  ]
  return (
    <footer className="footer bg-primary flex items-center justify-evenly w-full py-xxl">
      <div className="footer-logo flex flex-col items-start gap-8 max-w-7">
        <div className="footer-logo__img w-4-5">
          <img className="w-full" src={svgLogo} alt="logo" />
        </div>
        <p className="text-white text-3xl">
          Detrás de nuestras marcas, hay mucho más que velas, hay historia y
          tradición, y el deseo de iluminar cada momento de tu vida.
        </p>
      </div>
      <ul className="footer-sections flex flex-col items-start gap-8">
        {sections.map((section, index) => {
          return (
            <li className="footer-sections__item text-white font-bold text-2xl">
              <Link to={section.route}>{section.title}</Link>
            </li>
          )
        })}
      </ul>
      <aside className="footer-contact flex flex-col items-start gap-4">
        <div className="footer-contact__info flex flex-col items-start">
          <a
            className="text-white text-2xl"
            href="tel:+50222264600"
            target="_blank"
          >{`(tel) +502 2226-46000`}</a>
          <a
            className="text-white text-2xl"
            href="https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522"
            target="_blank"
          >{`(Ubicación) 14 Calle 34-24 Zona 7`}</a>
        </div>
        <ul className="footer-contact__social flex items-center gap-4">
          {social.map((s, index) => {
            return (
              <li key={index} className="footer-contact__social-item">
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
