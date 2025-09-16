import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import hwachong from "../images/hwachong.png";
import farmer from "../images/farmer.jpg";
import hatiHealthLogo from "../images/hatiHealthLogo.png";
import dndtsLogo from "../images/dndtsLogo.png";
//import dndts from "../images/dndts.jpg"

const experiences = [
  {
    title: "Frontend Engineer @ Hati Health",
    img: hatiHealthLogo,
    date: "May 2025 - Aug 2025",
    desc: (
      <ul>
        <li>- Built and maintained reusable UI components using React</li>
        <li>
          - Applied Server Side Rendering (SSR) with Next.js to optimize SEO
          performance
        </li>
        <li>- Wrote automated unit test using Jest</li>
        <li>
          <strong>Tech Stack:</strong> React.js, Next.js, Redux Toolkit (RTK),
          Jest
        </li>
      </ul>
    ),
  },
  {
    title: "Software Engineer @ DNDTS",
    img: dndtsLogo,
    date: "May 2025 - Aug 2025",
    desc: (
      <ul>
        <li>
          - Engineered a React-based inventory dashboard integrated with Google
          Sheets to automate logistics audits and provide real-time fulfilment
          tracking
        </li>
        <li>- Improved internal efficiency through automation</li>
        <li>
          - Leveraged PostgreSQL and MongoDB for data aggregation and competitor
          analysis
        </li>
        <li>
          - Developed interactive PlotlyJS visualizations to uncover trends and
          support data-driven strategy
        </li>
        <li>
          <strong>Tech Stack:</strong> React.js, Google Sheets API, PostgreSQL,
          MongoDB, PlotlyJS
        </li>
      </ul>
    ),
  },

  {
    title: "Organic Farmer",
    img: farmer,
    date: "Jan 2024 - Feb 2024",
    desc: (
      <ul>
        <li>
          - Volunteered on Tsukuyomi farm in Tokushima, Japan for a month under
          a trainership programme
        </li>
        <li>
          - Learnt advanced organic farming methods and the importance of
          permaculture
        </li>
        <li>
          - Collaborated and interacted with volunteers from around the globe
        </li>
      </ul>
    ),
  },
  {
    title: "Hwa Chong Institution",
    img: hwachong,
    date: "Jan 2016 - Dec 2021",
    desc: (
      <ul>
        <li>
          - Completed HCI's 6-year IP programme, graduating in 2021 with
          straight A's in the GCE A Level's Examination
        </li>
        <li>
          - Took on multiple leadership opportunities, including being part of
          the 47th Student's Council
        </li>
        <li>- Developed strong interpersonal and organizational skills</li>
      </ul>
    ),
  },
];

function TimelineCard({ experience }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<img src={experience.img} className="rounded-full" />}
    >
      <h3 className="vertical-timeline-element-title">
        <strong>{experience.title}</strong>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.date}</h4>
      <p>{experience.desc}</p>
    </VerticalTimelineElement>
  );
}

function Timeline() {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 ">
      <p className="text-4xl font-bold inline border-b-4  border-pink-600">
        My Experiences
      </p>
      <VerticalTimeline className="w-full" lineColor={"black"} animate={true}>
        {experiences.map((experience) => (
          <TimelineCard experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
