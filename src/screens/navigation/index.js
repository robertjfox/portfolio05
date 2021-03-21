import Social from "./Social"
import TopNav from "./TopNav"
import Avatar from "./Avatar"

const Navigation = ({ setScreen, screen, navSelection }) => {
  return (
    <>
      {screen !== "landing" && <Avatar />}
      <Social />
      <TopNav setScreen={setScreen} navSelection={navSelection} />
    </>
  )
}

export default Navigation
