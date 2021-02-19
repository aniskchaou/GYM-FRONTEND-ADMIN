import * as Chart from 'chart.js';

export function drawChart() {

    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let data2 = [34000, 54000, 23000, 24000, 65000, 23000, 44000];
    let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("expense-chart");

    renderChart(data, labels, ctx1, 'rgba(53, 253, 13, 1)');
    renderChart(data2, labels, ctx2, 'rgba(46, 137, 255, 1)');

}


export function renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: color,
                borderColor: color,
            }]
        },
    })
}