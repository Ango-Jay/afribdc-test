import globalUtilStyles from '@/styles';
import {View} from 'react-native';
import CustomText from '../Text';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {scale} from 'react-native-size-matters';

interface Props {
  details: Rate;
}
const RateTile = ({details}: Props) => {
  return (
    <View
      style={[
        globalUtilStyles.flexRow,
        globalUtilStyles.itemsCenter,
        globalUtilStyles.justifyBetween,
        globalUtilStyles.mb3,
      ]}>
      <View
        style={[
          globalUtilStyles.flexRow,
          globalUtilStyles.itemsCenter,
          globalUtilStyles.gap3,
        ]}>
        <View
          style={[
            {
              width: scale(44),
              height: scale(44),
            },
            globalUtilStyles.roundedfull,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.justifyCenter,
            bgColorStyle['primary-highlight'],
          ]}>
          <CustomText weight={500} style={[textColorStyle.primary]}>
            WK
          </CustomText>
        </View>
        <View style={[globalUtilStyles.gap2]}>
          <CustomText style={[globalUtilStyles.capitalize]}>
            {details.name}
          </CustomText>
          <CustomText style={[textColorStyle.gray]}>
            Rate 1 {details.send} = {details.rate} {details.recieve}
          </CustomText>
        </View>
      </View>
      <CustomText weight={500} style={[textColorStyle.primary]}>
        {details.type}
      </CustomText>
    </View>
  );
};
export type Rate = {
  id: number;
  name: string;
  send: string;
  recieve: string;
  rate: number;
  type: string;
};
export default RateTile;
