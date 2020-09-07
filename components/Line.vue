<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      datasets: [
        {
          label: 'MySQL',
          backgroundColor: '#00758F',
          borderColor: '#00758F',
          fill: false,
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 41, 92, 42, 21, 29]
        },
        {
          label: 'MSSQL',
          backgroundColor: '#A91D22',
          borderColor: '#A91D22',
          fill: false,
          data: [10, 60, 30, 22, 18, 28, 11, 15, 31, 19, 17, 31]
        },
        {
          label: 'MongoDB',
          backgroundColor: '#12924F',
          borderColor: '#12924F',
          fill: false,
          data: [16, 25, 35, 27, 41, 38, 44, 52, 55, 39, 21, 17, 15, 10, 17, 20, 35]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style>
</style>
