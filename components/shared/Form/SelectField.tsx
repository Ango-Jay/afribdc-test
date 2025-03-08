import {appColors} from '@/constants/Colors';
import {useEffect, useState} from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CustomText from '../Text';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';
import globalUtilStyles from '@/styles';
import {MotiView} from 'moti';
import CustomTextInput, {inputStyle} from './CustomInput';
import CaretIcon from '@/assets/icons/caret_solid.svg';
import CustomPressable from '../Button/Pressable';
import {FlashList} from '@shopify/flash-list';
import RNModal from 'react-native-modal';
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from '@/constants';
import {Keyboard, TouchableHighlight, View} from 'react-native';
import BackButton from '../Button/BackButton';
import CustomImage from '../Image';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

interface Props {
  labelTitle: string;
  value: string;
  options: Option[];
  selectOption: (value: string, option?: Option) => void;
  placeholder?: string;
  errorMessage?: string;
}
const SelectField = ({
  labelTitle,
  value,
  options,
  selectOption,
  placeholder,
  errorMessage,
}: Props) => {
  const [show, setShow] = useState(false);
  const animationValue = useSharedValue(0);
  useEffect(() => {
    if (errorMessage) {
      animationValue.value = withTiming(1);
    } else {
      animationValue.value = withTiming(0);
    }
  }, [errorMessage, animationValue]);
  const animatedContainerStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [0, 0.2, 0.4, 0.8, 1],
      [0, -4, 0, 4, 0],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      borderWidth: withTiming(errorMessage ? 0.5 : 0, {
        duration: 400,
      }),
      borderColor: withTiming(errorMessage ? appColors.error : 'transparent', {
        duration: 400,
      }),
      shadowColor: withTiming(errorMessage ? appColors.error : '#000'),
    };
  });
  return (
    <>
      <Animated.View style={[animatedContainerStyle]}>
        {labelTitle && (
          <CustomText
            size={14}
            weight={500}
            style={[textColorStyle.secondary, globalUtilStyles.mb2]}>
            {labelTitle}
          </CustomText>
        )}
        <MotiView
          transition={{
            type: 'timing',
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }}
          style={[
            globalUtilStyles.roundedlg,
            inputStyle.inputContainerHeight,
            globalUtilStyles.boxShadow,
            animatedBorderStyle,
          ]}>
          <CustomPressable
            onPress={() => {
              setShow(true);
            }}
            style={[
              globalUtilStyles.wfull,
              globalUtilStyles.hfull,
              globalUtilStyles.flexRow,
              globalUtilStyles.justifyBetween,
              globalUtilStyles.itemsCenter,
              globalUtilStyles.gap3,
              globalUtilStyles.roundedlg,
              globalUtilStyles.px3,
              globalUtilStyles.py2,
            ]}>
            <CustomText size={13} style={[!value && textColorStyle.gray]}>
              {value ? value : placeholder}
            </CustomText>
            <CaretIcon />
          </CustomPressable>
        </MotiView>
      </Animated.View>
      {show && (
        <OptionsList
          isModalOpen={show}
          closeModal={() => setShow(false)}
          options={options}
          selectOption={selectOption}
        />
      )}
    </>
  );
};

interface OptionsListProps {
  isModalOpen: boolean;
  closeModal: () => void;
  options: Option[];
  selectOption: (value: string, option?: Option) => void;
}
const OptionsList = ({
  isModalOpen,
  closeModal,
  options,
  selectOption,
}: OptionsListProps) => {
  const ViewHeight = useSharedValue((SCREEN_HEIGHT - STATUSBAR_HEIGHT) * 0.6);
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const handleChangeSearchText = (value: string) => {
    setSearchText(value);
    if (value) {
      const lowerCaseValue = value.toLowerCase();
      setFilteredOptions(
        options.filter(item =>
          item.name.toLowerCase().includes(lowerCaseValue),
        ),
      );
    }
  };
  return (
    <RNModal
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      isVisible={isModalOpen}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      backdropOpacity={0.2}
      backdropColor="#101010"
      deviceHeight={SCREEN_HEIGHT - STATUSBAR_HEIGHT}
      onBackdropPress={() => closeModal()}
      statusBarTranslucent
      swipeDirection={'down'}
      onSwipeComplete={closeModal}>
      {/* <DismissKeyboard> */}
      <Animated.View
        style={[
          globalUtilStyles.flex1,
          bgColorStyle.white,
          globalUtilStyles.roundedxl,
          globalUtilStyles.px4,
          globalUtilStyles.pt6,
          globalUtilStyles.pb8,
          {maxHeight: ViewHeight},
        ]}>
        <View style={[globalUtilStyles.wfull]}>
          <View
            style={[
              globalUtilStyles.flexRow,
              globalUtilStyles.itemsCenter,
              globalUtilStyles.wfull,
            ]}>
            <BackButton
              onPress={closeModal}
              style={globalUtilStyles.absolute}
            />
            <CustomText weight={500} style={[globalUtilStyles.mxauto]}>
              Select option
            </CustomText>
          </View>
          <View style={[globalUtilStyles.wfull, globalUtilStyles.my4]}>
            <CustomTextInput
              value={searchText}
              onFocus={() => {
                ViewHeight.value = withTiming(SCREEN_HEIGHT * 0.95);
              }}
              onBlur={() => {
                ViewHeight.value = withTiming(SCREEN_HEIGHT * 0.6);
              }}
              onChangeText={handleChangeSearchText}
              placeholder={'Search for option'}
              isSearch
            />
          </View>
        </View>
        <FlashList
          keyboardShouldPersistTaps="handled"
          keyExtractor={item => item.id}
          data={filteredOptions}
          estimatedItemSize={58}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => {
                selectOption(item.value, item);
                setSearchText('');
                setFilteredOptions(options);
                Keyboard.dismiss();
                closeModal();
              }}
              underlayColor={appColors['primary-highlight']}
              style={[
                globalUtilStyles.wfull,
                globalUtilStyles.pt4,
                globalUtilStyles.pb4,
                globalUtilStyles.px4,
                globalUtilStyles.borderBottom1,
                borderColorStyle['light-gray'],
              ]}>
              <View
                style={[
                  globalUtilStyles.flex1,
                  globalUtilStyles.gap2,
                  globalUtilStyles.flexRow,
                  globalUtilStyles.itemsCenter,
                ]}>
                {item.icon && (
                  <CustomImage
                    source={{uri: item.icon}}
                    style={[
                      styles.iconDimensions,
                      globalUtilStyles.borderhalf,
                      borderColorStyle['light-gray'],
                    ]}
                  />
                )}
                <CustomText>{item.name}</CustomText>
              </View>
            </TouchableHighlight>
          )}
        />
      </Animated.View>
      {/* </DismissKeyboard> */}
    </RNModal>
  );
};
const styles = StyleSheet.create({
  iconDimensions: {
    width: scale(20),
    height: scale(15),
  },
});
export type Option = {
  id: string;
  name: string;
  value: string;
  icon?: any;
};
export default SelectField;
