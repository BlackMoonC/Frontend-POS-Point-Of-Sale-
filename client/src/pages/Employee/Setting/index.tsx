import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Input,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
type Props = {};

type IFormUser = {
  name: string;
  nik: string;
};

type IFormPasswords = {
  password: string;
  confirmPassword: string;
};

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  nik: z
    .string()
    .min(1, "NIK is required")
    .length(16, "NIK must be exactly 16 characters"),
});

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Setting({}: Props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  //Validations User
  const {
    register: registerUser,
    handleSubmit: handleUpdateUser,
    formState: { errors: userErrors },
  } = useForm<IFormUser>({
    resolver: zodResolver(userSchema),
  });

  const onUpdateUser: SubmitHandler<IFormUser> = (data) => console.log(data);

  //Validations Passwords
  const {
    register: registerPasswords,
    handleSubmit: handleUpdatePasswords,
    formState: { errors: passwordErrors },
  } = useForm<IFormPasswords>({
    resolver: zodResolver(passwordSchema),
  });

  const onUpdatePasswords: SubmitHandler<IFormPasswords> = (data) => {
    console.log(data);
  };

  return (
    <Box component="section" sx={{ width: 1 }}>
      <Typography sx={{ textAlign: "center" }} variant="h3" component="h1">
        Pengaturan
      </Typography>
      <Stack
        spacing={2}
        component={"form"}
        onSubmit={handleUpdateUser(onUpdateUser)}
        noValidate>
        <Typography variant="h4" component={"h2"}>
          Profile
        </Typography>
        <TextField
          fullWidth
          required
          label="Nama"
          {...registerUser("name", { required: true })}
          defaultValue="Rakhel Cakra"
          error={!!userErrors.name}
          helperText={userErrors.name?.message}
        />
        <TextField
          fullWidth
          required
          label="NIK"
          defaultValue="kskdkad123213"
          {...registerUser("nik", { required: true })}
          error={!!userErrors.nik}
          helperText={userErrors.nik?.message}
        />
        <Button type="submit" variant="contained">
          Simpan Perubahan
        </Button>
      </Stack>
      <Stack
        component={"form"}
        sx={{ mt: 4 }}
        spacing={2}
        onSubmit={handleUpdatePasswords(onUpdatePasswords)}
        noValidate>
        <Typography variant="h4" component={"h2"}>
          Ganti Password
        </Typography>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password Baru
          </InputLabel>
          <Input
            {...registerPasswords("password", { required: true })}
            id="standard-adornment-password"
            error={!!passwordErrors.password}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Typography color="error" variant="caption">
            {passwordErrors.password?.message}
          </Typography>
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Konfirmasi Password Baru
          </InputLabel>
          <Input
            {...registerPasswords("confirmPassword", { required: true })}
            id="standard-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            error={!!passwordErrors.confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Typography color="error" variant="caption">
            {passwordErrors.confirmPassword?.message}
          </Typography>
        </FormControl>
        <Button type="submit" variant="contained">
          Simpan Password
        </Button>
      </Stack>
    </Box>
  );
}
