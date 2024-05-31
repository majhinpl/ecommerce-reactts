import AuthForm from "./components/AuthForm";
import { UserDataType } from "./types";
import { register, resetStatus } from "../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Status } from "../../globals/types";

const Register = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);
  console.log(status);

  const dispatch = useAppDispatch();
  const handleRegister = async (data: UserDataType) => {
    dispatch(register(data));
    console.log(data);
  };
  useEffect(() => {
    if (status === Status.SUCCESS) {
      dispatch(resetStatus());
      navigate("/login");
    } 
  }, [status, dispatch, navigate]);
  return (
    <>
      <AuthForm type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
