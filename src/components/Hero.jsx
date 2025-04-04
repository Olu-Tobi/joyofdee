import styled from "styled-components";

const Div = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;

  align-items: flex-start;
  height: 37rem;
  @media screen and (max-width: 1280px) {
    height: 32rem;
  }

  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;
const Left = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 2rem 0;
  }
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #ffffff20;
`;

const Bg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Rack = styled.img`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 6rem;
  height: 3rem;
  object-fit: cover;

  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 748px) {
    left: unset;
    right: 1rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
`;

const H1 = styled.h1`
  font-size: 3.3rem;
  text-align: center;
  width: 80%;

  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1280px) {
    font-size: 2.8rem;
  }
`;

const P = styled.p`
  text-align: center;
  width: 80%;
  font-size: 1rem;
  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: #060a90;
  border: 1px solid #060a90;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 9rem;
  height: 2.5rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;
  font-family: inherit;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 8rem;
    height: 2.3rem;
    font-size: 0.9rem;
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

const Hero = () => {
  return (
    <Div>
      <Wrapper>
        <Left>
          <Bg src="/prewed5.webp" alt="hero" />
          <Rack src="/and.png" alt="img" />

          <Layer />
        </Left>
        <Right>
          <Bg src="/newb.webp" alt="hero" />
          <Inner>
            <H1>Welcome To Our Forever</H1>
            {/* <Divider src="/elements.png" alt="element" /> */}
            <P>
              What started as a gentle whisper in my spirit to send her airtime
              shortly after her birthday—became the beginning of something
              extraordinary for both of us. Now, we invite you to witness the
              moment our forever begins. Until then, take some time to explore
              our website.{" "}
            </P>
            <Btn> Show Us Love</Btn>
          </Inner>
        </Right>
      </Wrapper>
    </Div>
  );
};

export default Hero;
