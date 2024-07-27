import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h1>Please log in</h1>
      <SignIn />
    </>
  );
}
