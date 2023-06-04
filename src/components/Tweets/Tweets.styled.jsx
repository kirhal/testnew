import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Card = styled.div`
  width: 380px;
  text-align: center;
  padding: 28px 0 36px 0;

  background-image: linear-gradient(
    to top,
    rgba(71, 28, 169, 1),
    rgba(87, 54, 163, 1),
    rgba(75, 42, 153, 1)
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 8px solid rgba(235, 216, 255, 1);
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 8px;
  background-color: rgba(235, 216, 255, 1);
  box-shadow: inset 0 3px 2px 0 rgba(251, 248, 255, 1),
    inset 0 -2px 3pxem 0 rgba(174, 123, 227, 1);
`;

export const FollowButton = styled.button`
  width: 196px;
  margin: 0;
  padding: 14px 0;
  cursor: pointer;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: rgba(55, 55, 55, 1);
`;

// export const UserEmail = styled.p`
//   margin-right: 5px;
//   display: block;
//   font-size: 16px;
// `;

// export const Button = styled.button`
//   padding: 5px 0;
//   cursor: pointer;

//   width: 70px;

//   border: 1px solid rgb(11, 51, 78);
//   border-radius: 5px;

//   background-color: rgb(255, 255, 255);

//   font-weight: 400;
//   font-size: 14px;

//   color: rgb(11, 51, 78);

//   &:hover {
//     color: white;
//     border: 1px solid rgb(11, 51, 78);
//     background-color: rgb(11, 51, 78);
//   }
// `;
