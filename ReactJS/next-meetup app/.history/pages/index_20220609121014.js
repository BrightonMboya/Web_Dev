import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://en.wikipedia.org/wiki/Munich#/media/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: 'Some Address 5, 12345, Some City',
    desctiption: "This is a first meetup"
  },
  {
    id: "m1",
    title: "A first meetup",
    image: "https://en.wikipedia.org/wiki/Munich#/media/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: 'Some Address 5, 12345, Some City',
    desctiption: "This is a first meetup"
  }
  {
    id: "m1",
    title: "A first meetup",
    image: "https://en.wikipedia.org/wiki/Munich#/media/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: 'Some Address 5, 12345, Some City',
    desctiption: "This is a first meetup"
  }
];
function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}

export default HomePage;
