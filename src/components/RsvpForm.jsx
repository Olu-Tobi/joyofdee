// import React, { useState } from "react";
// import styled from "styled-components";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;

//   gap: 0.5rem;
//   width: 20rem;
//   margin: auto;
// `;

// const InputDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 1rem;
//   font-weight: 600;
//   @media screen and (max-width: 1280px) {
//     font-size: 0.9rem;
//   }
// `;
// const Radio = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 3rem;
// `;
// const Input = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #060a90;
//   border-radius: 4px;
//   outline: none;
//   background: transparent;
//   font-family: inherit;
//   @media screen and (max-width: 1280px) {
//     padding: 0.3rem 0.5rem;
//   }

//   @media screen and (max-width: 748px) {
//     padding: 0.5rem;
//   }
// `;

// const Select = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #060a90;
//   border-radius: 4px;
//   background: transparent;
//   outline: none;
//   font-family: inherit;
// `;

// const BtnDiv = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Btn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.7rem;
//   background: #060a90;
//   border: 1px solid #060a90;
//   color: #fff;
//   font-size: 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   width: 9rem;
//   height: 2.5rem;
//   box-shadow: 1px 1px white, 2px 2px #060a90;
//   font-family: inherit;
//   position: relative;
//   @media screen and (max-width: 1280px) {
//     width: 8rem;
//     height: 2.3rem;
//     font-size: 0.9rem;
//   }

//   @media screen and (max-width: 1024px) {
//     width: 11rem;
//     height: 3rem;
//   }

//   @media screen and (max-width: 748px) {
//     width: 12rem;
//     height: 3.2rem;
//   }
// `;

// const RsvpForm = () => {
//   const [needsHotel, setNeedsHotel] = useState("No");
//   const [nights, setNights] = useState("");

//   console.log(nights);

//   return (
//     <Form>
//       <InputDiv>
//         <Label>Will You Be Attending?</Label>
//         <Radio>
//           <label>
//             <Input type="radio" name="attending" value="yes" /> Yes
//           </label>
//           <label>
//             <Input type="radio" name="attending" value="no" /> No
//           </label>
//         </Radio>
//       </InputDiv>

//       <InputDiv>
//         <Label>Your Full Name</Label>
//         <Input type="text" required />
//       </InputDiv>

//       <InputDiv>
//         <Label>Email</Label>
//         <Input type="email" required />
//       </InputDiv>

//       <InputDiv>
//         <Label>Phone Number</Label>
//         <Input type="tel" required />
//       </InputDiv>

//       <InputDiv>
//         <Label>Onsite/Virtual</Label>
//         <Select required>
//           <option value="onsite">Onsite</option>
//           <option value="virtual">Virtual</option>
//         </Select>
//       </InputDiv>

//       <InputDiv>
//         <Label>Whose Guest Are You?</Label>
//         <Select required>
//           <option value="Ayomide">Ayomide</option>
//           <option value="David">David</option>
//           <option value="Groom's Parent">Groom’s Parent</option>
//           <option value="Bride's Parent">Bride’s Parent</option>
//         </Select>
//       </InputDiv>

//       <InputDiv>
//         <Label>Where are you traveling from?</Label>
//         <Input type="text" required />
//       </InputDiv>

//       <InputDiv>
//         <Label>Do you need a Hotel Accommodation?</Label>
//         <Radio>
//           <label>
//             <Input
//               type="radio"
//               name="hotel"
//               value="Yes"
//               onChange={() => setNeedsHotel("Yes")}
//             />
//             Yes
//           </label>
//           <label>
//             <Input
//               type="radio"
//               name="hotel"
//               value="No"
//               onChange={() => {
//                 setNeedsHotel("No");
//                 setNights("");
//               }}
//             />
//             No
//           </label>
//         </Radio>
//       </InputDiv>

//       {needsHotel === "Yes" && (
//         <InputDiv>
//           <Label>Select how many nights</Label>
//           <Select onChange={(e) => setNights(e.target.value)} required>
//             <option value="1 Night">1 Night</option>
//             <option value="2 Nights">2 Nights</option>
//             <option value="3 Nights">3 Nights</option>
//           </Select>
//         </InputDiv>
//       )}

//       <BtnDiv>
//         <Btn type="submit">Submit</Btn>
//       </BtnDiv>
//     </Form>
//   );
// };

// export default RsvpForm;

import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  margin: auto;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;

const Radio = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #060a90;
  border-radius: 4px;
  outline: none;
  background: transparent;
  font-family: inherit;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #060a90;
  border-radius: 4px;
  background: transparent;
  outline: none;
  font-family: inherit;
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 9rem;
  height: 2.5rem;
  box-shadow: 1px 1px white, 2px 2px #060a90;
  font-family: inherit;
`;

const RsvpForm = () => {
  const [attending, setAttending] = useState("No");
  const [needsHotel, setNeedsHotel] = useState("No");
  const [nights, setNights] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [presence, setPresence] = useState("Onsite");
  const [guestOf, setGuestOf] = useState("Ayomide");
  const [origin, setOrigin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      attending,
      name,
      email,
      phone,
      presence,
      guestOf,
      origin,
      needsHotel,
      nights,
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzj6Fma5hdXY6ZvnKUduQHuIuEB2jM13NmJd5U7dI_MLZ3ARZvnUy9SLVYob0_XhkvH/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );

      toast.success("Submitted successfully!");
      e.target.reset();
      setAttending("No");
      setNeedsHotel("No");
      setNights("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Try again.");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          <Label>Will You Be Attending?</Label>
          <Radio>
            <label>
              <Input
                type="radio"
                name="attending"
                value="Yes"
                required
                onChange={() => {
                  setAttending("Yes");
                }}
              />{" "}
              Yes
            </label>
            <label>
              <Input
                type="radio"
                name="attending"
                value="No"
                required
                onChange={() => {
                  setAttending("No");
                }}
              />{" "}
              No
            </label>
          </Radio>
        </InputDiv>

        <InputDiv>
          <Label>Your Full Name</Label>
          <Input
            type="text"
            name="fullName"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputDiv>

        <InputDiv>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputDiv>

        <InputDiv>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </InputDiv>

        <InputDiv>
          <Label>Onsite/Virtual</Label>
          <Select
            name="presence"
            required
            onChange={(e) => {
              setPresence(e.target.value);
            }}
          >
            <option value="Onsite">Onsite</option>
            <option value="Virtual">Virtual</option>
          </Select>
        </InputDiv>

        <InputDiv>
          <Label>Whose Guest Are You?</Label>
          <Select
            name="guestOf"
            required
            onChange={(e) => {
              setGuestOf(e.target.value);
            }}
          >
            <option value="Ayomide">Ayomide</option>
            <option value="David">David</option>
            <option value="Groom's Parent">Groom’s Parent</option>
            <option value="Bride's Parent">Bride’s Parent</option>
          </Select>
        </InputDiv>

        <InputDiv>
          <Label>Where are you traveling from?</Label>
          <Input
            type="text"
            name="origin"
            required
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
          />
        </InputDiv>

        <InputDiv>
          <Label>Do you need a Hotel Accommodation?</Label>
          <Radio>
            <label>
              <Input
                type="radio"
                name="hotel"
                value="Yes"
                onChange={() => setNeedsHotel("Yes")}
              />{" "}
              Yes
            </label>
            <label>
              <Input
                type="radio"
                name="hotel"
                value="No"
                onChange={() => {
                  setNeedsHotel("No");
                  setNights("");
                }}
              />{" "}
              No
            </label>
          </Radio>
        </InputDiv>

        {needsHotel === "Yes" && (
          <InputDiv>
            <Label>Select how many nights</Label>
            <Select onChange={(e) => setNights(e.target.value)} required>
              <option value="">-- Select --</option>
              <option value="1 Night">1 Night</option>
              <option value="2 Nights">2 Nights</option>
              <option value="3 Nights">3 Nights</option>
            </Select>
          </InputDiv>
        )}

        <BtnDiv>
          <Btn type="submit">Submit</Btn>
        </BtnDiv>
      </Form>
      <ToastContainer position="top-center" />
    </>
  );
};

export default RsvpForm;
