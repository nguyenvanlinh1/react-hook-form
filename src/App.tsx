import { useForm, Controller } from "react-hook-form";
import { Grid } from "@mui/material";
import CustomTextField from "./components/CustomTextField";
import CustomButton, { ButtonType } from "./components/CustomButton";
import CustomRadioGroup from "./components/CustomRadioGroup";
import CustomSelect from "./components/CustomSelect";

const dataListGender = [
  {
    name: "male",
    label: "male",
  },
  {
    name: "female",
    label: "female",
  },
  {
    name: "others",
    label: "others",
  },
];

type Data = {
  username: string;
  email: string;
  password: string;
  address: string;
  gender: string;
  status: string;
};

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit = (data: Data) => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container sx={{ justifyContent: "center" }} spacing={2} mt={5}>
        <Grid item xs={7}>
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required", maxLength: 15 }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                title="Username"
                errorMessage={errors.username}
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                type="email"
                title="Email"
                errorMessage={errors.email}
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password không được để trống",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
                message: "Không đúng định dạng password",
              },
              minLength: {
                value: 8,
                message: "Password phải có ít nhất 8 ký tự",
              },
            }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                title="Password"
                type="password"
                errorMessage={errors.password}
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="address"
            control={control}
            rules={{
              required: "Address không được để trống",
              minLength: {
                value: 10,
                message: "Địa chỉ phải ít nhất 10 ký tự",
              },
            }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                title="Address"
                errorMessage={errors.address}
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="gender"
            control={control}
            rules={{
              required: "Giới tính không được để trống",
            }}
            render={({ field }) => (
              <CustomRadioGroup
                {...field}
                title="Gender"
                errorMessage={errors.gender}
                listValueItem={dataListGender}
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="status"
            control={control}
            rules={{
              required: "Trạng thái không được để trống",
            }}
            render={({ field }) => (
              <CustomSelect
                {...field}
                title="Status"
                errorMessage={errors.status}
              />
            )}
          />
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton name="Validate" type={ButtonType.SUBMIT}></CustomButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default App;
