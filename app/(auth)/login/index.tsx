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

export default function Login() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FormValues> = () => {
    // do something
    router.push('/(main)/(tabs)/home');
  };
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View style={[globalUtilStyles.mb10]}>
          <BackButton onPress={() => router.navigate('/introduction')} />
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
                  onChange={field.onChange}
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
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Create password"
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

type FormValues = {
  email: string;
  password: string;
};
