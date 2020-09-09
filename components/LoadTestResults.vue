<template>
  <div class="row justify-content-center">
    <div class="col-11 col-lg-10">
      <div class="row">
        <div class="col-8">
          <LineGraph :chart-data="updateLineGraphData" />
        </div>
        <div class="col-4">
          <BarGraph :chart-data="updateBarGraphData" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="my-4">Summary</h5>
        </div>
      </div>
      <div class="row border-top border-bottom">
        <div class="col-4 border-left border-right px-4">
          <div class="row align-items-center" style="min-height:15rem">
            <div class="col text-center">
              <img class="mt-3 w-50" src="~/assets/images/mysql-logo.svg" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3 mb-0">
                <dt class="col-5">Total Requests</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.totalRequests }}</dd>
                <dt class="col-5">Total Errors</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.totalErrors }}</dd>
                <dt class="col-5">Total Time (s)</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.totalTimeSeconds }}</dd>
                <dt class="col-5">Requests per second</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.rps }}</dd>
                <dt class="col-5">Mean Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.meanLatencyMs }}</dd>
                <dt class="col-5">Max Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.maxLatencyMs }}</dd>
                <dt class="col-5">Min Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.minLatencyMs }}</dd>
              </dl>
              <p>Percentage of the requests served within a certain time:</p>
              <dl class="row">
                <dt class="col-2">50%</dt>
                <dd class="col-10">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.percentiles['50'] + ' ms' }}</dd>
                <dt class="col-2">90%</dt>
                <dd class="col-10">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.percentiles['90'] + ' ms' }}</dd>
                <dt class="col-2">95%</dt>
                <dd class="col-10">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.percentiles['95'] + ' ms' }}</dd>
                <dt class="col-2">99%</dt>
                <dd class="col-10">{{ (loadTestResults.mysqlResult === null)? '-': loadTestResults.mysqlResult.results.percentiles['99'] + ' ms' }}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-4 border-right px-4">
          <div class="row align-items-center" style="min-height:15rem">
            <div class="col text-center">
              <img class="mt-3 w-50" src="~/assets/images/microsoft-sql-server-logo.svg" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3 mb-0">
                <dt class="col-5">Total Requests</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.totalRequests }}</dd>
                <dt class="col-5">Total Errors</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.totalErrors }}</dd>
                <dt class="col-5">Total Time (s)</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.totalTimeSeconds }}</dd>
                <dt class="col-5">Requests per second</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.rps }}</dd>
                <dt class="col-5">Mean Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.meanLatencyMs }}</dd>
                <dt class="col-5">Max Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.maxLatencyMs }}</dd>
                <dt class="col-5">Min Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.minLatencyMs }}</dd>
              </dl>
              <p>Percentage of the requests served within a certain time:</p>
              <dl class="row">
                <dt class="col-2">50%</dt>
                <dd class="col-10">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.percentiles['50'] + ' ms' }}</dd>
                <dt class="col-2">90%</dt>
                <dd class="col-10">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.percentiles['90'] + ' ms' }}</dd>
                <dt class="col-2">95%</dt>
                <dd class="col-10">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.percentiles['95'] + ' ms' }}</dd>
                <dt class="col-2">99%</dt>
                <dd class="col-10">{{ (loadTestResults.mssqlResult === null)? '-': loadTestResults.mssqlResult.results.percentiles['99'] + ' ms' }}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-4 border-right px-4">
          <div class="row align-items-center" style="min-height:15rem">
            <div class="col text-center">
              <img class="mt-3 w-50" src="~/assets/images/mongodb-logo.svg" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3 mb-0">
                <dt class="col-5">Total Requests</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.totalRequests }}</dd>
                <dt class="col-5">Total Errors</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.totalErrors }}</dd>
                <dt class="col-5">Total Time (s)</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.totalTimeSeconds }}</dd>
                <dt class="col-5">Requests per second</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.rps }}</dd>
                <dt class="col-5">Mean Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.meanLatencyMs }}</dd>
                <dt class="col-5">Max Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.maxLatencyMs }}</dd>
                <dt class="col-5">Min Latency (ms)</dt>
                <dd class="col-7">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.minLatencyMs }}</dd>
              </dl>
              <p>Percentage of the requests served within a certain time:</p>
              <dl class="row">
                <dt class="col-2">50%</dt>
                <dd class="col-10">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.percentiles['50'] + ' ms' }}</dd>
                <dt class="col-2">90%</dt>
                <dd class="col-10">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.percentiles['90'] + ' ms' }}</dd>
                <dt class="col-2">95%</dt>
                <dd class="col-10">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.percentiles['95'] + ' ms' }}</dd>
                <dt class="col-2">99%</dt>
                <dd class="col-10">{{ (loadTestResults.mongoResult === null)? '-': loadTestResults.mongoResult.results.percentiles['99'] + ' ms' }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h5 class="my-4">Operating System</h5>
        </div>
        <div class="col-4">
          <h5 class="my-4">Test Information</h5>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-4 border-top border-bottom border-left border-right px-4">
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3">
                <dt class="col-6">Platform</dt>
                <dd class="col-6">{{ (systemInfo.platform === null)? '-': systemInfo.platform }}</dd>
                <dt class="col-6">Type</dt>
                <dd class="col-6">{{ (systemInfo.type === null)? '-': systemInfo.type }}</dd>
                <dt class="col-6">Release</dt>
                <dd class="col-6">{{ (systemInfo.release === null)? '-': systemInfo.release }}</dd>
                <dt class="col-6">Total Memory (mb)</dt>
                <dd class="col-6">{{ (systemInfo.totalmem === null)? '-': systemInfo.totalmem }}</dd>
                <dt class="col-6">Free Memory (mb)</dt>
                <dd class="col-6">{{ (systemInfo.freemem === null)? '-': systemInfo.freemem }}</dd>
                <dt class="col-6">No. of CPUs</dt>
                <dd class="col-6">{{ (systemInfo.cpus === null)? '-': systemInfo.cpus }}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-4 border-top border-bottom border-right px-4">
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3">
                <dt class="col-6">Concurrency Level</dt>
                <dd class="col-6">10</dd>
                <dt class="col-6">Max Time (seconds)</dt>
                <dd class="col-6">20</dd>
                <dt class="col-6">Target URL</dt>
                <dd class="col-6"><code>http://localhost:5000/api/run</code></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineGraph from './Line'
import BarGraph from './Bar'

export default {
  components: {
    LineGraph,
    BarGraph
  },
  data () {
    return {
      dataCollectionLineGraph: null,
      dataCollectionBarGraph: null
    }
  },
  name: 'LoadTestResults',
  computed: {
    ...mapGetters({
      loadTestResults: 'run-load-test/loadTestResults',
      loadTestRequests: 'run-load-test/loadTestRequests',
      systemInfo: 'system-information/systemInfo'
    }),
    updateLineGraphData () {
      return {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        datasets: [
          {
            label: 'MySQL',
            backgroundColor: '#00758F',
            borderColor: '#00758F',
            fill: false,
            data: this.loadTestRequests.mysqlRequests
          },
          {
            label: 'MSSQL',
            backgroundColor: '#A91D22',
            borderColor: '#A91D22',
            fill: false,
            data: this.loadTestRequests.mssqlRequests
          },
          {
            label: 'MongoDB',
            backgroundColor: '#12924F',
            borderColor: '#12924F',
            fill: false,
            data: this.loadTestRequests.mongoRequests
          }
        ]
      }
    },
    updateBarGraphData () {
      return {
        labels: ['Databases'],
        datasets: [
          {
            label: 'MySQL',
            backgroundColor: '#00758F',
            borderColor: '#00758F',
            fill: false,
            data: [this.loadTestResults.mysqlResult.memoryUsage.heapUsed]
          },
          {
            label: 'MSSQL',
            backgroundColor: '#A91D22',
            borderColor: '#A91D22',
            fill: false,
            data: [this.loadTestResults.mssqlResult.memoryUsage.heapUsed]
          },
          {
            label: 'MongoDB',
            backgroundColor: '#12924F',
            borderColor: '#12924F',
            fill: false,
            data: [this.loadTestResults.mongoResult.memoryUsage.heapUsed]
          }
        ]
      }
    }
  }
  // mounted () {
  //   this.fillLineGraphData()
  //   this.fillBarGraphData()
  // },
  // methods: {
  //   fillLineGraphData () {
  //     this.dataCollectionLineGraph = {
  //       labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  //       datasets: [
  //         {
  //           label: 'MySQL',
  //           backgroundColor: '#00758F',
  //           borderColor: '#00758F',
  //           fill: false,
  //           data: this.loadTestRequests.mysqlRequests
  //         },
  //         {
  //           label: 'MSSQL',
  //           backgroundColor: '#A91D22',
  //           borderColor: '#A91D22',
  //           fill: false,
  //           data: this.loadTestRequests.mssqlRequests
  //         },
  //         {
  //           label: 'MongoDB',
  //           backgroundColor: '#12924F',
  //           borderColor: '#12924F',
  //           fill: false,
  //           data: this.loadTestRequests.mongoRequests
  //         }
  //       ]
  //     }
  //   },
  //   fillBarGraphData () {
  //     console.log(this.loadTestResults.mysqlResult.memoryUsage.heapUsed)
  //     this.dataCollectionBarGraph = {
  //       labels: ['Databasessssss'],
  //       datasets: [
  //         {
  //           label: 'MySQL',
  //           backgroundColor: '#00758F',
  //           borderColor: '#00758F',
  //           fill: false,
  //           data: [this.loadTestResults.mysqlResult.memoryUsage.heapUsed, 0, 0]
  //         },
  //         {
  //           label: 'MSSQL',
  //           backgroundColor: '#A91D22',
  //           borderColor: '#A91D22',
  //           fill: false,
  //           data: [0, this.loadTestResults.mssqlResult.memoryUsage.heapUsed, 0]
  //         },
  //         {
  //           label: 'MongoDB',
  //           backgroundColor: '#12924F',
  //           borderColor: '#12924F',
  //           fill: false,
  //           data: [0, 0, this.loadTestResults.mongoResult.memoryUsage.heapUsed]
  //         }
  //       ]
  //     }
  //   }
  // }
}
</script>

<style>
</style>
