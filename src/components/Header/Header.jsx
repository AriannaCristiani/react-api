import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <h1>Il mio Blog</h1>
      </div>
    </header>
  )
}