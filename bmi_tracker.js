let myChart = document.getElementById('historyChart').getContext('2d');

let testChart = new Chart(myChart, {
    type: 'line',
    data:{
        labels:['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], //BULAN
        datasets:[{
            label: 'BMI CHART',
            data: [
                18, 17.4, 18.1, 18, 18.3, 18.4, 18.6, 19, 19.1, 19.5, 20, 20.5 //Kalkulasi BMI
            ],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(255, 159, 64, 0.2)',
            //     'rgba(255, 205, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(255, 159, 64, 0.2)',
            //     'rgba(255, 205, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(255, 159, 64, 0.2)',
            //     'rgba(255, 205, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //  ],
            borderColor: [
                'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                // 'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                // 'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        }]
    },
    options:{
        
    }
});