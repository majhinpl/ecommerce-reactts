import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AuthForm from "./components/AuthForm";
import { login, resetStatus } from "../../store/authSlice";
import { useEffect } from "react";
import { Status } from "../../globals/types";
import { UserLoginType } from "./types";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const handleLogin = async (data: UserLoginType) => {
    dispatch(login(data));
    console.log(data);
  };

  useEffect(() => {
    if (status === Status.SUCCESS) {
      dispatch(resetStatus());
      navigate("/");
    }
  }, [status, dispatch, navigate]);

  return (
    <>
      <AuthForm type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
