//import the SignUp component
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      <h1>Please, I request you give me your data for the first time</h1>
      <SignUp />
    </>
  );
}

//makee sure the user sees this page first, before they can complete their own profile page
//The reason is that once they sign up, clerk will generate a userId we can destructure out and use to put in the database
//After signup can use redirect to send the user to theit create profile page, we can use the clerkId in the background there to make sure their user database entry has the correct id
