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
    // const navMenuContainer = document.querySelector('.navmenu-container')
    const navIcon = document.querySelector('.navbar-toggler-icon')
    const footerText = document.querySelectorAll('.footer-text')
  
    useEffect(() => {
      setNavBar(document.querySelector('.collapse'))

        if (navBar) {
            navBar.addEventListener('hide.bs.collapse', (e) => {
              console.log('hide')
            })
          navBar.addEventListener('hidden.bs.collapse', (e) => {
            // navMenuContainer.classList.remove('navOpenOnMobile')
              html.classList.remove('fixed-position')
              body.classList.remove('fixed-position')
              navIcon.classList.remove('arrow')
              projectButtons.forEach((button) => {
                button.style.textShadow = '1px -1px 0px #ff01001C, 2px -1px 0px #ff01001C, 2px -2px 0px #ff01001C, 3px -2px 0px #ff01001C, 4px -2px 0px #ff001a44'
                button.classList.remove('noHover')
                button.removeAttribute('disabled')
                button.style.color = '#000'
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = '1px -1px 0px #ff01001C, 2px -1px 0px #ff01001C, 2px -2px 0px #ff01001C, 3px -2px 0px #ff01001C, 4px -2px 0px #ff001a44'
                h2.style.color = '#fff'
              });
              footerText.forEach(text => {
                text.classList.remove('footer-fade')
              })
            })
          navBar.addEventListener('show.bs.collapse', (e) => {
            // navMenuContainer.classList.add('navOpenOnMobile')
              html.classList.add('fixed-position')
              body.classList.add('fixed-position')
              navIcon.classList.add('arrow')
              projectButtons.forEach((button) => {
                button.style.textShadow = 'none'
                button.classList.add('noHover')
                button.setAttribute('disabled', '')
                button.style.color = '#ff001a44'
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = 'none'
                h2.style.color = '#ff001a44'
                
              });
              footerText.forEach(text => {
                text.classList.add('footer-fade')
              })
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
