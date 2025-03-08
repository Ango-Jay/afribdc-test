import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import {PinFieldGroup, PinKeypad} from '@/components/shared/Form/Pin';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import {displayToast} from '@/components/shared/toast-utils/displayToast';
import globalUtilStyles from '@/styles';
import {router} from 'expo-router';
import {useState} from 'react';
import {View} from 'react-native';

export default function SetupPin() {
  const [pin, setPin] = useState<string[]>([]);
  const onSubmit = () => {
    displayToast({
      type: 'success',
      message: 'Pin setup complete',
    });
    router.push('/login');
  };
  const isSubmitButtonDisabled = pin.length < 4;
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb10,
          ]}>
          <BackButton style={[globalUtilStyles.absolute]} />
          <CustomText size={20} style={[globalUtilStyles.mxauto]}>
            Set Your Pin
          </CustomText>
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb10,
          ]}>
          <CustomText
            style={[
              globalUtilStyles.textCenter,
              {
                width: '95%',
              },
            ]}>
            Set up your 4 digit pin to make your account more secure. You’ll be
            asked to enter this pin when making transcations.
          </CustomText>
        </View>
        <View style={[globalUtilStyles.gap6]}>
          <PinFieldGroup type="pin" pin={pin} maxLength={4} />
          <View style={[globalUtilStyles.wfull]}>
            <CustomButton
              disabled={isSubmitButtonDisabled}
              onPress={onSubmit}
              text="Proceed"
            />
          </View>
          <PinKeypad pin={pin} setPin={setPin} maxLength={4} />
        </View>
      </View>
    </LayoutWithScroll>
  );
}
