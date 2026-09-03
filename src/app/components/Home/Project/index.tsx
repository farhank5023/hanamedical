'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import { ProjectType } from '@/app/types/project'
import ProjectSkeleton from '../../Skeleton/Project'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Project = () => {
  const [project, setProject] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setProject(data.ProjectData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='project' className='scroll-mt-12'>
      <section className='bg-secondary dark:bg-darklight overflow-hidden'>
        <div className='container relative'>
          <div className='mb-4'>
            <h2 className='text-center'>Industries We Serve</h2>
          </div>
          <div className='md:max-w-45 mx-auto mb-8'>
            <p className='text-xl font-normal text-center leading-8'>
               Providing skilled workforce solutions across diverse industries 
  in the Middle East and beyond.
            </p>
          </div>
          {/* slider */}
          <div className='relative z-20'>
            <Slider {...settings}>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ProjectSkeleton key={i} />
                  ))
                : project.map((item, i) => (
                    <div key={i}>
                      <div className="h-full m-3">
  <div className="h-full flex flex-col justify-between p-4 bg-white dark:bg-lightdarkblue rounded-lg">

    {/* IMAGE */}
    <div className="w-full aspect-[3/2] mb-4 overflow-hidden rounded-lg">
      <Image
        src={getImgPath(item.coverImg)}
        alt={item.name}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>

    {/* TITLE */}
    <p className="text-base font-medium text-darkblue dark:text-white text-center">
      {item.name}
    </p>

  </div>
</div>
                    </div>
                  ))}
            </Slider>
          </div>
          {/* floating images */}
          <div className='absolute top-28 -left-9 dark:opacity-5'>
            <Image
              src={getImgPath('/images/banner/pattern1.svg')}
              alt='ptrn1'
              width={141}
              height={141}
            />
          </div>
          <div className='absolute -bottom-7 -right-7 dark:opacity-5 z-10'>
            <Image
              src={getImgPath('/images/banner/pattern2.svg')}
              alt='ptrn1'
              width={141}
              height={141}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
