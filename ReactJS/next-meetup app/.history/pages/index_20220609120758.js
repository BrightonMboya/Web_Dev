import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first meetup",
    image: ""
  }
];
function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}

export default HomePage;
