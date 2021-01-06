import React from "react";
import "./styles.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Project from "./Comps/Project";
import firegram from "./Images/firegram.PNG";
import covid from "./Images/covid.PNG";
import amazon from "./Images/amazon.PNG";
import insta from "./Images/insta.PNG";
import me from "./Images/me.PNG";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function App() {
  return (
    <div className="App">
      <div className="app__info">
        <div className="app__intro">
          <h1 className="app__iam">I'm </h1>
          <h1 className="app__name"> Karn</h1>
          <img src={me} className="app_meimage" alt="" />
        </div>
        <div className="app_description">
          I am a Full Stack developer with over 6 months of experience in
          Reactjs, Firebase, Redux, SQL, Material UI and Flexbox. I also write
          Blogs on Medium and make Youtube videos. Shoot me a message!!
        </div>
        <div classNamae="app__socialicons">
          <a href="https://www.linkedin.com/in/gurkaran-singh-061b21a3/">
            <LinkedInIcon className="linkedin__icon" />
          </a>
          <a href="https://github.com/KarnTech">
            <GitHubIcon className="github__icon" />
          </a>
          {/*<a href="https://www.google.ca/">
            <YouTubeIcon className="youtube__icon" />
          </a>*/}
        </div>
        <div className="app__projectheading">
          <h1 className="app__iam">Projects </h1>
          <hr className="app__line" />
        </div>

        <div className="app__project">
          <div>
            <Project
              title="Spotify Clone"
              image="https://lh3.googleusercontent.com/-5qTyMz1X6-wU527M-XL3ZThqBojC_C8XG5zPcf3a8SKj4dYimvEsuSO_FBpdYxcQG6xJBKNOw=w640-h400-e365-rj-sc0x00ffffff"
              description="Clone of Spotify Web App. Used Spotify API for Authentication and retrieved Playlist data. Context API for state Management. 
              "
              demo="https://csb-8rlsi-9tynx4wyk.vercel.app/"
              code="https://codesandbox.io/s/spotify-demo-8rlsi"
            />
          </div>
          <div>
            <Project
              title="Youtube Clone"
              image="https://miro.medium.com/max/5112/1*d6rElRlTRsifm2bZzGgQFA.png"
              description="A clone of Youtube using React best practices for components and State Management. Dynamically pulls videos and search results using Youtube API "
              demo="https://csb-dlydk-1l6e0kjw0.vercel.app/"
              code="https://codesandbox.io/s/youtube-clone-dlydk"
            />
          </div>
          <div>
            <Project
              title="Covid Tracker"
              image={covid}
              description="Best Covid Tracker out there built using React and Public Covid API "
              demo="https://csb-ctpjq-5vc9wcq18.vercel.app/"
              code="https://codesandbox.io/s/nifty-archimedes-ctpjq"
            />
          </div>
          <div>
            <Project
              title="Firegram"
              image={firegram}
              description="A photo gallery with functionality similar to Instagram. 
              (React, Firebase, Material UI)"
              demo="https://csb-9g1fz-kgykcbowd.vercel.app/"
              code="https://codesandbox.io/s/firebase-2-9g1fz"
            />
          </div>
          <div>
            <Project
              title="Amazon Clone"
              image={amazon}
              description="A clone of Amazon website using user Authentication with Firebase, State Management and React Routing. 
              (React, Material UI, React-router, Firebase Auth())"
              demo="https://clone-d4784.web.app/"
              code=""
            />
          </div>
          <div>
            <Project
              title="Instagram Clone"
              image={insta}
              description="A demo of the Instagram App using react best practices. "
              demo=""
              code=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
