import locationIcon from "../../assets/icons/location-icon.png"
import phoneIcon from "../../assets/icons/phone-icon.png"

export const contact = [
  {
    id: 1,
    icon: (
      <img
        src={phoneIcon}
        className="xs:w-[25px] xs:h-[25px] md:w-[40px] md:h-[40px] object-contain"
      />
    ),
    url: "tel:+50222264600",
    value: "+502 2226-4600",
  },
  {
    id: 2,
    icon: (
      <img
        src={locationIcon}
        className="xs:w-[25px] xs:h-[25px] md:w-[40px] md:h-[40px] object-contain"
      />
    ),
    url: "https://www.waze.com/es-419/live-map/directions?to=ll.14.638746%2C-90.558522",
    value: "14 Calle 34-24 Zona 7",
  },
]
