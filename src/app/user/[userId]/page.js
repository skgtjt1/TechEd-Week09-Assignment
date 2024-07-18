//Import the connection to our database
//install npm i @clerk/nextjs
// todo set up your .env.local file
//db columns for the users table (clerk_id, username, bio, location)
//import clerk stuff:

import { dbConnect } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server"; //comes with clerk and will contain user information
//import next stuff like revalidate if necessary

export default function UserIdPage() {
  //we need to destructure the userId from clerk auth

  //! The userId is an alphanumerical string that clerk creates AFTER the user signs up for clerk in the sign-up page (<SignUp/>)

  //careful with saving the userId in a database before the user signs up, it will be null
  const db = dbConnect();
  const { userId } = auth();
  console.log(userId); //good to see the userId myself
  //We also need a handleSubmit function

  async function handleSubmit(formData) {
    "use server";
    //we need to activate the dbConnection
    //wWE need to get the form data input

    const name = formData.get("name");
    //We need to insert the data in the database
    //we need to revalidatepath
    await db.query(`ISERT INTO ... (clerk_id) VALUES $1, $2 etc`, [userId]);
    // the userId needs to be saved in the database - manny's clue
  }

  //We need a farm for the user to add their data
  return (
    <>
      <h1>User Profile</h1>
      <p>you need a form here</p>
    </>
  );
}

// // another function to Show Current Users data - needs to go inside the main exported function
// if (userId) {

// //add an SQL querty getting the user's data

// }

// const userData = await currentUser()
// console.log(userData)

// return(

// <>
// <h1>Current user is:</h1>
// {/* <p>Your name is : {userData?.firstName}</p> check the properties */}
// </>

// )
