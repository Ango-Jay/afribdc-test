import CustomText from '@/components/shared/Text';
import {appColors} from '@/constants/Colors';
import {Tabs} from 'expo-router';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import HomeIcon from '@/assets/icons/home_tab.svg';
import WalletIcon from '@/assets/icons/wallet_tab.svg';
import OrdersIcon from '@/assets/icons/orders_tab.svg';
import CardsIcon from '@/assets/icons/cards_tab.svg';

const TabText = ({color, title}: {color: string; title: string}) => {
  return (
    <CustomText size={12} style={[{color}]}>
      {title}
    </CustomText>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: [tabBarStyle.tabStyle],
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.secondary,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                fill={focused ? appColors.primary : appColors.secondary}
              />
            );
          },
          tabBarLabel: ({color}) => <TabText title="Home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <WalletIcon
                stroke={focused ? appColors.primary : appColors.secondary}
              />
            );
          },
          tabBarLabel: ({color}) => <TabText title="Wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <OrdersIcon
                fill={focused ? appColors.primary : appColors.secondary}
              />
            );
          },
          tabBarLabel: ({color}) => <TabText title="Orders" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CardsIcon
                stroke={focused ? appColors.primary : appColors.secondary}
              />
            );
          },
          tabBarLabel: ({color}) => <TabText title="Cards" color={color} />,
        }}
      />
    </Tabs>
  );
};
const tabBarStyle = StyleSheet.create({
  iconsize: {
    width: scale(42),
    height: scale(42),
  },
  tabStyle: {
    paddingTop: 0,
    height: scale(55),
    alignItems: 'center',
    marginTop: 0,
    borderTopWidth: 0,
    backgroundColor: '#FFF',
  },
  tabBarLabelStyle: {
    fontWeight: 'bold',
  },
});

export default TabLayout;
