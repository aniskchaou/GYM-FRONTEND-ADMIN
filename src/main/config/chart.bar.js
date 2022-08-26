export const chartBarOption = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: false,
            text: '',
        },
    },
};
const labels3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const intialChartBarData = {
    labels3,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 3, 4, 5, 11, 3, 2],
            borderColor: '#ffa400',
            backgroundColor: '#ffa400',
        }

    ],
} 