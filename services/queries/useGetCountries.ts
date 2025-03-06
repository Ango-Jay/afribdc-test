import {useEffect, useState} from 'react';
import {getAllCountries, FlagType} from 'react-native-country-picker-modal';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<
    Array<Country>
  >([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getAllCountries(FlagType.FLAT, 'common');
        const formatted = res.map(item => ({
          id: `${item.cca2}`,
          name: `${item.name}`,
          callingCode: item.callingCode[0],
          icon: item.flag,
        }));
        setCountries(formatted);
      } catch (error) {
        return;
      }
    };
    fetchCountries();
  }, []);

  return countries;
};

export type Country = {
  id: string;
  name: string;
  callingCode: string;
  icon: string;
}