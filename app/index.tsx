import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';

export default function InitialScreen() {

  return (
    <LayoutWithoutScroll>
      <View style={[globalUtilStyles.py10, globalUtilStyles.gap4]}>

      </View>
    </LayoutWithoutScroll>
  );
}
