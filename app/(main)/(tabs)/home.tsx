import CustomButton from '@/components/shared/Button';
import CustomPressable from '@/components/shared/Button/Pressable';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import RateTile from '@/components/shared/utils/RateTile';
import WalletBalance from '@/components/shared/utils/WalletBalance';
import globalUtilStyles from '@/styles';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import NotificationIcon from '@/assets/icons/notification.svg';
import UserIcon from '@/assets/icons/user_color.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import SwapIcon from '@/assets/icons/swap.svg';
import BuySellIcon from '@/assets/icons/buy_sell.svg';
import WithdrawIcon from '@/assets/icons/withdraw.svg';

export default function Home() {
  return (
    <LayoutWithScroll backgroundColor="#EEEEEF">
      <View style={[globalUtilStyles.flex1, globalUtilStyles.pb10]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.justifyBetween,
            globalUtilStyles.mb4,
          ]}>
          <UserIcon />
          <CustomText size={22} weight={500}>
            Welcome back, Walter
          </CustomText>
          <CustomPressable>
            <NotificationIcon />
          </CustomPressable>
        </View>
        <View style={[globalUtilStyles.gap2]}>
          <CustomButton
            containerStyle={[
              {
                width: scale(160),
              },
            ]}
            style={[bgColorStyle.yellow]}
            textStyle={{
              size: 15,
              weight: 500,
              style: [],
            }}
            text="Complete ID Check"
          />
          <CustomText size={13} weight={500} style={[textColorStyle.gray]}>
            Verify your identity to access full features
          </CustomText>
          <WalletBalance />
          <View
            style={[
              globalUtilStyles.flexRow,
              globalUtilStyles.gap3,
              globalUtilStyles.flexWrap,
              globalUtilStyles.justifySpaceAround,
              globalUtilStyles.mt4,
            ]}>
            {quickActions.map(item => (
              <CustomPressable
                key={item.text}
                style={[globalUtilStyles.gap2, globalUtilStyles.itemsCenter]}>
                <View
                  style={[
                    {
                      width: scale(55),
                      height: scale(55),
                      backgroundColor: '#FFF',
                      borderRadius: scale(5),
                    },
                    globalUtilStyles.itemsCenter,
                    globalUtilStyles.justifyCenter,
                  ]}>
                  {item.icon}
                </View>
                <CustomText size={13}>{item.text}</CustomText>
              </CustomPressable>
            ))}
          </View>
        </View>
        <View style={[globalUtilStyles.mt6]}>
          <View
            style={[
              globalUtilStyles.flexRow,
              globalUtilStyles.itemsCenter,
              globalUtilStyles.justifyBetween,
              globalUtilStyles.mb4,
            ]}>
            <CustomText size={18} weight={500}>
              Sell Offers
            </CustomText>
            <CustomText style={[textColorStyle.highlight]}>see all</CustomText>
          </View>
          <View
            style={[
              bgColorStyle.white,
              globalUtilStyles.roundedmd,
              globalUtilStyles.py4,
              globalUtilStyles.px3,
              globalUtilStyles.gap2,
            ]}>
            {MOCK_DATA.map(offer => (
              <RateTile key={offer.id} details={offer} />
            ))}
          </View>
        </View>
      </View>
    </LayoutWithScroll>
  );
}

const quickActions = [
  {
    icon: <PlusIcon />,
    text: 'Fund wallet',
    action: () => {},
  },
  {
    icon: <SwapIcon />,
    text: 'Swap',
    action: () => {},
  },
  {
    icon: <BuySellIcon />,
    text: 'Buy/Sell',
    action: () => {},
  },
  {
    icon: <WithdrawIcon />,
    text: 'Withdraw',
    action: () => {},
  },
];
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
    rate: 190,
    type: 'Selling',
  },
  {
    id: 5,
    name: 'User 5',
    send: 'USD',
    recieve: 'NGN',
    rate: 1990,
    type: 'Selling',
  },
];
