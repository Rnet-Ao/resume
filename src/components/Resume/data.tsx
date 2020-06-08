export default {
  contacts: [
    {
      icon: 'phone',
      text: '+86 176 2100 0163',
      isPhone: true,
    },
    {
      icon: 'mail',
      text: 'it17621000@163.com',
      isMail: true,
    },
    {
      icon: 'earth',
      text: 'howduudu.site',
      url: 'http://howduudu.site',
      isUrl: true,
    },
    {
      icon: 'github',
      text: 'github',
      url: 'https://github.com/zhenxianluo',
      isUrl: true,
    },
    {
      icon: 'enviroment',
      text: '上海(ShangHai)',
      url: 'https://ditu.amap.com/search?query=%E4%B8%8A%E6%B5%B7',
      isUrl: true,
    },
  ],
  source: {
    name: '项目地址：Rnet-Ao/resume',
    url: 'https://github.com/Rnet-Ao/resume',
    desc:
      '基于create-react-app配置了TypeScript、ESLint、prettier、precommit、commitlint，使用RxJS和Svg制作头像及动画。',
    shark: '可基于此项目个性化定制自己的简历, 如果有所帮助欢迎star ^_^',
  },
  download: {
    title: '陈滔-前端开发.pdf',
    url: 'http://howduudu.site/files/%E9%99%88%E6%BB%94-%E5%89%8D%E7%AB%AF.pdf',
  },
  codes: [
    {
      title: '词汇滑动标记',
      url: '/select-text',
    },
  ],
  special: ['外包勿扰!'],
  skills: [
    {
      title: '程序语言',
      lists: ['ECMAScript 5+', 'JavaScript', 'TypeScript', 'Python', 'C++', 'HTML', 'CSS', 'Dart'],
    },
    {
      title: '前端框架',
      lists: ['React', 'Vue', 'jQuery', 'Dva'],
    },
    {
      title: '后端框架',
      lists: ['Express', 'Django', 'Flask', 'Scripy'],
    },
    {
      title: '数据库',
      lists: ['PostgreSQL', 'Oracle', 'Redis', 'IndexDB'],
    },
  ],
  awards: [
    {
      type: '浙江省第十三届大学生程序设计竞赛',
      name: '二等奖(专科组)',
      time: '2016.06',
    },
    {
      type: '计算机技术与软件专业技术资格',
      name: '程序员(初级)',
      time: '2016.05',
    },
    {
      type: '全国计算机等级考试',
      name: 'C++语言程序设计(二级)',
      time: '2016.03',
    },
    {
      type: '全国计算机等级考试',
      name: '计算机基础及MS Office应用(一级)',
      time: '2015.03',
    },
  ],
  works: [
    {
      name: '上海芯与网络科技有限公司',
      url: 'https://www.xinyusoft.com',
      start: '2018.05',
      end: '2019.10',
      title: '前端开发',
      skills: ['React', 'Redux', 'ES5+', 'WebWork', 'Socket', 'Less', 'ESLint', 'Antd', 'Canvas', 'linux'],
      experience: [
        {
          name: '股票行情系统',
          url: 'http://quote.cmschina.com',
          highlights: [
            '基于Create-React-App脚手架的基本框架搭建工作',
            '引入并配置Redux, 设计前端数据仓库用于数据驱动视图, 及不常用数据的GC机制与组件使用数据的注册机制',
            '参考antd组件设计, 通过传递参数控制组件渲染方式, 实现组件化与模块化',
            '引用开源项目react-stockcharts源代码并深度定制实现分时K线图表',
            '研究通达信指标语言, 运用AST实现指标解释器(通达信指标代码转化为JS代码的转译工具)',
            '基于组件化设计, 运用CSS绝对定位, 实现可拖动组件配置页面的页面编辑器(自定义页面)',
            '基于Webpack的个性化功能, 如: 生成多主题css文件、代码切割、打包进度条、GZip压缩等',
            '基于项目场景的Python工具脚本开发, 如: 下载Google fonts字体文件',
            '页面组件开发: 公司资讯组件、分笔分价组件、盘口组件、涨跌幅组件、表格组件(包括通用表格、自选股表格、T型报价表格)、资金流向组件、按键精灵组件等',
            '基于Axios和RESTfull规范实现网络资源统一管理及提供易用的方法调用接口',
            '通过算法优化对部分搜索路径减枝, 实现高效的股票代码搜索',
            '通过引入Express与MockJS模拟数据及模拟后端数据接口, 提升开发效率',
            '通过深度优化shouldComponentUpdate生命周期, 实现页面高性能渲染',
            '通过引入localforage包操作IndexDB, 实现数据缓存与预渲染, 大幅度减少网站首屏等待时间',
            '通过引入WebWork技术封装socket通信与二进制数据解码, 大幅度提高网页交互整体性能',
            '通过引入perfect-scrollbar包实现滚动条在各浏览器显示及功能一致等',
          ],
        },
      ],
    },
    {
      name: '上海雁展移动科技有限公司',
      url: 'http://www.aispreadtech.com',
      start: '2017.06',
      end: '2018.05',
      title: '前端开发、数据采集',
      skills: ['Python', 'React', 'Vue', 'Oracle', 'Kurento Client', 'Docker', 'Linux'],
      experience: [
        {
          name: '远程视频勘探与事故定损系统',
          url: '',
          highlights: [
            '(模块)百度地图与高德地图选型与集成',
            '(模块)基于地图插件的功能封装与个性化功能开发, 个性化功能包括地图围栏、路程回放、地图标的等',
            '(大屏)独立项目个人开发的视频全链路大屏展示模块',
            '(大屏)封装基于kurentu-client(WebRTC开源项目)的基本功能',
            '(大屏)多链路客服视频监控, 支持1、4、6、9路视频投影',
            '(大屏)基于Rechart的数据图形展示等',
          ],
        },
        {
          name: '经营分析平台(领导驾驶舱)',
          url: '',
          highlights: [
            '原有一期基础上增加二期功能页面(部分)',
            '使用Python的requests模块完成微信公众号彩虹俱乐部和E海通财的运营数据采集爬虫',
            '基于Oracle的数据库设计与基于公司自有中台产品的API开发',
            '程序部署维护与数据算法功能维护等',
          ],
        },
        {
          name: '国际创投信息管理系统',
          url: 'http://www.siicfm.cn',
          highlights: ['PC站点优化及兼容性优化', 'PC端部分办公审批流程', 'APP端部分办公审批流程'],
        },
      ],
    },
    {
      name: '实习',
      url: '',
      start: '2016.10',
      end: '2017.06',
      title: '前端开发、数据采集',
      skills: ['Python', 'PostgreSQL', 'NodeJS', 'Docker', 'HTML', 'CSS', 'jQuery', 'SeaJS'],
      experience: [
        {
          name: '',
          url: '',
          highlights: [
            '使用Fiddler、BurpSuite等抓包工具抓取并分析数据包',
            '使用Python的Requests、lmxl、BeautifulSoup等模块抓取网页及接口数据并解析入库',
            '对基于使用大数据横向扩展CitusData开源项目的数据库设计',
            '使用PostgreSQL的PL/SQL语言完成数据的清洗, 及根据清洗后数据生成榜单Excel文件',
            '从Redis中读取缓存数据后用Express开发数据接口并用Chai+Mocha完成接口测试',
            '使用Docker完成爬虫程序及接口程序的部署',
          ],
        },
        {
          name: '',
          url: '',
          highlights: [
            '配合设计师及后端及运用HTML+CSS相关知识完成网页功能开发',
            '引入SeaJS管理JavaScript插件',
            '完成基于jQuery的自定义插件, 如: 省市区联动插件',
            '处理浏览器兼容问题, 浏览器兼容到IE6等',
          ],
        },
      ],
    },
  ],
  selfs: [
    {
      name: '技术博客',
      skills: ['React', 'Bootstrap', 'Redux', 'TypeScript', 'ES5+', 'ESLint', 'Sass', 'Docker'],
      url: 'http://howduudu.site/#/blog',
    },
    {
      name: '指标计算系统',
      skills: ['NodeJS', 'Express', 'PostgreSQL', 'Sequelize', 'Linux'],
      url: 'http://howduudu.site/#/stock_index',
    },
    {
      name: '公开课手机版',
      skills: ['Framework7', 'jQuery', 'PostgreSQL', 'Express', 'Python', 'Docker'],
      url: 'https://github.com/zhenxianluo/nsf7app',
    },
  ],
};
