import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

function EventsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentEventImages, setCurrentEventImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentEventName, setCurrentEventName] = useState('')

  const openLightbox = (images: string[], index: number, eventName: string) => {
    setCurrentEventImages(images)
    setCurrentIndex(index)
    setCurrentEventName(eventName)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentEventImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === currentEventImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentEventImages.length])

  const events = {
    2024: [
      {
        name: "Sparkle 2024",
        date: "15 March 2024",
        institution: "Inter-College Event",
        level: "Inter-College",
        badge: "1st Prize 🥇",
        prize: true,
        desc: "Won 1st place in the inter-college cultural dance competition — recognized for performance, coordination, and stage presence.",
        images: ["/src/assets/events/Sparkle 2024.jpeg", "/src/assets/events/Sparkle 2024 2.jpeg"]
      },
      {
        name: "Convergence'24",
        date: "16 April 2024",
        institution: "Dept. of Humanities and Sciences",
        level: "State",
        badge: "Prize 🏆",
        prize: true,
        desc: "Paper presentation on Business Communication — awarded for clarity, structure, and delivery.",
        images: ["/src/assets/events/Convergence'24 1.jpeg", "/src/assets/events/Convergence'24 2.jpeg"]
      }
    ],
    2025: [
      {
        name: "Standard Spectrum 4.0",
        date: "11 March 2025",
        institution: "BIS",
        level: "National",
        badge: "2nd Prize 🥈",
        prize: true,
        desc: "Presented on industrial standards using Helmet Production as a real-world use case. Evaluated on technical accuracy and practical application.",
        images: ["/src/assets/events/Standard Spectrum 4.0 2025 1.jpeg", "/src/assets/events/Standard Spectrum 4.0 2025 2.jpeg"]
      },
      {
        name: "TechBlaze 2k25",
        date: "20 March 2025",
        institution: "SRM",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "Participated in two events — Auction simulation and Thesis Presentation. Presented Urban Breeze, an IoT air quality monitoring system.",
        images: ["/src/assets/events/TechBlaze 2k25 1.jpeg", "/src/assets/events/TechBlaze 2k25 2.jpeg"]
      },
      {
        name: "Refuerzo'25",
        date: "05 April 2025",
        institution: "Agni College of Technology",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "Presented Urban Breeze — an IoT-based air quality monitoring system with real-time AQI dashboard and environmental alert system.",
        images: ["/src/assets/events/Refuerzo'25 1.jpeg", "/src/assets/events/Refuerzo'25 2.jpeg"]
      },
      {
        name: "Qtuxathon 2.0",
        date: "29–30 April 2025",
        institution: "Sri Sai Ram Institute of Technology",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "24-hour hackathon. Built a Blockchain-based application from scratch within the event duration.",
        images: ["/src/assets/events/Qtuxathon 2.0 1.jpeg", "/src/assets/events/Qtuxathon 2.0 2.jpeg"]
      },
      {
        name: "TechCaucus-2025",
        date: "14 August 2025",
        institution: "SIMATS",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "Paper presentation on TruthLense AI — an AI-powered media integrity platform detecting deepfakes, audio-visual inconsistencies, and steganography-based hidden content.",
        images: ["/src/assets/events/TechCaucus-2025.jpeg"]
      },
      {
        name: "Standard Spectrum 5.0",
        date: "20 August 2025",
        institution: "BIS",
        level: "National",
        badge: "1st Prize 🥇",
        prize: true,
        desc: "Participated in two events — Paper Presentation and Technical Committee Meeting. Bagged 1st place in the Technical Committee Meeting.",
        images: ["/src/assets/events/Standard Spectrum 5.0 1.jpeg", "/src/assets/events/Standard Spectrum 5.0 2.jpeg"]
      },
      {
        name: "Genaisis'25",
        date: "30 August 2025",
        institution: "St. Joseph's College of Engineering",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "Competed in 3 events — Mystic Morphs (decoding), Triwizard Challenge, and Gringotts Innovation Vault (on-spot business pitch).",
        images: ["/src/assets/events/Genaisis'25.jpeg"]
      },
      {
        name: "Steganos'25",
        date: "08 November 2025",
        institution: "SRM",
        level: "National",
        badge: "2nd Prize 🥈",
        prize: true,
        desc: "Presented Talent Track — an AI-powered fitness analysis platform. Evaluated on innovation, technical depth, and real-world impact.",
        images: ["/src/assets/events/Steganos'25 1.jpeg", "/src/assets/events/Steganos'25 2.jpeg"]
      },
      {
        name: "Industry Institution Summit 7.0",
        date: "17 December 2025",
        institution: "KCG College of Technology",
        level: "National",
        badge: "1st Prize 🥇",
        prize: true,
        desc: "Participated in two events — Quiz and Mobile App Development. Bagged 1st place in Mobile App Development with Talent Track.",
        images: ["/src/assets/events/Industry Institution Summit 7.0 4.jpg", "/src/assets/events/Industry Institution Summit 7.0 1.jpeg", "/src/assets/events/Industry Institution Summit 7.0 2.jpeg", "/src/assets/events/Industry Institution Summit 7.0 3.jpeg"]
      }
    ],
    2026: [
      {
        name: "BIS Student Chapter",
        date: "18 February 2026",
        institution: "BIS",
        level: "National",
        badge: "2nd Prize 🥈",
        prize: true,
        desc: "Paper presentation at the BIS Student Chapter event. Evaluated on technical content and presentation quality.",
        images: ["/src/assets/events/BIS 2026.jpeg", "/src/assets/events/BIS 2026-2.jpeg"]
      },
      {
        name: "NXTGEN",
        date: "21–22 February 2026",
        institution: "SRM",
        level: "National",
        badge: "Participation",
        prize: false,
        desc: "24-hour national level hackathon. Collaborated on building a working prototype within the event timeframe.",
        images: ["/src/assets/events/Nextgen 2026 1.jpeg", "/src/assets/events/Nextgen 2026 2.jpeg", "/src/assets/events/Nextgen 2026 3.jpeg"]
      }
    ]
  }

  return (
    <>
      <div style={{ backgroundColor: '#0d0a14', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '80px 24px 40px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(192,132,252,0.1)',
            border: '1px solid #c084fc',
            color: '#c084fc',
            padding: '4px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            ✦ Events & Competitions
          </span>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 900,
            color: '#f5f0ff',
            margin: '0 0 16px'
          }}>
            Where I've{' '}
            <em style={{ color: '#c084fc', fontStyle: 'italic' }}>Competed.</em>
          </h1>
          <p style={{ color: '#a89bc2', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
            National-level events, hackathons, and competitions across technical and business domains.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            maxWidth: '500px',
            margin: '40px auto 0'
          }}>
            {[['12', 'Events'], ['5', 'Prizes Won'], ['2', 'Hackathons']].map(([num, label]) => (
              <div key={label} style={{
                background: '#1a1025',
                border: '1px solid #2d1f42',
                borderRadius: '12px',
                padding: '20px 12px',
                textAlign: 'center'
              }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#c084fc' }}>
                  {num}
                </div>
                <div style={{ fontSize: '12px', color: '#6b5f80', marginTop: '4px' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2d1f42', maxWidth: '800px', margin: '0 auto' }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px 80px' }}>
          {(Object.entries(events) as [string, typeof events[2024]][]).reverse().map(([year, yearEvents]) => (
            <div key={year}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '48px 0 20px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#c084fc'
              }}>
                📅 {year}
              </div>
              {yearEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    background: '#1a1025',
                    border: '1px solid #2d1f42',
                    borderRadius: '20px',
                    padding: '32px',
                    marginBottom: '24px',
                    transition: 'border-color 300ms'
                  }}
                  whileHover={{ borderColor: '#c084fc' }}
                >
                  {/* TOP ROW */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <span style={{ fontSize: '20px' }}>🏆</span>
                      <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: '#f5f0ff'
                      }}>
                        {event.name}
                      </span>
                    </div>
                    <span style={{
                      flexShrink: 0,
                      background: event.prize ? 'rgba(192,132,252,0.15)' : 'rgba(168,155,194,0.08)',
                      border: `1px solid ${event.prize ? '#c084fc' : '#2d1f42'}`,
                      color: event.prize ? '#c084fc' : '#6b5f80',
                      padding: '6px 16px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600
                    }}>
                      {event.badge}
                    </span>
                  </div>

                  {/* DETAIL GRID */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '12px 24px', 
                    marginTop: '16px' 
                  }}>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#6b5f80', fontFamily: 'Inter, sans-serif' }}>
                        Date:{' '}
                      </span>
                      <span style={{ fontSize: '14px', color: '#a89bc2', fontFamily: 'Inter, sans-serif' }}>
                        {event.date}
                      </span>
                    </div>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#6b5f80', fontFamily: 'Inter, sans-serif' }}>
                        Institution:{' '}
                      </span>
                      <span style={{ fontSize: '14px', color: '#a89bc2', fontFamily: 'Inter, sans-serif' }}>
                        {event.institution}
                      </span>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#6b5f80', fontFamily: 'Inter, sans-serif' }}>
                        Level:{' '}
                      </span>
                      <span style={{ fontSize: '14px', color: '#a89bc2', fontFamily: 'Inter, sans-serif' }}>
                        {event.level}
                      </span>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p style={{ 
                    marginTop: '16px', 
                    paddingTop: '12px',
                    borderTop: '1px solid #2d1f42',
                    fontSize: '0.95rem', 
                    color: '#a89bc2', 
                    lineHeight: 1.8,
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {event.desc}
                  </p>
                  
                  {/* Thumbnails */}
                  {event.images && event.images.length > 0 && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      marginTop: '20px'
                    }}>
                      {event.images.slice(0, 2).map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img}
                          alt={`${event.name} ${idx + 1}`}
                          onClick={() => openLightbox(event.images!, idx, event.name)}
                          style={{
                            width: '100%',
                            height: '220px',
                            objectFit: 'cover',
                            borderRadius: '14px',
                            border: '1px solid #2d1f42',
                            cursor: 'pointer'
                          }}
                          whileHover={{ opacity: 0.8, scale: 1.02, borderColor: '#c084fc' }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
          <p style={{ textAlign: 'center', color: '#6b5f80', fontSize: '13px', fontStyle: 'italic', marginTop: '40px' }}>
            More events coming soon.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.92)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#1a1025',
                border: '1px solid #2d1f42',
                color: '#f5f0ff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#c084fc'
                e.currentTarget.style.color = '#c084fc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2d1f42'
                e.currentTarget.style.color = '#f5f0ff'
              }}
            >
              ✕
            </button>

            {/* Left Arrow */}
            {currentEventImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                style={{
                  position: 'absolute',
                  left: '20px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(192,132,252,0.1)',
                  border: '1px solid #c084fc',
                  color: '#c084fc',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 200ms'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(192,132,252,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(192,132,252,0.1)'
                }}
              >
                ‹
              </button>
            )}

            {/* Image */}
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              src={currentEventImages[currentIndex]}
              alt={`${currentEventName} ${currentIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />

            {/* Right Arrow */}
            {currentEventImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(192,132,252,0.1)',
                  border: '1px solid #c084fc',
                  color: '#c084fc',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 200ms'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(192,132,252,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(192,132,252,0.1)'
                }}
              >
                ›
              </button>
            )}

            {/* Counter */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.6)',
              color: '#f5f0ff',
              fontSize: '14px',
              padding: '8px 16px',
              borderRadius: '999px',
              pointerEvents: 'none'
            }}>
              {currentIndex + 1} / {currentEventImages.length} — {currentEventName}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
