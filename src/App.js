import './App.css';
import Header from './Header';
import Body from './Body';
import About from './body/About';
import Technologies from './body/Technologies';
import { useEffect, useState } from 'react';
import Main from './body/Main';

function App() {

  const html = document.getElementsByTagName('html')

  console.log(html)

  const [navBar, setNavBar] = useState(null)
    // const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
      setNavBar(document.querySelector('.collapse'))
      const root = document.querySelector('#root')
      const lis = document.querySelectorAll('.main-li')
      const mainH2s = document.querySelectorAll('.main-h2')
      console.log(lis)

        if (navBar) {
            navBar.addEventListener('hide.bs.collapse', (e) => {
              console.log('hide')
              // root.style.color = '#00000078'
            })
            navBar.addEventListener('hidden.bs.collapse', (e) => {
              console.log('hidden')
              root.style.color = '#000000'
              lis.forEach(li => {
                li.style.textShadow = '-20px 20px 0px rgba(0,0,0,0.06)'
                li.classList.remove('noHover')
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = '-20px 20px 0px rgba(255,255,255,0.1)'
                h2.style.color = '#fff'
              });
            })
            navBar.addEventListener('show.bs.collapse', (e) => {
                console.log('show')
              // setShowNavBar(true)
              root.style.color = 'rgba(0,0,0,0.06)'
              lis.forEach(li => {
                li.style.textShadow = 'none'
                li.classList.add('noHover')
              });
              mainH2s.forEach(h2 => {
                h2.style.textShadow = 'none'
                h2.style.color = 'rgba(255,255,255,0.1)'
                
              });
            })
            navBar.addEventListener('shown.bs.collapse', (e) => {
              console.log('shown')
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
      <Header />
      {/* <Body /> */}
      {/* <About /> */}
      <Main />
      {/* <Technologies /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
