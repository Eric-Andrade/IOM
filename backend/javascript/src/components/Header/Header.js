import React, {Component} from 'react'
// import styled, { ThemeProvider, css } from 'styled-components'
import { Link } from 'react-router-dom'
// import { invertTheme } from '../../utils/constants'
import styles from './Header.css'
import Button1 from '../../commons/Buttons/Button1/Button1'

// const Button = styled.button`
//   border-radius: 3px;
//   padding: 0.25em 1em;
//   margin: 0 1em;
//   background: ${props => props.theme.WHITE};
//   color: ${props => props.theme.PRIMARY};
//   border: 2px solid ${props => props.theme.PRIMARY};

//   ${props => props.primary && css`
//     background: ${props => props.theme.PRIMARY};
//     color: white;
//   `}
// `

class Header extends Component {
    // state = {  }
  render () {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h2 className={styles.title}>IOM Organización Internacional para las Migraciones</h2>
          <nav>
            <ul className={styles.listitems}>
              <li className={styles.listItem}><Button1 ><Link to='/'>Home</Link></Button1></li>
              <li className={styles.listItem}><Button1 ><Link to='/about'>About</Link></Button1></li>
              <li className={styles.listItem}><Button1 ><Link to='/iom'>Builder Forms</Link></Button1></li>
              {/* <li className={styles.listItem}><Button primary><Link to='/about'>About</Link></Button></li>
              <li className={styles.listItem}><ThemeProvider theme={invertTheme}><Button><Link to='/analytics'>Analytics</Link></Button></ThemeProvider></li> */}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

// const Header = React.createClass({
//     render: function(){
//         <h1> Header </h1>
//     }
// })

// const Header = () => {
//     return (
//         <h1> Header </h1>
//     )
// }

export default Header
