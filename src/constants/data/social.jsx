import fbIcon from "../../assets/images/icons/fb-icon.png"
import igIcon from "../../assets/images/icons/ig-icon.png"
import pIcon from "../../assets/images/icons/pinterest-icon.png"
import wazeIcon from "../../assets/images/icons/waze-icon.png"

export const social = [
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
