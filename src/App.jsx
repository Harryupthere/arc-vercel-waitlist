import Route from './routes/routes'
import './assets/scss/index.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {
  AOS.init();

  useEffect(() => {
    AOS.refresh();
  }, []);


  return (
    <>
      <Route />
    </>
  )
}

export default App
