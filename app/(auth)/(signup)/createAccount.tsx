import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import CustomTextInput from '@/components/shared/Form/CustomInput';
import PasswordInput from '@/components/shared/Form/PasswordInput';
import CustomButton from '@/components/shared/Button';
import {textColorStyle} from '@/styles/color';

export default function CreateAccount() {
  const {
    control,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View style={[globalUtilStyles.mb10]}>
          <BackButton />
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
                  {...field}
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
                  {...field}
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
                  {...field}
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
                  {...field}
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
            <CustomButton text="Sign up" />
            <View style={[globalUtilStyles.itemsCenter]}>
              <CustomText weight={500}>
                Already have an account?{' '}
                <CustomText weight={500} style={[textColorStyle.highlight]}>
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
type FormValues = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};
