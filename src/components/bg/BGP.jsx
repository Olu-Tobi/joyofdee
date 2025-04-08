// import styled, { keyframes } from "styled-components";
// import { useEffect, useRef, useState } from "react";

// const fadeInSlideUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Div = styled.div`
//   padding: 3rem 2rem;
//   @media (max-width: 480px) {
//     padding: 3rem 1rem;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `;

// const StoryImg = styled.img`
//   width: 100%;
//   height: 2.2rem;
//   object-fit: contain;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 748px) {
//     //grid-template-columns: 1fr;
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const PersonCard = styled.div`
//   text-align: center;
//   opacity: 0; /* Initially hidden */
//   transform: translateY(40px); /* Slide up from bottom */
//   transition: opacity 0.5s ease-out, transform ${(props) => props.time} ease-out;
//   &.visible {
//     animation: ${fadeInSlideUp} 0.8s ease-out forwards;
//   }
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   height: 20rem;
//   object-fit: cover;
//   border-radius: 8px;
//   @media (max-width: 480px) {
//     height: 16rem;

//     //grid-template-columns: 1fr;
//   }
// `;

// const Name = styled.p`
//   font-weight: bold;
//   margin: 0.5rem 0 0;
// `;

// const Role = styled.p`
//   font-size: 0.9rem;
//   color: #666;
// `;

// const Bgp = () => {
//   const [visibleItems, setVisibleItems] = useState(new Set());
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleItems((prevItems) =>
//               new Set(prevItems).add(entry.target)
//             );
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <Div>
//       <Wrapper>
//         <Grid>
//           {bridesMaid.map((item, i) => (
//             <PersonCard
//               key={i}
//               ref={(el) => (cardRefs.current[i] = el)}
//               className={visibleItems.has(cardRefs.current[i]) ? "visible" : ""}
//             >
//               <StyledImage
//                 src={item.image}
//                 alt={item.name}
//                 width={2000}
//                 height={2000}
//                 loading="lazy"
//               />
//               <Name>{item.name}</Name>
//               <Role>{item.role}</Role>
//             </PersonCard>
//           ))}
//         </Grid>

//         <StoryImg src="/gold.png" width={800} height={800} alt="element" />

//         <Grid>
//           {groomsMen.map((item, i) => (
//             <PersonCard
//               time={i % 0 === 2 ? "0.8" : "0.5"}
//               key={i + bridesMaid.length}
//               ref={(el) => (cardRefs.current[i + bridesMaid.length] = el)}
//               className={
//                 visibleItems.has(cardRefs.current[i + bridesMaid.length])
//                   ? "visible"
//                   : ""
//               }
//             >
//               <StyledImage
//                 src={item.image}
//                 alt={item.name}
//                 width={2000}
//                 height={2000}
//               />
//               <Name>{item.name}</Name>
//               <Role>{item.role}</Role>
//             </PersonCard>
//           ))}
//         </Grid>
//       </Wrapper>
//     </Div>
//   );
// };

// export default Bgp;

// const bridesMaid = [
//   {
//     image: "/train/ladies/adedolapo.webp",
//     name: "Adeyanju Adedolapo",
//     role: "Chief Bridesmaid",
//   },
//   {
//     image: "/train/ladies/shalomshaba.webp",
//     name: "Shaba Shalom",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/gladysoguntola.webp",
//     name: "Gladys Oguntola",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/favourokanlawon.webp",
//     name: "Favour Okanlawon",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/graceagbato.webp",
//     name: "Agbato Grace",
//     role: " Bridesmaid",
//   },

//   {
//     image: "/train/ladies/ifeoluwaoyeleye.webp",
//     name: "Ifeoluwa Oyeleye",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/popoolafaith.webp",
//     name: "Popoola Faith",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/rufaitobiloba.webp",
//     name: "Rufai Tobiloba",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/rihanat.webp",
//     name: "Adeyanju Rihanat",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/sambo6.webp",
//     name: "Sambo Complete",
//     role: " Bridesmaid",
//   },
//   {
//     image: "/train/ladies/sava.webp",
//     name: "Agbato Oluwaseyi",
//     role: " Bridesmaid",
//   },
// ];

// const groomsMen = [
//   {
//     image: "/train/guys/timi.webp",
//     name: "Olusegun Timileyin",
//     role: "Best Man",
//   },
//   {
//     image: "/train/guys/tbass.webp",
//     name: "Daramola Tobi",
//     role: "Groomsman",
//   },

//   {
//     image: "/train/guys/awe.webp",
//     name: "Adewojo Oluwaferanmi",
//     role: "Groomsman",
//   },
//   {
//     image: "/train/guys/mo.webp",
//     name: "Olawale-Jimoh Motelejesu",
//     role: "Groomsman",
//   },
//   {
//     image: "/train/guys/oloruntobi.webp",
//     name: "Oloruntobi Olutayo",
//     role: "Groomsman",
//   },
// ];

import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Div = styled.div`
  padding: 3rem 2rem;
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StoryImg = styled.img`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 748px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PersonCard = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s ease-out,
    transform ${(props) => props.time || "0.5s"} ease-out;
  &.visible {
    animation: ${fadeInSlideUp} 0.8s ease-out forwards;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 480px) {
    height: 16rem;
  }
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0.5rem 0 0;
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Bgp = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevItems) =>
              new Set(prevItems).add(entry.target)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const refsSnapshot = [...cardRefs.current];

    refsSnapshot.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refsSnapshot.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Div>
      <Wrapper>
        <Grid>
          {bridesMaid.map((item, i) => (
            <PersonCard
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={visibleItems.has(cardRefs.current[i]) ? "visible" : ""}
            >
              <StyledImage
                src={item.image}
                alt={item.name}
                width={2000}
                height={2000}
                loading="lazy"
              />
              <Name>{item.name}</Name>
              <Role>{item.role}</Role>
            </PersonCard>
          ))}
        </Grid>

        <StoryImg src="/gold.png" width={800} height={800} alt="element" />

        <Grid>
          {groomsMen.map((item, i) => {
            const index = i + bridesMaid.length;
            return (
              <PersonCard
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={
                  visibleItems.has(cardRefs.current[index]) ? "visible" : ""
                }
                time={i % 0 === 2 ? "0.8s" : "0.5s"}
              >
                <StyledImage
                  src={item.image}
                  alt={item.name}
                  width={2000}
                  height={2000}
                />
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
              </PersonCard>
            );
          })}
        </Grid>
      </Wrapper>
    </Div>
  );
};

export default Bgp;

// Dummy data
const bridesMaid = [
  {
    image: "/train/ladies/adedolapo.webp",
    name: "Adeyanju Adedolapo",
    role: "Chief Bridesmaid",
  },
  {
    image: "/train/ladies/shalomshaba.webp",
    name: "Shaba Shalom",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/gladysoguntola.webp",
    name: "Gladys Oguntola",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/favourokanlawon.webp",
    name: "Favour Okanlawon",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/graceagbato.webp",
    name: "Agbato Grace",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/ifeoluwaoyeleye.webp",
    name: "Ifeoluwa Oyeleye",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/popoolafaith.webp",
    name: "Popoola Faith",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/rufaitobiloba.webp",
    name: "Rufai Tobiloba",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/rihanat.webp",
    name: "Adeyanju Rihanat",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/sambo6.webp",
    name: "Sambo Complete",
    role: "Bridesmaid",
  },
  {
    image: "/train/ladies/sava.webp",
    name: "Agbato Oluwaseyi",
    role: "Bridesmaid",
  },
];

const groomsMen = [
  {
    image: "/train/guys/timi.webp",
    name: "Olusegun Timileyin",
    role: "Best Man",
  },
  { image: "/train/guys/tbass.webp", name: "Daramola Tobi", role: "Groomsman" },
  {
    image: "/train/guys/awe.webp",
    name: "Adewojo Oluwaferanmi",
    role: "Groomsman",
  },
  {
    image: "/train/guys/mo.webp",
    name: "Olawale-Jimoh Motelejesu",
    role: "Groomsman",
  },
  {
    image: "/train/guys/oloruntobi.webp",
    name: "Oloruntobi Olutayo",
    role: "Groomsman",
  },
];
