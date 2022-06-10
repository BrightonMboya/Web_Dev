import MeetupDetails from "../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";

function MeetupDetail() {
  return (
    <MeetupDetails
      address="Some Street 5, Some City"
      title="The First Meetup"
      description="This is the first bloody meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://tony:tonybm321@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups  = await meetupsCollection.find({}, {_id: 1}).toArray();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: 
    }))
    [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      }
    ]
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      address: "Some Street 5, Some City",
      id: meetupId,
      title: "The First Meetup",
      description: "This is the first bloody meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
    }
  };
}

export default MeetupDetail;
