import React from 'react'


const AddBooking = () => {
  return (
    <div>
        

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">booking idr id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">owner name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">email</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">phone</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">vehicle registration number</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">vehicle brand</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">vehicle model</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">battery capacity(kWh)</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">connector type </label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">charging date</label>
                          <input type="date" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">time slot</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">estimated units(kWh)</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">charging bay number</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBooking