import {Skeleton} from 'moti/skeleton';
import {useState} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {View, type ViewStyle} from 'react-native';
import CustomText from '../Text';
import globalUtilStyles from '@/styles';

interface Props extends FastImageProps {
  isVisible?: boolean;
  label?: string;
}

const CustomImage = ({isVisible, label, ...props}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View
      style={[
        globalUtilStyles.justifyCenter,
        globalUtilStyles.itemsCenter,
        globalUtilStyles.wfull,
        props.style as ViewStyle,
      ]}>
      <>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.hfull,
            {
              zIndex: 2,
            },
          ]}>
          {props?.source ? (
            <FastImage
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => {
                setIsLoading(false);
              }}
              {...props}
            />
          ) : (
            <CustomText>{label}</CustomText>
          )}
        </View>

        {(isVisible || isLoading) && (
          <View
            style={[
              globalUtilStyles.wfull,
              globalUtilStyles.hfull,
              globalUtilStyles.justifyCenter,
              globalUtilStyles.itemsCenter,
              globalUtilStyles.absolute,
              globalUtilStyles.roundedfull,
              {zIndex: 5},
            ]}>
            <Skeleton
              radius={200}
              colorMode={'light'}
              width={'100%'}
              height={'100%'}
            />
          </View>
        )}
      </>
    </View>
  );
};

export default CustomImage;
