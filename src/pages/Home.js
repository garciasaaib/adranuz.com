import React from "react";
import Section from "@templates/Section";
import ProfilePhoto from "@components/ProfilePhoto"
const Home = () => {
  return (
    <Section title="About">
      <p>
        Hello, I’m Adrian Garcia, Software developer based in Mexico.
        <br />
        <br />I really enjoy build things that live on the internet, such as
        websites, applications, or anything that someone with Internet and a
        device can use or visit.
      </p>
      <div className="align-center">
        <ProfilePhoto />
      </div>
      <p>
        My main area of experience is beeing a Front-End developer using
        languages, frameworks and other tools as:
      </p>
    </Section>
  );
};

export default Home;
