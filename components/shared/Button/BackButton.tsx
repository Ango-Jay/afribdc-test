import {StyleSheet, type TouchableOpacityProps} from 'react-native';
import CustomPressable from './Pressable';
import ChevronIcon from '@/assets/icons/chevron.svg';
import {scale} from 'react-native-size-matters';
import globalUtilStyles from '@/styles';
import {router} from 'expo-router';

interface Props extends TouchableOpacityProps {}
const BackButton = ({...props}: Props) => {
  return (
    <CustomPressable
      {...props}
      onPress={e => {
        if (props.onPress) {
          props.onPress(e);
        } else {
          router.back();
        }
      }}
      style={[
        styles.dimensions,
        globalUtilStyles.itemsCenter,
        globalUtilStyles.justifyCenter,
        props.style,
      ]}>
      <ChevronIcon style={[styles.icon]} />
    </CustomPressable>
  );
};
const styles = StyleSheet.create({
  dimensions: {
    width: scale(24),
    height: scale(24),
  },
  icon: {
    transform: [{rotate: '90deg'}],
    width: '100%',
    height: '100%',
  },
});
export default BackButton;
