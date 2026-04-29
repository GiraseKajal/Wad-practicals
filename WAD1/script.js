// Marks Line Chart
new Chart(document.getElementById('marksChart'), {
    type: 'line',
    data: {
        labels: ['Unit Test 1', 'Unit Test 2', 'Mid-Term', 'Unit Test 3', 'Finals'],
        datasets: [{
            label: 'Average Score (%)',
            data: [65, 68, 72, 75, 78.5],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            fill: true,
            tension: 0.4
        }]
    }
});

// Subject Doughnut Chart
new Chart(document.getElementById('subjectChart'), {
    type: 'doughnut',
    data: {
        labels: ['Maths', 'Science', 'English', 'History'],
        datasets: [{
            data: [82, 75, 88, 72],
            backgroundColor: ['#6366f1', '#8b5cf6', '#d946ef', '#f43f5e']
        }]
    }
});

// Grades Pie Chart
new Chart(document.getElementById('gradeChart'), {
    type: 'pie',
    data: {
        labels: ['Grade A', 'Grade B', 'Grade C', 'Fail'],
        datasets: [{
            data: [45, 40, 25, 10],
            backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
        }]
    }
});
