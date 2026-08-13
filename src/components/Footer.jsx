import { useState } from 'react'
import { useToast } from '../context/ToastContext'
import { useFormModal } from './VolunteerPartnerModals'

export default function Footer({ navigate }) {
  const [email, setEmail] = useState('')
  const showToast = useToast()
  const { openVolunteer, openPartner, ModalComponent } = useFormModal()

  const handleSubscribe = () => {
    if (email) {
      showToast('Thank you for subscribing!')
      setEmail('')
    }
  }

  // Social media links with complete SVG paths
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100082086220538',
      icon: 'facebook',
      d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/clubrafikiyouth/',
      icon: 'instagram',
      isInstagram: true
    },
    {
      name: 'Flickr',
      href: 'https://www.flickr.com/photos/194412004@N05',
      icon: 'flickr',
      d: 'M6.5 0A6.5 6.5 0 0 0 0 6.5v11A6.5 6.5 0 0 0 6.5 24h11a6.5 6.5 0 0 0 6.5-6.5v-11A6.5 6.5 0 0 0 17.5 0h-11zM5.5 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@clubrafiki4198',
      icon: 'youtube',
      d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/yegoclubrafiki',
      icon: 'twitter',
      d: 'M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.856.973 5.001 5.001 0 00-8.533 4.57 14.007 14.007 0 01-10.147-5.134 5 5 0 001.548 6.686 5.04 5.04 0 01-2.267-.616v.06a5 5 0 004.009 4.905 5 5 0 01-2.263.084 5.001 5.001 0 004.674 3.476 10.007 10.007 0 01-6.177 2.135c-.398 0-.779-.023-1.17-.067a14.047 14.047 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.025 10.025 0 0024 4.59z'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/club-rafiki-926267341/',
      icon: 'linkedin',
      d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'
    }
  ]

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-display font-black text-xl text-white mb-4">
              <img
                src="/assets/logo.jpeg"
                alt="Club Rafiki logo"
                className="w-12 h-12 rounded-xl object-cover bg-white"
              />
              Club Rafiki
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Empowering children and youth of Nyamirambo, Kigali since 1974 — training, informing, framing, and equipping the next generation.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition-colors duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {social.isInstagram ? (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="1.5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="1.5"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                      </>
                    ) : (
                      <path d={social.d} fill="white"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Quick Links</h4>
            <ul className="space-y-2">
              {[['about','About Us'],['programs','Our Programs'],['media','News & Media'],['impact','Our Impact'],['gallery','Gallery']].map(([page, label]) => (
                <li key={page}>
                  <button onClick={() => navigate(page)} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('donate')} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Donate</button>
              </li>
              <li>
                <button onClick={openVolunteer} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Volunteer</button>
              </li>
              <li>
                <button onClick={openPartner} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Partner With Us</button>
              </li>
              <li><a href="https://www.flickr.com/photos/194412004@N05" target="_blank" rel="noreferrer" className="text-white/55 hover:text-orange text-sm transition-colors">Flickr Channel</a></li>
              <li><a href="https://www.youtube.com/@clubrafiki4198" target="_blank" rel="noreferrer" className="text-white/55 hover:text-orange text-sm transition-colors">YouTube Channel</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Stay Updated</h4>
            <p className="text-white/55 text-sm mb-3">Subscribe for latest news and events from Club Rafiki.</p>
            <div className="flex rounded-xl overflow-hidden border border-white/15">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/10 text-white placeholder-white/35 text-sm px-4 py-3 outline-none"
              />
              <button onClick={handleSubscribe} className="bg-orange text-white text-sm font-bold px-4 hover:bg-orange-dark transition-colors cursor-pointer border-0">
                Go
              </button>
            </div>
            <p className="text-white/40 text-xs mt-3 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              KN 2 AV 266, Nyamirambo, Kigali
            </p>
            <p className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon-Sat: 09:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>© 2025 Club Rafiki Youth Empowerment Center. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-orange" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            for the youth of Rwanda
          </p>
        </div>
      </div>
      {ModalComponent}
    </footer>
  )
}
