// 教育背景
const education = [
  {
    company: "山西大学",
    role: "生态学硕士",
    period: "2023 - 2026",
    focus: "硕士",
    highlights: [
      "研究方向：生物炭应用于湿地水生态修复",
      "专业排名：前 5%",
      "通过 CET-6，具备扎实的编程与 GIS 能力"
    ]
  },
  {
    company: "山西财经大学",
    role: "自然地理与资源环境专业",
    period: "2019 - 2023",
    focus: "本科",
    highlights: [
      "专业排名：前 5%",
      "主修课程：环境科学、地理信息系统、生态学"
    ]
  }
];

// 科研经历
const research = [
  {
    company: "国家自然科学基金项目",
    role: "主要成员",
    period: "2024 - 2025",
    focus: "科研",
    highlights: [
      "负责湿地污染物迁移转化及改性生物炭生态效应研究",
      "使用 Python 对监测数据建模，输出 R 语言分析报告",
      "撰写科研论文与阶段总结，支撑项目验收"
    ]
  },
  {
    company: "《生物炭应用于湿地水生态修复的研究》",
    role: "主要负责人",
    period: "2020 - 2022",
    focus: "实验",
    highlights: [
      "搭建实验方案，跟踪生物炭对泥炭地生态系统的影响",
      "使用 ArcGIS 进行场地数据可视化与污染物迁移分析",
      "在中文核心期刊发表相关成果"
    ]
  },
  {
    company: "大学生创新创业训练项目（省级）",
    role: "项目负责人",
    period: "2022 - 2023",
    focus: "管理",
    highlights: [
      "统筹 6 人团队完成产品结构设计与 GIS 选址分析",
      "负责预算、申报/结题报告以及整体汇报工作"
    ]
  }
];

// 实习经历
const internships = [
  {
    company: "北京平硕科技有限公司 · 产品：HiTalker",
    role: "AI 产品经理实习生",
    period: "2025.06 - 2025.08",
    focus: "产品",
    highlights: [
      "深度参与 AI 英语表达与演讲训练平台的产品规划，通过用户调研、数据分析与竞品研究，输出完整的需求分析报告与产品策略文档",
      "独立完成 5+ 款竞品的功能拆解与用户体验分析，提炼核心差异点与优化机会，为产品迭代方向提供数据支撑",
      "负责核心功能的 PRD 撰写，包括 AI 口语评测、智能纠错、个性化学习路径等模块，明确功能边界、交互逻辑与技术实现方案",
      "推进 AI 功能的产品设计，与算法团队协作定义 NLP/口语评测的评测维度与评分标准，通过多轮测试优化模型准确率至 92%+",
      "使用 Figma 完成核心功能原型设计，包括用户流程、交互细节与视觉规范，确保开发团队准确理解产品需求",
      "主导用户研究项目，通过深度访谈、问卷调研与行为数据分析，识别用户痛点与需求优先级，形成用户画像与需求矩阵",
      "设计并执行 A/B 测试方案，对比不同功能版本的用户转化率与满意度，基于数据结果推动产品优化决策",
      "建立需求跟踪与反馈机制，整理并分析 100+ 条用户反馈，形成产品改进建议文档，推动 15+ 项功能优化落地",
      "参与产品迭代评审会，与设计、开发、运营团队协作，确保产品功能按时上线并达到预期效果"
    ]
  },
  {
    company: "北京平菇科技有限公司",
    role: "新媒体运营与活动策划实习生",
    period: "2025.06 - 2025.08",
    focus: "运营",
    highlights: [
      "负责产品微信公众号、视频号、小红书等平台的内容策划与运营，产出 30+ 原创内容，总阅读量超 3 万，单场直播最高观看量超 3000",
      "主导产品推广页优化与用户路径设计，通过关键词布局与信息架构调整，实现转化率提升超 50%",
      "参与「学习中心」与社区互动功能的设计与上线，活跃用户占比提升超 50%",
      "主导教育培训项目推广与用户招募，成功吸引 500+ 优质学员报名，课程与活动满意度均达 100%"
    ]
  }
];

const projects = [
  {
    name: "AI 英语表达与演讲训练平台",
    tag: "产品实习",
    description: "输出竞品分析、用户画像与流程原型，推进 AI 评测功能上线并建立需求跟踪机制。",
    link: "#"
  },
  {
    name: "湿地生态修复数据看板",
    tag: "科研",
    description: "基于 ArcGIS + Python 实现污染物迁移可视化与趋势预测，支撑生物炭修复路径选择。",
    link: "#"
  },
  {
    name: "知识工具 Newsletter",
    tag: "写作",
    description: "分享生态科技与数据工具实践，沉淀 20k+ 阅读量的内容资产。",
    link: "#"
  }
];

const writings = [
  {
    title: "需求分析与用户洞察",
    tag: "定性访谈 · PRD 拆解",
    link: "#"
  },
  {
    title: "AI 功能设计与评测指标",
    tag: "NLP · 教育科技",
    link: "#"
  },
  {
    title: "Figma 原型设计",
    tag: "交互设计 · 团队协作",
    link: "#"
  }
];

const educationTimeline = document.querySelector("#education-timeline");
const researchTimeline = document.querySelector("#research-timeline");
const internshipTimeline = document.querySelector("#internship-timeline");
const writingGrid = document.querySelector("#writing-grid");

function createTimelineItem(item) {
  const container = document.createElement("article");
  container.className = "timeline-item";

  const period = document.createElement("p");
  period.textContent = item.period;
  period.className = "period";

  const detail = document.createElement("div");
  const role = document.createElement("p");
  role.className = "role";
  role.textContent = item.role;
  const company = document.createElement("p");
  company.className = "company";
  company.textContent = item.company;
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = item.highlights.join(" · ");

  detail.append(role, company, description);

  const tag = document.createElement("p");
  tag.className = "badge";
  tag.textContent = item.focus || "FOCUS";

  container.append(period, detail, tag);

  return container;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const badge = document.createElement("p");
  badge.className = "badge";
  badge.textContent = project.tag;

  const title = document.createElement("h3");
  title.textContent = project.name;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.innerHTML = `了解更多 →`;

  card.append(badge, title, desc, link);
  return card;
}

function createWritingCard(writing) {
  const card = document.createElement("article");
  card.className = "card";

  const badge = document.createElement("p");
  badge.className = "badge";
  badge.textContent = writing.tag;

  const title = document.createElement("h3");
  title.textContent = writing.title;

  const link = document.createElement("a");
  link.href = writing.link;
  link.textContent = "阅读全文 →";

  card.append(badge, title, link);
  return card;
}

// 渲染数据
education.forEach((item) => educationTimeline.appendChild(createTimelineItem(item)));
research.forEach((item) => researchTimeline.appendChild(createTimelineItem(item)));
internships.forEach((item) => internshipTimeline.appendChild(createTimelineItem(item)));
writings.forEach((item) => writingGrid.appendChild(createWritingCard(item)));

// 页面切换功能
const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll(".page-section");

function switchPage(pageId) {
  // 隐藏所有页面
  pageSections.forEach((section) => {
    section.classList.remove("active");
  });
  
  // 显示目标页面
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add("active");
  }
  
  // 更新导航链接状态
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    }
  });
}

// 绑定导航链接点击事件
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = link.getAttribute("data-page");
    switchPage(pageId);
  });
});

// 初始化：显示教育背景页面
switchPage("education");

document.getElementById("year").textContent = new Date().getFullYear();

