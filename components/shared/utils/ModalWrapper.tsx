import RNModal from 'react-native-modal';
import {DismissKeyboard} from '../Layout/DismissKeyboard';
import {View} from 'react-native';
import globalUtilStyles from '@/styles';
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from '@/constants';
import type {ReactNode} from 'react';

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  modalHeight: number;
}
const ModalWrapper = ({
  isModalOpen,
  closeModal,
  children,
  modalHeight,
}: Props) => {
  return (
    <View
      style={[
        {
          height: modalHeight,
        },
        globalUtilStyles.absolute,
      ]}>
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
        <DismissKeyboard>{children}</DismissKeyboard>
      </RNModal>
    </View>
  );
};
export default ModalWrapper;
