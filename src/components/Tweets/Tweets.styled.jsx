import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 0;
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
  position: relative;

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
  margin: 0 auto 18px auto;
`;
export const Svg = styled.img`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Line = styled.span`
  margin-bottom: 62px;
  position: relative;
  display: block;
  width: 100%;
  height: 8px;
  background-color: rgba(235, 216, 255, 1);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Round = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -45%);

  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  width: 62px;
  border-radius: 50%;
`;
export const Text = styled.p`
  margin-bottom: 16px;

  &.margin_bottom {
    margin-bottom: 26px;
  }
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
  border-radius: 10px;
  border: none;

  color: rgba(55, 55, 55, 1);
  background-color: rgba(235, 216, 255, 1);

  &:hover,
  &:focus {
    background-color: rgba(92, 211, 168, 1);
  }

  &.active {
    background-color: rgba(92, 211, 168, 1);

    &:hover,
    &:focus {
      background-color: rgba(235, 216, 255, 1);
    }
`;

export const LoadMore = styled.button`
  width: 196px;
  margin: 0;
  padding: 14px 0;
  cursor: pointer;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;
  border-radius: 10px;
  border: none;

  color: rgba(55, 55, 55, 1);
  background-color: rgba(235, 216, 255, 1);

  &:hover,
  &:focus {
    background-color: rgba(92, 211, 168, 1);
  }  
`;
