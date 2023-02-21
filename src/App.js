import React from "react";
import "./assets/scss/app.scss";
function App() {
  return (
    <div className="App">
      <div class="container">
        <header class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">Sub Header</div>
            </div>
            <div class="row">
              <div class="col-12">Main Header</div>
            </div>
          </div>
        </header>
        <main class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-12">Main Banner</div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12">Banner-1</div>
                  <div class="col-12">Banner-2</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">Flash sale</div>
            </div>
            <div class="row">
              <div class="col-12">Category</div>
            </div>
            <div class="row">
              <div class="col-12">Best seller</div>
            </div>
            <div class="row">
              <div class="col-12">Product list 1</div>
            </div>
            <div class="row">
              <div class="col-12">Product list 2</div>
            </div>
          </div>
        </main>
        <footer class="row">
          <div class="col-12">Footer</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
