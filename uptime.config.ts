// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "站点监测",
  links: [
    { link: 'https://swtmax.top/', label: '主页', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'home',
      name: '主页',
      method: 'GET',
      target: 'https://swtmax.top/',
      statusPageLink: 'https://swtmax.top/',
      hideLatencyChart: true,
    },
    {
      id: 'openlist',
      name: '资源站',
      method: 'GET',
      target: 'https://openlist.swtmax.top/',
      statusPageLink: 'https://openlist.swtmax.top/',
      hideLatencyChart: true,
    },
    {
      id: 'mcdocs',
      name: 'MC文档',
      method: 'GET',
      target: 'https://docs.swtmax.top/',
      statusPageLink: 'https://docs.swtmax.top/',
      hideLatencyChart: true,
    },
    {
      id: 'mcserver',
      name: 'MC服务器',
      method: 'TCP_PING',
      target: '38.14.249.137:25565',
      hideLatencyChart: true,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
