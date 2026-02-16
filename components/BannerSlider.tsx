'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
    type: 'image' | 'video';
    src: string;
    title?: string;
    subtitle?: string;
}

interface BannerSliderProps {
    slides: Slide[];
}

export default function BannerSlider({ slides }: BannerSliderProps) {
    return (
        <section 
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                marginLeft: 'calc(-50vw + 50%)',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={1000}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.banner-next',
                    prevEl: '.banner-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.banner-pagination',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                style={{ width: '100%', height: '100%' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                            {/* Background Media */}
                            {slide.type === 'image' && (
                                <img
                                    src={slide.src}
                                    alt={slide.title || 'Banner'}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            )}
                            {slide.type === 'video' && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                >
                                    <source src={slide.src} type="video/mp4" />
                                </video>
                            )}

                            {/* Dark Overlay */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55))',
                                }}
                            />

                            {/* Text Content */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 10,
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    maxWidth: '1400px',
                                    padding: '0 5%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                }}>
                                  
                                    {slide.title && (
                                        <h1
                                            style={{
                                                color: '#fff',
                                                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                                fontFamily: 'var(--font-playfair), serif',
                                                fontWeight: 700,
                                                lineHeight: 1.1,
                                                maxWidth: '900px',
                                                marginBottom: '1.5rem',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />
                                    )}
                                      {slide.subtitle && (
                                        <p
                                            style={{
                                                color: '#D4AF37',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.35em',
                                                fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                                                marginBottom: '1rem',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {slide.subtitle}
                                        </p>
                                    )}
                                    <div
                                        style={{
                                            width: '80px',
                                            height: '3px',
                                            backgroundColor: '#D4AF37',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button
                className="banner-prev"
                style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,
                    background: 'rgba(0,0,0,0.3)',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '1rem',
                    cursor: 'pointer',
                    color: '#fff',
                    transition: 'all 0.3s',
                }}
            >
                <ChevronLeft size={32} />
            </button>
            <button
                className="banner-next"
                style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,
                    background: 'rgba(0,0,0,0.3)',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '1rem',
                    cursor: 'pointer',
                    color: '#fff',
                    transition: 'all 0.3s',
                }}
            >
                <ChevronRight size={32} />
            </button>

            {/* Pagination */}
            <div
                className="banner-pagination"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20,
                    display: 'flex',
                    gap: '0.75rem',
                }}
            />

            <style jsx global>{`
                .banner-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255,255,255,0.5);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .banner-pagination .swiper-pagination-bullet-active {
                    background: #D4AF37;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    );
}
