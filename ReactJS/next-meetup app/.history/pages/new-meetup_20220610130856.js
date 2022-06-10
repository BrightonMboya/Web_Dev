// our-domain.com/new-meetup
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Head } from "next/head";
import { Fragment } from "react/cjs/react.development";

function newMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head></Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default newMeetupPage;
