import React from 'react';
import {useLocation} from 'react-router-dom';

function Movie() {

    let location = useLocation();
    console.log(location.state)
    let {data} = location.state;
    const regex = /(<([^>]+)>)/ig;

    return (
      <div className='container'>
        <div className='row my-5'>

          <div className='col-md-4'>
            <div className="card" style={{width: "20rem"}}>
                <img src={data.img} className="card-img-top" alt="..."/>
            </div>
          </div>

          <div className='offset-1 col'>
            <h2><strong>{data.name}</strong></h2>
            <p>{data.sum.replace(regex, '')}</p>
            <p><strong>Language: </strong>{data.lang}</p>
            <p><strong>Rating: </strong>{data.rate.average?data.rate.average:'Not Available'}</p>
            <p><strong>Genres: </strong>{data.gen}</p>

            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
              Book Tickets
            </button>

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Enter Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form onsubmit="return false">
                    <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                      <br/>
                      <label for="exampleInputname">Full Name</label>
                      <input type="email" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter Name"/>
                      <br/>
                      <label for="exampleInputMobileNo">Mobile No.</label>
                      <input type="number" className="form-control" id="exampleInputMobileNo" placeholder="Mobile No."/>
                      <br/>
                      <label for="exampleInputTickets">Number Of Tickets</label>
                      <input type="number" className="form-control" id="exampleInputTickets" placeholder="Tickets"/>
                    </div>
                    <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn-secondary ">Book</button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Movie;