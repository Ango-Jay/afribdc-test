import HomeScreen from '@/app/(main)/(tabs)/home';
import {render, screen} from '@testing-library/react-native';

describe('Home', () => {
  test('Home screen renders', () => {
    render(<HomeScreen />);
    expect(screen.getByText(/Welcome back, Walter/i));
  });
});
