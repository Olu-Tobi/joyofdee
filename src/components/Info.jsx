import styled from "styled-components";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { PiCashRegister } from "react-icons/pi";

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
  padding: 2rem 0;

  @media screen and (max-width: 748px) {
    height: unset;
    width: 90%;
    padding-bottom: 3rem;
    justify-content: unset;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  height: 3rem;
  padding: 0 3rem;
  @media screen and (max-width: 748px) {
    width: 100%;
    padding: unset;
    gap: 1rem;
  }
`;
const Det = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 1280px) {
    gap: 1rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 1280px) {
    font-size: 1.7rem;
  }
`;

const Inner = styled.div`
  background: #060a90;
  color: #fff;
  font-weight: 500;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20rem;

  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

const PDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;
const P = styled.p`
  text-align: center;
  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 748px) {
    width: 15rem;

    width: 100%;
    font-size: 1rem;
  }
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

  width: 13rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;

  font-family: inherit;
  position: relative;

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

const Info = () => {
  return (
    <Div id="details">
      <Wrapper>
        <Top>
          <Det>
            <H2>Wedding Details & Schedule</H2>
            <Inner>
              <PDiv>
                <SlCalender style={{ fontSize: "1.2rem" }} />
                <P>Date: Saturday, June 21, 2025</P>
              </PDiv>

              <PDiv>
                <MdOutlineAccessTime style={{ fontSize: "1.2rem" }} />

                <P>7:45AM - 9:15AM — Engagement Ceremony</P>
              </PDiv>
            </Inner>

            <Inner>
              <PDiv>
                <MdOutlineAccessTime style={{ fontSize: "1.2rem" }} />
                <P>
                  11AM - 11:30 PM — Signing of Wedding Certificate & Priestly
                  Blessing
                </P>
              </PDiv>
              <PDiv>
                <MdOutlineAccessTime style={{ fontSize: "1.2rem" }} />
                <P>12:00PM - 1:00PM — Praise Party</P>
              </PDiv>
            </Inner>

            <PDiv>
              <P>Reception follows immediately at the same venue</P>
            </PDiv>
          </Det>
        </Top>
        <Bottom>
          <Btn
            background="transparent"
            color="#000"
            back="#060a90"
            style={{ boxShadow: "1px 1px white, 2px 2px #060a90" }}
            onClick={() => {
              navigator.clipboard.writeText(
                "RSVP - Ayomide Woleola: +234 813 150 8027, Daramola Tobi: +234 810 617 0405, Jumoke: +234 703 014 6501, Omolara: +234 810 609 4482"
              );
              alert(
                "Copied: RSVP - Ayomide Woleola: +234 813 150 8027, Daramola Tobi: +234 810 617 0405, Jumoke: +234 703 014 6501, Omolara: +234 810 609 4482"
              );
            }}
          >
            <PiCashRegister style={{ fontSize: "1.1rem" }} />
            RSVP
          </Btn>

          <Btn background="#060a90" color="#fff" back="#060a90">
            <GoGift style={{ fontSize: "1.1rem" }} />
            Download Order
          </Btn>
        </Bottom>
      </Wrapper>
    </Div>
  );
};

export default Info;
