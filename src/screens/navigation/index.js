import Social from "./Social"
import TopNav from "./TopNav"

const Navigation = ({ setScreen }) => {
  return (
    <>
      <Social />
      <TopNav setScreen={setScreen} />
    </>
  )
}

export default Navigation
