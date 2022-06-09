import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Some Address 5, 12345, Some City",
    desctiption: "This is a first meetup"
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Some Address 5, 12345, Some City",
    desctiption: "This is a second  meetup"
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Some Address 5, 12345, Some City",
    desctiption: "This is a third meetup"
  }
];
function HomePage() {
  return;
  <Layout>
    <MeetupList meetups={dummy_meetups} />;
  </Layout>;
}

export default HomePage;
