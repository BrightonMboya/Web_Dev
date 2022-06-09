import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [];
function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}

export default HomePage;
