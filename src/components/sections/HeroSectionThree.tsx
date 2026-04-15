'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import arrow from '@/assets/img/core-img/arrow.png'
import circularLines2 from '@/assets/img/core-img/small-circular-lines2.png'

import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'

// Animate slide function with proper typing
const animateSlide = (slide: HTMLElement) => {
  const heroContent = slide.querySelector(
    '.animated-slide-content'
  ) as HTMLElement | null
  if (heroContent) {
    heroContent.classList.add('hero3-animate')
    const fadeElements =
      heroContent.querySelectorAll<HTMLElement>('[data-fadeInUp]')
    fadeElements.forEach((el) => {
      const delay = el.getAttribute('data-delay') || '0ms'
      el.style.transition = `all 0.8s ease ${delay}`
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }
}

export default function HeroSectionThree() {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const swiperInstance = swiperRef.current
    if (!swiperInstance) return

    const handleInit = (swiper: SwiperType) => {
      const firstSlide = swiper.slides[swiper.activeIndex] as HTMLElement
      firstSlide.classList.add('active-slide')
      animateSlide(firstSlide)
    }

    const handleSlideChangeStart = (swiper: SwiperType) => {
      swiper.slides.forEach((slide) => {
        const slideEl = slide as HTMLElement
        const heroContent = slideEl.querySelector(
          '.animated-slide-content'
        ) as HTMLElement | null
        if (heroContent) {
          heroContent.classList.remove('hero3-animate')
          const fadeElements =
            heroContent.querySelectorAll<HTMLElement>('[data-fadeInUp]')
          fadeElements.forEach((el) => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(40px)'
          })
        }
      })
    }

    const handleSlideChangeEnd = (swiper: SwiperType) => {
      const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement
      activeSlide.classList.add('active-slide')
      animateSlide(activeSlide)
    }

    // Attach event listeners
    swiperInstance.on('init', handleInit)
    swiperInstance.on('slideChangeTransitionStart', handleSlideChangeStart)
    swiperInstance.on('slideChangeTransitionEnd', handleSlideChangeEnd)

    // Initialize manually to trigger "init"
    swiperInstance.init()

    // Cleanup on unmount
    return () => {
      swiperInstance.off('init', handleInit)
      swiperInstance.off('slideChangeTransitionStart', handleSlideChangeStart)
      swiperInstance.off('slideChangeTransitionEnd', handleSlideChangeEnd)
    }
  }, [])

  return (
    <section className='hero-section'>
      {/* Hero Slider */}
      <div className='hero-swiper'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          loop
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
        >
          {/* Slide 1 */}
          <SwiperSlide className='bg-img'>
            <div className='background-image hero-three-bg-5' />
            <div className='container h-100'>
              <div className='row h-100 align-items-center justify-content-center'>
                <div className='col-12 col-md-8'>
                  <div className='hero-content animated-slide-content mt-0 text-center'>
                    <h2
                      className='mb-4 text-white'
                      data-fadeInUp
                      data-delay='300ms'
                    >
                      Building Strong Institutions
                    </h2>
                    <p
                      className='mb-5 text-white'
                      data-fadeInUp
                      data-delay='600ms'
                    >
                      SITRAC is a Pan-African training and consultancy institution based in Nairobi, Kenya,
                      supporting governments and organizations in improving leadership, governance, and
                      institutional performance.
                    </p>
                    <Link
                      href='/contact'
                      className='btn btn-primary'
                      data-fadeInUp
                      data-delay='900ms'
                    >
                      <span>Explore Training</span>
                      <span>Book Consultancy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className='bg-img'>
            <div className='background-image hero-three-bg-1' />
            <div className='container h-100'>
              <div className='row h-100 align-items-center justify-content-center'>
                <div className='col-12 col-md-8'>
                  <div className='hero-content animated-slide-content mt-0 text-center'>
                    <h2
                      className='mb-4 text-white'
                      data-fadeInUp
                      data-delay='300ms'
                    >
                      Better Governance, Better Growth
                    </h2>
                    <p
                      className='mb-5 text-white'
                      data-fadeInUp
                      data-delay='600ms'
                    >
                      We deliver practical training and consultancy programs in leadership, ICT, SME development,
                      and governance to enhance efficiency, compliance, and organizational effectiveness.
                    </p>
                    <Link
                      href='/contact'
                      className='btn btn-primary'
                      data-fadeInUp
                      data-delay='900ms'
                    >
                      <span>Request Training</span>
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navigation */}
      <button className='hero-button-prev'>
        <i className='ti ti-chevron-left' />
      </button>
      <button className='hero-button-next'>
        <i className='ti ti-chevron-right' />
      </button>

      {/* Shapes */}
      <div className='shape3 scroll-image'>
        <Image src={arrow} alt='' />
      </div>
      <div className='shape4'>
        <Image src={circularLines2} alt='' />
      </div>
    </section>
  )
}
