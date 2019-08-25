import React, { Component } from "react";
import './App.css';

class Products extends Component {
  render() {
    return (

        <div class="container">
          <div class="flex-container">
            <div class="card">
              <div class="card-image" style={{backgroundImage: 'url(../images/lavandula.jpg)'}}> </div>
              <div class="card-content">

                <h1>Soap N° 1</h1>
                <div class="subtitle">Fresh Lavanda</div>
                <p>Lavandula (common name lavender) is a genus of 47 known species
                of flowering plants in the mint family, Lamiaceae.</p>

                <div class="card-details">
                  <div class="card-details-inner">
                    <div class="read-more">
                      <a class="button" href="https://en.wikipedia.org/wiki/Lavandula">Buy it</a>
                    </div>
                    <div class="options">
                      <div class="comments">
                        <a href="#!">
                          <i class="fa fa-comments-o"></i>
                          16 comments
                        </a>
                      </div>
                      <div class="likes">
                        <a href="#!">
                          <i class="fa fa-heart-o"></i>
                          322 likes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-image" style={{backgroundImage: 'url(../images/bergamot.jpg)'}}></div>
              <div class="card-content">

                <h1>Soap N° 2</h1>
                <div class="subtitle">Strong Bergamotto</div>
                <p>Citrus bergamia, the bergamot orange, is a fragrant citrus fruit the size of an orange,
                with a yellow or green color similar to a lime, depending on ripeness.</p>

                <div class="card-details">
                  <div class="card-details-inner">
                    <div class="read-more">
                      <a class="button" href="https://en.wikipedia.org/wiki/Bergamot_orange">Buy it</a>
                    </div>
                    <div class="options">
                      <div class="comments">
                        <a href="#!">
                          <i class="fa fa-comments-o"></i>
                          22 comments
                        </a>
                      </div>
                      <div class="likes">
                        <a href="#!">
                          <i class="fa fa-heart-o"></i>
                          417 likes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="flex-container">
            <div class="card">
              <div class="card-image" style={{backgroundImage: 'url(../images/mentha.jpg)'}}></div>
              <div class="card-content">

                <h1>Soap N° 3</h1>
                <div class="subtitle">Fresh Mentha</div>
                <p>Mentha is a genus of plants in the family Lamiaceae (mint family).The exact distinction between species is unclear;
                it is estimated that 13 to 24 species exist.Hybridization between some of the species occurs naturally and many hybrids,
                as well as numerous cultivars, are known.</p>

                <div class="card-details">
                  <div class="card-details-inner">
                    <div class="read-more">
                      <a class="button" href="https://en.wikipedia.org/wiki/Mentha">Buy it</a>
                    </div>
                    <div class="options">
                      <div class="comments">
                        <a href="#!">
                          <i class="fa fa-comments-o"></i>
                          16 comments
                        </a>
                      </div>
                      <div class="likes">
                        <a href="#!">
                          <i class="fa fa-heart-o"></i>
                          322 likes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-image" style={{backgroundImage: 'url(../images/argan.jpg)'}}></div>
              <div class="card-content">

                <h1>Soap N° 4</h1>
                <div class="subtitle">Soft Argan</div>
                <p>Argan oil is a plant oil produced from the kernels of the argan tree (Argania spinosa L.) that is endemic to Morocco. In Morocco,
                 argan oil is used to dip bread in at breakfast or to drizzle on couscous or pasta. It is also used for cosmetic purposes.</p>

                <div class="card-details">
                  <div class="card-details-inner">
                    <div class="read-more">
                      <a class="button" href="https://en.wikipedia.org/wiki/Argan_oil">Buy it</a>
                    </div>
                    <div class="options">
                      <div class="comments">
                        <a href="#!">
                          <i class="fa fa-comments-o"></i>
                          22 comments
                        </a>
                      </div>
                      <div class="likes">
                        <a href="#!">
                          <i class="fa fa-heart-o"></i>
                          417 likes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>



    );
  }
}

export default Products;
