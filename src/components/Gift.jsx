import styled from "styled-components";
import { GoGift } from "react-icons/go";
import { BsCopy } from "react-icons/bs";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const Div = styled.div`
  position: relative;
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 748px) {
    padding: 2rem 0;
  }
`;

const PBack = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.2;
  transform: rotateY(180deg);
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  align-items: center;
  height: 20rem;

  @media screen and (max-width: 1280px) {
    height: 18rem;
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
  display: flex;
  align-items: center;
  gap: 1rem;
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

const PopDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 90%;
  position: relative;

  @media screen and (max-width: 748px) {
    width: 90%;
    justify-content: flex-start;
    margin-top: 5rem;
  }

  @media screen and (max-width: 390px) {
    width: 90%;
    justify-content: flex-start;
    margin-top: 2.5rem;
  }
`;
const PopH2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  width: 75%;

  @media screen and (max-width: 748px) {
    font-size: 1.5rem;
  }
`;

const PopList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 95%;
  padding-top: 2rem;

  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    width: 90%;
    gap: 0.6rem;
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: unset;
    width: 90%;
    gap: 0.6rem;
  }
`;
const PopItem = styled.div`
  background: #060a9020;
  width: 8rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 2rem 1rem;

  @media screen and (max-width: 748px) {
    width: 17.6rem;
    height: 5rem;
    padding: 1rem;
    gap: 0.7rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (max-width: 390px) {
    width: 17rem;
    height: 4.5rem;
    padding: 1rem;
    gap: 0.4rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const PopTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media screen and (max-width: 748px) {
    gap: 0.6rem;
  }

  @media screen and (max-width: 390px) {
    gap: 0.4rem;
  }
`;

const ItemH2 = styled.h2`
  font-size: 1rem;
  font-weight: 800;
`;

const PopText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemP = styled.p`
  font-size: 0.9rem;
  height: 1.5rem;
`;
const ItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: #060a90;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  border: none;

  width: 7rem;
  height: 2rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;

  font-family: inherit;
  position: relative;
  color: #fff;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #060a90;
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

  @media screen and (max-width: 748px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 3.6rem;
    gap: 0.4rem;
  }
`;
const PopFoot = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  @media screen and (max-width: 748px) {
    bottom: 2rem;
  }

  @media screen and (max-width: 390px) {
    font-size: 1.2rem;
    bottom: -1rem;
  }
`;

const Gift = () => {
  const [isVisible, setIsVisible] = useState(false); // state to control popup

  const handleClick = () => {
    setIsVisible(true); // show popup when Bank Transfer button is clicked
  };

  const handleClose = () => {
    setIsVisible(false); // hide popup when close icon is clicked
  };
  return (
    <Div id="gift">
      <PBack src="/back.webp" alt="background" />
      <Wrapper>
        <Header>
          <H2>
            <GoGift /> Gift & Bless Us
          </H2>
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
              onClick={handleClick}
            >
              Bank Transfer
            </Btn>

            <a
              href="https://selar.com/showlove/joyofdee"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Btn background="#060a90" color="#fff" back="#060a90">
                Give Online
              </Btn>
            </a>
          </BtnDiv>

          {isVisible && (
            <Popup handleClose={handleClose}>
              <PopDiv>
                <PopH2>
                  Please send your gift to any of the options below:
                </PopH2>

                <PopList>
                  <PopItem>
                    <PopTop>
                      <ItemH2>UBA</ItemH2>
                      <PopText>
                        <ItemP>2149751032</ItemP>
                        <ItemP>Oyeleye David Dotun</ItemP>
                      </PopText>
                    </PopTop>
                    <ItemBtn
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "2149751032 - Oyeleye David Dotun (UBA)"
                        );
                        alert("Copied: 2149751032 - Oyeleye David Dotun (UBA)");
                      }}
                    >
                      <BsCopy />
                      Copy
                    </ItemBtn>
                  </PopItem>

                  <PopItem>
                    <PopTop>
                      <ItemH2>Moniepoint</ItemH2>
                      <PopText>
                        <ItemP>7068115869</ItemP>
                        <ItemP>Addeyanju Ayomide Esther</ItemP>
                      </PopText>
                    </PopTop>
                    <ItemBtn
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "7068115869 - Addeyanju Ayomide Estheri (Moniepoint)"
                        );
                        alert(
                          "Copied: 7068115869 - Addeyanju Ayomide Estheri (Moniepoint)"
                        );
                      }}
                    >
                      <BsCopy />
                      Copy
                    </ItemBtn>
                  </PopItem>
                </PopList>
                <PopFoot>God Bless You!</PopFoot>
              </PopDiv>
            </Popup>
          )}
        </Header>
      </Wrapper>
    </Div>
  );
};

export default Gift;
