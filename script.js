const experiences = [
  {
    company: "北京平硕科技有限公司 · 产品：HiTalker",
    role: "AI 产品经理实习生",
    period: "2025.06 - 2025.08",
    focus: "产品",
    highlights: [
      "参与 AI 英语表达与演讲训练平台的需求分析、竞品洞察与 PRD 制作",
      "推进 AI 功能设计与原型搭建，协助 NLP/口语评测算法调优",
      "带领用户访谈与 A/B 测试，沉淀 100+ 条改进建议"
    ]
  },
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

const timeline = document.querySelector("#timeline");
const projectGrid = document.querySelector("#projects-grid");
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

experiences.forEach((item) => timeline.appendChild(createTimelineItem(item)));
projects.forEach((item) => projectGrid.appendChild(createProjectCard(item)));
writings.forEach((item) => writingGrid.appendChild(createWritingCard(item)));

document.getElementById("year").textContent = new Date().getFullYear();

