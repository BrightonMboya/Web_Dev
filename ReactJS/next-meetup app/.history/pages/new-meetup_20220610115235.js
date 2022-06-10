// our-domain.com/new-meetup
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function newMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData)
    });
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default newMeetupPage;
