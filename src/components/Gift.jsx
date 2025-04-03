import styled from "styled-components";

const Div = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  align-items: flex-start;
  height: 18rem;

  @media screen and (max-width: 1280px) {
    height: 16rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18rem;
  position: relative;
  @media screen and (max-width: 1280px) {
    height: 16rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
`;
const P = styled.p`
  width: 40%;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid #060a90;

  width: 9rem;
  height: 2.5rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;

  font-family: inherit;
  position: relative;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${(props) => props.back};
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
`;

const Gift = () => {
  return (
    <Div>
      <Wrapper>
        <Header>
          <H2>Gift & Bless Us</H2>
          <P>
            Have we been a blessing to you and you’d like to celebrate us with a
            gift? We've made it super easy for you to show us some love. You can
            send us your cash gifts via our secure online payment platform or if
            that sounds like stress, just simply do a bank transfer to the
            account below. Your kindness and every thoughtful generosity is
            deeply appreciated.
          </P>

          <BtnDiv>
            <Btn
              background="#fff"
              color="#000"
              back="#060a90"
              style={{ boxShadow: "1px 1px white, 2px 2px #060a90" }}
              onClick={() => {
                navigator.clipboard.writeText(
                  "Send Your Cash Gift to the account below : 2149751032 UBA Oyeleye David Dotun"
                );
                alert(
                  "Copied: Send Your Cash Gift to the account below : 2149751032 UBA Oyeleye David Dotun"
                );
              }}
            >
              Bank Transfer
            </Btn>

            <Btn background="#060a90" color="#fff" back="#060a90">
              Pay Online
            </Btn>
          </BtnDiv>
        </Header>
      </Wrapper>
    </Div>
  );
};

export default Gift;
