import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import { Bar, Pie } from 'react-chartjs-2';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css'; // a dependency of timegrid
import '@fullcalendar/timegrid/main.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';

import { chartBarOption, intialChartBarData } from '../../../main/config/chart.bar';
import expenseHTTPService from '../../../main/services/expenseHTTPService';
import showMessage from '../../../libraries/messages/messages';
import activityHTTPService from '../../../main/services/activityHTTPService';
import revenueHTTPService from '../../../main/services/revenueHTTPService';
import memberHTTPService from '../../../main/services/memberHTTPService';
import attendanceHTTPService from '../../../main/services/attendanceHTTPService';
import activityHTTPServiceCopy from '../../../main/services/activityHTTPService copy';
import staffHTTPService from '../../../main/services/staffHTTPService';
import groupeHTTPService from '../../../main/services/groupeHTTPService';
import settingsHTTPService from '../../../main/services/settingsHTTPService';
import { useHistory } from 'react-router-dom';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ArcElement, BarElement
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data3 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [3, 5, 6, 4, 2, 7, 8],
      borderColor: '#ffa400',
      backgroundColor: '#ffa400',
    }
  ],
};
const labels3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
export const data2 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 3, 4, 5, 11, 3, 2],
      borderColor: '#ffa400',
      backgroundColor: '#ffa400',
    }

  ],
};

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
const DashBoard = () => {


  const [expenseChart, setExpenseChart] = useState(intialChartBarData);
  const [incomeChart, setIncomeChart] = useState(data2);
  const [memberLine, setmemberLine] = useState(data2);
  const [activityPie, setActivityPie] = useState(data);
  const [attendance, setAttendance] = useState([])
  const [groupCount, setGroupCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [activityCount, setActivityCount] = useState(0);
  const [dashboardSettings, setDashboardSettings] = useState([]);
  let history = useHistory()
  const [silver, setSilver] = useState(0);
  const [gold, setGold] = useState(0);
  const [premium, setPremium] = useState(0);
  const [workout, setWorkout] = useState(0);
  const [fitness, setFitness] = useState(0);
  const [yoga, setYoga] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('connected') == undefined) {
      history.push("/login")
    }
    getExpenseChartData()
    getIncomeChartData()
    getMemberLinetData()
    getActivityPieData()
    getAttendencesCalendar()
    getActivityCount()
    getMemberCount()
    getStaffCount()
    getGroupCount()
    getDashboardSettings()

    typeSubsHTTPService.getGold().then(data => {
      setGold(data.data.gold)
    })
    typeSubsHTTPService.getPremium().then(data => {
      setPremium(data.data.premium)
    })
    typeSubsHTTPService.getSilver().then(data => {
      setSilver(data.data.silver)
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

  const getActivityCount = () => {
    activityHTTPService.getCountActivity().then(data => {
      setActivityCount(data.data.activity)
    })
  }

  const getMemberCount = () => {
    memberHTTPService.getCountMember().then(data => {
      setMemberCount(data.data.member)
    })
  }

  const getStaffCount = () => {
    staffHTTPService.getCountStaff().then(data => {
      setStaffCount(data.data.staff)
    })
  }

  const getGroupCount = () => {
    groupeHTTPService.getCountGroup().then(data => {
      setGroupCount(data.data.group)
    })
  }

  const getAttendencesCalendar = () => {
    attendanceHTTPService.getAllAtendances()
      .then(response => {
        setAttendance(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };


  const getExpenseChartData = () => {

    expenseHTTPService.getExpenseByDate()
      .then(response => {
        setExpenseChart(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getMemberLinetData = () => {

    memberHTTPService.getAllMemberByDate()
      .then(response => {
        setmemberLine(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getIncomeChartData = () => {

    revenueHTTPService.getAllRevenueByDate()
      .then(response => {
        setIncomeChart(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getActivityPieData = () => {
    activityHTTPService.getAllActivityByDate()
      .then(response => {
        setActivityPie(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getDashboardSettings = () => {
    settingsHTTPService.getDashboardSettings().then(data => {
      setDashboardSettings(data.data[0])
      console.log(dashboardSettings)

    })
  }

  return (
    <div classNameName="content">
      <div classNameName="row">
        <div classNameName="col-md-12">
          <div classNameName="card">
            <div classNameName="card-header">
              <h4 classNameName="card-title"> Dashboard</h4>
            </div>
            <div classNameName="card-body">
              <div className="row">
                {dashboardSettings.showSummary == 1 &&
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-globe text-warning"></i>
                            </div>
                          </div>
                          <div className="col-7 col-md-8">
                            <div className="numbers">
                              <p className="card-category">Membres</p>
                              <p className="card-title">{memberCount}</p><p>
                              </p></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>}
                {dashboardSettings.showSummary == 1 &&
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-money-coins text-success"></i>
                            </div>
                          </div>
                          <div className="col-7 col-md-8">
                            <div className="numbers">
                              <p className="card-category">Groups</p>
                              <p className="card-title">{groupCount}</p><p>
                              </p></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>}
                {dashboardSettings.showSummary == 1 &&
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-vector text-danger"></i>
                            </div>
                          </div>
                          <div className="col-7 col-md-8">
                            <div className="numbers">
                              <p className="card-category">Activities</p>
                              <p className="card-title">{activityCount}</p><p>
                              </p></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>}
                {dashboardSettings.showSummary == 1 &&
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-favourite-28 text-primary"></i>
                            </div>
                          </div>
                          <div className="col-7 col-md-8">
                            <div className="numbers">
                              <p className="card-category">Staffs</p>
                              <p className="card-title">{staffCount}</p><p>
                              </p></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                }
                {dashboardSettings.showExpenseIncomeCharts == 1 &&
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">

                        <h4 className="mb-3">Incomes</h4>
                        <Bar options={chartBarOption} data={incomeChart} />
                      </div>
                    </div>
                  </div>
                }
                {dashboardSettings.showExpenseIncomeCharts == 1 &&
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">

                        <h4 className="mb-3">Expenses</h4>
                        <Bar data={expenseChart} options={chartBarOption} />
                      </div>
                    </div>
                  </div>
                }
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">

                      <h4 className="mb-3">Subscription types</h4>
                      <Pie data={{
                        labels: ['Premium', 'Silver', 'Gold'],
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
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">

                      <h4 className="mb-3">Staffs</h4>
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
                  </div>
                </div>
                {dashboardSettings.showCalendar == 1 &&
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="box-title">Events </h4>
                      </div>
                      <div className="card-calendar"><FullCalendar
                        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        weekends={true}
                        select={console.log('select')} //NOT WORKING HERE
                        dateClick={console.log('dateclick')} //SAME
                        headerToolbar={{
                          left: 'dayGridMonth,timeGridWeek,timeGridDay',
                          center: 'title',
                          right: 'prevYear,prev,next,nextYear'
                        }}
                        slotMinTime="07:00:00"
                        slotMaxTime="20:00:00"
                        editable={false}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={false}
                        events={
                          attendance}
                      /></div>

                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
