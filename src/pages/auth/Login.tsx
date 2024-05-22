import AuthForm from "./components/AuthForm";

const handleLogin = () => {};

const Login = () => {
  return (
    <>
      <AuthForm type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
