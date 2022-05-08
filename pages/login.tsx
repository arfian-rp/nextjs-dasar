import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          document.cookie = "token=qwerty; path=/";
          router.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
