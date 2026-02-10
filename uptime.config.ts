import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "站点监测",
  logo: 'https://r2.201116.xyz/uploads/1ac1a17d-875a-4552-98bd-dbb87f76d786.ico',
  favicon: 'https://r2.201116.xyz/uploads/1ac1a17d-875a-4552-98bd-dbb87f76d786.ico',
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
      id: 'comment',
      name: '留言板',
      method: 'GET',
      target: 'https://waline.swtmax.top/',
      statusPageLink: 'https://waline.swtmax.top/',
      hideLatencyChart: true,
    },
    {
      id: 'mcserver',
      name: 'MC服务器',
      method: 'TCP_PING',
      target: '38.14.249.137:25565',
      hideLatencyChart: true,
    },
    {
      id: 'mcwebsite',
      name: 'MC服务器（网站）',
      method: 'GET',
      target: 'https://mc.swtmax.top/',
      statusPageLink: 'https://mc.swtmax.top/',
      hideLatencyChart: true,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
