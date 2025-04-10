import {appColors} from '@/constants/Colors';
import {StyleSheet} from 'react-native';

export const textColorStyle = StyleSheet.create({
  primary: {
    color: appColors.primary,
  },
  secondary: {
    color: appColors.secondary,
  },
  white: {
    color: '#FFF',
  },
  black: {
    color: '#000',
  },
  highlight: {
    color: appColors.highlight,
  },
  gray: {
    color: appColors.gray,
  },
  'keypad-gray': {
    color: appColors['key-pad-gray'],
  },
  'light-gray': {
    color: appColors['light-gray'],
  },
  error: {
    color: appColors.error,
  },
});

export const bgColorStyle = StyleSheet.create({
  primary: {
    backgroundColor: appColors.primary,
  },
  'primary-highlight': {
    backgroundColor: appColors['primary-highlight'],
  },
  secondary: {
    backgroundColor: appColors.secondary,
  },
  white: {
    backgroundColor: '#FFF',
  },
  black: {
    backgroundColor: '#000',
  },
  highlight: {
    backgroundColor: appColors.highlight,
  },
  gray: {
    backgroundColor: appColors.gray,
  },
  'light-gray': {
    backgroundColor: appColors['light-gray'],
  },
  'background-light-gray': {
    backgroundColor: appColors['background-light-gray'],
  },
  yellow: {
    backgroundColor: appColors.yellow,
  },
});

export const borderColorStyle = StyleSheet.create({
  primary: {
    borderColor: appColors.primary,
  },
  secondary: {
    borderColor: appColors.secondary,
  },
  gray: {
    borderColor: appColors.gray,
  },
  'light-gray': {
    borderColor: appColors['background-light-gray'],
  },
  error: {
    borderColor: appColors.error,
  },
});
