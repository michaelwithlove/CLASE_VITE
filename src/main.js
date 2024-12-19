
import navBar from '../Componentes/header.js'
import title from '../Componentes/titulo.js'
import './style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `
  <div> 
    ${navBar}
    ${title ('Hola mundo!')}
  </div>
`

