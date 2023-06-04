// import { StyledLink, Header, AuthNav, AuthLink } from './Navigation.styled';
import { data } from '../../instruments/data';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/usersOperations';

import picture from '../../images/picture.png';
import logo from '../../images/logo.svg';
import {
  Section,
  Card,
  Img,
  Avatar,
  Line,
  FollowButton,
} from './Tweets.styled';

export default function Tweets() {
  const dispatch = useDispatch();
  // useEffect(() =>)

  return (
    <Section>
      {data.map(({ name, avatar, tweets, id, followers }) => {
        return (
          <Card key={id}>
            <Img src={logo} alt="logo" width="76" height="22" />
            <Img src={picture} alt="background picture" width={308} />
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
