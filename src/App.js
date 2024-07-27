import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Main from './body/Main';

function App() {

  const html = document.querySelector('html')
  const body = document.body

  // shift color off array and push it on to the end
  const colors = ['ff6600', '00ff66', '6600ff']

  // might need to do the above with various classes that get added to the html & body elements instead, assign a background color to each class

  const [navBar, setNavBar] = useState(null)
    // const [showNavBar, setShowNavBar] = useState(false)
    const root = document.querySelector('#root')
    const lis = document.querySelectorAll('.main-li')
    const mainH2s = document.querySelectorAll('.main-h2')
    const navMenuContainer = document.querySelector('.navmenu-container')
  
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
              // console.log('hidden')
              root.style.color = '#000000'
              lis.forEach(li => {
                li.style.textShadow = '-20px 20px 0px rgba(0,0,0,0.055)'
                li.classList.remove('noHover')
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = '-20px 20px 0px rgba(255,255,255,0.115)'
                h2.style.color = '#fff'
              });
            })
          navBar.addEventListener('show.bs.collapse', (e) => {
              navMenuContainer.classList.add('navOpenOnMobile')
              body.classList.add('fixed-position')
              // console.log('show')
              // setShowNavBar(true)
              root.style.color = 'rgba(0,0,0,0.055)'
              lis.forEach(li => {
                li.style.textShadow = 'none'
                li.classList.add('noHover')
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

  // useEffect(() => {
  //     const root = document.querySelector('#root')
  //       if (showNavBar) {
  //         console.log('show nav bar ran')
  //         root.style.color = '#0000001a'
  //     } else {
  //         root.style.color = '#000000'
  //       }
  //   }, [showNavBar])


  return (
    <div className="App">
      <Header mainH2s={mainH2s} />
      {/* <Body /> */}
      {/* <About /> */}
      <Main  />
      {/* <Technologies /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
