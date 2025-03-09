import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import CustomTextInput from '@/components/shared/Form/CustomInput';
import PasswordInput from '@/components/shared/Form/PasswordInput';
import CustomButton from '@/components/shared/Button';
import {textColorStyle} from '@/styles/color';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {router} from 'expo-router';
import {displayToast} from '@/components/shared/toast-utils/displayToast';

export default function CreateAccount() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = data => {
    // do something
    displayToast({
      type: 'success',
      message: 'Account creation successful',
    });
    router.push(`/(auth)/(signup)/verifyEmail?email=${data.email}`);
  };
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1, globalUtilStyles.pb10]}>
        <View style={[globalUtilStyles.mb10]}>
          <BackButton
            onPress={() => router.dismissTo('/(auth)/(signup)/phoneNumber')}
          />
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.mt10,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap3,
          ]}>
          <CustomText size={20} weight={600}>
            Create your account
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
              name="userName"
              render={({field}) => (
                <CustomTextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Username"
                  placeholder="Enter unique username"
                  errorMessage={errors.userName?.message}
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
                  labelTitle="Create password"
                  placeholder="Password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="confirmPassword"
              render={({field}) => (
                <PasswordInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Confirm password"
                  placeholder="Confirm password"
                  errorMessage={errors.confirmPassword?.message}
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
            <CustomButton onPress={handleSubmit(onSubmit)} text="Sign up" />
            <View style={[globalUtilStyles.itemsCenter]}>
              <CustomText weight={500}>
                Already have an account?{' '}
                <CustomText
                  onPress={() => router.dismissTo('/login')}
                  weight={500}
                  style={[textColorStyle.highlight]}>
                  Login
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
  email: yup.string().required('Required'),
  userName: yup.string().required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .test(
      'passwords match',
      'Passwords do not match. Try again.',
      function (value) {
        return this.parent.password === value;
      },
    )
    .required('Required'),
});
type FormValues = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};
