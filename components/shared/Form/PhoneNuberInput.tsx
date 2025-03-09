import {appColors} from '@/constants/Colors';
import globalUtilStyles from '@/styles';
import {Dispatch, SetStateAction, useCallback, useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  TouchableHighlight,
  View,
  type TextInputProps,
  ViewStyle,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import CustomTextInput, {inputStyle} from './CustomInput';
import CustomPressable from '../Button/Pressable';
import ChevronIcon from '@/assets/icons/chevron.svg';
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from '@/constants';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';
import CustomText from '../Text';
import CustomImage from '../Image';
import {scale} from 'react-native-size-matters';
import {
  type Country,
  useGetCountries,
} from '@/services/queries/useGetCountries';
import BackButton from '../Button/BackButton';
import ModalWrapper from '../utils/ModalWrapper';

type PhoneNumber = {
  countryCode: string;
  callingCode: string;
  number: string;
};
interface Props extends TextInputProps {
  phoneNumber: PhoneNumber;
  setPhoneNumber: Dispatch<SetStateAction<PhoneNumber>>;
  isTouched?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
}
const PhoneNumberInput = ({
  phoneNumber,
  setPhoneNumber,
  errorMessage,
  ...props
}: Props) => {
  const setCallingAndCountryCode = (
    callingCode: string,
    countryCode: string,
  ) => {
    setPhoneNumber(prev => ({
      ...prev,
      callingCode: callingCode,
      countryCode: countryCode,
    }));
  };
  const setPhoneNumberInput = (val: string) => {
    setPhoneNumber(prev => ({
      ...prev,
      number: val,
    }));
  };
  return (
    <View
      style={[
        globalUtilStyles.flexRow,
        globalUtilStyles.gap2,
        globalUtilStyles.wfull,
        inputStyle.inputContainerHeight,
      ]}>
      <CountrySelect
        country={{
          callingCode: phoneNumber.callingCode,
          countryCode: phoneNumber.countryCode,
        }}
        setCountry={setCallingAndCountryCode}
      />
      <CustomTextInput
        {...props}
        value={phoneNumber.number}
        onChangeText={setPhoneNumberInput}
        containerStyle={[globalUtilStyles.flex1] as unknown as ViewStyle}
        errorMessage={errorMessage}
      />
    </View>
  );
};

interface CountrySelectProps {
  country: {
    callingCode: string;
    countryCode: string;
  };
  setCountry: (callingCode: string, countryCode: string) => void;
}
const CountrySelect = ({country, setCountry}: CountrySelectProps) => {
  const [showModal, setShowModal] = useState(false);
  const countries = useGetCountries();
  const activeCountry = countries.find(item => item.id === country.countryCode);
  return (
    <>
      <View
        style={[
          {width: '30%', minWidth: scale(100)},
          globalUtilStyles.roundedlg,
          globalUtilStyles.hfull,
          globalUtilStyles.boxShadow,
        ]}>
        <CustomPressable
          style={[
            globalUtilStyles.hfull,
            globalUtilStyles.flexRow,
            globalUtilStyles.gap2,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.roundedlg,
            globalUtilStyles.px3,
            globalUtilStyles.py2,
          ]}
          onPress={() => setShowModal(true)}>
          <CustomImage
            source={{uri: activeCountry?.icon}}
            style={[
              styles.countryFlagImage,
              globalUtilStyles.borderhalf,
              borderColorStyle['light-gray'],
            ]}
            isVisible={!activeCountry}
          />
          <CustomText style={[textColorStyle.gray]}>
            +{country.callingCode}
          </CustomText>
          <ChevronIcon />
        </CustomPressable>
      </View>

      <ModalWrapper
        isModalOpen={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        modalHeight={MODAL_HEIGHT}>
        {showModal && (
          <CountryListModal
            selectItem={option => {
              setCountry(option.callingCode, option.id);
            }}
            options={countries}
            closeModal={() => {
              setShowModal(false);
            }}
          />
        )}
      </ModalWrapper>
    </>
  );
};

interface CountryListModalProps {
  selectItem: (option: Country) => void;
  options: Country[];
  closeModal: () => void;
}
const MODAL_HEIGHT = (SCREEN_HEIGHT - STATUSBAR_HEIGHT) * 0.6;
export const CountryListModal = ({
  selectItem,
  options,
  closeModal,
}: CountryListModalProps) => {
  const ViewHeight = useSharedValue(MODAL_HEIGHT);
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
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Country>) => (
      <CountryItem
        item={item}
        onSelect={() => {
          selectItem(item);
          setSearchText('');
          setFilteredOptions(options);
          Keyboard.dismiss();
          closeModal();
        }}
      />
    ),
    [],
  );
  return (
    <Animated.View
      style={[
        globalUtilStyles.flex1,
        bgColorStyle.white,
        globalUtilStyles.roundedtxl,
        globalUtilStyles.px4,
        globalUtilStyles.pt6,
        globalUtilStyles.pb8,
        globalUtilStyles.wfull,
        {height: ViewHeight, maxHeight: ViewHeight, minHeight: 20},
      ]}>
      <View style={[globalUtilStyles.wfull]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.wfull,
          ]}>
          <BackButton onPress={closeModal} style={globalUtilStyles.absolute} />
          <CustomText weight={500} style={[globalUtilStyles.mxauto]}>
            Select a Country
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
            placeholder={'Search for country'}
            isSearch
          />
        </View>
      </View>
      <View style={[globalUtilStyles.flex1]}>
        <FlatList
          keyboardShouldPersistTaps="handled"
          keyExtractor={item => item.id}
          data={filteredOptions}
          renderItem={renderItem}
          ListEmptyComponent={
            <CustomText style={[globalUtilStyles.textCenter]}>
              No country found
            </CustomText>
          }
        />
      </View>
    </Animated.View>
  );
};
interface RenderCountryListProps {
  item: Country;
  onSelect: () => void;
}
const CountryItem = ({item, onSelect}: RenderCountryListProps) => (
  <TouchableHighlight
    onPress={onSelect}
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
            styles.countryFlagImage,
            globalUtilStyles.borderhalf,
            borderColorStyle['light-gray'],
          ]}
        />
      )}
      <CustomText>{item.name}</CustomText>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  countryFlagImage: {
    width: scale(20),
    height: scale(15),
  },
});
export default PhoneNumberInput;
