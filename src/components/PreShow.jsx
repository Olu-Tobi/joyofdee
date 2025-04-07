import styled from "styled-components";
import { PreWedding } from "./Data";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  //background: #0f0f0f;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PictureDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Responsive masonry layout */
  grid-auto-rows: 250px; /* Base height for rows */
  gap: 0.4rem; /* Uniform gap between images */

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  transition: filter 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    filter: brightness(1.2); /* Increases brightness on hover */
  }

  &:nth-child(2n) {
    grid-row: span 2;
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
  background: #060a90;
  border: 1px solid #060a90;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 12rem;
  height: 2.7rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;
  font-family: inherit;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 10rem;
    height: 2.5rem;
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

const PreShow = () => {
  return (
    <Div>
      <Wrapper>
        <PictureDiv>
          {PreWedding.slice(0, 7).map((item, i) => (
            <Img key={i} src={item.image} alt="image" />
          ))}
        </PictureDiv>
      </Wrapper>
      <a href="/gallery" style={{ textDecoration: "none" }}>
        <BtnDiv>
          <Btn>See All Photos</Btn>
        </BtnDiv>
      </a>
    </Div>
  );
};

export default PreShow;
