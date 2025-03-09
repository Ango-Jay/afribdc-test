import LoginScreen from '@/app/(auth)/login';
import {render, userEvent} from '@testing-library/react-native';
import {renderRouter, screen} from 'expo-router/testing-library';
import {View} from 'react-native';

describe('Login', () => {
  const user = userEvent.setup();
  test('login screen renders', async () => {
    render(<LoginScreen />);
    expect(screen.getByText(' Login to your account')).toBeVisible;
  });
  test('User is able to login', async () => {
    render(<LoginScreen />);
    const MockComponent = jest.fn(() => <View />);

    renderRouter(
      {
        index: MockComponent,
        '(auth)/login': LoginScreen,
        '(main)/(tabs)/home': MockComponent,
      },
      {
        initialUrl: '(auth)/login',
      },
    );
    // get inputs
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    // fill inputs
    await user.type(emailInput, 'test@gmail.com');
    await user.type(passwordInput, 'Testing123@');
    // submit
    const loginButton = await screen.findByRole('button', {
      name: /login/i,
    });
    await user.press(loginButton);
    expect(screen).toHavePathname('/home');
  });
});
