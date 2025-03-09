import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const globalUtilStyles = ScaledSheet.create({
  // width
  wauto: {
    width: 'auto',
  },
  wfull: {
    width: '100%',
  },
  maxWidthFull: {
    maxWidth: '100%',
  },
  minWidthFull: {
    minWidth: '100%',
  },
  // height
  hauto: {
    height: 'auto',
  },
  hfull: {
    height: '100%',
  },
  maxHeightFull: {
    maxHeight: '100%',
  },
  minHeightFull: {
    minHeight: '100%',
  },
  // flex
  flex1: {
    flex: 1,
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexColReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  grow: {
    flexGrow: 1,
  },
  shrink: {
    flexShrink: 1,
  },
  shrinkNone: {
    flexShrink: 0,
  },
  gap1: {
    gap: '4@s',
  },
  gap2: {
    gap: '8@s',
  },
  gap3: {
    gap: '12@s',
  },
  gap4: {
    gap: '16@s',
  },
  gap6: {
    gap: '24@s',
  },
  gap8: {
    gap: '32@s',
  },
  gap10: {
    gap: '40@s',
  },
  // text
  capitalize: {
    textTransform: 'capitalize',
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  // padding
  p0: {
    padding: 0,
  },
  p2: {
    padding: '8@s',
  },
  p3: {
    padding: '12@s',
  },
  p4: {
    padding: '16@s',
  },
  p5: {
    padding: '20@s',
  },
  p6: {
    padding: '24@s',
  },
  p8: {
    padding: '32@s',
  },
  p10: {
    padding: '40@s',
  },
  px2: {
    paddingRight: '8@s',
    paddingLeft: '8@s',
  },
  px3: {
    paddingRight: '12@s',
    paddingLeft: '12@s',
  },
  px4: {
    paddingRight: '16@s',
    paddingLeft: '16@s',
  },
  px5: {
    paddingRight: '20@s',
    paddingLeft: '20@s',
  },
  px6: {
    paddingRight: '24@s',
    paddingLeft: '24@s',
  },
  px8: {
    paddingRight: '32@s',
    paddingLeft: '32@s',
  },
  px10: {
    paddingRight: '40@s',
    paddingLeft: '40@s',
  },
  py2: {
    paddingTop: '8@s',
    paddingBottom: '8@s',
  },
  py3: {
    paddingTop: '12@s',
    paddingBottom: '12@s',
  },
  py4: {
    paddingTop: '16@s',
    paddingBottom: '16@s',
  },
  py5: {
    paddingTop: '20@s',
    paddingBottom: '20@s',
  },
  py6: {
    paddingTop: '24@s',
    paddingBottom: '24@s',
  },
  py8: {
    paddingTop: '32@s',
    paddingBottom: '32@s',
  },
  py10: {
    paddingTop: '40@s',
    paddingBottom: '40@s',
  },
  pb2: {
    paddingBottom: '8@s',
  },
  pb3: {
    paddingBottom: '12@s',
  },
  pb4: {
    paddingBottom: '16@s',
  },
  pb5: {
    paddingBottom: '20@s',
  },
  pb6: {
    paddingBottom: '24@s',
  },
  pb8: {
    paddingBottom: '32@s',
  },
  pb10: {
    paddingBottom: '40@s',
  },
  pt2: {
    paddingTop: '8@s',
  },
  pt3: {
    paddingTop: '12@s',
  },
  pt4: {
    paddingTop: '16@s',
  },
  pt5: {
    paddingTop: '20@s',
  },
  pt6: {
    paddingTop: '24@s',
  },
  pt8: {
    paddingTop: '32@s',
  },
  pt10: {
    paddingTop: '40@s',
  },
  //   margin
  m0: {
    margin: 0,
  },
  mauto: {
    margin: 'auto',
  },
  m2: {
    margin: '8@s',
  },
  m3: {
    margin: '12@s',
  },
  m4: {
    margin: '16@s',
  },
  m5: {
    margin: '20@s',
  },
  m6: {
    margin: '24@s',
  },
  m8: {
    margin: '32@s',
  },
  m10: {
    margin: '40@s',
  },
  mx0: {
    marginRight: 0,
    marginLeft: 0,
  },
  mxauto: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  mx2: {
    marginRight: '8@s',
    marginLeft: '8@s',
  },
  mx3: {
    marginRight: '12@s',
    marginLeft: '12@s',
  },
  mx4: {
    marginRight: '16@s',
    marginLeft: '16@s',
  },
  mx5: {
    marginRight: '20@s',
    marginLeft: '20@s',
  },
  mx6: {
    marginRight: '24@s',
    marginLeft: '24@s',
  },
  mx8: {
    marginRight: '32@s',
    marginLeft: '32@s',
  },
  mx10: {
    marginRight: '40@s',
    marginLeft: '40@s',
  },
  my0: {
    marginTop: 0,
    marginBottom: 0,
  },
  myauto: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  my2: {
    marginTop: '8@s',
    marginBottom: '8@s',
  },
  my3: {
    marginTop: '12@s',
    marginBottom: '12@s',
  },
  my4: {
    marginTop: '16@s',
    marginBottom: '16@s',
  },
  my5: {
    marginTop: '20@s',
    marginBottom: '20@s',
  },
  my6: {
    marginTop: '24@s',
    marginBottom: '24@s',
  },
  my8: {
    marginTop: '32@s',
    marginBottom: '32@s',
  },
  my10: {
    marginTop: '40@s',
    marginBottom: '40@s',
  },
  mt0: {
    marginTop: 0,
  },
  mtauto: {
    marginTop: 'auto',
  },
  mt1: {
    marginTop: '4@s',
  },
  mt2: {
    marginTop: '8@s',
  },
  mt3: {
    marginTop: '12@s',
  },
  mt4: {
    marginTop: '16@s',
  },
  mt5: {
    marginTop: '20@s',
  },
  mt6: {
    marginTop: '24@s',
  },
  mt8: {
    marginTop: '32@s',
  },
  mt10: {
    marginTop: '40@s',
  },
  mb0: {
    marginBottom: 0,
  },
  mbauto: {
    marginBottom: 'auto',
  },
  mb1: {
    marginBottom: '4@s',
  },
  mb2: {
    marginBottom: '8@s',
  },
  mb3: {
    marginBottom: '12@s',
  },
  mb4: {
    marginBottom: '16@s',
  },
  mb5: {
    marginBottom: '20@s',
  },
  mb6: {
    marginBottom: '24@s',
  },
  mb8: {
    marginBottom: '32@s',
  },
  mb10: {
    marginBottom: '40@s',
  },
  mlauto: {
    marginLeft: 'auto',
  },
  ml1: {
    marginLeft: '4@s',
  },
  ml2: {
    marginLeft: '8@s',
  },
  ml3: {
    marginLeft: '12@s',
  },
  ml4: {
    marginLeft: '16@s',
  },
  ml5: {
    marginLeft: '20@s',
  },
  ml6: {
    marginLeft: '24@s',
  },
  ml8: {
    marginLeft: '32@s',
  },
  ml10: {
    marginLeft: '40@s',
  },
  mrauto: {
    marginRight: 'auto',
  },
  mr0: {
    marginRight: 0,
  },
  mr1: {
    marginRight: '4@s',
  },
  mr2: {
    marginRight: '8@s',
  },
  mr3: {
    marginRight: '12@s',
  },
  mr4: {
    marginRight: '16@s',
  },
  mr5: {
    marginRight: '20@s',
  },
  mr6: {
    marginRight: '24@s',
  },
  mr8: {
    marginRight: '32@s',
  },
  mr10: {
    marginRight: '40@s',
  },
  // borderRadius
  rounded0: {
    borderRadius: 0,
  },
  roundedmd: {
    borderRadius: '8@s',
  },
  roundedlg: {
    borderRadius: '10@s',
  },
  roundedxl: {
    borderRadius: '12@s',
  },
  rounded2xl: {
    borderRadius: '16@s',
  },
  rounded3xl: {
    borderRadius: '24@s',
  },
  roundedfull: {
    borderRadius: '9999@s',
  },
  //   border width
  border0: {
    borderWidth: 0,
  },
  borderhalf: {
    borderWidth: '0.5@s',
  },
  border1: {
    borderWidth: '1@s',
  },
  border2: {
    borderWidth: '2@s',
  },
  borderBottom0: {
    borderBottomWidth: 0,
  },
  borderBottomhalf: {
    borderBottomWidth: '0.5@s',
  },
  borderBottom1: {
    borderBottomWidth: '1@s',
  },
  borderBottom2: {
    borderBottomWidth: '2@s',
  },
  borderTop0: {
    borderTopWidth: 0,
  },
  borderTophalf: {
    borderTopWidth: '0.5@s',
  },
  borderTop1: {
    borderTopWidth: '1@s',
  },
  borderTop2: {
    borderTopWidth: '2@s',
  },
  // position
  absolute: {
    position: 'absolute',
  },
  top0: {
    top: 0,
  },
  right0: {
    right: 0,
  },
  right3: {
    right: '12@s',
  },
  right6: {
    right: '24@s',
  },
  // opacity
  opacityNone: {
    opacity: 0,
  },
  opacityFull: {
    opacity: 1,
  },
  // box shadow
  boxShadow: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1.5},
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
        shadowColor: '#000',
      },
    }),
  },
  // overflow
  overflowHidden: {
    overflow: 'hidden',
  },
});

export default globalUtilStyles;
