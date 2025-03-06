import {Dispatch, SetStateAction, useEffect} from 'react';
import DeleteIcon from '@/assets/icons/delete_keyboard.svg';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import globalUtilStyles from '@/styles';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';
import CustomPressable from '../Button/Pressable';
import CustomText from '../Text';
import {MulishFontStyle} from '@/styles/fonts';
import * as Clipboard from 'expo-clipboard';

interface PinKeyPadProps {
  pin: string[];
  setPin: Dispatch<SetStateAction<string[]>>;
  maxLength: number;
  allowPaste?: boolean;
}
export const PinKeypad = ({
  pin,
  setPin,
  maxLength,
  allowPaste,
}: PinKeyPadProps) => {
  useEffect(() => {
    const pasteCopiedPin = async () => {
      const text = await Clipboard.getStringAsync();
      if (text.length === maxLength && /^\d+$/.test(`${text}`)) {
        setPin([...text]);
      }
    };
    if (allowPaste) {
      pasteCopiedPin();
    }
  }, []);
  const vals = [
    {
      val: '1',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '1']);
        }
      },
    },
    {
      val: '2',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '2']);
        }
      },
    },
    {
      val: '3',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '3']);
        }
      },
    },
    {
      val: '4',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '4']);
        }
      },
    },
    {
      val: '5',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '5']);
        }
      },
    },
    {
      val: '6',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '6']);
        }
      },
    },
    {
      val: '7',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '7']);
        }
      },
    },
    {
      val: '8',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '8']);
        }
      },
    },
    {
      val: '9',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '9']);
        }
      },
    },
    {
      val: <View></View>,
      isNum: false,
      onPress: () => {},
    },
    {
      val: '0',
      isNum: true,
      onPress: () => {
        if (pin.length < maxLength) {
          setPin(prev => [...prev, '0']);
        }
      },
    },
    {
      val: <DeleteIcon />,

      isNum: false,
      onPress: () => {
        if (pin.length !== 0) {
          setPin(val => val?.slice(0, val?.length - 1));
        }
      },
    },
  ];
  return (
    <>
      <View
        style={[
          globalUtilStyles.wfull,
          globalUtilStyles.flexRow,
          globalUtilStyles.justifyBetween,
          globalUtilStyles.flexWrap,
        ]}>
        {vals.map(({isNum, onPress, val}, index) => (
          <View key={`${index}`} style={[{width: '30%'}]}>
            <CustomPressable
              disabled={pin.length === maxLength && isNum}
              style={[
                globalUtilStyles.justifyCenter,
                globalUtilStyles.itemsCenter,
                globalUtilStyles.wfull,
                {
                  height: scale(60),
                },
              ]}
              onPress={onPress}>
              {isNum && (
                <CustomText
                  size={18}
                  style={[
                    textColorStyle['keypad-gray'],
                    MulishFontStyle.MulishExtraBold,
                  ]}>
                  {val}
                </CustomText>
              )}
              {!isNum && val}
            </CustomPressable>
          </View>
        ))}
      </View>
    </>
  );
};

interface PinFieldGroupProps {
  pin: string[];
  maxLength: number;
  type: 'pin' | 'otp';
}
export const PinFieldGroup = ({pin, maxLength, type}: PinFieldGroupProps) => {
  const isPin = type === 'pin';
  const fields = Array.from({length: maxLength}, (_, index) => index);
  return (
    <View
      style={[
        globalUtilStyles.wfull,
        globalUtilStyles.flexRow,
        globalUtilStyles.justifyCenter,
        globalUtilStyles.gap3,
      ]}>
      {fields.map(field => (
        <View
          key={field}
          style={[
            isPin ? styles.pinContainer : styles.otpContainer,
            globalUtilStyles.p3,
            isPin ? globalUtilStyles.roundedfull : globalUtilStyles.roundedmd,
            globalUtilStyles.justifyCenter,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.border1,
            borderColorStyle.gray,
          ]}>
          {pin[field] &&
            (isPin ? (
              <View
                style={[
                  globalUtilStyles.wfull,
                  globalUtilStyles.hfull,
                  globalUtilStyles.roundedfull,
                  bgColorStyle.primary,
                ]}
              />
            ) : (
              <CustomText
                size={20}
                weight={500}
                style={[textColorStyle.secondary]}>
                {pin[field]}
              </CustomText>
            ))}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  pinContainer: {
    width: scale(46),
    height: scale(46),
  },
  otpContainer: {
    width: scale(45),
    height: verticalScale(60),
  },
});
