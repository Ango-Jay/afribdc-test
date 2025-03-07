import globalUtilStyles from '@/styles';
import {LinearGradient} from 'expo-linear-gradient';
import {View} from 'react-native';
import CustomText from '../Text';
import {textColorStyle} from '@/styles/color';
import CustomPressable from '../Button/Pressable';
import EyeOpenIcon from '@/assets/icons/eye.svg';
import EyeClosedIcon from '@/assets/icons/eye_closed.svg';
import {useState} from 'react';
import WalletIcon from '@/assets/icons/wallet_tab.svg';
import {scale} from 'react-native-size-matters';

const balance = 0;
const WalletBalance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const togglePassword = () => setShowBalance(prev => !prev);
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#0D3D2E', '#22A37C']}
      locations={[0.1, 0.9]}
      start={{x: 0, y: 0}}
      style={[
        globalUtilStyles.flexRow,
        globalUtilStyles.itemsCenter,
        globalUtilStyles.wfull,
        globalUtilStyles.py4,
        globalUtilStyles.px4,
        globalUtilStyles.roundedlg,
        // {
        //     padding
        //     paddingRight: scale(16)
        // }
      ]}>
      <CustomPressable
        style={[
          {
            width: scale(48),
            height: scale(48),
            left: scale(16),
          },
          globalUtilStyles.absolute,
        ]}>
        <WalletIcon stroke={'#FFF'} width={'100%'} height={'100%'} />
      </CustomPressable>
      <View style={[globalUtilStyles.mxauto]}>
        <CustomText
          size={14}
          weight={500}
          style={[textColorStyle.white, globalUtilStyles.textCenter]}>
          Current balance
        </CustomText>
        <View style={[globalUtilStyles.flexRow, globalUtilStyles.itemsCenter]}>
          <CustomText
            weight={500}
            size={24}
            style={[textColorStyle.white, globalUtilStyles.mr1]}>
            CAD.
          </CustomText>
          <CustomText size={24} weight={500} style={[textColorStyle.white]}>
            {balance}
          </CustomText>
          <CustomPressable
            style={[globalUtilStyles.ml2]}
            hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
            onPress={togglePassword}>
            {showBalance ? (
              <EyeClosedIcon fill={'#FFF'} width={16} height={16} />
            ) : (
              <EyeOpenIcon
                stroke={'#FFF'}
                strokeWidth={2}
                width={16}
                height={16}
              />
            )}
          </CustomPressable>
        </View>
      </View>
    </LinearGradient>
  );
};
export default WalletBalance;
