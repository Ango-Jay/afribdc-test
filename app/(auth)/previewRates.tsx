import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import CustomText from '@/components/shared/Text';
import RateTile from '@/components/shared/utils/RateTile';
import {appColors} from '@/constants/Colors';
import globalUtilStyles from '@/styles';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {FlashList} from '@shopify/flash-list';
import {router} from 'expo-router';
import {View} from 'react-native';

export default function PreviewRates() {
  return (
    <LayoutWithoutScroll backgroundColor={appColors['background-light-gray']}>
      <View style={[globalUtilStyles.flex1, globalUtilStyles.pb10]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb6,
          ]}>
          <BackButton style={[globalUtilStyles.absolute]} />
          <CustomText size={20} style={[globalUtilStyles.mxauto]}>
            Exchange Rates
          </CustomText>
        </View>
        <CustomText>Live exchange rates</CustomText>
        <View
          style={[
            globalUtilStyles.flex1,
            bgColorStyle.white,
            globalUtilStyles.roundedmd,
            globalUtilStyles.mt4,
            globalUtilStyles.px3,
            globalUtilStyles.py4,
            globalUtilStyles.gap4,
          ]}>
          <FlashList
            data={MOCK_DATA}
            keyExtractor={({id}) => `${id}`}
            renderItem={({item}) => <RateTile details={item} />}
            estimatedItemSize={66.5}
          />
        </View>
        <View style={[globalUtilStyles.wfull, globalUtilStyles.my4]}>
          <CustomButton
            onPress={() => router.push('/(auth)/(signup)/phoneNumber')}
            text="Get started"
          />
        </View>
        <View style={[globalUtilStyles.itemsCenter]}>
          <CustomText weight={500}>
            Already have an account?{' '}
            <CustomText
              onPress={() => router.push('/login')}
              weight={500}
              style={[textColorStyle.highlight]}>
              Login
            </CustomText>
          </CustomText>
        </View>
      </View>
    </LayoutWithoutScroll>
  );
}
const MOCK_DATA = [
  {
    id: 1,
    name: 'User 1',
    send: 'USD',
    recieve: 'CAD',
    rate: 1.43,
    type: 'Selling',
  },
  {
    id: 2,
    name: 'User 2',
    send: 'CAD',
    recieve: 'KSH',
    rate: 90.5,
    type: 'Buying',
  },
  {
    id: 3,
    name: 'User 3',
    send: 'USD',
    recieve: 'NGN',
    rate: 1490,
    type: 'Selling',
  },
  {
    id: 4,
    name: 'User 4',
    send: 'USD',
    recieve: 'NGN',
    rate: 1490,
    type: 'Selling',
  },
  {
    id: 5,
    name: 'User 5',
    send: 'NGN',
    recieve: 'NGN',
    rate: 1,
    type: 'Selling',
  },
  {
    id: 6,
    name: 'User 6',
    send: 'USD',
    recieve: 'NGN',
    rate: 1490,
    type: 'Buying',
  },
  {
    id: 7,
    name: 'User 7',
    send: 'USD',
    recieve: 'NGN',
    rate: 1490,
    type: 'Selling',
  },
  {
    id: 8,
    name: 'User 8',
    send: 'KSH',
    recieve: 'NGN',
    rate: 90,
    type: 'Buying',
  },
  {
    id: 9,
    name: 'User 9',
    send: 'CAD',
    recieve: 'NGN',
    rate: 1700,
    type: 'Buying',
  },
];
