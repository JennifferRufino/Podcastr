import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
import {useTheme} from '../../contexts/ThemeContext';

export function Header() {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  const {theme, toggleTheme} = useTheme();

  return(
    <header className = {theme ? styles.darkTheme : styles.naturalTheme}>
      <div className = {styles.headerContainer}>
        {
          theme ? (
            <img src="darkThemeLogo.svg" alt="DarkTheme" />
          ) : (
            <img src="/logo.svg" alt="Logo" />
          )
        }

        <p>O melhor para você ouvir, sempre!</p>
        <span>
          {currentDate}
          <label className="switch">
            <input type="checkbox" onClick={() => toggleTheme()} />
            <span className="styles.slider"></span>
          </label>
        </span>
      </div>
    </header>
  )
}
