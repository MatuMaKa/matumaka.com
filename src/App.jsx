import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import projects from './projects.json'
import links from './links'
import { scrollTo } from './scroll'
const hideBroken = e => { e.currentTarget.style.display = 'none' }
export default function App() {
  return (
    <>
      <header className="bar">
        <nav aria-label="Links">
          {links.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
              <Icon />
              <span>{name}</span>
            </a>
          ))}
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>I make Minecraft plugins, mods and <em>websites.</em></h1>
          <p className="sub">Professional prompt engineer</p>
          <div className="actions">
            <button className="primary" onClick={() => scrollTo(document.getElementById('projects'))}>View projects</button>
            <a className="ghost" href="https://github.com/MatuMaKa" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
          </div>
        </section>
        <section id="projects" className="projects">
          <h2>Stuff I've <em>built.</em></h2>
          <p className="sub">Plugins, mods and sites. Click a card to open it.</p>
          <div className="grid">
            {projects.map(p => (
              <a key={p.title} className="card" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="thumb"><img src={p.thumbnail} alt="" loading="lazy" onError={hideBroken} /></div>
                <div className="body">
                  <h3>{p.title}<FaArrowUpRightFromSquare /></h3>
                  <p>{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>© 2026 MatuMaKa</p>
        <p>Warning: this website was made using AI.</p>
      </footer>
    </>
  )
}
