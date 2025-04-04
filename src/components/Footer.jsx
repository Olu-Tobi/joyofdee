import styled from "styled-components";

const Div = styled.div`
  background: #060a90;
  padding: 4.5rem 0 5rem;
`;
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
  color: #fff;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  object-fit: cover;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    gap: 1.3rem;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.7rem;
  }
`;
const Item = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: none;
`;
const Copy = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const linkOption = [
  {
    url: "#gift",
    link: "Gift Us ",
  },
  {
    url: "#reserve",
    link: "Reserve Your Seat",
  },
  {
    url: "/gallery",
    link: "Gallery",
  },
  {
    url: "#proposal",
    link: "Watch Proposal",
  },
  {
    url: "/meet-the-squad",
    link: "Meet The Squad",
  },
];

const Footer = () => {
  return (
    <Div>
      <Wrapper>
        <Logo src="/logo.webp" width={800} height={800} alt="logo" />
        <Nav>
          {linkOption.map((item, i) => (
            <Item key={i} href={item.url}>
              {" "}
              {item.link}
            </Item>
          ))}
        </Nav>
        <Copy>&copy; JoyofDee' {new Date().getFullYear()}</Copy>
      </Wrapper>
    </Div>
  );
};

export default Footer;
