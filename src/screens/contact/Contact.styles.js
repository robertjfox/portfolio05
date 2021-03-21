import styled, { css } from "styled-components"

export const ContactRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  max-width: 500px;
`

const inputStyle = css`
  font-size: 1.25rem;
  padding: 20px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  transition: 0.15s;
  font-family: "SpaceMono";
  border-radius: 5px;

  &::placeholder {
    transition: 0.15s;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  &:focus {
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);

    &::placeholder {
      color: rgba(255, 255, 255, 1);
    }
  }
`

export const EmailInput = styled.input`
  width: 50%;
  ${inputStyle}
`

export const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  ${inputStyle}
`

export const SubmitButton = styled.button`
  width: 50%;
  align-self: flex-end;
  margin: 0;
  font-size: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  transition: 0.15s;
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.45);
  }

  &:active {
    background: rgba(255, 255, 255, 0.6);
  }
`
