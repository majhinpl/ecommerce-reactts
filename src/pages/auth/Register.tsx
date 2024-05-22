import { useDispatch } from "react-redux";
import AuthForm from "./components/AuthForm";
import { UserDataType } from "./types";
import { register } from "../../store/authSlice";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = async (data: UserDataType) => {
    console.log(data);
    dispatch(register(data));

    // const response = await axios.post("http://localhost:5000/register", data);
  };
  return (
    <>
      <AuthForm type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
