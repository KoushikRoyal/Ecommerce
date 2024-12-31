
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/SIdebar'
import './Admin.css'

import {Routes,Route} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/addproduct' element={<ListProduct/>}/>
        </Routes>
        
    </div>
  )
}

export default Admin