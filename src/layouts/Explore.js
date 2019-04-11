import React from 'react'

import moonImg from '../assets/img/moon.png';

class Explore extends React.Component {
    render() {
        return(
            <div>
                  <section id="explore-head-section">
                    <div className="container">
                      <div className="row">
                        <div className="col text-center py-5">
                          <h1 className="display-4">Explore</h1>
                          <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente doloribus ut iure itaque quibusdam rem accusantium
                            deserunt reprehenderit sunt minus.</p>
                          <a href="#" className="btn btn-outline-secondary">Find Out More</a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="explore-section" className="bg-light text-muted py-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">

                            <img src={moonImg} alt="" className="img-fluid mb-3 rounded"/>
                          </div>
                          <div className="col-md-6">
                            <h3>Explore & Connect</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                              tempore perspiciatis repudiandae hic?</p>
                            <div className="d-flex">
                              <div className="p-4 align-self-start">
                                <i className="fas fa-check fa-2x"></i>
                              </div>
                              <div className="p-4 align-self-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="p-4 align-self-start">
                                <i className="fas fa-check fa-2x"></i>
                              </div>
                              <div className="p-4 align-self-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

            </div>
        );
    }
}

export default Explore;