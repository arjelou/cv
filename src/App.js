import {Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import About from './component/about';
import Contact from './component/contact';
import Skills from './component/skills';
import Projects from './component/projects';
import './global.css';

export default function App() {
  return (
  <>
    <Routes>
      <Route path='' element={<Index />}>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
      <Route path='*' element={<h1>Page not found!</h1>} />
    </Routes>
  </>
  )
}
