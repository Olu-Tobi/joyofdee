import { useState } from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const H2 = styled.h2`
  font-size: 2.7rem;
  font-weight: 400;
  width: 20rem;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 2.2rem;
    width: 16rem;
  }
`;

const ThumbDiv = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  cursor: pointer;

  @media screen and (max-width: 748px) {
    height: 20rem;
  }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #00000010;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const VideoWrapper = styled.div`
  position: relative;

  width: 20rem;
  height: 25rem;
`;

const VimeoEmbed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Proposal = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePlay = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Div id="proposal">
      <Wrapper>
        <H2 className="ds-font">The Moment Ayomide Said YES!</H2>
        <ThumbDiv onClick={handlePlay}>
          <Thumb src="/yes.jpg" alt="img" />
          <Layer />
          <PlayButton>▶</PlayButton>
        </ThumbDiv>
      </Wrapper>

      {showModal && (
        <ModalOverlay>
          <CloseButton onClick={handleClose}>×</CloseButton>
          <VideoWrapper>
            <VimeoEmbed
              src="https://www.youtube.com/embed/shbZVh_xa1I?autoplay=1&rel=0"
              title="proposal"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </VideoWrapper>
        </ModalOverlay>
      )}
    </Div>
  );
};

export default Proposal;
