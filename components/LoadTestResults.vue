<template>
  <div class="row justify-content-center">
    <div class="col-11 col-lg-10">
      <div class="row">
        <div class="col mb-4">
          <LineGraph />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h5 class="mb-4">Operating System</h5>
        </div>
        <div class="col-4">
          <h5 class="mb-4">Test Information</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-4 border-top border-left border-right px-4">
          <div class="row align-items-center">
            <div class="col">
              <dl class="row mt-3">
                <dt class="col-6">Platform</dt>
                <dd class="col-6">{platform}</dd>
                <dt class="col-6">Type</dt>
                <dd class="col-6">{type}</dd>
                <dt class="col-6">Release</dt>
                <dd class="col-6">{release}</dd>
                <dt class="col-6">Total Memory</dt>
                <dd class="col-6">{totalmem}</dd>
                <dt class="col-6">Free Memory</dt>
                <dd class="col-6">{freemem}</dd>
                <dt class="col-6">No. of CPUs</dt>
                <dd class="col-6">{cpus}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-4 border-top border-right px-4">
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
      <div class="row">
        <div class="col">
          <h5 class="my-4">System Information</h5>
        </div>
      </div>
      <div class="row border-top border-bottom">
        <div class="col-4 border-left border-right px-4">
          <div class="row align-items-center">
            <div class="col-7">
              <dl class="row mt-3">
                <dt class="col-6">Achitecture</dt>
                <dd class="col-6">{architecture}</dd>
                <dt class="col-6">CPUs</dt>
                <dd class="col-6">{cpus}</dd>
                <dt class="col-6">Hostname</dt>
                <dd class="col-6">{hostname}</dd>
                <dt class="col-6">Network</dt>
                <dd class="col-6">{network}</dd>
                <dt class="col-6">Used Memory</dt>
                <dd class="col-6">{used memory}</dd>
                <dt class="col-6">Free Memory</dt>
                <dd class="col-6">{free memory}</dd>
              </dl>
            </div>
            <div class="col">
              <img class="w-100" src="~/assets/images/mysql-logo.svg" />
            </div>
          </div>
        </div>
        <div class="col-4 border-right px-4">
          <div class="row align-items-center">
            <div class="col-7">
              <dl class="row mt-3">
                <dt class="col-6">Achitecture</dt>
                <dd class="col-6">{architecture}</dd>
                <dt class="col-6">CPUs</dt>
                <dd class="col-6">{cpus}</dd>
                <dt class="col-6">Hostname</dt>
                <dd class="col-6">{hostname}</dd>
                <dt class="col-6">Network</dt>
                <dd class="col-6">{network}</dd>
                <dt class="col-6">Used Memory</dt>
                <dd class="col-6">{used memory}</dd>
                <dt class="col-6">Free Memory</dt>
                <dd class="col-6">{free memory}</dd>
              </dl>
            </div>
            <div class="col">
              <img class="w-100" src="~/assets/images/microsoft-sql-server-logo.svg" />
            </div>
          </div>
        </div>
        <div class="col-4 border-right px-4">
          <div class="row align-items-center">
            <div class="col-7">
              <dl class="row mt-3">
                <dt class="col-6">Achitecture</dt>
                <dd class="col-6">{architecture}</dd>
                <dt class="col-6">CPUs</dt>
                <dd class="col-6">{cpus}</dd>
                <dt class="col-6">Hostname</dt>
                <dd class="col-6">{hostname}</dd>
                <dt class="col-6">Network</dt>
                <dd class="col-6">{network}</dd>
                <dt class="col-6">Used Memory</dt>
                <dd class="col-6">{used memory}</dd>
                <dt class="col-6">Free Memory</dt>
                <dd class="col-6">{free memory}</dd>
              </dl>
            </div>
            <div class="col">
              <img class="w-100" src="~/assets/images/mongodb-logo.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="my-4">Results</h5>
        </div>
      </div>
      <div class="row border-top border-bottom mb-3">
        <div class="col-4 border-left border-right px-4">
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineGraph from './Line'

export default {
  components: {
    LineGraph
  },
  name: 'LoadTestResults',
  computed: {
    ...mapGetters({
      loadTestResults: 'run-load-test/loadTestResults'
    })
  }
}
</script>

<style>
</style>
