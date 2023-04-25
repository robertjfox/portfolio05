import avantstay from "./assets/avantstay"
import rentroom from "./assets/rentroom"
import repreach from "./assets/repreach"

const PROJECT_DATA = {
  repreach: {
    title: "RepReach",
    logo: repreach.logo,
    // photos: cultivateFruits.photos,
    role: "Founding Fullstack Engineer",
    dates: "October 2022 - Present",
    url: "https://getrepreach.com",
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "PSQL",
      "Node",
      "Express",
      "Python",
    ],
    description: [
      "RepReach is a platform that connects medical offices with pharmaceutical representatives.",
      "At RepReach, I am responsible for the entire technical stack. I work with the CEO & CTO to plan, design, and develop new features.",
      "Here I have built several platforms, including a web app for medical offices, a mobile app for pharmaceutical representatives, an AI based chatbot for pharmaceutical products and diseases, and a web based dashboard for pharmaceutical companies to manage their sales force.",
    ],
  },
  avantstay: {
    title: "AvantStay",
    logo: avantstay.logo,
    photos: avantstay.photos,
    role: "Lead Frontend Engineer",
    dates: "September 2020 - October 2022",
    url: "https://avantstay.com",
    description: [
      "AvantStay is a hospitality company that offers a branded, consistent quality experience in the otherwise fragmented short-term rental industry.",
      "At AvantStay, I lead the development of our customer facing booking platform, responsible for over $50 million in annual revenue. I work with designers and product managers to scope new features. I also run the technical recruiting process for the frontend.",
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
      "Rentroom is the all-in-one platform designed to reduce the administrative burden of the property management businesses.",
      "My time at RentRoom was spent designing and developing new features, and improving on existing features.",
    ],
  },
}

export default PROJECT_DATA
