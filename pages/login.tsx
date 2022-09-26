import { useContext } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/api';
import { ILoginData } from './api/login';
import { AppContext, AppContextActionTypeEnum, AppContextDispatcher } from '@/contexts/AppState.context';
import { Button, Input, Providers } from '@/components';

const Login = () => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);
  const router = useRouter();

  appContext.auth.isAuthenticated && router.push('/');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res: ILoginData = await login({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });

    if (res.data.status) {
      localStorage.setItem('token', res.data.token);

      appContextDispatch({
        type: AppContextActionTypeEnum.SET_USER_TOKEN,
        value: { token: res.data.token, isAuthenticated: true },
      });

      appContextDispatch({
        type: AppContextActionTypeEnum.SET_USER_DATA,
        value: res.data.user,
      });
    }
  };

  return (
    <section className="w-full h-screen">
      <main className="flex justify-center items-center h-full">
        <div className="py-6 px-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-muted">Sign in</h3>
          <form onSubmit={handleLogin}>
            <Input
              label="E-mail"
              name="email"
              placeholder="yourname@domain.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              type="email"
              id="email"
              defaultValue={'test@test.com'}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="•••••••••"
              id="password"
              defaultValue={'randompassword'}
            />
            <Button variant="primary" type="submit" className="w-full flex justify-center font-medium">
              Login
            </Button>
          </form>
        </div>
      </main>
    </section>
  );
};

Login.getLayout = function getLayout(page: any) {
  return <Providers>{page}</Providers>;
};

export default Login;
