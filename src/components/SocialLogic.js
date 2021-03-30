import React from "react";
import SocialContainer from "@components/SocialContainer";

import twitterIcon from "@assets/svg/twitter.svg";
import linkedinIcon from "@assets/svg/linkedin.svg";
import gmailIcon from "@assets/svg/gmail.svg";
import instagramIcon from "@assets/svg/instagram.svg";
import githubIcon from "@assets/svg/github.svg";
import bitcoinIcon from "@assets/svg/bitcoin.svg";
import coffeeIcon from "@assets/svg/coffee.svg";
import linkIcon from "@assets/svg/link.svg";
import docsIcon from "@assets/svg/docs.svg";

const SocialLogic = () => {
  const data = [
    {
      button: {
        name: "links",
        image: linkIcon
      },
      data: [
        {
          name: "twitter",
          image: twitterIcon,
          url: "http://www.twitter.com/adreanzoe",
        },
        {
          name: "linkedin",
          image: linkedinIcon,
          url: "http://www.twitter.com/adranuz",
        },
        {
          name: "instagram",
          image: instagramIcon,
          url: "http://www.twitter.com/adranuz",
        },
      ]
    },
    {
      button: {
        name: "docs",
        image: docsIcon
      },
      data: [
        {
          name: "gmail",
          image: gmailIcon,
          url: "http://www.twitter.com/adranuz",
        },
        {
          name: "github",
          image: githubIcon,
          url: "http://www.twitter.com/adranuz",
        },
        {
          name: "bitcoin",
          image: bitcoinIcon,
          url: "http://www.twitter.com/adranuz",
        },
        {
          name: "coffee",
          image: coffeeIcon,
          url: "http://www.twitter.com/adranuz",
        },
      ]
    },
  ];

  return (
    <>
      {
        data && data.map((data, id) => <SocialContainer key={id} {...data} />)
      }      
    </>
  );
};
export default SocialLogic;
