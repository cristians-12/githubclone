import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errores, isAuthenticated } = useAuth();
  const onSubmit = handleSubmit(async (valores) => {
    await signIn(valores);
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section className="bg-[#0D1117] h-screen flex flex-col pt-[2%] items-center w-screen">
        <svg
          height="68"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="68"
          data-view-component="true"
          className="octicon octicon-mark-github mb-[40px] fill-white"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        {errores.map((error, i) => {
          return (
            <div
              key={i}
              className="bg-red-700 w-[50%] text-center font-bold p-2"
            >
              <p>{error}</p>
            </div>
          );
        })}
        <div className="flex flex-col">
          <h3 className="text-2xl text-center mb-[20px]">Sign in to GitHub</h3>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 p-5 bg-[#161B22] rounded-md w-[400px]"
          >
            <label className="text-[18px]">Username or email address</label>
            <input
              type="email"
              className="px-3 py-2 rounded bg-[#0D1117] focus:border-2 focus:outline-none focus:border-blue-500"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-700 text-[12px]">
                El email de usuario es requerido
              </p>
            )}
            <div className="flex justify-between">
              <label className="text-[18px]">Password</label>
              <a className="text-blue-400 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              className="px-3 py-2 rounded bg-[#0D1117] focus:border-2 focus:outline-none focus:border-blue-500"
              name="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-700 text-[12px]">
                La contraseña de usuario es requerida
              </p>
            )}
            <button className="bg-green-500 p-3 rounded-md font-bold">
              Sign in
            </button>
          </form>

          <div className="text-center flex justify-center flex-col items-center border-2 border-gray-500  rounded-md mt-[20px] p-5">
            <a className="text-blue-500 text-lg hover:underline cursor-pointer">
              Sign in with a passkey
            </a>
            <div className="flex gap-2">
              <p>New to GitHub?</p>
              <Link
                to="/register"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>

        <ul className="flex gap-3 opacity-[0.5] mt-[5%]">
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Terms
          </li>
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Privacy
          </li>
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Docs
          </li>
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Contact GitHub Support
          </li>
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Manage cookies
          </li>
          <li className="hover:underline hover:text-blue-500 hover:opacity-100 cursor-pointer">
            Do not share my personal information
          </li>
        </ul>
      </section>
    </>
  );
}
