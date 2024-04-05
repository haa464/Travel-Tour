import React from 'react'
import Subheader from '../../components/Subheader/subheader';
import './destination.css';
import Switzerland from '../../assets/desc/image-9.jpg';
import UK from '../../assets/desc/image-10.jpg';
import France from '../../assets/desc/image-11.jpg';
import Thai from '../../assets/desc/image-12.jpg';
import Singapore from '../../assets/desc/image-13.jpg';
import Italy from '../../assets/desc/image-14.jpg';
import Member from '../../assets/desc/image-15.jpg'

const Destination = () => {
  return (
    <div className='destinnation_content'>
      <div className="desct_design">
        <div className="container">
          <Subheader subtitle="Destination lists" title="Go Exotic Places" />
          <div className="img_content_1">
            <div className="row">
              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={Switzerland} alt="Switzerland" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">Switzerland</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={UK} alt="United Kingdom" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">United Kingdom</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={France} alt="France" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">France</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="img_content_2">
            <div className="row">
              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={Thai} alt="Switzerland" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">ThaiLand</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={Singapore} alt="Singapore" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">Singapore</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color">
                      <img class="card-img" src={Italy} alt="Italy" />
                    </div>
                    <div class="card-img-1">
                      <p class="card-text">Travel to</p>
                      <h3 class="card-title">Italy</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box_des">
                  <div class="card text-white overflow-hidden">
                    <div className="img_color_one">
                      <img class="card-img" src={Member} alt="Member" />
                    </div>
                    <div class="card-img-2">
                      <div className="card_box_title">Up to 50% Off</div>
                      <h3 class="card_title">Members are Saving up to 50%</h3>
                      <div className="card_btn">
                        <a href="#" className="btn-white"><span>View Deals</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination