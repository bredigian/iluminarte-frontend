import { BsFacebook, BsInstagram } from "react-icons/bs"

import { FaWaze } from "react-icons/fa"
import { ImPinterest2 } from "react-icons/im"

export const social = [
  {
    id: 1,
    logo: (
      <BsFacebook className="xs:text-[30px] sm:text-[40px]" color="#a87061" />
    ),
    link: "https://www.facebook.com/VelasJesusNazareno",
  },
  {
    id: 2,
    logo: (
      <BsInstagram className="xs:text-[30px] sm:text-[40px]" color="#a87061" />
    ),
    link: "https://www.instagram.com/iluminartegt/",
  },
  {
    id: 3,
    logo: (
      <ImPinterest2 className="xs:text-[30px] sm:text-[40px]" color="#a87061" />
    ),
    link: "https://www.pinterest.com/Iluminartegt/?invite_code=b2dc96b8d1f6413a98a11710ac3a5299&sender=1128785231512415350",
  },
  {
    id: 4,
    logo: <FaWaze className="xs:text-[30px] sm:text-[40px]" color="#a87061" />,
    link: "https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522",
  },
]
