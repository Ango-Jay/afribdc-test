import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import PhoneNumberInput from '@/components/shared/Form/PhoneNuberInput';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {textColorStyle} from '@/styles/color';
import {useState} from 'react';
import {View} from 'react-native';

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState({
    countryCode: 'NG',
    callingCode: '234',
    number: '',
  });
  return (
    <LayoutWithoutScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View>
          <BackButton />
        </View>
        <View style={[globalUtilStyles.itemsCenter, globalUtilStyles.mt10]}>
          <View style={[globalUtilStyles.pt10, globalUtilStyles.gap2]}>
            <CustomText
              size={28}
              weight={500}
              style={[globalUtilStyles.textCenter]}>
              Enter Phone number
            </CustomText>
            <CustomText
              weight={500}
              style={[textColorStyle.gray, globalUtilStyles.textCenter]}>
              We'll send you a verification code
            </CustomText>
          </View>
          <View style={[globalUtilStyles.mt10, globalUtilStyles.wfull]}>
            <PhoneNumberInput
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          </View>
          <View style={[globalUtilStyles.wfull, globalUtilStyles.mt10]}>
            <CustomButton text="Continue" />
          </View>
        </View>
      </View>
    </LayoutWithoutScroll>
  );
}
