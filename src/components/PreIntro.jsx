import styled from "styled-components";

const Div = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  color: #fff;

  @media screen and (max-width: 748px) {
    height: 80vh;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
  z-index: -1;
`;

const H2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 748px) {
    font-size: 2.5rem;
  }
`;
const P = styled.p`
  font-size: 1rem;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  //border: none;

  width: 10rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #fff;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #ffffff;
  }
  &::before {
    top: 100%;
    left: 1px;
    height: 2px;
    width: 1px;
  }
  &::after {
    left: 100%;
    top: 1px;
    height: 1px;
    width: 2px;
  }

  @media screen and (max-width: 1024px) {
    width: 11rem;
    height: 3rem;
  }

  @media screen and (max-width: 748px) {
    width: 12rem;
    height: 3.2rem;
  }
`;

const Logo = styled.img`
  width: 12rem;
  height: 6rem;
  position: absolute;
  top: 2rem;

  padding: 0.5rem;
  border-radius: 1rem;

  @media screen and (max-width: 748px) {
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const PreIntro = () => {
  return (
    <Div>
      <Wrapper>
        <Img src="/prewed17.webp" alt="image" />
        {/* <Layer />
        <H2>AYOMIDE & DAVID</H2>
        <P>SATURDAY, JUNE 21, 2025</P>
        <A href="#show">
          <Btn>VIEW GALLERY</Btn>
        </A> */}
        <Logo src="/and.png" alt="logo" />
      </Wrapper>
    </Div>
  );
};

export default PreIntro;
