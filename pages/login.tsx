import { useContext } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/api';
import { Button, Input, Providers } from '@/components';
import { AppContext, AppContextActionTypeEnum, AppContextDispatcher } from '@/contexts/AppState.context';

const Login = () => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);
  const router = useRouter();

  appContext.auth.isAuthenticated && router.push('/');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await login({ email: e.currentTarget.email.value, password: e.currentTarget.password.value });

    if (res.data.status) {
      localStorage.setItem('token', 'random token');
      appContextDispatch({
        type: AppContextActionTypeEnum.SET_USER_TOKEN,
        value: { token: 'random token', isAuthenticated: true },
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
            />
            <Input label="Password" name="password" type="password" />
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
