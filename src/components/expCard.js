import React from 'react'

function ExperienceCard({
  companyName,
  duration,
  techstack,
  summary,
  points,
// eslint-disable-next-line no-undef
}=props) {
  return (
    <div className='experience-card snap-center p-6 w-6/12 text-slate-400 h-4/4' >
      <div className='bg-gray-900 p-4 rounded-lg lg:mx-auto lg:p-10'>
        <h3 className='text-slate-400 text-center font-semibold uppercase text-xl lg:text-3xl underline'>
          {companyName}
        </h3>
        <p className='text-center text-xs lg:text-base text-pink-400 mt-2'>{"<"+duration+"/>"}</p>
        <div className='flex justify-center flex-wrap mt-2'>
          {techstack.map((tech, idx) => (
            <span
              className='homeBtn lg:text-lg pt-0 pb-1 cursor-pointer m-auto text-green-400'
              key={idx}
            >
              {tech}
            </span>
          ))}
        </div>
        {summary && (
          <div
            dangerouslySetInnerHTML={{
              __html: summary.replace(/<span/g, '<span style="text-shadow: 0 0 10px rgba(180,163,52,1); text-decoration: underline;"'),
            }}
            className='link-highlight lg:text-lg font-bold '
          />
        )}
        <ul className='lg:text-lg text-slate-400'>
          {points.map((point, idx) => (
            <li className='lg:text-lg text-slate-400 m-5 font-thin'
              key={idx}
                dangerouslySetInnerHTML={{
                  __html: point.replace(/<span/g, '<span style="text-shadow: 0 0 10px rgba(180,163,52,1); text-decoration: underline;"'),
                }}
            >
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard