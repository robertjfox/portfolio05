import React from "react"
import * as S from "./Contact.styles"

const Contact = () => {
  return (
    <S.ContactRoot>
      <S.EmailInput id="link" placeholder="email" />
      <S.TextArea rows={8} id="link" placeholder="message" />
      <S.SubmitButton id="link">
        <p>submit</p>
      </S.SubmitButton>
    </S.ContactRoot>
  )
}

export default Contact
