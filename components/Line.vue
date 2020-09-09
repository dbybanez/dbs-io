<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    const newOptions = {
      title: {
        display: true,
        text: 'Concurrency: 10; Max number of seconds: 20s'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time in seconds'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Number of Requests'
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
