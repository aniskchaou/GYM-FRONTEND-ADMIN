
import PropTypes from 'prop-types';
import './ExpenseBarChart.css';
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
import expenseHTTPService from '../../../main/services/expenseHTTPService';
import { chartBarOption, intialChartBarData } from '../../../main/config/chart.bar';
import showMessage from '../../../libraries/messages/messages';
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
const ExpenseBarChart = () => {

  const [expenseChart, setExpenseChart] = useState(intialChartBarData);
  useEffect(() => {
    getExpenseChartData()

  }, []);
  const getExpenseChartData = () => {

    expenseHTTPService.getExpenseByDate()
      .then(response => {
        setExpenseChart(response.data);
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
            <h5 class="modal-title" id="exampleModalLongTitle">Total expenses</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Bar data={expenseChart} options={chartBarOption} />;
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )

};

ExpenseBarChart.propTypes = {};

ExpenseBarChart.defaultProps = {};

export default ExpenseBarChart;
