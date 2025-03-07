import {PhoneNumberUtil} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

interface args {
  phoneNumber: string;
  countryCode: string;
  onValidate: (isValid: boolean) => void;
}
const validatePhoneNumber = ({phoneNumber, countryCode, onValidate}: args) => {
  try {
    const parsedNumber = phoneUtil.parse(phoneNumber, countryCode);
    const valid = phoneUtil.isValidNumber(parsedNumber);
    onValidate(valid);
    return valid;
  } catch {
    onValidate(false);
    return false;
  }
};

export default validatePhoneNumber;
