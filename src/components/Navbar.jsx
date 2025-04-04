import { useState } from "react";
import styled from "styled-components";
import { GoGift } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Div = styled.div`
  background: #fff;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    height: 3.8rem;
  }

  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 6rem;
  height: 4rem;
  object-fit: cover;
  @media screen and (max-width: 1280px) {
    width: 5rem;
    height: 3.5rem;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1280px) {
    gap: 2rem;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MenuDiv = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

const Ul2 = styled.ul`
  list-style: none;
  display: none;

  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 3.8rem;
    right: 0;
    width: 18rem;
    height: 40rem;
    background: rgba(225, 225, 225, 0.8);
    backdrop-filter: blur(15px);
    padding: 2.5rem 1.7rem;
    color: #000;
    z-index: 12;
  }

  @media screen and (max-width: 748px) {
    width: 13rem;
  }
`;
const LiDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media screen and (max-width: 1280px) {
    gap: 2rem;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Li = styled.a`
  font-weight: 600;
  font-size: 1rem;

  color: #000;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #060a90;
  color: #fff;
  cursor: pointer;
  border: none;

  font-size: 0.9rem;

  width: 8rem;
  height: 2.5rem;

  font-family: inherit;

  @media screen and (max-width: 1280px) {
    width: 7rem;
    height: 2.2rem;
    font-size: 0.8rem;
  }
`;

const linkOption = [
  {
    url: "/",
    link: "Home",
  },
  {
    url: "#details",
    link: "Wedding Details",
  },
  {
    url: "#proposal",
    link: "The Proposal",
  },

  {
    url: "/gallery",
    link: "Gallery ",
  },

  {
    url: "/meet-the-squad",
    link: "Meet our Squad",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <Div>
      <Wrapper>
        <Logo src="/logo.webp" alt="logo" />
        <Ul>
          <LiDiv>
            {linkOption.map((item, i) => (
              <Li key={i} href={item.url}>
                {item.link}
              </Li>
            ))}
          </LiDiv>
          <a href="#gift">
            <Btn>
              <GoGift />
              Gift Us
            </Btn>
          </a>
        </Ul>

        <MenuDiv>
          {!click && (
            <CgMenuLeft
              onClick={() => setClick(true)}
              style={{ fontSize: "2rem" }}
            />
          )}
          {click && (
            <CgClose
              onClick={() => setClick(false)}
              style={{ fontSize: "2rem" }}
            />
          )}
        </MenuDiv>

        {click && (
          <Ul2>
            <LiDiv>
              {linkOption.map((item, i) => (
                <Li key={i} href={item.url}>
                  {item.link}
                </Li>
              ))}
            </LiDiv>

            <a href="#gift">
              <Btn>
                <GoGift style={{ fontSize: "1.1rem" }} />
                Gift Us
              </Btn>
            </a>
          </Ul2>
        )}
      </Wrapper>
    </Div>
  );
};

export default Navbar;
