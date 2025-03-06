import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import CustomText from '@/components/shared/Text';
import RateTile from '@/components/shared/utils/RateTile';
import {appColors} from '@/constants/Colors';
import globalUtilStyles from '@/styles';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {FlashList} from '@shopify/flash-list';
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
          />
        </View>
        <View style={[globalUtilStyles.wfull, globalUtilStyles.my4]}>
          <CustomButton text="Get started" />
        </View>
        <View style={[globalUtilStyles.itemsCenter]}>
          <CustomText weight={500}>
            Already have an account?{' '}
            <CustomText weight={500} style={[textColorStyle.highlight]}>
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
];
