import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkProcess from './components/WorkProcess'
import Portfolio from './components/Portfolio'
import Discuss from './components/Discuss'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const links = [
  {
    title: "Home",
    href: "#home"
  },
  {
    title: "Work Process",
    href: "#work-process"
  },
  {
    title: "Portfolio",
    href: "#portfolio"
  },
  {
    title: "Testimonials",
    href: "#testimonials"
  },
  {
    title: "Contact Me",
    href: "#contact-me",
    btn: true
  }
]

function App() {
  return (
    <>
      <header className="h-screen flex flex-col md:gap-10" id="home">
        <Navbar links={links} />
        <Hero />
      </header>

      <main className="my-10">
        <WorkProcess />

        <Portfolio />

        <Discuss />

        <Testimonials />
      </main>

      <footer className="grid grid-cols-12 grid-rows-12 lg:grid-rows-6">
        <Contact />
        <Footer links={links} />
      </footer>
    </>
  )
}

export default App
