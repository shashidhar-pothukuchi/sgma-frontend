import React,{useState} from 'react';

function ViewItemDetails({ isOpen, onClose }) {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState('btnradio1');
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
      };

      
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="detailsModalLabel" aria-hidden={!isOpen}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title" id="detailsModalLabel">Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 text-center">
                <h3 className="mb-4 text-center">Tomato</h3>
                <img src={require('../images/toamto.jpg')} width="100" height="100" className="img-fluid" alt="Tomato" />
                <p className="mt-4 mb-0">Default Quantity</p>
                <h5>10</h5>
                <p className="mt-4 mb-0">Purchase Quantity</p>
                <h5>10</h5>

                <div className="row mt-4">
                  <div className="col">
                    <div className="accordion" id="itemHistoryAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="itemHistoryHeading">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itemHistoryCollapse" aria-expanded="true" aria-controls="itemHistoryCollapse">
                            Item History
                          </button>
                        </h2>
                        <div id="itemHistoryCollapse" className="accordion-collapse collapse" aria-labelledby="itemHistoryHeading" data-bs-parent="#itemHistoryAccordion">
                          <div className="accordion-body">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Date</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2023-10-01</td>
                                  <td>Added to inventory</td>
                                </tr>
                                <tr>
                                  <td>2023-09-25</td>
                                  <td>Updated quantity</td>
                                </tr>
                                {/* Add more rows as needed */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <h5 className="mb-4"> Add to inventory</h5>
                </div>
                <form>
                  <div className="text-center">
                    <div className="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={selectedRadio === 'btnradio1'} onChange={handleRadioChange}/>
                      <label className="btn btn-outline-success" htmlFor="btnradio1">Default</label>
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={selectedRadio === 'btnradio2'} onChange={handleRadioChange} />
                      <label className="btn btn-outline-success" htmlFor="btnradio2">Custom</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input type="date" className="form-control" id="expiryDate" />
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" checked={isChecked} id="defaultPurchase" onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="defaultPurchase">
                      This is my default purchase
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={onClose}>Cancel</button>
                    <button type="submit" className="btn btn-outline-success">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItemDetails;
