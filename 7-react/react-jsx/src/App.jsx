import React, { useState } from 'react'
import Header from './components/Header'
import CheckoutForm from './components/CheckoutForm'
import RecordTable from './components/RecordTable'
import Footer from './components/Footer'
import Drawer from './components/Drawer'



const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grapes', price: 3.99 },
    // Add more fruits as needed
  ])
  const addProduct = (newProduct) => {
    setProducts([...products,newProduct]);
  }

  const [records,setRecords] = useState([]);
  const addRecord = (newRecord) => setRecords([...records,newRecord]);

  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const removeRecord = (id) => setRecords(records.filter(record  => record.id !=id))
  return (
    <div className='max-w-[700px] p-5 mx-auto min-h-screen flex flex-col'>
        <Header />
        <CheckoutForm addRecord={addRecord} products={products} />
        <RecordTable records={records} removeRecord={removeRecord} />
        <Footer handleDrawer={handleDrawer} />
        <Drawer addProduct={addProduct} openDrawer={openDrawer} products={products} handleDrawer={handleDrawer} />
        
    </div>
  )
}

export default App