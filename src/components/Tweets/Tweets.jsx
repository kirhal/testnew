// import { StyledLink, Header, AuthNav, AuthLink } from './Navigation.styled';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/usersOperations';
import { getContactsList } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { formatNumber } from '../../instruments/formatNumbers';

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
  const users = useSelector(getContactsList);

  const handleButton = () => {};

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Section>
      {users.map(({ name, avatar, tweets, id, followers }) => {
        return (
          <Card key={id}>
            <Img src={logo} alt="logo" width="76" height="22" />
            <Img src={picture} alt="background picture" width={308} />
            <Line></Line>
            <Avatar src={avatar} alt="avatar" />
            <p>{name}</p>
            <p>{tweets} tweets</p>
            <p>{formatNumber(followers)} followers</p>
            <FollowButton
              id={id}
              type="button"
              onClick={() => {
                handleButton();
              }}
            >
              Follow
            </FollowButton>
          </Card>
        );
      })}
    </Section>
  );
}
