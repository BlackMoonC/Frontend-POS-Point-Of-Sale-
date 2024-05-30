import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./features/login/usersApiSlice";
import { setCredentials } from "./features/login/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@mui/material";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const schema = z.object({
  nik: z.string().min(1, "NIK must be 16 digits long"),
  password: z.string().min(5, "Password must be at least 8 characters long"),
});

type FormLogin = {
  nik: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { token } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/employee");
    }
  }, [navigate, token]);

  const onSubmit: SubmitHandler<FormLogin> = async (data) => {
    console.log(data);
    try {
      const res = await login({
        username: data.nik,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   "use server";
  //   try {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       username: data.get("nik"),
  //       password: data.get("password"),
  //     });
  //     const res = await login({
  //       username: data.get("nik"),
  //       password: data.get("password"),
  //     }).unwrap();
  //     dispatch(setCredentials({ ...res }));
  //     navigate("/");
  //   } catch (error: any) {
  //     console.error(error.data.message);
  //     setError({
  //       open: true,
  //       message: error.data.message,
  //     });
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        sx={{
          marginTop: 8,
          p: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            {...register("nik", { required: true })}
            label="NIK"
            error={!!errors.nik}
            helperText={errors.nik ? errors.nik.message : ""}
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            {...register("password", { required: true })}
            label="Password"
            type="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
