import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-7">
            <mf-product-view></mf-product-view>
          </div>
          <div class="col-sm-5">
            <mf-product-cart></mf-product-cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
