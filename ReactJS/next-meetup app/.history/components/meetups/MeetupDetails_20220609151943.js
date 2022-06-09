import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>The meetup description</p>
    </Fragment>
  );
}
