import Countdown, {zeroPad} from 'react-countdown';
import {useRef} from 'react';
import CustomText from '../Text';
import {textColorStyle} from '@/styles/color';

interface Props {
  countdownTime: number;
}

const CountdownTimer = ({countdownTime}: Props) => {
  const today = useRef(Date.now()).current;
  const renderer = ({
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (!completed) {
      // Render a countdown
      return (
        <CustomText weight={500} style={[textColorStyle.highlight]}>
          ({zeroPad(seconds)}s)
        </CustomText>
      );
    }
  };

  return <Countdown date={today + countdownTime} renderer={renderer} />;
};
export default CountdownTimer;
