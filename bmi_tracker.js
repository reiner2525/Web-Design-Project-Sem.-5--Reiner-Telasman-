let myChart = document.getElementById('historyChart').getContext('2d');

let testChart = new Chart(myChart, {
    type: 'line',
    data:{
        labels:['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], //BULAN
        datasets:[{
            label: 'BMI CHART',
            data: [
                19, 19.5, 18.5, 20, 19.7, 18.4, 20, 19, 21, 22.5, 20, 21 //Kalkulasi BMI
            ],
            backgroundColor: [
                'rgb(128, 128, 128)'
            
             ],
            borderColor: [
                'rgb(0, 0, 205)'
            ],
            borderWidth: 1
        }]
    },
    options:{
        
    }
});