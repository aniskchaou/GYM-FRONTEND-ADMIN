
import './StaffPieChart.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import staffHTTPService from '../../../main/services/staffHTTPService';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const StaffPieChart = () => {

  const [all, setAll] = useState(0);
  const [workout, setWorkout] = useState(0);
  const [fitness, setFitness] = useState(0);
  const [yoga, setYoga] = useState(0);

  useEffect(() => {
    staffHTTPService.getAll().then(data => {
      setAll(data.data.all)
    })
    staffHTTPService.getAllFitness().then(data => {
      setFitness(data.data.fitness)
    })
    staffHTTPService.getAllYoga().then(data => {
      setYoga(data.data.yoga)
    })
    staffHTTPService.getWorkOut().then(data => {
      setWorkout(data.data.workout)
    })
  }, []);

  return (
    <div class="modal fade" id="chart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Staff type by role</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Pie data={{
              labels: ['Workout', 'Fitness', 'Yoga'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [workout, fitness, yoga],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1,
                },
              ],
            }} />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
};

StaffPieChart.propTypes = {};

StaffPieChart.defaultProps = {};

export default StaffPieChart;
