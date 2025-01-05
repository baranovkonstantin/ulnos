const chartOptions = {
    type: 'bar',
    data: {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [{
            label: 'Dataset 1',
            data: [10, 20, 15],
            backgroundColor: tableau.colors('tableau10')[0], // Example use of 'tableau10'
        }, {
            label: 'Dataset 2',
            data: [5, 15, 25],
            backgroundColor: tableau.colors('tableau10')[1], // Another color from 'tableau10'
        }]
    },
    options: {
        // Additional chart options
    }
};
