
import PropTypes from 'prop-types';
import './IncomeBarChart.css';
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import revenueHTTPService from '../../../main/services/revenueHTTPService';
import showMessage from '../../../libraries/messages/messages';
import { chartBarOption, intialChartBarData } from '../../../main/config/chart.bar';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const IncomeBarChart = () => {
  const [incomeChart, setIncomeChart] = useState(intialChartBarData);

  useEffect(() => {
    getIncomeChartData()

  }, []);

  const getIncomeChartData = () => {

    revenueHTTPService.getAllRevenueByDate()
      .then(response => {
        setIncomeChart(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  return (
    <div class="modal fade" id="chart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Total incomes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Bar options={chartBarOption} data={incomeChart} />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
};

IncomeBarChart.propTypes = {};

IncomeBarChart.defaultProps = {};

export default IncomeBarChart;
