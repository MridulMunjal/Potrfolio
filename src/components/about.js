import React from 'react';
import me from '../assets/images/me.png';
import EmojiBullet from './emojibullet';
import { info } from "../info";
import Style from './Home.module.scss';

const About = () => {
    return (
        <>
            <div className='font-bold flex flex-col justify-center mt-[10%] mb-[20%]'>
            <main className="flex flex-col md:flex-row items-center justify-center min-h-screen-175 " id="home">
                <div className="rounded-full overflow-hidden w-40 h-40 bg-gray-200 border-4 border-purple-500">
                    <img
                        src={me}
                        alt="Dangerous when focused!"
                        className="object-cover object-center w-full h-full shadow-slate-900"
                    />
                </div>

                <div>
                    <h1 className="text-slate-200 font-bold text-xl mb-2 hover:animate-bounce">
                        Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {info.firstName}</span>
                        <span className={Style.hand}>🖐</span>
                    </h1>
                    <h2 className="text-slate-200 font-bold text-xl mb-2 hover:animate-bounce" >I'm {info.position}.</h2>
                    <ul className="p-2 text-slate-200">
                        {info.miniBio.map((bio, index) => (
                            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                        ))}
                    </ul>
                </div>
            </main>
            </div>
        </>
    );
}

export default About;
