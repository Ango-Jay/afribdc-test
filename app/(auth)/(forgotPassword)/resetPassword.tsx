import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import PasswordInput from '@/components/shared/Form/PasswordInput';
import CustomButton from '@/components/shared/Button';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';
import {router} from 'expo-router';

export default function ResetPassword() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = () => {
    // do something
    router.navigate('/login');
  };
  return (
    <LayoutWithScroll>
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
        <CustomText
          size={20}
          weight={500}
          style={[globalUtilStyles.textCenter]}>
          Enter your new password below
        </CustomText>
        <View style={[globalUtilStyles.gap4, globalUtilStyles.mt6]}>
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
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="confirmPassword"
              render={({field}) => (
                <PasswordInput
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  labelTitle="Confirm password"
                  placeholder="Confirm password"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.gap6, globalUtilStyles.mt10]}>
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              text="Reset Password"
            />
            <CustomButton
              onPress={() => router.navigate('/(auth)/(forgotPassword)/email')}
              containerStyle={[
                globalUtilStyles.border1,
                borderColorStyle.secondary,
              ]}
              style={[bgColorStyle.white]}
              textStyle={{
                weight: 600,
                size: 15,
                style: textColorStyle.secondary,
              }}
              text="Cancel"
            />
          </View>
        </View>
      </View>
    </LayoutWithScroll>
  );
}
const validationSchema = yup.object({
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
  password: string;
  confirmPassword: string;
};
