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
import DateField from '@/components/shared/Form/DateField';
import SelectField, {type Option} from '@/components/shared/Form/SelectField';
import {useGetCountries} from '@/services/queries/useGetCountries';
import {useState} from 'react';
import {getStates} from 'country-state-picker';

export default function PersonalInformation() {
  const {
    control,
    formState: {errors},
    watch,
    setValue,
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
  const [stateOptions, setStateOptions] = useState<Option[]>([]);
  const values = watch();
  const dateOfBirthValue = values.dateOfBirth;
  const setDateOfBirth = (value: string) => {
    setValue('dateOfBirth', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const countriesOptions = useGetCountries().map(country => ({
    id: country.id,
    name: country.name,
    value: country.name,
    icon: country.icon,
  }));
  const countryOfResidenceValue = values.countryOfResidence;
  const setCountryOfResidence = (value: string, option?: Option) => {
    setValue('countryOfResidence', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setStateOptions(
      (getStates(option?.id.toLowerCase()!) as string[]).map(state => ({
        id: state,
        name: state,
        value: state,
      })),
    );
  };
  const stateValue = values.state;
  const setState = (value: string) => {
    setValue('state', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
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
          <View style={[globalUtilStyles.wfull]}>
            <DateField
              labelTitle="Date of Birth"
              value={dateOfBirthValue}
              setFieldValue={setDateOfBirth}
              errorMessage={errors.dateOfBirth?.message}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <SelectField
              labelTitle="Country of residence"
              placeholder="Select Country"
              value={countryOfResidenceValue}
              selectOption={setCountryOfResidence}
              options={countriesOptions}
              errorMessage={errors.countryOfResidence?.message}
            />
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <SelectField
              labelTitle="State/Territory"
              placeholder="Select State"
              value={stateValue}
              selectOption={setState}
              options={stateOptions}
              errorMessage={errors.state?.message}
            />
          </View>
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
            <CustomButton onPress={handleSubmit(onSubmit)} text="Continue" />
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
