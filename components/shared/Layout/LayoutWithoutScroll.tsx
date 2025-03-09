import {IsIOS} from '@/constants';
import globalUtilStyles from '@/styles';
import type {ReactNode} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {DismissKeyboard} from './DismissKeyboard';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  removeDefaultSidePadding?: boolean;
  hideTouchable?: boolean;
}
export const LayoutWithoutScroll = ({
  children,
  backgroundColor = 'white',
  removeDefaultSidePadding = false,
  hideTouchable,
}: Props) => {
  const {top: safeAreaTop} = useSafeAreaInsets();
  const PaddingTop = safeAreaTop > 0 ? 36 : 78;
  return (
    <SafeAreaView style={[globalUtilStyles.flex1, {backgroundColor}]}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={[
          !removeDefaultSidePadding && globalUtilStyles.px4,
          globalUtilStyles.grow,
          {
            paddingTop: IsIOS ? scale(16) : PaddingTop + safeAreaTop,
            backgroundColor,
          },
        ]}>
        {hideTouchable ? (
          <>{children}</>
        ) : (
          <DismissKeyboard>{children}</DismissKeyboard>
        )}
      </View>
    </SafeAreaView>
  );
};
