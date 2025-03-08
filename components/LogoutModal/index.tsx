import {View} from 'react-native';
import RNModal from 'react-native-modal';
import {verticalScale} from 'react-native-size-matters';
import BackButton from '../shared/Button/BackButton';
import CustomText from '../shared/Text';
import CustomButton from '../shared/Button';
import {router} from 'expo-router';
import globalUtilStyles from '@/styles';
import {bgColorStyle} from '@/styles/color';
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from '@/constants';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}
const LogoutModal = ({showModal, closeModal}: Props) => {
  const logOutUser = () => {
    router.navigate('/login');
    closeModal();
  };
  return (
    <RNModal
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      deviceHeight={SCREEN_HEIGHT - STATUSBAR_HEIGHT}
      backdropColor="#101010"
      isVisible={showModal}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      onBackdropPress={closeModal}
      statusBarTranslucent
      swipeDirection={'down'}
      onSwipeComplete={closeModal}>
      <View
        style={[
          globalUtilStyles.flex1,
          globalUtilStyles.roundedmd,
          globalUtilStyles.pt6,
          globalUtilStyles.px6,
          bgColorStyle.white,
          {maxHeight: verticalScale(270)},
        ]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.wfull,
            globalUtilStyles.mb10,
          ]}>
          <BackButton onPress={closeModal} style={globalUtilStyles.absolute} />
          <CustomText size={20} weight={500} style={[globalUtilStyles.mxauto]}>
            Log out
          </CustomText>
        </View>
        <CustomText>
          You are about to logout of your account. Would you like to proceed?
        </CustomText>
        <View style={[globalUtilStyles.wfull, globalUtilStyles.mt6]}>
          <CustomButton onPress={logOutUser} text="Logout" />
        </View>
      </View>
    </RNModal>
  );
};
export default LogoutModal;
