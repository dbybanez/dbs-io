export default {
  setSystemInfo (state, { systeminfo }) {
    state.systemInfo.platform = systeminfo.platform
    state.systemInfo.type = systeminfo.type
    state.systemInfo.release = systeminfo.release
    state.systemInfo.totalmem = systeminfo.totalmem
    state.systemInfo.freemem = systeminfo.freemem
    state.systemInfo.cpus = systeminfo.cpus.length
  }
}
