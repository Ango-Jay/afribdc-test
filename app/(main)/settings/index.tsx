import BackButton from '@/components/shared/Button/BackButton';
import CustomPressable from '@/components/shared/Button/Pressable';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import CustomText from '@/components/shared/Text';
import {appColors} from '@/constants/Colors';
import globalUtilStyles from '@/styles';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import LockIcon from '@/assets/icons/lock.svg';
import EnvelopeIcon from '@/assets/icons/envelope.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import UserIcon from '@/assets/icons/user_stroke.svg';
import PinIcon from '@/assets/icons/pin_code.svg';
import LogoutIcon from '@/assets/icons/logout.svg';
import ChevronIcon from '@/assets/icons/chevron.svg';
import {useState} from 'react';
import LogoutModal from '@/components/LogoutModal';

export default function Settings() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  return (
    <LayoutWithoutScroll backgroundColor={appColors['background-light-gray']}>
      <View style={[globalUtilStyles.flex1, globalUtilStyles.pb10]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb10,
          ]}>
          <BackButton style={[globalUtilStyles.absolute]} />
          <CustomText size={20} style={[globalUtilStyles.mxauto]}>
            Settings
          </CustomText>
        </View>
        <View style={[globalUtilStyles.gap6]}>
          <View style={[globalUtilStyles.gap2]}>
            <CustomText size={13} weight={500}>
              Personal Data
            </CustomText>
            <View
              style={[
                bgColorStyle.white,
                globalUtilStyles.roundedmd,
                globalUtilStyles.py4,
                globalUtilStyles.px3,
                globalUtilStyles.gap3,
              ]}>
              {MOCK_PERSONAL_INFO.map(item => (
                <View
                  key={item.title}
                  style={[
                    globalUtilStyles.flexRow,
                    globalUtilStyles.flexRow,
                    globalUtilStyles.itemsCenter,
                    globalUtilStyles.gap4,
                  ]}>
                  <View
                    style={[
                      {
                        width: scale(30),
                        height: scale(30),
                      },
                      globalUtilStyles.p2,
                      globalUtilStyles.roundedfull,
                      globalUtilStyles.itemsCenter,
                      globalUtilStyles.justifyCenter,
                      bgColorStyle['primary-highlight'],
                    ]}>
                    {item.icon && item.icon}
                  </View>
                  <View style={[globalUtilStyles.gap1]}>
                    <CustomText weight={500}>{item.title}</CustomText>
                    <CustomText style={[textColorStyle.gray]}>
                      {item.subTitle}
                    </CustomText>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={[globalUtilStyles.gap2]}>
            <CustomText size={13} weight={500}>
              Security
            </CustomText>
            <View
              style={[
                bgColorStyle.white,
                globalUtilStyles.roundedmd,
                globalUtilStyles.py4,
                globalUtilStyles.px3,
                globalUtilStyles.gap3,
              ]}>
              {SECURITY_ACTIONS.map(item => (
                <View
                  key={item.title}
                  style={[
                    globalUtilStyles.flexRow,
                    globalUtilStyles.flexRow,
                    globalUtilStyles.itemsCenter,
                    globalUtilStyles.gap4,
                  ]}>
                  <View
                    style={[
                      {
                        width: scale(30),
                        height: scale(30),
                      },
                      globalUtilStyles.p2,
                      globalUtilStyles.roundedfull,
                      globalUtilStyles.itemsCenter,
                      globalUtilStyles.justifyCenter,
                      bgColorStyle['primary-highlight'],
                    ]}>
                    {item.icon && item.icon}
                  </View>
                  <View
                    style={[
                      globalUtilStyles.gap1,
                      globalUtilStyles.flex1,
                      globalUtilStyles.flexRow,
                      globalUtilStyles.justifyBetween,
                      globalUtilStyles.itemsCenter,
                    ]}>
                    <CustomText weight={500}>{item.title}</CustomText>
                    <ChevronIcon
                      style={[
                        {
                          transform: [{rotate: '-90deg'}],
                          width: scale(24),
                          height: scale(24),
                        },
                      ]}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View
            style={[
              globalUtilStyles.wfull,
              globalUtilStyles.py3,
              globalUtilStyles.px3,
              globalUtilStyles.roundedmd,
              bgColorStyle.white,
            ]}>
            <CustomPressable
              onPress={() => setShowLogoutModal(true)}
              style={[
                globalUtilStyles.flexRow,
                globalUtilStyles.itemsCenter,
                globalUtilStyles.gap4,
              ]}>
              <View
                style={[
                  {
                    width: scale(30),
                    height: scale(30),
                  },
                  globalUtilStyles.p2,
                  globalUtilStyles.roundedfull,
                  globalUtilStyles.itemsCenter,
                  globalUtilStyles.justifyCenter,
                  bgColorStyle['primary-highlight'],
                ]}>
                <LogoutIcon
                  width={'100%'}
                  height={'100%'}
                  stroke={appColors.primary}
                  strokeWidth={2}
                />
              </View>
              <View
                style={[
                  globalUtilStyles.gap1,
                  globalUtilStyles.flex1,
                  globalUtilStyles.flexRow,
                  globalUtilStyles.justifyBetween,
                  globalUtilStyles.itemsCenter,
                ]}>
                <CustomText weight={500}>Log out</CustomText>

                <ChevronIcon
                  style={[
                    {
                      transform: [{rotate: '-90deg'}],
                      width: scale(24),
                      height: scale(24),
                    },
                  ]}
                />
              </View>
            </CustomPressable>
          </View>
        </View>
      </View>
      {showLogoutModal && (
        <LogoutModal
          showModal={showLogoutModal}
          closeModal={() => setShowLogoutModal(false)}
        />
      )}
    </LayoutWithoutScroll>
  );
}

const MOCK_PERSONAL_INFO = [
  {
    icon: (
      <UserIcon
        width={'100%'}
        height={'100%'}
        stroke={appColors.primary}
        strokeWidth={2}
      />
    ),
    title: 'Walter Wikins',
    subTitle: 'Full name',
  },
  {
    icon: (
      <EnvelopeIcon width={'100%'} height={'100%'} fill={appColors.primary} />
    ),
    title: 'walwin@gmail.com',
    subTitle: 'Email address',
  },
  {
    icon: <PhoneIcon width={'100%'} height={'100%'} fill={appColors.primary} />,
    title: '+2347056837099',
    subTitle: 'Phone number',
  },
];
const SECURITY_ACTIONS = [
  {
    icon: <PinIcon width={'100%'} height={'100%'} fill={appColors.primary} />,
    title: 'Change transaction PIN',
  },
  {
    icon: <LockIcon width={'100%'} height={'100%'} fill={appColors.primary} />,
    title: 'Change password',
  },
];
