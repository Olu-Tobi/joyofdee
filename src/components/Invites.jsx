import styled from "styled-components";

const Div = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 0;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 3rem 0;
  }

  @media screen and (max-width: 748px) {
    padding: 2rem 0;
  }
`;

const Bg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.2;
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 90%;
    justify-content: unset;
    gap: 1rem;
  }

  @media screen and (max-width: 748px) {
    flex-direction: column-reverse;
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 2rem;
  @media screen and (max-width: 1440px) {
    width: 27rem;
    height: 18rem;
  }
  @media screen and (max-width: 1280px) {
    width: 25rem;
    height: 17rem;
  }

  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
const H2 = styled.h2`
  font-size: 2.5rem;
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 748px) {
    text-align: center;
  }
`;
const P = styled.p`
  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 748px) {
    text-align: center;
  }
`;

const DressCode = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 90%;
    justify-content: unset;
    gap: 1rem;
  }

  @media screen and (max-width: 748px) {
    flex-direction: column;
  }
`;

const Invites = () => {
  return (
    <Div>
      <Bg src="/back.webp" alt="image" />
      {/* <Wrapper>
        <Right>
          <H2>Strictly by Invitation</H2>
          <P>
            Our wedding is an intimate celebration with close family. While we
            would have loved to host everyone physically, we are unable to
            extend invitations beyond our close family. We appreciate your
            understanding and your love from wherever you are. Hence, details
            will be communicated to only the invited guests. Please bear with
            us. 😞😭
          </P>
        </Right>
        <Img src="/prewed17.webp" alt="image" />
      </Wrapper> */}
      <DressCode>
        <Img src="/prewed7.webp" alt="image" />
        <Right>
          <H2>The Dress Code? All Sparkling White Elegance</H2>
          <P>
            This is not just a wedding—it’s a statement of unfeigned love,
            purity, and elegance. We kindly ask all our invited guests to honor
            our color theme by dressing in ALL SPARKLING WHITE ELEGANCE. We
            won’t even mind if you wear a white shoe. Lol. Think Bella Naija
            wedding vibes—aesthetically stunning, decent and timeless. No
            exceptions!
          </P>
        </Right>
      </DressCode>
    </Div>
  );
};

export default Invites;
