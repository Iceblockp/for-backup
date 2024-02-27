import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Homepage from './page/Home.page'
import Aboutpage from './page/About.page'
import Contactpage from './page/Contact.page'
import NavComponents from './components/Nav.components'
import BookPage from './page/book/Book.page'
import DetailBookPage from './page/book/DetailBook.page'
import AuthorPage from './page/book/Author.page'
import NotFound from './page/NotFound'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <NavComponents/>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/about' element={<Aboutpage />}></Route>
            <Route path='/contact' element={<Contactpage />}></Route>
            <Route path='/book' element={<BookPage />}></Route>
            <Route path='/book/:id' element={<DetailBookPage />}></Route>
            <Route path='/book/:id/author' element={<AuthorPage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App