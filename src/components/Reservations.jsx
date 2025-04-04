import styled from "styled-components";
import RsvpForm from "./RsvpForm";

const Div = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  align-items: flex-start;
  height: 40rem;
  //border: 1px solid #060a90;
  @media screen and (max-width: 1280px) {
    height: 37rem;
  }

  @media screen and (max-width: 748px) {
    flex-direction: column;
    height: unset;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  position: relative;
  color: #fff;
  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

const BackImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: #ffffff30;
`;
const H2 = styled.h2`
  font-size: 2.5rem;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
`;
const P = styled.p`
  width: 80%;
  text-align: center;
  z-index: 1;
  font-weight: 500;
  @media screen and (max-width: 748px) {
    font-size: 0.9rem;
  }
`;

const FormDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

const FormBack = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  transform: rotateZ(180deg);
`;

const Reservations = () => {
  return (
    <Div>
      <Wrapper>
        <Header>
          <BackImg src="/prewed11.webp" alt="image" />
          <Layer />
          <H2>Reserve Your Seat</H2>
          <P>
            Each invited guest must confirm their attendance by reserving a
            seat. Upon confirmation, you will receive your access card, seat
            number and details of address will be communicated in good time
            before the event. This would enable us to plan effectively, minimize
            waste and have a seamless event.{" "}
          </P>
          <P>
            NB : Please, ensure the phone number and email provided in the form
            above are correct so you can receive further details about the
            event.{" "}
          </P>
        </Header>
        <FormDiv>
          <FormBack src="/newb.webp" alt="image" />
          <RsvpForm />
        </FormDiv>
      </Wrapper>
    </Div>
  );
};

export default Reservations;
