import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import {View} from 'react-native';
import globalUtilStyles from '@/styles';
import BackButton from '@/components/shared/Button/BackButton';
import CustomText from '@/components/shared/Text';
import CustomTextInput from '@/components/shared/Form/CustomInput';
import CustomButton from '@/components/shared/Button';
import {bgColorStyle, textColorStyle} from '@/styles/color';
import {router} from 'expo-router';

export default function ForgotPasswordEmail() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = data => {
    // do something
    router.push(`/(auth)/(forgotPassword)/verifyEmail?email=${data.email}`);
  };
  return (
    <LayoutWithoutScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb10,
          ]}>
          <BackButton style={[globalUtilStyles.absolute]} />
          <CustomText size={20} style={[globalUtilStyles.mxauto]}>
            Reset Password
          </CustomText>
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb10,
          ]}>
          <CustomText
            style={[
              globalUtilStyles.textCenter,
              {
                width: '95%',
              },
            ]}>
            Enter your email address and we’ll send you OTP verification code.
          </CustomText>
        </View>
        <View style={[globalUtilStyles.wfull, globalUtilStyles.gap10]}>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="email"
              render={({field}) => (
                <CustomTextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Email"
                  placeholder="Email"
                  errorMessage={errors.email?.message}
                  isEmail
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull, globalUtilStyles.gap4]}>
            <CustomButton onPress={handleSubmit(onSubmit)} text="Next" />
            <CustomButton
              onPress={() => router.navigate('/login')}
              style={[bgColorStyle.white]}
              textStyle={{
                size: 17,
                weight: 400,
                style: [textColorStyle.secondary],
              }}
              text="Return to Login"
            />
          </View>
        </View>
      </View>
    </LayoutWithoutScroll>
  );
}
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .test('test-email', 'Please enter a valid email', function (value) {
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      if (value) {
        return regex.test(value);
      }
    })
    .required('Required'),
});
type FormValues = {
  email: string;
};
