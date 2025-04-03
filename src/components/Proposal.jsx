// import { useState, useRef } from "react";
// import styled from "styled-components";
// import { Play, Pause } from "lucide-react";
// import Gift from "./Gift";

// const Div = styled.div`
//   position: relative;
//   padding: 4rem 0 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;

//   @media screen and (max-width: 748px) {
//     padding: 2rem 0;
//   }
// `;
// const PBack = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
//   opacity: 0.2;
//   transform: rotateY(180deg);
// `;
// const Wrapper = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   display: flex;

//   align-items: center;
//   justify-content: center;

//   gap: 2rem;

//   @media screen and (max-width: 748px) {
//     width: 90%;
//     flex-direction: column-reverse;
//   }
// `;
// const H2 = styled.h2`
//   font-size: 2.7rem;
//   font-weight: 400;
//   width: 20rem;
//   text-align: center;
//   @media screen and (max-width: 1280px) {
//     font-size: 2.2rem;
//     width: 16rem;
//   }
// `;
// const VideoWrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   width: 20rem;
// `;
// const Video = styled.video`
//   width: 20rem;
//   height: 25rem;
//   border-radius: 10px;
//   filter: brightness(1.2);
//   box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
// `;
// const ControlsOverlay = styled.div`
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   background: rgba(0, 0, 0, 0.6);
//   padding: 0.5rem 1rem;
//   border-radius: 10px;
// `;
// const SeekBar = styled.input`
//   width: 100px;
// `;
// const OverlayButton = styled.button`
//   background: transparent;
//   border: none;
//   color: white;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Select = styled.select`
//   padding: 0.5rem;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Proposal = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [seek, setSeek] = useState(0);

//   const togglePlay = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const changeSpeed = (event) => {
//     videoRef.current.playbackRate = event.target.value;
//   };

//   const handleSeek = (event) => {
//     videoRef.current.currentTime = event.target.value;
//     setSeek(event.target.value);
//   };

//   const updateSeek = () => {
//     setSeek(videoRef.current.currentTime);
//   };

//   const handleVideoEnd = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <Div>
//       <PBack src="/back.webp" alt="image" />
//       <Wrapper>
//         <VideoWrapper>
//           <Video
//             ref={videoRef}
//             onTimeUpdate={updateSeek}
//             onEnded={handleVideoEnd}
//           >
//             <source
//               src="https://drive.google.com/uc?export=download&id=1YMH16FfTEc4m7My2NJCIurPBvLRf0gSU"
//               type="video/mp4"
//             />
//           </Video>

//           <ControlsOverlay>
//             <OverlayButton onClick={togglePlay}>
//               {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//             </OverlayButton>
//             <SeekBar
//               type="range"
//               min="0"
//               max={videoRef.current?.duration || 100}
//               value={seek}
//               onChange={handleSeek}
//             />
//             <Select onChange={changeSpeed}>
//               <option value="0.5">0.5x</option>
//               <option value="1" selected>
//                 1x
//               </option>
//               <option value="1.5">1.5x</option>
//               <option value="2">2x</option>
//             </Select>
//           </ControlsOverlay>
//         </VideoWrapper>
//         <H2 className="ds-font">The Moment Ayomide Said YES!</H2>
//       </Wrapper>
//       <Gift />
//     </Div>
//   );
// };

// export default Proposal;

import styled from "styled-components";
import Gift from "./Gift";

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
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 748px) {
    width: 90%;
    flex-direction: column-reverse;
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
  //box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Proposal = () => {
  return (
    <Div>
      <PBack src="/back.webp" alt="background" />
      <Wrapper>
        <VideoWrapper>
          <VimeoEmbed
            src="https://player.vimeo.com/video/1072158236?h=d4e03650df&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="proposal"
          />
        </VideoWrapper>
        <H2 className="ds-font">The Moment Ayomide Said YES!</H2>
      </Wrapper>
      <Gift />
    </Div>
  );
};

export default Proposal;
