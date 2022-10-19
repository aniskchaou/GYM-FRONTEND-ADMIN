import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SubscriptionPieChart.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';

ChartJS.register(ArcElement, Tooltip, Legend);


const SubscriptionPieChart = () => {
  const [categories, setCategories] = useState([]);
  const [silver, setSilver] = useState(0);
  const [gold, setGold] = useState(0);
  const [premium, setPremium] = useState(0);


  useEffect(() => {

    typeSubsHTTPService.getGold().then(data => {
      setGold(data.data.gold)
    })
    typeSubsHTTPService.getPremium().then(data => {
      setPremium(data.data.premium)
    })
    typeSubsHTTPService.getSilver().then(data => {
      setSilver(data.data.silver)
    })

  });
  return (


    <div class="modal fade" id="chart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Subscription type by category</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Pie data={{
              labels: ['Gold', 'Premium', 'Silver'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [gold, premium, silver],
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

SubscriptionPieChart.propTypes = {};

SubscriptionPieChart.defaultProps = {};

export default SubscriptionPieChart;
