import React, { useEffect, useState } from 'react';
import './FrontOffice.css';
import frontOfficeHTTPService from '../../../main/services/frontOfficeHTTPService';
import EditFrontOffice from '../EditFrontOffice/EditFrontOffice'


const FrontOffice = () => {
  const [frontOffice, setFrontOffice] = useState({});

  useEffect(() => {
    retrieveEvents()
  }, []);


  const retrieveEvents = () => {
    frontOfficeHTTPService.getFrontOffice()
      .then(response => {
        setFrontOffice(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="FrontOffice">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i class="nc-icon nc-money-coins"></i> Front Office</h4>
            </div>
            <div className="card-body">
              <div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editFrontOffice">Edit</button>
                <a type="button" class="btn btn-warning" href="http://localhost:5000">Website</a>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Home Section Title : {frontOffice.sliderTitle}</li>
                  <li class="list-group-item">Left Button : {frontOffice.leftButtonTitle} </li>
                  <li class="list-group-item">Right button : {frontOffice.rightButtonTitle} </li>
                  <li class="list-group-item">member Title :  {frontOffice.memberstitle} Title </li>
                  <li class="list-group-item">Content : {frontOffice.content}  </li>
                  <li class="list-group-item">Footer :   {frontOffice.footer} </li>
                  <li class="list-group-item">About title : {frontOffice.aboutustitle} </li>
                  <li class="list-group-item">sub title : {frontOffice.subTitle}  </li>
                  <li class="list-group-item">contact description : {frontOffice.contactDescription} </li>
                  <li class="list-group-item">Quote title : {frontOffice.trainerstitle} </li>
                  <li class="list-group-item">Quote 1 title : {frontOffice.quote1Title} </li>
                  <li class="list-group-item">Quote 1 description {frontOffice.quote1Description} </li>
                  <li class="list-group-item">Quote 2 title :{frontOffice.quote2Title}  </li>
                  <li class="list-group-item">Quote 2 description :{frontOffice.quote2Description} </li>
                  <li class="list-group-item">Value title :{frontOffice.valuetitle} </li>
                  <li class="list-group-item">Value 1: {frontOffice.value1Title} </li>
                  <li class="list-group-item">Description 1 : {frontOffice.description1} </li>
                  <li class="list-group-item">Value 2 :{frontOffice.value2Title} </li>
                  <li class="list-group-item">Description 2 : {frontOffice.description2}  </li>
                  <li class="list-group-item">Value 3 :{frontOffice.value3Title} </li>
                  <li class="list-group-item">Description 3 {frontOffice.description3}  </li>

                </ul>
              </div>
            </div>
            <div class="modal fade" id="editFrontOffice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <EditFrontOffice frontOffice={frontOffice} />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

FrontOffice.propTypes = {};

FrontOffice.defaultProps = {};

export default FrontOffice;
