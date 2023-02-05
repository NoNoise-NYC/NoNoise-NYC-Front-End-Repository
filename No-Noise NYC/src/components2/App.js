import { Route, Routes } from 'react-router-dom'


import MainPage from './components/mainPageWithLogin/MainPage';

import Profile from './components/profilePage/Profile';

function App () {
  return (

    
      <Route path='/' element={<MainPage />} />
   
     
      <Route path='/profile' element={<Profile />} />
      <
  
    </Routes>
    // <MainPage />
  )
}

export default App
