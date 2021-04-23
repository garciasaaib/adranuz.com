import React from "react";
import SocialContainer from "@components/SocialContainer";

import linkIcon from "@assets/svg/link.svg";
import twitterIcon from "@assets/svg/twitter.svg";
import linkedinIcon from "@assets/svg/linkedin.svg";
import instagramIcon from "@assets/svg/instagram.svg";
import coffeeIcon from "@assets/svg/coffee.svg";
import platziIcon from "@assets/svg/platzi.svg"

const SocialLogic = () => {
  const data = [
    {
      button: {
        name: "links",
        image: linkIcon
      },
      data: [
        {
          name: "platzi",
          image: platziIcon,
          url: "https://platzi.com/c/adranuz/"
        },
        {
          name: "instagram",
          image: instagramIcon,
          url: "https://www.instagram.com/adranzoe/",
        },
        {
          name: "linkedin",
          image: linkedinIcon,
          url: "https://www.linkedin.com/in/adrian-garcia-saaib/",
        },
        {
          name: "twitter",
          image: twitterIcon,
          url: "http://www.twitter.com/adreanzoe",
        },
        {
          name: "coffee",
          image: coffeeIcon,
          url: "https://www.buymeacoffee.com/adranuz",
        },
      ]
    },
    // {
    //   button: {
    //     name: "docs",
    //     image: docsIcon
    //   },
    //   data: [
    //     {
    //       name: "gmail",
    //       image: gmailIcon,
    //       url: "http://www.twitter.com/adranuz",
    //     },
    //     {
    //       name: "github",
    //       image: githubIcon,
    //       url: "http://www.twitter.com/adranuz",
    //     },
    //     {
    //       name: "bitcoin",
    //       image: bitcoinIcon,
    //       url: "http://www.twitter.com/adranuz",
    //     },

    //   ]
    // },
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
