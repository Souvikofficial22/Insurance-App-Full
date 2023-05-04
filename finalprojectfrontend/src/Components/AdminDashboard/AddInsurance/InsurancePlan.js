import React from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'

const InsurancePlan = () => {
  return (
    <>
    <Navbar role={"admin"} />
    <div className='d-flex align-items-center justify-content-center w-100'>
        <h1>Adding Insurance Plan</h1>
    </div>
    <div className='d-flex align-items-center justify-content-center w-100'>
    <div className='login mt-3'>
            <div class="card">
                <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Insurance Type:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                    <label for="formFile" class="form-label">Image:</label>
                    <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="mb-3">

                    </div>
                    <button type="submit" class="btn btn-primary w-100" onClick={""}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InsurancePlan