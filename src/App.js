import './App.css';
import Header from './Header';
import Body from './Body';
import About from './body/About';
import Technologies from './body/Technologies';
import { useEffect, useState } from 'react';

function App() {

  const [navBar, setNavBar] = useState(null)
    // const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
      setNavBar(document.querySelector('.collapse'))
      const root = document.querySelector('#root')

        if (navBar) {
            navBar.addEventListener('hide.bs.collapse', (e) => {
              console.log('hide')
              // root.style.color = '#00000078'
            })
            navBar.addEventListener('hidden.bs.collapse', (e) => {
              console.log('hidden')
              root.style.color = '#000000'
            })
            navBar.addEventListener('show.bs.collapse', (e) => {
                console.log('show')
              // setShowNavBar(true)
              root.style.color = '#0000001a'
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
      <About />
      {/* <Technologies /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
