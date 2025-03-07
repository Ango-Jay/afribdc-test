import BackButton from '@/components/shared/Button/BackButton';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import CustomTextInput from '@/components/shared/Form/CustomInput';
import CustomButton from '@/components/shared/Button';

export default function PersonalInformation() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      countryOfResidence: '',
      state: '',
      address1: '',
      address2: '',
      city: '',
      zipCode: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = () => {
    // do something
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
            Personal information
          </CustomText>
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap3,
          ]}>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="firstName"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="First name *"
                  placeholder="first name"
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="lastName"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="Last name *"
                  placeholder="last name"
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </View>
          {/*date inputs and dropdown inputs */}
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="address1"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="Address line 1"
                  placeholder="address line 1"
                  errorMessage={errors.address1?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="address2"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="Address line 2 (Optional)"
                  placeholder="Address line 2"
                  errorMessage={errors.address2?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="city"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="City"
                  placeholder="city"
                  errorMessage={errors.city?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <Controller
              control={control}
              name="zipCode"
              render={({field}) => (
                <CustomTextInput
                  {...field}
                  labelTitle="Postal/Zip Code"
                  placeholder="Postal"
                  errorMessage={errors.zipCode?.message}
                />
              )}
            />
          </View>
          <View style={[globalUtilStyles.mt10, globalUtilStyles.wfull]}>
            <CustomButton text="Continue" />
          </View>
        </View>
      </View>
    </LayoutWithScroll>
  );
}
const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  dateOfBirth: yup.string().required('Required'),
  countryOfResidence: yup.string().required('Required'),
  state: yup.string().required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string(),
  city: yup.string().required('Required'),
  zipCode: yup.string().required('Required'),
});
type FormValues = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfResidence: string;
  state: string;
  address1: string;
  address2?: string;
  city: string;
  zipCode: string;
};
