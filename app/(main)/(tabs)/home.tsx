import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';

export default function Home() {
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}></View>
    </LayoutWithScroll>
  );
}
