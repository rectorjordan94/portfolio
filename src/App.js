import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Main from './body/Main';

function App() {

  const html = document.querySelector('html')
  const root = document.querySelector('#root')
  const body = document.body

  // shift color off array and push it on to the end
  const colors = ['ff6600', '00ff66', '6600ff']

  // might need to do the above with various classes that get added to the html & body elements instead, assign a background color to each class

  const [navBar, setNavBar] = useState(null)
    // const [showNavBar, setShowNavBar] = useState(false)
    const projectButtons = document.querySelectorAll('.project-button')
    const mainH2s = document.querySelectorAll('.main-h2')
    const navMenuContainer = document.querySelector('.navmenu-container')
    const navIcon = document.querySelector('.navbar-toggler-icon')
  
    useEffect(() => {
      setNavBar(document.querySelector('.collapse'))
      

        if (navBar) {
            navBar.addEventListener('hide.bs.collapse', (e) => {
              console.log('hide')
              // root.style.color = '#00000078'
            })
          navBar.addEventListener('hidden.bs.collapse', (e) => {
              navMenuContainer.classList.remove('navOpenOnMobile')
              body.classList.remove('fixed-position')
              navIcon.classList.remove('arrow')
              // console.log('hidden')
              // root.style.color = '#000000'
              projectButtons.forEach((button) => {
                button.style.textShadow = '20px -20px 0px rgba(0,0,0,0.055)'
                button.classList.remove('noHover')
                button.style.color = '#000000'
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = '20px -20px 0px rgba(255,255,255,0.115)'
                h2.style.color = '#fff'
              });
            })
          navBar.addEventListener('show.bs.collapse', (e) => {
              navMenuContainer.classList.add('navOpenOnMobile')
              body.classList.add('fixed-position')
              navIcon.classList.add('arrow')
              // console.log('show')
              // setShowNavBar(true)
              // root.style.color = 'rgba(0,0,0,0.055)'
              projectButtons.forEach((button) => {
                button.style.textShadow = 'none'
                button.classList.add('noHover')
                button.style.color = 'rgba(0,0,0,0.055)'
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = 'none'
                h2.style.color = 'rgba(255,255,255,0.115)'
                
              });
            })
            navBar.addEventListener('shown.bs.collapse', (e) => {
              // console.log('shown')
              // root.style.color = '#0000001a'
            })
        }
    }, [navBar])



  return (
    <div className="App">
      <Header mainH2s={mainH2s} />
      {/* <Body /> */}
      {/* <About /> */}
      <Main />
      {/* <Technologies /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
