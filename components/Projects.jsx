import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Panensia from '../public/assets/projects/Panensia.png'
import UMY from '../public/assets/projects/UMY.png'
import Habit from '../public/assets/projects/Habit.png'
import CareerFund from '../public/assets/projects/CareerFund.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl font-semibold tracking-widest text-[#2FA7DD]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Panensia'
            backgroundImg={Panensia}
            projectUrl='/panensia'
            tech='Next JS'
          />
          <ProjectItem
            title='SIM UMY'
            backgroundImg={UMY}
            projectUrl='/umy'
            tech='React JS'

          />
          <ProjectItem
            title='Habit App'
            backgroundImg={Habit}
            projectUrl='/habit'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='CareerFund'
            backgroundImg={CareerFund}
            projectUrl='/CareerFund'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
