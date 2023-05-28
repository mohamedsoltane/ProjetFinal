import React from 'react';
  import { Link } from 'react-router-dom'
  import './button.css'
  
  function Button() {
      return (
          <Link to="Espaceclient">
              <button className='btn-dark'>Espace Client</button>
          </Link>
      )
  }
  export default Button