import {IsIOS} from '@/constants';
import globalUtilStyles from '@/styles';
import {forwardRef, type ReactElement, type ReactNode} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

interface Props {
  children: ReactNode;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  refreshControl?: ReactElement;
  backgroundColor?: string;
}
export const LayoutWithScroll = forwardRef<ScrollView, Props>(
  (
    {children, backgroundColor = "white", onScroll, refreshControl}: Props,
    ref,
  ) => {
    const {top: safeAreaTop} = useSafeAreaInsets();
    const PaddingTop = safeAreaTop > 0 ? 36 : 78;
    return (
      <SafeAreaView style={[globalUtilStyles.flex1, {backgroundColor}]}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <ScrollView
          ref={ref}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={[
            globalUtilStyles.px4,
            globalUtilStyles.grow,
            {
              paddingTop: IsIOS ? scale(16) : PaddingTop + safeAreaTop,
            },
          ]}
          onScroll={onScroll}
          refreshControl={refreshControl}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  },
);
