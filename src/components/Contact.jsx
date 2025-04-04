import styled from "styled-components";

import { MdEmail, MdPhone } from "react-icons/md";

const Div = styled.div`
  @media screen and (max-width: 748px) {
  }
`;
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0 4rem;

  @media screen and (max-width: 748px) {
    height: unset;
    width: 90%;
    padding-bottom: 3rem;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media screen and (max-width: 1024px) {
    gap: 4rem;
  }

  @media screen and (max-width: 748px) {
    margin-top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Det = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
  @media screen and (max-width: 1280px) {
    gap: 1rem;
  }
`;

const H2 = styled.h2`
  text-align: center;

  width: 100%;
  font-size: 2rem;
  @media screen and (max-width: 1280px) {
    font-size: 1.7rem;
  }
`;

const H3 = styled.h3`
  font-size: 1rem;
  width: 100%;
  text-align: center;
`;

const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }
`;

const Contact = () => {
  return (
    <Div>
      <Wrapper>
        <Top>
          <Det>
            <H2>Contact Us</H2>
            <H3>RSVP</H3>
            <P>
              <MdPhone style={{ fontSize: "1rem" }} />
              Woleola — +234 813 150 8027
            </P>

            <P>
              <MdPhone style={{ fontSize: "1rem" }} />
              Tobi — +234 810 617 0405
            </P>
            <P>
              <MdPhone style={{ fontSize: "1rem" }} />
              Jumoke — +234 703 014 6501
            </P>
            <P>
              <MdPhone style={{ fontSize: "1rem" }} />
              Omolara — +234 810 609 4482
            </P>
            <H3> Email</H3>
            <P>
              <MdEmail style={{ fontSize: "1rem" }} />
              joyofdee@gmail.com
            </P>
          </Det>
        </Top>
      </Wrapper>
    </Div>
  );
};

export default Contact;
