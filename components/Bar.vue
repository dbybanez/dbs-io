<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    const newOptions = {
      title: {
        display: true,
        text: 'Memory Usage (mb)'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Databases'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Memory Usage'
          }
        }]
      }
    }
    this.renderChart(this.chartData, newOptions)
  }
}
</script>

<style>
</style>
