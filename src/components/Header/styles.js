import styled from 'styled-components/native';
import RNIcon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  align-items: center;
  padding: 40px 0 30px;
  flex-direction: column;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const Logo = styled.Image``;
export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;

const AnimatedIcon = Animated.createAnimatedComponent(RNIcon);
export const Icon = styled(AnimatedIcon)``;
