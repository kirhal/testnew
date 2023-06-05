// import { StyledLink, Header, AuthNav, AuthLink } from './Navigation.styled';
import { useEffect } from 'react';
import { fetchUsers, updateUser } from '../../redux/usersOperations';
import { selectUsersFollowed } from '../../redux/selectors';
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
  Svg,
  Round,
  Text,
} from './Tweets.styled';

export default function Tweets() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersFollowed);

  const handleButton = user => {
    const { id, followers, following } = user;
    const data = { id, followers };
    data.followers += 1;
    dispatch(updateUser(data));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Section>
      {users.map(user => {
        const { avatar, tweets, id, followers, following } = user;
        return (
          <Card key={id}>
            <Svg src={logo} alt="logo" width="76" height="22" />
            <Img src={picture} alt="background picture" width={308} />
            <Line>
              <Round>
                <Avatar src={avatar} alt="avatar" />
              </Round>
            </Line>
            <Text>{tweets} tweets</Text>
            <Text className="margin_bottom">
              {formatNumber(followers)} followers
            </Text>
            <FollowButton
              type="button"
              className={!following ? '' : 'active'}
              onClick={() => {
                handleButton(user);
              }}
            >
              {!following ? 'Follow' : 'Following'}
            </FollowButton>
          </Card>
        );
      })}
    </Section>
  );
}
