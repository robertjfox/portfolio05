import avantstay from "./assets/avantstay"
import rentroom from "./assets/rentroom"
import cultivateFruits from "./assets/cultivateFruits"

const PROJECT_DATA = {
  avantstay: {
    title: "AvantStay",
    logo: avantstay.logo,
    photos: avantstay.photos,
    role: "Lead Frontend Engineer",
    dates: "September 2020 - Present",
    url: "https://avantstay.com",
    description: [
      "AvantStay is a hospitality company that offers a branded, consistent quality experience in the otherwise fragmented short-term rental industry.",
      "At AvantStay, I lead the development of our customer facing booking platform, responsible for over $25 million in annual revenue. I work with designers and product managers to scope new features. I also run the technical recruiting process for the frontend.",
    ],
    technologies: ["React", "Mobx", "TypeScript", "GraphQL"],
  },
  rentroom: {
    title: "RentRoom",
    logo: rentroom.logo,
    photos: rentroom.photos,
    role: "Fullstack Engineer",
    dates: "April 2020 - September 2020",
    url: "https://getrentroom.com",
    technologies: ["React", "Redux", "TypeScript", "Firebase"],
    description: [
      "Rentroom is the all-in-one platform designed to reduce the administrative burden of property businesses.",
      "My time at RentRoom was spent developing new features, and improving on existing features.",
    ],
  },
  cultivateFruits: {
    title: "Cultivate Fruits",
    logo: cultivateFruits.logo,
    role: "Developer & Designer",
    dates: "March 2020",
    url: "https://cultivateFruits.com",
    description: [
      "Cultivate Fruits is an online marketplace for exotic fruiting plants. It is the ecommerce footprint of a family farm based in Oregon.",
      "I built this project on the Shopify platform, designing all assets from scratch and injecting custom code where necessary.",
    ],
  },
}

export default PROJECT_DATA
