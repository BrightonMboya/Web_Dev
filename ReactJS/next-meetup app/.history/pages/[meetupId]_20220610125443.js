import MeetupDetails from "../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";

function MeetupDetail(props) {
  return (
    <MeetupDetails
      address={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      image={props.meetupData}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://tony:tonybm321@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    }))
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://tony:tonybm321@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });
  client.close();
  return {
    props: {
      meetupData: selectedMeetup
    }
  };
}

export default MeetupDetail;
