import styled, { keyframes } from "styled-components"

const containerSlideIn = keyframes`
  0% { transform: translateX(-85px);}
`

const containerSlideOut = keyframes`
  100% { transform: translateX(-85px);}
`

const charSlideIn = keyframes`
  0% { transform: translateY(100%); opacity: 0;}
  85% { transform: translateY(-10%); opacity: .85;}
`

const charSlideOut = keyframes`
  15% { transform: translateY(10%); opacity: .15;}
  100% { transform: translateY(-100%); opacity: 0;}
`

const imageSlideIn = keyframes`
  0% { transform: translateX(30%); opacity: 0;}
`

const imageSlideOut = keyframes`
  100% { transform: translateX(30%); opacity: 0;}
`

export const LandingRoot = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
`

export const HeadshotCont = styled.div`
  height: 100%;

  @media (max-width: 550px) {
    display: none;
  }
`

export const Headshot = styled.img`
  height: 100%;
  opacity: 0.75;
  margin-right: 30px;
  filter: grayscale(1) contrast(1.25);
  border-radius: 10px;
  animation-name: ${(p) => (p.theme.unmounting ? imageSlideOut : imageSlideIn)};
  animation-delay: ${(p) => (p.theme.unmounting ? "0s" : "2.4s")};
  animation-duration: ${(p) => (p.theme.unmounting ? "0.3s" : "0.6s")};
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
`

export const TextCont = styled.div`
  animation-name: ${(p) =>
    p.theme.unmounting ? containerSlideOut : containerSlideIn};
  animation-delay: ${(p) => (p.theme.unmounting ? "0s" : "2.4s")};
  animation-duration: ${(p) => (p.theme.unmounting ? "0.3s" : "0.6s")};
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};

  @media (max-width: 550px) {
    animation: none;
  }
`

export const CharsCont = styled.div`
  display: flex;
  overflow: hidden;
  width: fit-content;
  position: relative;
  margin: 15px 0;
`

export const Char = styled.p`
  animation-name: ${(p) => (p.theme.unmounting ? charSlideOut : charSlideIn)};
  animation-delay: ${(p) =>
    (p.index / 20 + (p.theme.unmounting ? 0 : p.baseDelay / 1.3)) *
      (p.theme.unmounting ? 0.5 : 1) +
    (p.theme.unmounting ? 0.2 : 0)}s;
  animation-duration: ${(p) => (p.theme.unmounting ? "0.3s" : "0.4s")};
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
  font-size: 40px;
  ${(p) => p.space && "width: 20px"};
  opacity: 0.75;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`
