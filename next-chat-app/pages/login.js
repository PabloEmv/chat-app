import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {

  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [error, setError] = useState();

  return (
    <AuthForm
      title="Iniciar Sesión"
      linkAuth="register"
      buttonText="Iniciar sesión"
      redirectText="¿No tienes cuenta?"
      linkAuthText="Regístrate"
    />
  );
}
