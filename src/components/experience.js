import ExperienceCard from "./expCard";
import { info } from "../info";
import React from "react";

function Experience() {
  return (
    <section className=' relative pt-1 flex flex-row justify-between text-center md:flex-col lg:justify-around'>

      <div className='w-full absolute flex  m-auto text-left snap-x snap-mandatory lg:pl-5 lg:pr-10 lg:h-3/4'>
        {info.experience.map((company, index) => (
          <ExperienceCard
            key={index}
            companyName={company.companyName}
            summary={company.summary}
            techstack={company.techstack}
            points={company.points}
            duration={company.duration}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience