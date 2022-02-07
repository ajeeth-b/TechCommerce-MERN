import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './components/nav-bar';
import AddProduct from './components/add-product';
import ViewProduct from './components/view-product';
import BuyProduct from './components/buy-product';
import EditProduct from './components/edit-product';


function App() {
  return <div>

    <BrowserRouter>
      <NavBar />
      <Switch>


        <Route exact path="/">
          <ViewProduct />
        </Route>

        <Route exact path="/add">
          <AddProduct />
        </Route>

        <Route exact path="/cart">
          <BuyProduct />
        </Route>

        <Route exact path="/edit">
          <EditProduct />
        </Route>

      </Switch>
    </BrowserRouter>
  </div>
}

export default App;