import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import commando from '../images/commando.jpeg'
import hwachong from '../images/hwachong.png'
import farmer from '../images/farmer.jpg'
//import dndts from "../images/dndts.jpg"

const experiences = [
    {
    title:"Organic Farmer",
    img: farmer,
    date: "Jan 2024 - Feb 2024",
    desc: "I volunteered on Tsukuyomi farm in Tokushima, Japan for a month under a trainership programme. During my time there, I learnt advanced organic farming methods as well as the importance of permaculture. In my work, I had the chance to interact and work with many other volunteers accross the globe.",
  },
  {
    title:"Commando Fighter", 
    img: commando,
    date: "Jan 2022 - Nov 2023",
    desc:"I served as a Commando Fighter during National Service, where the importance of accountability and self-owenrship was drilled into me. I was also lucky to have the opportunity to take part in multiple bilateral exercies with countries such as China and Thailand.",
  },
  {
    title: "Hwa Chong Institution",
    img: hwachong,
    date: "Jan 2016 - Dec 2021",
    desc: "I was part of HCI's 6 year IP programme where I graduated in 2021 with straight A's in the GCE A Level's Examination. During my time there, I took on many leadership opportunities such as being a part of the 47th Student's Council where I developed strong interpersonal skills.",
  }

  ]

function Trial ({experience}){
    return(
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={experience.img} className='rounded-full'/>}
  >
    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{experience.date}</h4>
    <p>
    {experience.desc}
    </p>
  </VerticalTimelineElement>
    )
}

function Testing() {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 '>
    <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
              My Experiences
            </p>
    <VerticalTimeline className ='w-full' lineColor={ 'black' } animate={true}>
   {experiences.map((experience) => (
    <Trial experience={experience} />
   ))}

</VerticalTimeline>
</div>
  )
}

export default Testing