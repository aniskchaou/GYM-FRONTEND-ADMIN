
import React, { useEffect, useRef, useState } from 'react';
import './Course.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditCourse from '../EditCourse/EditCourse';
import AddCourse from '../AddCourse/AddCourse';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import courseMessage from '../../../main/messages/courseMessage';
import CourseTestService from '../../../main/mocks/CourseTestService';
import HTTPService from '../../../main/services/HTTPService';
import User from '../../../main/config/user';

const Course = () => {

  const [courses, setCourses] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);

  useEffect(() => {
    LoadJS()
    retrieveCourses()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setCourses(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveCourses = () => {
    var courses = CourseTestService.getAll();
    setCourses(courses);
  };

  const resfresh = () => {
    retrieveCourses()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm(User.DELETE_MSG);
    if (r) {
      showMessage('Confirmation', courseMessage.delete, 'success')
      CourseTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const closeModalEdit = (data) => {
    resfresh()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    resfresh()
    closeButtonAdd.current.click()
  }
  return (


    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Cours</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead class=" text-primary">
                <th>Nom Membre</th>
                <th>Nom de personnel </th>
                <th>Heure départ</th>
                <th>Heure fin</th>
                <th>Frais résérvation</th>
                <th>Actions</th>
              </thead>
              <tbody>
                <tr>
                  <td>Anis</td>
                  <td>Anis</td>
                  <td>14h00</td>
                  <td>16h00</td>
                  <td>234</td>
                  <td>

                    <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                </tr>
              </tbody>
            </table>


            <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <EditCourse />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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

Course.propTypes = {};

Course.defaultProps = {};

export default Course;
