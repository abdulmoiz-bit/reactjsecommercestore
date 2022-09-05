import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className='my-3'>CONTACT US</h1>
                    <div className="col-md-6 my-3">
                        <form>
                        <div className="form-group">
                                <label htmlFor="exampleInputName">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleInputMessag">Message</label>
                                <textarea id="subject"  className="form-control" name="subject" placeholder="Write something.."/>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact