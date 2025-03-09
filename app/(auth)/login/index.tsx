import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import CustomTextInput from '@/components/shared/Form/CustomInput';
import PasswordInput from '@/components/shared/Form/PasswordInput';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {textColorStyle} from '@/styles/color';
import {router} from 'expo-router';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export default function Login() {
  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = () => {
    // do something
    reset();
    router.push('/(main)/(tabs)/home');
  };
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View style={[globalUtilStyles.mb10]}>
          <BackButton onPress={() => router.dismissTo('/introduction')} />
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.mt10,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap3,
          ]}>
          <CustomText size={20} weight={600}>
            Login to your account
          </CustomText>
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
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="password"
              render={({field}) => (
                <PasswordInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Password"
                  placeholder="Password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </View>
          <View
            style={[
              globalUtilStyles.wfull,
              globalUtilStyles.gap4,
              globalUtilStyles.mt8,
            ]}>
            <View style={[globalUtilStyles.wfull]}>
              <CustomText
                onPress={() => router.push('/(auth)/(forgotPassword)/email')}
                weight={500}
                style={[textColorStyle.highlight, globalUtilStyles.mlauto]}>
                Forgot Password?
              </CustomText>
            </View>
            <CustomButton onPress={handleSubmit(onSubmit)} text="Login" />
            <View style={[globalUtilStyles.itemsCenter]}>
              <CustomText weight={500}>
                Don't have an account?{' '}
                <CustomText
                  onPress={() => router.push('/(auth)/(signup)/phoneNumber')}
                  weight={500}
                  style={[textColorStyle.highlight]}>
                  Signup
                </CustomText>
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </LayoutWithScroll>
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
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Required'),
});

type FormValues = {
  email: string;
  password: string;
};
