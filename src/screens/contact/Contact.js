import React from "react"
import * as S from "./Contact.styles"
import emailjs from "emailjs-com"

const Contact = () => {
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_2ce7hyk",
        "template_v03wsop",
        e.target,
        "user_z70LQJ8heZ8JTz3HjwHHz"
      )
      .then((response) => {
        setSuccess(true)
        console.log("success", response)
      })
      .catch((error) => console.log("failed", error))
  }

  if (success) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Thanks for reaching out! <br />
        <br />I will follow up soon.
      </h2>
    )
  }

  return (
    <S.ContactRoot id="contact-form" onSubmit={handleSubmit}>
      <S.EmailInput id="link" placeholder="email" name="sender" />
      <S.TextArea rows={8} id="link" placeholder="message" name="message" />
      <S.SubmitButton id="link" type="submit">
        <p>submit</p>
      </S.SubmitButton>
    </S.ContactRoot>
  )
}

export default Contact
