import { useEffect, useRef, useState } from 'react'
import './App.css'

function Divider(props) {

  return (
    <>
    {
    props.windowWidth > 500? 
    <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
    :
    <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
    }
    </>
    
  )
}

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleWindowResize = () => {
    console.log("window Resized: " + window.innerWidth)
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    
    return () => {window.removeEventListener('resize', handleWindowResize)}

  })

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div className="advice-title txt-small">
            ADVICE #117
          </div>

          <div className="advice-content txt-large">
            "It is easy to sit up and take notice, what's difficult is getting up and taking action."
          </div>

          <div className="advice-divider">
            < Divider windowWidth = {windowWidth} />
            
          </div>
          
          <div className="advice-generate">
            <div className="advice-btn-container">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </div>         
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
    
  )
}

export default App
