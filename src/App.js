import {Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Language from './component/language';
import Framework from './component/framework';
import Tools from './component/tools';

export default function App() {
  return (
  <>
    <Routes>
      <Route path='' element={<Index />}>
        <Route path='/language' element={<Language />} />
        <Route path='/framework' element={<Framework />} />
        <Route path='/tools' element={<Tools />} />
      </Route>
      <Route path='*' element={<h1>Page not found!</h1>} />
    </Routes>
  </>
  )
}
