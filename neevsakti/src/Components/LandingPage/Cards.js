import React from 'react'
import './Cards.css'

export default function Cards() {
  return (
    <div className="container">
    <div className="row ">
        <div className="col-xl-6 col-lg-6 ">
            <div className="card l-bg-cherry custom-card-cherry">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Local for Vocal</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                            Buy locally made products & support us.
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>100+ <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px;'}}>
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%;'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 ">
            <div className="card l-bg-blue-dark custom-card-blue-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Become A Volunteer</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                Join to support our cause
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span> 600+<i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px;'}}>
                        <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%;'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 ">
            <div className="card l-bg-green-dark custom-card-green-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Check out Youtube</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                Check out our Youtube Channel
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>10k <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px;'}}>
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%;'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 ">
            <div className="card l-bg-orange-dark custom-card-orange-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Donate</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                Donate to support our cause
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>As your wish <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px;'}}>
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%;'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
