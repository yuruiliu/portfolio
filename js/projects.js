/* ==========================================================
   projects.js —— 项目数据
   新增/修改项目只需在此数组中增加条目即可，页面会自动渲染。
     name     项目名称
     desc     项目简介
     stack    技术栈（数组）
     date     完成时间
     category 类别
     image    项目图片路径
   ========================================================== */

const projects = [
  {
    name: "砾科科技",
    desc: "一款监控健康数据的微信小程序，重点解决用户健康数据的采集、存储和分析问题。通过微信云开发完成数据存储与后端能力，使用 ECharts 实现数据可视化，用户可查看心率、血压、血糖等健康数据。",
    stack: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    date: "2025.04",
    category: "移动应用",
    image: "images/proj-01.svg"
  },
  {
    name: "拾光集市",
    desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    stack: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    date: "2025.09",
    category: "Web应用",
    image: "images/proj-02.svg"
  },
  {
    name: "城市脉搏",
    desc: "城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化。",
    stack: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
    date: "2026.03",
    category: "数据可视化",
    image: "images/proj-03.svg"
  },
  {
    name: "课语通",
    desc: "基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    stack: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    date: "2026.07",
    category: "AI应用",
    image: "images/proj-04.svg"
  }
];