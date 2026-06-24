import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastProvider } from './context/ToastContext'

import HomePage     from './pages/HomePage'
import AboutPage    from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import MediaPage    from './pages/MediaPage'
import ImpactPage   from './pages/ImpactPage'
import GalleryPage  from './pages/GalleryPage'
import ContactPage  from './pages/ContactPage'
import DonatePage   from './pages/DonatePage'

const PAGES = {
  home:     HomePage,
  about:    AboutPage,
  programs: ProgramsPage,
  media:    MediaPage,
  impact:   ImpactPage,
  gallery:  GalleryPage,
  contact:  ContactPage,
  donate:   DonatePage,
}

// Map page keys <-> real URL paths so the address bar reflects navigation
const PAGE_TO_PATH = {
  home: '/', about: '/about', programs: '/programs', media: '/media',
  impact: '/impact', gallery: '/gallery', contact: '/contact', donate: '/donate',
}

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
)

function buildPath(page, param) {
  const base = PAGE_TO_PATH[page] || '/'
  return page === 'programs' && param ? `${base}?program=${param}` : base
}

function readLocation() {
  const page = PATH_TO_PAGE[window.location.pathname] || 'home'
  const param = page === 'programs'
    ? new URLSearchParams(window.location.search).get('program')
    : null
  return { page, param }
}

export default function App() {
  // Read initial location state as a single atomic source of truth
  const [route, setRoute] = useState(() => readLocation())

  // Fix Favicon attributes with valid standard MIME type mappings
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.type = 'image/jpeg' // FIXED: Changed from 'logo.jpeg' to valid MIME type
    link.href = '/logo.jpeg'
  }, [])

  // Keep state perfectly in sync when the user handles browser history changes
  useEffect(() => {
    const onPopState = () => {
      setRoute(readLocation())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (page, param = null) => {
    setRoute({ page, param })
    window.history.pushState({}, '', buildPath(page, param))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const PageComponent = PAGES[route.page] || HomePage

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={route.page} navigate={navigate} />
        
        <main className="flex-1">
          <PageComponent navigate={navigate} param={route.param} />
        </main>
        
        <Footer navigate={navigate} />
      </div>
    </ToastProvider>
  )
}
