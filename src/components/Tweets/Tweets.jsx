// import { StyledLink, Header, AuthNav, AuthLink } from './Navigation.styled';
import { data } from '../../instruments/data';
import {
  Section,
  Card,
  Img,
  Avatar,
  Line,
  FollowButton,
} from './Tweets.styled';

export default function Tweets() {
  // const isLoggedIn = useSelector(getLogging);

  return (
    <Section>
      {data.map(({ name, avatar, tweets, id, followers }) => {
        return (
          <Card key={id}>
            {/* <svg width="76" height="22">
              <use href=""></use>
            </svg> */}
            <Img
              //   src="images/pic2.jpg"
              src="https://i.ibb.co/S5Hw0TN/picture2-1.jpg"
              alt=""
              width={308}
            />
            <Line></Line>
            <Avatar src={avatar} alt="avatar" />
            <p>{name}</p>
            <p>{tweets}</p>
            <p>{followers}</p>
            <FollowButton id={id} type="button">
              Follow
            </FollowButton>
          </Card>
        );
      })}
    </Section>
  );
}
