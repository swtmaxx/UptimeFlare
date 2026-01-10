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
      id: 'openlist1',
      name: '资源站openlist.swtmax.top',
      method: 'GET',
      target: 'https://openlist.swtmax.top/',
      statusPageLink: 'https://openlist.swtmax.top/',
      hideLatencyChart: true,
    },
    {
      id: 'openlist2',
      name: '资源站201116.xyz',
      method: 'GET',
      target: 'https://201116.xyz/',
      statusPageLink: 'https://201116.xyz/',
      hideLatencyChart: true,
    },
    {
      id: 'openlist3',
      name: '资源站211160.xyz',
      method: 'GET',
      target: 'https://211160.xyz/',
      statusPageLink: 'https://211160.xyz/',
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
