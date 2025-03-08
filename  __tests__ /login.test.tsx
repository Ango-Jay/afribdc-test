import LoginScreen from '@/app/(auth)/login';
import {render, screen} from '@testing-library/react-native';
describe('Login', () => {
  test('login screen renders', async () => {
    render(<LoginScreen />);
    expect(screen.getByText(' Login to your account')).toBeVisible;
  });
});
