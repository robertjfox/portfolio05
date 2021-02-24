import Social from "./Social"
import TopNav from "./TopNav"
import Avatar from "./Avatar"

const Navigation = ({ setScreen }) => {
  return (
    <>
      <Avatar />
      <Social />
      <TopNav setScreen={setScreen} />
    </>
  )
}

export default Navigation
