import React from 'react'

function Main() {
    return (
        <div className='main-section'>
            <div className='main-btns'>
                <button className='btn'>ADD Beneficiaries</button>
                <button className='btn'>ADD Asset</button>
                <button className='btn'>ADD Liability</button>
                <button className='btn'>CREATE Links</button>
                <button className='btn'>ADD Signatures</button>
                <button className='btn'>Will Generation</button>
            </div>

            <div className='main-table my-4 table-responsive'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Relationship</th>
                            <th scope="col">DateofBirth</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Vaishnavi</td>
                            <td>Sister</td>
                            <td>1988-10-04</td>
                            <td className='table-status'>Active</td>
                            <td className='table-btns'>
                                <button className='btn'>Edit</button>
                                <button className='btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Vaishnavi</td>
                            <td>Sister</td>
                            <td>1988-10-04</td>
                            <td className='table-status-inactive'>Inactive</td>
                            <td className='table-btns'>
                                <button className='btn'>Edit</button>
                                <button className='btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ramya</td>
                            <td>Sister</td>
                            <td>2005-07-14</td>
                            <td className='table-status'>Active</td>
                            <td className='table-btns'>
                                <button className='btn'>Edit</button>
                                <button className='btn'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='main-form'>
                <form>
                    <h3>Add New Beneficiary</h3>
                    <div class="mb-3">
                        <label className="form-label">S.No</label>
                        <input type="text" className="form-control"  aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Relationship</label>
                        <input type="text" className="form-control"  aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Date of Birth</label>
                        <input type="date" className="form-control"  aria-describedby="emailHelp"/>
                    </div>
                    <button type="button" className="btn btn-primary">Add Beneficiary</button>
                </form>
            </div>
        </div>
    )
}
export default Main