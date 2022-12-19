import * as yup from "yup";

export interface AuthModel {
  username: string;
  password: string;
}

export const AuthInit: AuthModel = {
  username: "",
  password: "",
};

export const AuthSchema = yup.object().shape({
  username: yup.string().required("Username harus diisi!"),
  password: yup.string().required("Password harus diisi!"),
});
