export const appHtml = `<aside id="appSidebar"><div class="logo"><i>◎</i><div class="brand-text"><b>360智见GEO</b><small>AI Search Visibility</small></div></div>
<div class="nt">工作台</div><nav class="nav">
<a class="" data-p="dash" title="账号概览"><span class="nav-icon">◐</span><span class="nav-text">账号概览</span></a>
</nav>
<div class="nt">检测分析</div><nav class="nav">
<a class="on" data-p="monitor" title="品牌诊断"><span class="nav-icon">◉</span><span class="nav-text">品牌诊断</span></a><a class="" data-p="inc" title="收录查询"><span class="nav-icon">▽</span><span class="nav-text">收录查询</span></a>
</nav>
<div class="nt">GEO 内容增长</div><nav class="nav">
<a class="" data-p="kb" title="企业知识库"><span class="nav-icon">◍</span><span class="nav-text">企业知识库</span></a><a class="" data-p="persona" title="人群画像"><span class="nav-icon">▤</span><span class="nav-text">人群画像</span></a><a class="" data-p="kw" title="关键词挖掘"><span class="nav-icon">⌕</span><span class="nav-text">关键词挖掘</span></a>
<a class="" data-p="gen" title="内容创作"><span class="nav-icon">✎</span><span class="nav-text">内容创作</span></a><a class="" data-p="videographic" title="视频/图文"><span class="nav-icon">🎞</span><span class="nav-text">视频/图文</span></a><a class="" data-p="articles" title="新生文库"><span class="nav-icon">▣</span><span class="nav-text">新生文库</span></a><a class="" data-p="pub" title="文章发布"><span class="nav-icon">➤</span><span class="nav-text">文章发布</span></a>
<a class="" data-p="sitepub" title="网站发布"><span class="nav-icon">🌐</span><span class="nav-text">网站发布</span></a>
</nav><div class="nt">系统工具</div><nav class="nav">
<a class="" data-p="agent" title="Agent运行日志"><span class="nav-icon">⚙</span><span class="nav-text">Agent运行日志</span></a>
</nav><div class="sidebar-footer"><div class="sidebar-status"><span class="status-dot"></span><div><b>GEO Engine</b><small>MVP · API Ready</small></div></div><span class="sidebar-version">v1.1</span></div></aside>
<main><header><div class="header-left"><button class="header-icon-btn" id="sidebarToggle" type="button" aria-label="收起或展开侧边栏" title="收起/展开侧边栏">☰</button><div class="header-title-block"><div class="header-kicker" id="headerKicker">检测分析</div><div class="header-title-row"><h1 id="ht">品牌诊断</h1><span class="header-subtitle" id="headerSubtitle">跨平台检测品牌推荐、提及与曝光表现</span></div></div></div>
<div class="hr"><div class="theme-switcher-wrap" id="themeSwitcherWrap">
<button class="theme-btn" id="themeSwitchBtn" type="button" aria-haspopup="true" aria-expanded="false" title="切换系统配色主题">
<span class="theme-icon">🎨</span>
<span class="theme-name" id="currentThemeName">极光科技蓝</span>
<span class="theme-caret">▾</span>
</button>
<div class="theme-menu" id="themeMenu">
<div class="theme-menu-title">选择配色方案</div>
<button type="button" class="theme-item on" data-theme="blue">
<span class="theme-swatch blue"></span>
<div class="theme-info">
<div class="theme-item-name">极光科技蓝 <span class="theme-badge-rec">推荐</span></div>
<div class="theme-item-desc">智见深空蓝 · 现代AI科技感</div>
</div>
</button>
<button type="button" class="theme-item" data-theme="green">
<span class="theme-swatch green"></span>
<div class="theme-info">
<div class="theme-item-name">清新碧翠绿</div>
<div class="theme-item-desc">自然商务绿 · 稳健生态</div>
</div>
</button>
<button type="button" class="theme-item" data-theme="purple">
<span class="theme-swatch purple"></span>
<div class="theme-info">
<div class="theme-item-name">深空星曜紫</div>
<div class="theme-item-desc">极客未来感 · 算力智能</div>
</div>
</button>
<button type="button" class="theme-item" data-theme="slate">
<span class="theme-swatch slate"></span>
<div class="theme-info">
<div class="theme-item-name">商务钛金灰</div>
<div class="theme-item-desc">极简高级灰 · 严谨沉稳</div>
</div>
</button>
</div>
</div><span class="system-online"><i></i>系统在线</span><span class="tag" id="headerCompanyTag">远见包装</span><span class="trial-text">试点期至 2026-07-30</span><div class="av">程</div></div></header>
<div class="wrap">
<div class="page" id="dash">
<div class="dashboard-kpi-grid">
<div class="card kpi"><div class="l">本月生成文章</div><div class="v">248<span style="font-size:16px">篇</span></div>
<span style="font-size:12px;color:#a0aeb8">合规一次通过 191 篇</span><div class="mini"><i style="width:77%"></i></div></div>
<div class="card kpi"><div class="l">本月发布</div><div class="v">186<span style="font-size:16px">篇</span></div>
<span style="font-size:12px;color:#a0aeb8">已收录 128 篇</span><div class="mini"><i style="width:69%"></i></div></div>
<div class="card kpi"><div class="l">检测消耗</div><div class="v">2,400<span style="font-size:16px">次</span></div>
<span style="font-size:12px;color:#a0aeb8">服务包余量 2,800 次</span><div class="mini"><i style="width:72%"></i></div></div>
<div class="card kpi"><div class="l">生文消耗次数</div><div class="v">248<span style="font-size:16px">次</span></div>
<span style="font-size:12px;color:#a0aeb8">本月内容生成任务累计消耗</span><div class="mini"><i style="width:62%"></i></div></div>
</div>
<div class="row">
<div class="card" style="flex:2"><div class="ct">可见率趋势 · 客户选定200条问题<span style="font-size:12px;color:#8a9aa5;font-weight:400">同一问题集 / 同一时间窗口 / 同一批平台</span></div>
<div class="cs">纵轴：品牌被正向或中性引用的问题数占比</div>
<div class="bars"><div style="height:31%"><span>W1</span></div><div style="height:33%"><span>W2</span></div>
<div style="height:38%"><span>W3</span></div><div style="height:44%"><span>W4</span></div><div style="height:47%"><span>W5</span></div>
<div style="height:53%"><span>W6</span></div><div style="height:56%"><span>W7</span></div><div class="hi" style="height:59%"><span>W8</span></div>
<div class="hi" style="height:61%"><span>W9</span></div><div class="hi" style="height:61%"><span>W10</span></div></div>
<div style="margin-top:26px;display:flex;gap:20px;font-size:12px;color:#7a8a95">
<span>◼ 优化前基线 31%</span><span style="color:#178c5e">◼ 优化后 61%</span><span>内容上线至复采窗口：14天</span></div></div>
<div class="card"><div class="ct">六平台可见率分布</div><div class="cs">同一问题在各平台独立检测</div>
<div class="kv"><span>豆包 Doubao</span><b>72%</b></div><div class="kv"><span>DeepSeek</span><b>68%</b></div>
<div class="kv"><span>腾讯元宝</span><b>63%</b></div><div class="kv"><span>文心一言</span><b>58%</b></div>
<div class="kv"><span>通义千问</span><b>55%</b></div><div class="kv"><span>Kimi</span><b>49%</b></div>
<div class="box" style="margin-top:12px">检测次数 = 问题数 × 平台数。本客户优化前后各跑一次：200题 × 6平台 × 2次 = 2400次</div></div>
</div>
</div>
<div class="page on" id="monitor">
<div class="card"><div class="ct">新建检测任务</div><div class="cs">异步任务模式，提交后轮询返回；支持批量导入问题集</div>
<div class="row"><div style="flex:2">
<div class="fg"><span class="lb">向AI咨询的问题（每行一条，支持批量）</span>
<textarea class="ipt" rows="3">外卖袋定制哪家质量好
食品级无纺布袋需要什么检测报告
奶茶保温袋批发选哪个厂家
口碑好的外卖袋定制哪家好
外卖袋一般用什么材质
环保的定制无纺布袋起订量</textarea>
<span class="rank-task-status" id="rankTaskStatus">等待提交检测任务</span><div class="hint">已填 6 个问题 × 勾选 6 个平台 = 36 次检测</div></div></div>
<div style="flex:1">
<div class="fg"><span class="lb">品牌命中词（回车分隔，最多10个，每词≤20字）</span>
<textarea class="ipt" rows="3">XXXX包装新材料有限公司
远见包装
立体无纺布酒袋</textarea>
<div class="hint">⚠ 命中词仅用于答案生成后的字符串匹配，不参与向AI提问；填通用词会虚高可见率，系统已启用泛词校验</div></div></div></div>
<div class="flex" style="align-items:center;margin-top:4px">
<span class="lb" style="margin:0">检测平台</span><div class="flex" data-multi="1" style="gap:8px">
<span class="chip on">豆包</span><span class="chip on">DeepSeek</span><span class="chip on">文心一言</span>
<span class="chip on">腾讯元宝</span><span class="chip on">通义千问</span><span class="chip on">Kimi</span></div>
<button class="btn" id="startRankingTest">开始检测</button></div>
<div class="hint" style="margin-top:8px">1个平台检测1个问题 = 1次检测。检测量由客户自行勾选问题与平台决定，按次计费。</div></div>
<div class="monitor-output" id="rankingResults"><div class="row">
<div class="card kpi"><div class="l">总检测次数</div><div class="v" style="font-size:26px">36</div><div class="hint">本次任务：6个问题 × 6个平台</div></div>
<div class="card kpi"><div class="l">推荐次数</div><div class="v" style="font-size:26px">19</div><div class="hint">进入AI推荐/来源列表的检测数</div></div>
<div class="card kpi"><div class="l">总提及次数</div><div class="v" style="font-size:26px">24</div><div class="hint">答案中出现品牌词的检测数</div></div>
<div class="card kpi"><div class="l">曝光率</div><div class="v" style="font-size:26px">66.7%</div><div class="hint">24 ÷ 36，分母为总检测次数</div></div>
</div><div class="card"><div class="ct">检测明细<span style="font-weight:400;font-size:12px;color:#8a9aa5">共 36 条，此处展示前 6 条</span></div>
<table><tr><th>平台</th><th>向AI咨询的问题</th><th>命中品牌词</th><th>是否推荐</th><th>提及次数</th><th>推荐位次</th><th>情感</th><th>状态</th></tr>
<tr><td>豆包</td><td>外卖袋定制哪家质量好</td><td>远见包装</td><td><span class="pill g">已推荐</span></td><td>3</td><td>第2位</td><td><span class="pill g">正向</span></td><td>完成 <span style="color:var(--primary-deep);cursor:pointer">查看</span></td></tr>
<tr><td>DeepSeek</td><td>外卖袋定制哪家质量好</td><td>XXXX包装新材料有限公司</td><td><span class="pill g">已推荐</span></td><td>1</td><td>第5位</td><td><span class="pill n">中性</span></td><td>完成 <span style="color:var(--primary-deep);cursor:pointer">查看</span></td></tr>
<tr><td>文心一言</td><td>外卖袋定制哪家质量好</td><td>—</td><td><span class="pill n">未推荐</span></td><td><span style="color:#a0aeb8">未提及</span></td><td>—</td><td>—</td><td>完成 <span style="color:var(--primary-deep);cursor:pointer">查看</span></td></tr>
<tr><td>腾讯元宝</td><td>食品级无纺布袋需要什么检测报告</td><td>立体无纺布酒袋</td><td><span class="pill g">已推荐</span></td><td>2</td><td>第1位</td><td><span class="pill n">低</span></td><td><span class="pill n">未选</span></td></tr>
<tr><td>通义千问</td><td>食品级无纺布袋需要什么检测报告</td><td>—</td><td><span class="pill n">未推荐</span></td><td><span style="color:#a0aeb8">未提及</span></td><td>—</td><td>—</td><td>完成 <span style="color:var(--primary-deep);cursor:pointer">查看</span></td></tr>
<tr><td>Kimi</td><td>奶茶保温袋批发选哪个厂家</td><td>远见包装</td><td><span class="pill g">已推荐</span></td><td>2</td><td>第3位</td><td><span class="pill g">正向</span></td><td>完成 <span style="color:var(--primary-deep);cursor:pointer">查看</span></td></tr></table>
</div><div class="card diagnostic-ready-card">
<div class="diagnostic-ready-main">
<div class="diagnostic-ready-icon">✓</div>
<div><div class="diagnostic-ready-title">诊断报告已生成</div><div class="diagnostic-ready-sub">检测完成后自动生成诊断结论、指标对比、内容与信源优化建议；点击后在独立文档窗口中查看。</div></div>
</div>
<div class="diagnostic-ready-actions"><span class="pill g">已完成</span><button class="btn o" id="openDiagnosticReport">打开诊断报告</button></div>
</div><template id="diagnosticReportTemplate"><div class="card geo-loop">
<div class="geo-loop-head"><div class="geo-loop-title">GEO 增长闭环 · 从企业事实到 AI 推荐</div><div class="geo-cycle">诊断后自动进入下一轮优化 ↻</div></div>
<div class="geo-loop-steps">
<span class="geo-step" data-jump="kb">1 企业知识库</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="persona">2 人群画像</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="kw">3 搜索问题</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="gen">4 内容生成</span><span class="geo-arrow">→</span>
<span class="geo-step">5 合规审查</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="pub">6 信源发布</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="inc">7 AI 收录检测</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="monitor">8 排名 / 曝光检测</span><span class="geo-arrow">→</span>
<span class="geo-step hot">9 诊断报告</span><span class="geo-arrow">→</span>
<span class="geo-step hot">10 优化建议</span><span class="geo-arrow">→</span>
<span class="geo-step" data-jump="gen">11 内容再优化</span>
</div></div><div class="card" style="border-color:#cfe9dc;background:linear-gradient(90deg,#f4fbf7,#fff)">
<div class="ct">四条优化策略 · 本模块核心动作<span class="pill g">第3期优化已完成</span></div>
<div class="cs">诊断报告由品牌诊断的检测结果自动生成，并联动历史基线完成「监测—诊断—优化建议」闭环，用于验证 AI GEO 效果。</div>
<div class="flex" style="margin-top:6px">
<div style="flex:1;background:#fff;border:1px solid #e3ebe7;border-radius:9px;padding:12px 14px">
<div style="font-size:12px;color:var(--primary-dark);font-weight:700;margin-bottom:4px">① 场景分层</div>
<div style="font-size:12.5px;color:#5b6b76">按搜索意图分层匹配体裁与信源，了解/比价/决策各走不同内容形态</div></div>
<div style="flex:1;background:#fff;border:1px solid #e3ebe7;border-radius:9px;padding:12px 14px">
<div style="font-size:12px;color:var(--primary-dark);font-weight:700;margin-bottom:4px">② 内容与信源联动</div>
<div style="font-size:12.5px;color:#5b6b76">品牌官网 + 权威媒体 + 社区组合投放，保证信源多样性，不单点押注</div></div>
<div style="flex:1;background:#fff;border:1px solid #e3ebe7;border-radius:9px;padding:12px 14px">
<div style="font-size:12px;color:var(--primary-dark);font-weight:700;margin-bottom:4px">③ 竞品对抗</div>
<div style="font-size:12.5px;color:#5b6b76">不回避横评类，预置客观对比内容，锁定与竞品参数的严格交集</div></div>
<div style="flex:1;background:#fff;border:1px solid #e3ebe7;border-radius:9px;padding:12px 14px">
<div style="font-size:12px;color:var(--primary-dark);font-weight:700;margin-bottom:4px">④ AI语义适配</div>
<div style="font-size:12.5px;color:#5b6b76">结构化事实 + 权威背书 + 多级标题与尾部FAQ，降低AI抽取成本</div></div></div></div><div class="row">
<div class="card kpi"><div class="l">AI推荐可见率</div><div class="v">61<span style="font-size:18px">%</span></div>
<span class="up">▲ 30pt</span> <span style="font-size:12px;color:#a0aeb8">优化前 31%</span><div class="mini"><i style="width:61%"></i></div>
<div class="hint">正向/中性引用的问题数 ÷ 总测试问题数</div></div>
<div class="card kpi"><div class="l">前三推荐率</div><div class="v">38<span style="font-size:18px">%</span></div>
<span class="up">▲ 26pt</span> <span style="font-size:12px;color:#a0aeb8">优化前 12%</span><div class="mini"><i style="width:38%"></i></div>
<div class="hint">前3位问题数 ÷ 被引用问题数</div></div>
<div class="card kpi"><div class="l">竞品提及率</div><div class="v">32<span style="font-size:18px">%</span></div>
<span class="dn">▼ 33pt</span> <span style="font-size:12px;color:#a0aeb8">优化前 65%</span><div class="mini"><i style="width:32%;background:#e2574c"></i></div>
<div class="hint">提及至少一个竞品的问题数 ÷ 总问题数</div></div></div><div class="card"><div class="ct">优化前后对比 · 同一问题集 / 同一时间窗口</div><div class="cs">优化前后各采集一次，共 200题 × 6平台 × 2 = 2,400 次检测</div>
<table><tr><th>指标</th><th>优化前</th><th>优化后</th><th>变化</th><th>绝对题数变化</th><th>分母口径</th></tr>
<tr><td><b>AI推荐可见率</b></td><td>31%</td><td><b style="color:var(--primary-dark)">61%</b></td><td><span class="up">▲ 30pt</span></td><td>62题 → 122题</td><td>总测试问题数 200</td></tr>
<tr><td><b>前三推荐率</b></td><td>12%</td><td><b style="color:var(--primary-dark)">38%</b></td><td><span class="up">▲ 26pt</span></td><td>约7题 → 46题</td><td>被引用问题数（62 → 122，分母随之变大）</td></tr>
<tr><td>竞品提及率</td><td>65%</td><td><b style="color:var(--primary-dark)">32%</b></td><td><span class="up">▼ 33pt</span></td><td>130题 → 64题</td><td>总测试问题数 200</td></tr>
<tr><td>试点付费转化率</td><td>—</td><td><b style="color:var(--primary-dark)">25%</b></td><td>5 / 20 家</td><td>签POC协议并付小额测试费</td><td>参与测试企业数 20</td></tr>
<tr><td>报告产出效率</td><td>2天/份</td><td><b style="color:var(--primary-dark)">2小时/份</b></td><td>约8倍</td><td>采集自动化 + 模板组装</td><td>单份人时</td></tr></table>
<div class="box" style="margin-top:12px"><b>需要主动说明的一点：</b>前三推荐率的分母是「被引用问题数」，它本身从62涨到122。12%→38% 是在分母翻倍的情况下取得的，绝对题数约 7→46。若只看率不看分母，容易低估实际增量。</div></div><div class="row"><div class="card" style="flex:.55;text-align:center"><div class="ct" style="justify-content:center">ARTICLE 内容覆盖分</div>
<div class="sc" style="color:var(--primary-dark);margin:14px 0 6px">68</div><div class="pill g" style="font-size:12.5px">覆盖不均，细分场景存在空白</div>
<div class="hint" style="text-align:left;margin-top:12px">品牌已成功进入AI引擎的候选推荐池，具备基础内容曝光能力，主流核心示例问题均能实现品牌露出。但在特定细分场景、深度问答类搜索中存在明显内容缺失，反映关键词布局广度与内容专业深度仍有优化空间。</div></div>
<div class="card" style="flex:.55;text-align:center"><div class="ct" style="justify-content:center">REFERENCE 信源权威分</div>
<div class="sc" style="color:#b8791a;margin:14px 0 6px">54</div><div class="pill y" style="font-size:12.5px">结构性缺失，高价值场景遗漏</div>
<div class="hint" style="text-align:left;margin-top:12px">信源投放已完成主流覆盖，头部+核心垂类媒体均实现布局。但在AI引擎频繁引用的垂直领域平台、权威官方平台存在布局盲区，会导致品牌在对比类、评测类、专业解答类等高价值搜索场景中被过滤剔除。</div></div></div><div class="card"><div class="ct">诊断报告预览<span class="pill g">第3期 · 2026-07-14</span><button class="btn o">导出 PDF</button></div>
<div class="cs">交付给客户的报告成品。下方原样呈现第五章「GEO优化建议」，也是客户最常直接执行的一章</div>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:2px 0 13px">
<span class="chip">一 结论摘要</span><span class="chip">二 评分卡</span><span class="chip">三 分平台表现</span><span class="chip">四 失声场景清单</span><span class="chip on">五 GEO优化建议</span><span class="chip">六 逐题附录</span></div>
<div style="background:#fff;border:1px solid #e3ebe7;border-radius:11px;padding:15px 17px">
<div style="border-left:3px solid var(--primary-dark);padding-left:9px;font-size:14px;font-weight:700;margin-bottom:9px">GEO 文章优化建议</div>
<div style="font-size:12.5px;color:#5b6b76;line-height:1.85">基于 GEO 基础建设核查、推广效果诊断及竞品对比结果，为补齐品牌在核心 / 长尾搜索场景的内容覆盖空白，强化品牌与用户需求的语义关联、提升搜索拦截能力，针对未被覆盖的示例问题精准推荐适配的创作体裁，实现内容在各搜索场景的全域渗透。</div>
<div style="font-size:12.5px;font-weight:700;margin:12px 0 6px">影响评估：<span class="pill g">心智初建，需防范竞品蚕食</span></div>
<div style="background:var(--primary-soft-2);border:1px solid var(--primary-border-soft);border-radius:8px;padding:11px 13px;font-size:12.5px;color:#3f5b50;line-height:1.9">品牌在核心示例问题中已能稳定露出，200 题中 122 题出现品牌信息，用户检索相关问题时 AI 引擎可稳定识别并提及，AI 搜索场景下的用户心智已初步建立。但「横向对比」「材质工艺」类长尾问题仍有 78 题未覆盖，豆包、元宝已形成稳定提及，文心一言与 DeepSeek 上竞品仍有较大流量争夺空间。当前品牌内容在 AI 模型中的采信度处于中上水平，需通过体裁补齐把未覆盖场景转为稳定引用。</div>
<div style="font-size:12.5px;font-weight:700;margin:12px 0 7px;color:var(--primary-deep)">▤ 优化方案：推荐按照以下体裁撰写文章</div>
<div style="display:flex;gap:7px;flex-wrap:wrap">
<span class="chip">排行·盘点类 <b style="color:var(--primary-dark)">21题</b></span><span class="chip">横向评测类 <b style="color:var(--primary-dark)">17题</b></span><span class="chip">材质工艺科普 <b style="color:var(--primary-dark)">13题</b></span><span class="chip">采购避坑指南 <b style="color:var(--primary-dark)">11题</b></span><span class="chip">场景解决方案 <b style="color:var(--primary-dark)">9题</b></span><span class="chip">资质与背书类 <b style="color:var(--primary-dark)">7题</b></span></div>
<div style="border-top:1px dashed #e3ebe7;margin:15px 0 12px"></div>
<div style="border-left:3px solid var(--primary-dark);padding-left:9px;font-size:14px;font-weight:700;margin-bottom:9px">信源投放建议</div>
<div style="font-size:12.5px;color:#5b6b76;line-height:1.85">结合未覆盖示例问题的 AI 检索信源分布，定位尚未布局的媒体平台，搭建高权重、高适配的多维信任矩阵，为推广效果筑牢权威背书壁垒。</div>
<div style="font-size:12.5px;font-weight:700;margin:12px 0 6px">影响评估：<span class="pill y">主流已覆盖，垂类权威待补</span></div>
<div style="background:var(--primary-soft-2);border:1px solid var(--primary-border-soft);border-radius:8px;padding:11px 13px;font-size:12.5px;color:#3f5b50;line-height:1.9">品牌已完成多维度信源布局：客户产品官网已建设，拥有 4 条自媒体报道（覆盖知乎、头条号），11 条权威媒体报道（覆盖某权威通讯社客户端、某财经资讯平台、包装行业洞察网等），在 AI 引擎核心信源库中形成多点支撑。但食品级检测机构、包装行业垂类平台与百科类信源尚未布局，导致品牌在对比类、评测类、专业解答类高价值场景中被过滤剔除，权威性认可度仍有提升空间。</div>
<div style="font-size:12.5px;font-weight:700;margin:12px 0 7px;color:var(--primary-deep)">▤ 优化方案：建议选择以下信源投放文章</div>
<div style="display:flex;gap:7px;flex-wrap:wrap">
<span class="chip">某权威通讯社客户端</span><span class="chip">百科类词条平台</span><span class="chip">食品级检测机构官网</span><span class="chip">包装行业洞察网</span><span class="chip">餐饮供应链头部KOL</span><span class="chip">某财经资讯平台</span><span class="chip">知乎</span><span class="chip">什么值得买</span><span class="chip">B2B联盟站群</span></div></div>
<div class="box" style="margin-top:12px">报告为模板自动组装：采集与指标计算由系统完成，人工只做分歧样本定分与建议复核，单份从 2天 压到 2小时。报告里的建议是给客户看的执行口径，下方「优化建议清单」是系统内部的量化排期，多一列预估影响用于排下一轮优先级。</div></div><div class="card"><div class="ct">优化建议清单</div>
<table><tr><th>建议</th><th>依据</th><th>预估影响</th></tr>
<tr><td>补齐食品级检测报告类权威信源</td><td>REFERENCE 结构性缺失</td><td>可见率 +6pt</td></tr>
<tr><td>横评类问题铺设客观对比内容</td><td>竞品在Q-023占据前3位</td><td>前三推荐率 +9pt</td></tr>
<tr><td>官网增加 FAQ Schema 结构化数据</td><td>结构化程度权重18%</td><td>被抽取概率提升</td></tr>
<tr><td>补充 ISO 三体系认证可核验资质页</td><td>E-E-A-T 权重30%</td><td>信源权威分 +12</td></tr>
<tr><td>产品参数补第三方实测数值</td><td>缺参数事实锚点</td><td>幻觉风险下降</td></tr></table>
<div class="box" style="margin-top:10px">建议由系统按缺口自动生成：对比失声场景与竞品抢位数据，定位到具体的信源类型与内容类型缺失。</div></div></template></div></div>
<div class="page" id="kb">
<div class="kb-stack">
<div class="card">
<div class="ct">企业基本信息 <span class="completion" id="companyCompletion">● 已完成主体认证</span></div>
<div class="cs">企业主体信息是知识库的基础数据。请先完成必填信息，再上传公司介绍、产品手册、信任背书、合作案例、FAQ问答等企业文档。</div>
<div class="info-grid">
<div class="fg"><span class="lb">企业名称 <span class="req">*</span></span><input class="ipt" id="enterpriseName" value="XXXX包装新材料有限公司"/></div>
<div class="fg"><span class="lb">统一社会信用代码 <span class="req">*</span></span><input class="ipt" id="creditCode" value="91420100MA4K3X8F2Q"/></div>
<div class="fg"><span class="lb">所属行业 <span class="req">*</span></span><input class="ipt" id="industryName" value="包装材料与包装制品制造"/></div>
<div class="fg"><span class="lb">企业官网</span><input class="ipt" id="officialSite" value="https://www.yuanjian-pack.com"/></div>
<div class="fg"><span class="lb">企业联系人 <span class="req">*</span></span><input class="ipt" id="companyContact" value="程经理"/></div>
<div class="fg"><span class="lb">联系人电话 <span class="req">*</span></span><input class="ipt" id="companyContactPhone" type="tel" value="138 0000 2026"/></div>
<div class="fg span2"><span class="lb">地址 <span class="req">*</span></span><input class="ipt" id="businessAddress" value="湖北省武汉市东西湖区临空港大道88号"/></div>
<div class="fg"><span class="lb">联系人邮箱 <span class="req">*</span></span><input class="ipt" id="companyContactEmail" type="email" value="cheng@yuanjian-pack.com"/></div>
<div class="fg span3"><span class="lb">企业营业执照 <span class="req">*</span></span><div class="file-field"><div class="file-name" id="licenseFileName">营业执照_XXXX包装新材料有限公司.pdf</div><button class="btn o" id="licenseUploadBtn" type="button">重新上传</button><input accept=".pdf,.jpg,.jpeg,.png" hidden="" id="licenseFileInput" type="file"/></div></div>
</div>
<div class="info-actions"><span class="hint" style="margin:0">保存后，企业名称将作为内容创作页 Slot C 主推实体的数据源。</span><button class="btn" id="saveCompanyInfo">保存基本信息</button></div>
</div>
<div class="card">
<div class="ct">知识库文档 <button class="btn" id="kbUploadTop">＋ 上传文档</button></div>
<div class="cs">文档按业务类型入库，用于后续画像、关键词、内容生成与事实校验。</div>
<div class="table-scroll"><table id="kbTable"><tr><th>文档</th><th>类型</th><th style="width:220px">操作</th></tr>
<tr><td class="doc-name">远见包装产品手册2026.pdf</td><td class="doc-type">产品手册</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
<tr><td class="doc-name">ISO9001+高新技术企业认证.pdf</td><td class="doc-type">信任背书</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
<tr><td class="doc-name">客户高频问答整理.docx</td><td class="doc-type">FAQ问答</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
<tr><td class="doc-name">4000绿色环保体系检测报告.pdf</td><td class="doc-type">信任背书</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
<tr><td class="doc-name">合作案例与交付履历.xlsx</td><td class="doc-type">合作案例</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
</table></div></div>
</div>
<div class="modal-backdrop" id="kbUploadModal">
<div aria-labelledby="kbModalTitle" aria-modal="true" class="modal" role="dialog">
<div class="modal-head"><div class="modal-title" id="kbModalTitle">上传企业文档</div><button class="modal-close" id="kbModalClose" type="button">×</button></div>
<div class="modal-body">
<div class="fg"><span class="lb">文件类型 <span class="req">*</span></span><select class="ipt" id="kbDocType"><option value="">请选择文件类型</option><option>公司介绍</option><option>产品手册</option><option>信任背书</option><option>合作案例</option><option>FAQ问答</option><option>其他</option></select></div>
<div class="fg" style="margin-bottom:0"><span class="lb">选择文件 <span class="req">*</span></span><div class="upload-drop"><input accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.md" id="kbFileInput" type="file"/><div class="modal-tip">支持 PDF、Word、Excel、TXT、Markdown；单文件建议不超过 50MB。</div></div></div>
</div>
<div class="modal-foot"><button class="btn o" id="kbModalCancel" type="button">取消</button><button class="btn" id="kbModalConfirm" type="button">确认上传</button></div>
</div></div>
</div>
<div class="page" id="persona">
<div class="persona-summary-grid">
<div class="card persona-core-card"><div class="ct"><span>核心产品或服务 <span class="pill n" id="personaProductCount">3项</span></span><button aria-label="运行人群画像 Agent" class="agent-icon-btn" id="personaAgentBtn" title="运行人群画像 Agent" type="button"><svg aria-hidden="true" viewbox="0 0 24 24"><path d="M8 6.2h8a4 4 0 0 1 4 4v5.3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5.3a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" stroke-width="1.8"></path><path d="M12 3.4v2.8M9 12h.01M15 12h.01M9 15.4c1.8 1.2 4.2 1.2 6 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path><path d="M18.4 3.4l.45 1.05 1.05.45-1.05.45-.45 1.05-.45-1.05-1.05-.45 1.05-.45.45-1.05Z" fill="currentColor"></path></svg></button></div><div class="cs">字段由「关键词挖掘 → 核心实体（产品词库）」后端传入，并保持实时一致。</div><div class="entity-list" id="personaProducts"><span class="entity-token">外卖袋</span><span class="entity-token">食品级无纺布袋</span><span class="entity-token">奶茶保温袋</span></div></div>
<div class="card persona-generated-card"><div class="ct">人群画像</div><div class="entity-list"><span class="entity-token">餐饮行业</span><span class="entity-token">食品行业</span><span class="entity-token">茶饮行业</span><span class="entity-token">酒水行业</span><span class="entity-token">生产制造企业</span></div></div>
</div>
<div class="persona-main-grid persona-generated-grid">
<div class="card"><div class="ct">客户场景化搜索分类</div><table><tr><th>场景</th><th>触发搜索词</th><th>意图阶段</th></tr>
<tr><td>餐饮行业需要外卖打包</td><td>外卖袋定制 / 餐饮打包袋</td><td><span class="pill r">决策期</span></td></tr>
<tr><td>食品行业需要食品包装</td><td>食品级无纺布袋 / 食品包装淋膜袋</td><td><span class="pill y">比价期</span></td></tr>
<tr><td>奶茶门店需要保温包装</td><td>奶茶保温袋 / 奶茶打包保温袋</td><td><span class="pill r">决策期</span></td></tr>
<tr><td>采购方需要环保合规材料</td><td>环保包装材料 / 食品级检测报告</td><td><span class="pill b">了解期</span></td></tr>
</table></div>
<div class="card"><div class="ct">购买考量因素</div><div class="factor-list">
<div class="factor-item"><span class="factor-num">01</span><span>材质是否食品级、环保、耐用</span></div><div class="factor-item"><span class="factor-num">02</span><span>定制尺寸、印刷 Logo 与起订能力</span></div><div class="factor-item"><span class="factor-num">03</span><span>生产设备、工艺成熟度与交付周期</span></div><div class="factor-item"><span class="factor-num">04</span><span>ISO9001、高新技术企业等可核验资质</span></div><div class="factor-item"><span class="factor-num">05</span><span>价格合理性、售后保障与问题处理效率</span></div>
</div></div>
</div>
<div class="card persona-generated-card"><div class="ct">多维关联图谱</div>
<table id="graphTable"><tr><th>核心产品</th><th>关联人群</th><th>搜索场景</th><th>考量因素</th></tr>
<tr><td>外卖袋</td><td>餐饮行业</td><td>外卖袋定制 / 餐饮打包袋</td><td>交货及时性 · 定制能力 · 环保合规</td></tr>
<tr><td>食品级无纺布袋</td><td>食品行业</td><td>食品级无纺布袋 / 食品包装淋膜袋</td><td>食品级材质 · 检测报告 · 环保认证</td></tr>
<tr><td>奶茶保温袋</td><td>茶饮行业</td><td>奶茶保温袋 / 奶茶打包保温袋</td><td>保温性能 · 定制尺寸 · 起订量 · 交付周期</td></tr>
</table></div>
</div>
<div class="page" id="kw">
<div class="card"><div class="ct"><span>关键词挖掘</span><div class="kw-head-actions"><span class="hint" id="agentLastRun" style="margin:0">尚未生成</span><button aria-label="智能长尾词挖掘 Agent" class="agent-icon-btn" id="prefixSuffixAgent" title="智能长尾词挖掘 Agent" type="button"><svg aria-hidden="true" viewbox="0 0 24 24"><path d="M8 6.2h8a4 4 0 0 1 4 4v5.3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5.3a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" stroke-width="1.8"></path><path d="M12 3.4v2.8M9 12h.01M15 12h.01M9 15.4c1.8 1.2 4.2 1.2 6 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path><path d="M18.4 3.4l.45 1.05 1.05.45-1.05.45-.45 1.05-.45-1.05-1.05-.45 1.05-.45.45-1.05Z" fill="currentColor"></path></svg></button></div></div><div class="cs">核心实体作为业务产品词库；点击右上角 Agent 图标，可根据企业知识库与产品语义智能挖掘长尾词与高潜搜索词条，并自动同步至人群画像与内容创作模块。</div>
<div class="row"><div class="card" style="background:#fafbfc;flex:1"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span class="lb" style="margin:0">核心实体（产品词库）</span><span class="pill b" id="entityCountPill">3 个核心实体</span></div>
<textarea class="ipt" id="keywordEntities" rows="4">外卖袋
食品级无纺布袋
奶茶保温袋</textarea><div class="hint" style="margin-top:8px">每行一个核心实体。此字段将自动同步至人群画像、长尾词库与内容创作模块。</div></div></div>
</div>
<div class="row"><div class="card kpi"><div class="l">核心实体总数</div><div class="v" id="keywordComboCount" style="font-size:26px">3</div><div class="hint">已录入的业务核心产品与服务词条</div></div>
<div class="card kpi"><div class="l">当前长尾词库</div><div class="v" id="keywordLibraryCount" style="font-size:26px">7</div><div class="hint">Agent 质检后保留并入库的长尾词</div></div>
<div class="card kpi"><div class="l">已选入投产</div><div class="v" id="keywordProductionCount" style="font-size:26px">5</div><div class="hint">客户确认后进入内容生产</div></div></div>
<div class="card"><div class="ct">长尾词库 <span class="kw-result-count" id="kwResultCount">7 条</span></div><div class="cs">核心实体与长尾词的对应关系将作为内容创作页联动下拉的数据源。支持实时检索与分层筛选。</div>
<div class="kw-toolbar" id="kwToolbar"><div class="kw-search-wrap"><span class="kw-search-icon">⌕</span><input class="ipt" id="kwSearchInput" placeholder="搜索长尾词或体裁"/></div><select class="ipt" id="kwEntityFilter"><option value="">全部核心实体</option></select><select class="ipt" id="kwIntentFilter"><option value="">全部搜索意图</option><option>了解期</option><option>比价期</option><option>决策期</option></select><select class="ipt" id="kwPriorityFilter"><option value="">全部优先级</option><option>高</option><option>中</option><option>低</option></select><button class="btn o kw-reset-btn" id="kwFilterReset" type="button">重置</button></div>
<table id="longTailTable"><tr><th>长尾词</th><th>核心实体</th><th>搜索意图</th><th>体裁建议</th><th>优先级</th><th>是否投产</th></tr>
<tr><td>口碑好的外卖袋定制哪家好</td><td>外卖袋</td><td><span class="pill r">决策期</span></td><td>排行推荐</td><td><span class="pill r">高</span></td><td><span class="pill g">已选投产</span></td></tr>
<tr><td>外卖袋一般用什么材质</td><td>外卖袋</td><td><span class="pill b">了解期</span></td><td>知识科普</td><td><span class="pill n">低</span></td><td><span class="pill n">未选</span></td></tr>
<tr><td>外卖袋定制一般多久交货</td><td>外卖袋</td><td><span class="pill y">比价期</span></td><td>采购指南</td><td><span class="pill y">中</span></td><td><span class="pill g">已选投产</span></td></tr>
<tr><td>食品级无纺布袋需要什么检测报告</td><td>食品级无纺布袋</td><td><span class="pill b">了解期</span></td><td>问题解答</td><td><span class="pill n">低</span></td><td><span class="pill n">未选</span></td></tr>
<tr><td>食品级无纺布袋生产厂家怎么选</td><td>食品级无纺布袋</td><td><span class="pill r">决策期</span></td><td>选购指南</td><td><span class="pill r">高</span></td><td><span class="pill g">已选投产</span></td></tr>
<tr><td>奶茶保温袋与普通打包袋区别</td><td>奶茶保温袋</td><td><span class="pill y">比价期</span></td><td>对比评测</td><td><span class="pill y">中</span></td><td><span class="pill g">已选投产</span></td></tr>
<tr><td>奶茶保温袋批发起订量是多少</td><td>奶茶保温袋</td><td><span class="pill r">决策期</span></td><td>采购指南</td><td><span class="pill r">高</span></td><td><span class="pill g">已选投产</span></td></tr>
</table><div class="kw-empty" id="kwEmpty">没有匹配当前筛选条件的长尾词</div>
<div class="box" style="margin-top:12px"><b>数据流：</b>核心实体确定产品范围，长尾词库存储「长尾词 ↔ 核心实体」映射。内容创作选择核心检索词后，只展示该核心实体对应的长尾词，避免错配。</div></div>
</div>
<div class="page" id="gen">
<div class="card"><div class="ct">内容生成参数 <span class="pill b">上游字段联动</span></div>
<div class="grid2">
<div class="fg"><span class="lb">Slot C 主推实体（禁用缩写）<span class="flow-source">企业知识库</span></span><input class="ipt readonly" id="slotC" readonly="" value="XXXX包装新材料有限公司"/><div class="source-note">后端字段：enterprise_name</div></div>
<div class="fg"><span class="lb">core_keyword 核心检索词<span class="flow-source">关键词挖掘</span></span><select class="ipt" id="coreKeywordSelect"><option>外卖袋</option><option>食品级无纺布袋</option><option>奶茶保温袋</option></select></div>
<div class="fg"><span class="lb">long_tail_keyword 长尾词<span class="flow-source">关键词挖掘</span></span><select class="ipt" id="longTailSelect"><option>口碑好的外卖袋定制哪家好</option><option>外卖袋一般用什么材质</option><option>外卖袋定制一般多久交货</option></select></div>
<div class="fg"><span class="lb">article_type 体裁建议<span class="flow-source">关键词挖掘</span></span><input class="ipt readonly" id="articleTypePreview" readonly="" value="排行推荐"/><div class="source-note">随当前长尾词自动匹配</div></div>
<div class="fg" style="grid-column:1/-1"><span class="lb">graph_json 多维关联图谱<span class="flow-source">人群画像</span></span><select class="ipt" id="graphSelect"><option>1. 外卖袋 ｜ 餐饮行业 ｜ 外卖袋定制 / 餐饮打包袋 ｜ 交货及时性 · 定制能力 · 环保合规</option></select></div>
<div class="fg" style="grid-column:1/-1"><span class="lb">Slot B 定制红线（客户绝对禁令，凌驾所有规则）</span><textarea class="ipt" id="redlineInput" rows="2">不得提及具体报价；不得出现「食品安全零风险」表述</textarea></div>
</div>
<div class="gen-bottom">
<div class="gen-length-field"><span class="lb">文章长度</span><div class="flex article-length-options" style="gap:6px" role="radiogroup" aria-label="文章长度"><span class="chip" data-length="精炼" role="radio" aria-checked="false">精炼800</span><span class="chip on" data-length="标准" role="radio" aria-checked="true">标准3000</span><span class="chip" data-length="故事" role="radio" aria-checked="false">故事5000</span></div></div>
<div class="count-field"><span class="lb">文章数量 <span class="req">*</span></span><input class="ipt" id="articleCount" inputmode="numeric" min="1" placeholder="请输入正整数" value="2"/><div class="field-error" id="articleCountError"></div><div class="hint">MVP 建议单次生成 1–5 篇，便于控制耗时与结果稳定性。</div></div>
<div class="gen-spacer"></div><button class="btn generate-article-btn" id="generateArticleBtn"><span>生成文章</span><small>⌘ Enter</small></button>
</div><div class="generation-summary" id="generationSummary"><div><span>当前核心词</span><b id="summaryCore">外卖袋</b></div><div><span>匹配体裁</span><b id="summaryType">排行推荐</b></div><div><span>文章规格</span><b id="summaryLength">标准3000 × 2篇</b></div><div><span>参数状态</span><b class="summary-ready" id="summaryReady">● 可生成</b></div></div></div>
</div>
<div class="page" id="videographic">
<div class="card" style="margin-bottom:16px">
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
    <div class="vg-tab-bar">
      <button class="vg-tab-btn" data-vg-mode="video" type="button">视频创作</button>
      <button class="vg-tab-btn on" data-vg-mode="graphic" type="button">图文创作</button>
    </div>
    <div style="display:flex;align-items:center;gap:9px;flex-wrap:wrap">
      <button class="btn" id="vgAutoGenerateBtn" type="button" style="background:linear-gradient(96deg,var(--primary),var(--primary-2));color:#fff;border:none;box-shadow:0 4px 14px rgba(16,185,129,.28)">⚡ 一键生成全套图文</button>
      <button class="btn o" id="vgResetBtn" type="button">↺ 重置</button>
      <button class="btn o" id="vgSaveToArticlesBtn" type="button">📥 保存至文库</button>
      <button class="btn o" id="vgPublishBtn" type="button" style="border-color:var(--primary);color:var(--primary-dark)">🚀 立即分发投稿</button>
    </div>
  </div>
</div>

<!-- Mode: 图文创作 -->
<div id="vgGraphicPanel">
  <!-- Module 1: 策划文案 -->
  <div class="card vg-step-card">
    <div class="vg-step-head">
      <span class="vg-step-num">1</span>
      <span class="vg-step-title">策划文案</span>
      <span class="vg-step-desc">多模态提示词与高权重GEO文案生成</span>
    </div>

    <div class="vg-sub-title">■ 关键词</div>
    <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:14px">
      <div class="fg">
        <span class="lb">核心关键词*</span>
        <select class="ipt" id="vgCoreKeyword">
          <option value="">请选择核心关键词</option>
          <option value="外卖袋" selected>外卖袋 / 餐饮保温袋</option>
          <option value="食品级无纺布袋">食品级无纺布袋</option>
          <option value="奶茶冷热保温袋">奶茶冷热保温袋</option>
          <option value="环保降解连卷袋">环保降解连卷袋</option>
          <option value="高档商务礼盒手提袋">高档商务礼盒手提袋</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">长尾关键词*</span>
        <select class="ipt" id="vgLongTail">
          <option value="口碑好的外卖袋定制哪家好" selected>口碑好的外卖袋定制哪家好</option>
          <option value="外卖袋定制一般多久交货">外卖袋定制一般多久交货</option>
          <option value="外卖袋一般用什么材质">外卖袋一般用什么材质</option>
          <option value="食品级无纺布袋需要什么检测报告">食品级无纺布袋需要什么检测报告</option>
          <option value="耐用的外卖保温袋生产厂家">耐用的外卖保温袋生产厂家</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">创作类型*</span>
        <select class="ipt" id="vgCreativeType">
          <option value="种草推荐" selected>种草推荐 (新媒体高权重爆款)</option>
          <option value="选型对比">选型对比 (采购决策参考指南)</option>
          <option value="痛点科普">痛点科普 (避坑与环保材质解析)</option>
          <option value="源头实力">源头实力 (定制工艺与交期保证)</option>
          <option value="合规答疑">合规答疑 (食品接触级标准质检)</option>
        </select>
      </div>
    </div>

    <div class="vg-sub-title">■ 图文内容</div>
    <div style="display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:14px;margin-bottom:14px">
      <div class="fg">
        <span class="lb">图文标题*</span>
        <div class="ipt-with-counter">
          <input class="ipt" id="vgTitle" maxlength="20" placeholder="请输入图文标题" value="外卖袋定制怎么选？源头工厂教你避坑5大雷区！" />
          <span class="char-counter" id="vgTitleCounter">20 / 20</span>
        </div>
      </div>
      <div class="fg">
        <span class="lb">话题标签*</span>
        <div class="ipt-with-counter">
          <input class="ipt" id="vgTagInput" placeholder="请输入话题标签，按回车添加" />
          <span class="char-counter" id="vgTagCounter">3 / 5</span>
        </div>
        <div class="hint" style="margin-top:4px">提示：最多输入5个话题标签，每个标签用回车分类</div>
        <div class="vg-tag-tokens" id="vgTagTokens">
          <span class="vg-tag">#外卖袋定制 <i class="vg-del-tag">×</i></span>
          <span class="vg-tag">#环保包装 <i class="vg-del-tag">×</i></span>
          <span class="vg-tag">#餐饮供应链 <i class="vg-del-tag">×</i></span>
        </div>
      </div>
    </div>

    <div class="fg">
      <span class="lb">正文内容*</span>
      <textarea class="ipt" id="vgContent" rows="6" placeholder="点击上方「一键生成全套图文」后，此处将自动填充高权重吸引力正文，您也可以手动编辑...">连锁餐饮和品牌外卖如何挑选靠谱的包装袋？这篇硬核选型攻略帮你省下30%成本！

1. 材质安全是底线：选用优质食品级加厚无纺布与环保水性油墨，杜绝异味与塑化剂超标，保障客户开袋好感度。
2. 保温防漏核心指标：双层覆铝箔复合工艺，实测45分钟温度衰减≤3℃，汤汁颠簸滴水不漏。
3. 承重抗撕裂测试：加固提手十字交叉车缝，静载15KG不脱落断带，骑手配送零客诉。
4. 敏捷供应链支持：自有净化无尘车间，支持加急48小时打样，72小时极速出货，大促囤货更从容！

欢迎咨询远见包装，量身定制专属品牌视觉外卖打包解决方案！</textarea>
      <div class="vg-editor-bar">
        <button class="action-btn" id="vgAIPolish" type="button"><i class="action-icon">✦</i> AI智能润色</button>
        <button class="action-btn" id="vgAddEmoji" type="button"><i class="action-icon">☺</i> 添加营销表情</button>
        <button class="action-btn" id="vgCopyContent" type="button"><i class="action-icon">⎘</i> 复制正文</button>
        <button class="action-btn danger" id="vgClearContent" type="button"><i class="action-icon">⌫</i> 清空</button>
      </div>
    </div>
  </div>

  <!-- Module 2: 配置图文画面参数及渠道 -->
  <div class="card vg-step-card">
    <div class="vg-step-head">
      <span class="vg-step-num">2</span>
      <span class="vg-step-title">配置图文画面参数及渠道</span>
      <span class="vg-step-desc">多图配图获取方式、构图比例与画面提示词矩阵</span>
    </div>

    <div class="vg-sub-title">■ 配图获取方式*</div>
    <div style="margin-bottom:14px">
      <div class="vg-segmented" id="vgMethodSeg">
        <button class="vg-seg-btn on" data-method="ai" type="button">AI生成图片</button>
        <button class="vg-seg-btn" data-method="upload" type="button">上传图片</button>
      </div>
    </div>

    <div class="vg-sub-title">■ 图片设置*</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
      <div class="fg">
        <span class="lb">图片生成数量*</span>
        <select class="ipt" id="vgImageCount">
          <option value="1">1张 (扣10积分)</option>
          <option value="2">2张 (扣20积分)</option>
          <option value="3">3张 (扣30积分)</option>
          <option value="4" selected>4张 (四宫格 · 扣40积分)</option>
          <option value="6">6张 (六宫格 · 扣60积分)</option>
          <option value="9">9张 (九宫格 · 扣90积分)</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">画面比例*</span>
        <select class="ipt" id="vgAspectRatio">
          <option value="9:16" selected>9:16 (手机竖屏)</option>
          <option value="3:4">3:4 (新媒体图文 · 小红书/微信)</option>
          <option value="1:1">1:1 (正方形卡片)</option>
          <option value="16:9">16:9 (横屏大图)</option>
        </select>
      </div>
    </div>

    <div class="vg-sub-title" id="vgPromptsSectionTitle">■ 各图片生成提示词 (共 4 张)</div>
    <div class="vg-prompts-list" id="vgPromptsList"></div>

    <div class="card" style="margin-top:18px;background:#fcfdfe;border-color:#e4e8f0">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="font-size:14px;font-weight:750;color:#1d2638;display:flex;align-items:center;gap:6px">
          <span style="width:8px;height:8px;border-radius:50%;background:var(--primary)"></span> 生成画面预览图库
        </div>
        <span style="font-size:11.5px;color:#8a94a6" id="vgGalleryRatioLabel">当前比例：9:16 (手机竖屏)</span>
      </div>
      <div class="vg-gallery-grid" id="vgGalleryGrid"></div>
    </div>
  </div>
</div>

<!-- Mode: 视频创作 (切换时展示) -->
<div id="vgVideoPanel" style="display:none">
  <div class="card vg-step-card">
    <div class="vg-step-head">
      <span class="vg-step-num">1</span>
      <span class="vg-step-title">短视频脚本策划</span>
      <span class="vg-step-desc">针对短视频算法调优的黄金3秒分镜与口播脚本</span>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:14px">
      <div class="fg">
        <span class="lb">视频时长</span>
        <select class="ipt" id="vgVideoDuration">
          <option value="15">15秒 (轻快抓人 · 黄金吸睛)</option>
          <option value="30" selected>30秒 (精炼种草 · 痛点转化)</option>
          <option value="60">60秒 (深度企业访厂与实测)</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">解说音色</span>
        <select class="ipt" id="vgVoice">
          <option value="v1" selected>知性干练商务女声 (专业信赖)</option>
          <option value="v2">沉稳大气解说男声 (工厂背书)</option>
          <option value="v3">热情活力带货主播 (高频吸睛)</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">画面风格</span>
        <select class="ipt" id="vgVideoStyle">
          <option value="s1" selected>4K超清实拍纪实风</option>
          <option value="s2">现代科技扁平动态风</option>
          <option value="s3">3D产品爆炸拆解渲染</option>
        </select>
      </div>
    </div>

    <div class="vg-sub-title">■ 分镜脚本文案</div>
    <div style="display:grid;gap:12px">
      <div class="vg-prompt-card">
        <div class="vg-prompt-head">
          <span class="vg-prompt-num">镜头 1 · 黄金前3秒 (抓取痛点)</span>
          <span style="font-size:11px;color:var(--primary-dark);background:var(--primary-soft);padding:2px 8px;border-radius:999px;font-weight:600">00:00 - 00:05</span>
        </div>
        <div style="font-size:12px;color:#64748b;margin-bottom:6px"><b>画面：</b>外卖骑手在大雨中疾驰，镜头特写劣质外卖袋渗漏、提手崩断，客户收到外卖眉头紧锁。</div>
        <div style="font-size:12.5px;color:#1e293b"><b>口播：</b>“你家外卖送达总被投诉汤汁撒漏、保温不够？可能不是骑手的问题，而是选错了包装！”</div>
      </div>
      <div class="vg-prompt-card">
        <div class="vg-prompt-head">
          <span class="vg-prompt-num">镜头 2 · 工厂硬核实测 (化解顾虑)</span>
          <span style="font-size:11px;color:var(--primary-dark);background:var(--primary-soft);padding:2px 8px;border-radius:999px;font-weight:600">00:05 - 00:20</span>
        </div>
        <div style="font-size:12px;color:#64748b;margin-bottom:6px"><b>画面：</b>走进现代化净化车间，机械臂全自动高速超声波熔接，现场悬挂15kg重物暴力晃动测试，铝箔层保温测温仪实测对比。</div>
        <div style="font-size:12.5px;color:#1e293b"><b>口播：</b>“远见包装食品级双层无纺布，加固十字车缝，实测保热45分钟不降温，15公斤拉力抗撕裂！”</div>
      </div>
      <div class="vg-prompt-card">
        <div class="vg-prompt-head">
          <span class="vg-prompt-num">镜头 3 · 信任转化与行动号召</span>
          <span style="font-size:11px;color:var(--primary-dark);background:var(--primary-soft);padding:2px 8px;border-radius:999px;font-weight:600">00:20 - 00:30</span>
        </div>
        <div style="font-size:12px;color:#64748b;margin-bottom:6px"><b>画面：</b>整齐码放的定制LOGO外卖袋发往全国知名连锁餐企，出具权威第三方质检报告，屏幕浮现咨询联系方式。</div>
        <div style="font-size:12.5px;color:#1e293b"><b>口播：</b>“全国超过2000+餐饮品牌共同选择，48小时免费出打样，点击立即获取专属定制方案！”</div>
      </div>
    </div>
  </div>
</div>
</div>

<div class="page" id="articles">
<div class="article-page-toolbar">
<div class="article-search-group"><input class="ipt article-search-input" id="articleSearchInput" placeholder="按标题关键词搜索"/><button class="btn" id="articleSearchBtn" type="button">查询</button><button class="btn o" id="articleSearchReset" type="button">重置</button></div>
<button class="btn article-add-btn" id="articleAddBtn" type="button">＋ 添加文章</button>
</div>
<div class="card article-list-card">
<div class="article-tabs" id="articleTabs"><button class="article-tab on" data-article-tab="auto" type="button">自动化文章 <span class="article-tab-count">941</span></button><button class="article-tab" data-article-tab="uploaded" type="button">上传的文章 <span class="article-tab-count" id="uploadedArticleCount">6</span></button></div>
<div class="article-table-panel on" data-article-panel="auto">
<div class="article-table-wrap"><table class="article-table" id="autoArticleTable"><colgroup><col style="width:36%"/><col style="width:13%"/><col style="width:15%"/><col style="width:15%"/><col style="width:13%"/><col style="width:8%"/></colgroup><thead><tr><th>标题</th><th>创作类型</th><th>已发布平台</th><th>生成时间</th><th>提交时间</th><th>操作</th></tr></thead><tbody>
<tr data-title="口碑好的外卖袋定制厂家怎么选？采购筛选实用指南"><td class="article-title">口碑好的外卖袋定制厂家怎么选？采购筛选实用指南</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:44</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="外卖袋定制质量验收与成本管控：餐饮采购指南"><td class="article-title">外卖袋定制质量验收与成本管控：餐饮采购指南</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-review">审核中</span></td><td>2026-07-17 17:38:43</td><td>2026-07-17 18:02:18</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="2026年餐饮外卖袋定制：五类供应商能力对照"><td class="article-title">2026年餐饮外卖袋定制：五类供应商能力对照</td><td><span class="article-type-pill">排行·盘点类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:43</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="食品级外卖袋检测报告怎么看？采购核验要点"><td class="article-title">食品级外卖袋检测报告怎么看？采购核验要点</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:07</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="外卖袋一般用什么材质？无纺布、淋膜与保温结构解析"><td class="article-title">外卖袋一般用什么材质？无纺布、淋膜与保温结构解析</td><td><span class="article-type-pill">知识科普类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:07</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="食品级无纺布袋生产厂家怎么选：资质与品控清单"><td class="article-title">食品级无纺布袋生产厂家怎么选：资质与品控清单</td><td><span class="article-type-pill">推荐·解法类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:06</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="外卖袋定制一般多久交货？从打样到量产的排期指南"><td class="article-title">外卖袋定制一般多久交货？从打样到量产的排期指南</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:05</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="奶茶保温袋与普通打包袋区别：保温层工艺评测"><td class="article-title">奶茶保温袋与普通打包袋区别：保温层工艺评测</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:05</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="餐饮品牌定制外卖袋：LOGO印刷与防油工艺怎么选"><td class="article-title">餐饮品牌定制外卖袋：LOGO印刷与防油工艺怎么选</td><td><span class="article-type-pill">场景解决方案</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:37:32</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="食品级无纺布袋检测报告怎么读 采购方核验要点"><td class="article-title">食品级无纺布袋检测报告怎么读：采购方核验要点</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-done">知乎</span></td><td>2026-07-16 14:12:20</td><td>2026-07-16 15:08:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="2026年餐饮外卖袋定制选型：五家主流供应商工艺参数对照"><td class="article-title">2026年餐饮外卖袋定制选型：五家主流供应商工艺参数对照</td><td><span class="article-type-pill">排行·盘点类</span></td><td><span class="article-publish-done">头条号</span></td><td>2026-07-02 09:48:10</td><td>2026-07-02 10:24:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="食品级无纺布袋检测报告解读"><td class="article-title">食品级无纺布袋检测报告解读</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-done">知乎</span></td><td>2026-07-04 14:36:18</td><td>2026-07-04 15:08:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="外卖袋一般用什么材质"><td class="article-title">外卖袋一般用什么材质</td><td><span class="article-type-pill">知识科普类</span></td><td><span class="article-publish-done">客户产品官网</span></td><td>2026-07-08 09:10:32</td><td>2026-07-08 09:41:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="奶茶保温袋保温层工艺对照"><td class="article-title">奶茶保温袋保温层工艺对照</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-done">百家号</span></td><td>2026-07-12 11:20:14</td><td>2026-07-12 11:56:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="无纺布卷材克重公差实测"><td class="article-title">无纺布卷材克重公差实测</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-done">B2B联盟站群</span></td><td>2026-07-13 13:58:26</td><td>2026-07-13 14:30:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr></tbody></table><div class="article-empty" id="autoArticleEmpty">没有匹配当前关键词的自动化文章</div></div>
<div class="article-pagination"><span>共 941 条</span><select class="page-select"><option>10条/页</option><option>20条/页</option><option>50条/页</option></select><button class="page-num" disabled="">‹</button><button class="page-num on">1</button><button class="page-num">2</button><button class="page-num">3</button><button class="page-num">4</button><button class="page-num">5</button><button class="page-num">6</button><span class="page-ellipsis">…</span><button class="page-num">95</button><button class="page-num">›</button><span>前往</span><input class="ipt" style="width:54px;padding:5px 7px;text-align:center" value="1"/><span>页</span></div>
</div>
<div class="article-table-panel" data-article-panel="uploaded">
<div class="article-table-wrap"><table class="article-table" id="uploadedArticleTable"><colgroup><col style="width:36%"/><col style="width:13%"/><col style="width:15%"/><col style="width:15%"/><col style="width:13%"/><col style="width:8%"/></colgroup><thead><tr><th>标题</th><th>创作类型</th><th>已发布平台</th><th>生成时间</th><th>提交时间</th><th>操作</th></tr></thead><tbody>
<tr data-title="远见包装企业介绍2026"><td class="article-title">远见包装企业介绍 2026</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-done">客户产品官网</span></td><td>2026-07-14 09:22:10</td><td>2026-07-14 10:03:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="外卖袋生产工艺及质量标准说明"><td class="article-title">外卖袋生产工艺及质量标准说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-13 16:08:22</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="ISO9001质量管理体系资质解读"><td class="article-title">ISO9001 质量管理体系资质解读</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-12 11:30:48</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="奶茶保温袋合作案例与交付说明"><td class="article-title">奶茶保温袋合作案例与交付说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-11 10:18:03</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="食品级材料第三方检测说明"><td class="article-title">食品级材料第三方检测说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-done">百家号</span></td><td>2026-07-09 15:46:32</td><td>2026-07-09 16:20:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="无纺布袋常见采购问题FAQ"><td class="article-title">无纺布袋常见采购问题 FAQ</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-08 13:12:51</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
</tbody></table><div class="article-empty" id="uploadedArticleEmpty">没有匹配当前关键词的上传文章</div></div>
<div class="article-pagination"><span>共 <b id="uploadedTotal">6</b> 条</span><select class="page-select"><option>10条/页</option></select><button class="page-num" disabled="">‹</button><button class="page-num on">1</button><button class="page-num" disabled="">›</button></div>
</div>
</div>
<div class="modal-backdrop article-upload-modal" id="articleAddModal"><div class="modal"><div class="modal-head"><div class="modal-title">添加文章</div><button class="modal-close" id="articleAddClose" type="button">×</button></div><div class="modal-body"><div class="fg"><span class="lb">文章标题 <span class="req">*</span></span><input class="ipt" id="articleAddTitle" placeholder="请输入文章标题"/></div><div class="fg"><span class="lb">文章来源</span><select class="ipt" id="articleAddType"><option>人工录入</option><option>上传文档</option></select></div><div class="fg" style="margin-bottom:0"><span class="lb">正文内容</span><textarea class="ipt" id="articleAddContent" placeholder="可粘贴文章正文；原型演示不会真实上传至服务器" rows="6"></textarea></div></div><div class="modal-foot"><button class="btn o" id="articleAddCancel" type="button">取消</button><button class="btn" id="articleAddConfirm" type="button">保存文章</button></div></div></div>
</div>
<div class="page" id="pub">
<div class="media-library-tabs" id="mediaLibraryTabs"><button class="media-library-tab on" data-library="private" type="button">权威媒体库 <span class="tab-count">2k+</span></button><button class="media-library-tab" data-library="public" type="button">公共媒体库 <span class="tab-count">12.8k+</span></button><button class="media-library-tab" data-library="authority" type="button">私人媒体库 <span class="tab-count">5</span></button><button class="media-library-tab" data-library="b2b" type="button">B2B联盟 <span class="tab-count">4k+</span></button></div><div class="media-library-panel on" data-library-panel="private"><div class="media-library-search" data-media-search="private"><input class="ipt media-library-search-input" placeholder="搜索媒体名称" type="text"/><button class="btn media-library-search-query" type="button">查询</button><button class="btn o media-library-search-reset" type="button">重置</button></div>
<div class="card pub-filter-card">
<div class="pub-filter-head">
<div><div class="pub-filter-title">媒体资源筛选</div></div>
<div class="pub-filter-status"><span class="pub-filter-count" id="pubFilterCount">15 家媒体</span><button class="pub-reset" id="pubFilterReset">重置筛选</button></div>
</div>
<div class="pub-filter-body" id="pubFilterPanel">
<div class="pub-filter-row" data-key="region"><div class="pub-filter-label">地区</div><div class="pub-filter-options">
<button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="综合全国">综合全国</button><button class="pub-filter-option" data-value="北京">北京</button><button class="pub-filter-option" data-value="天津">天津</button><button class="pub-filter-option" data-value="上海">上海</button><button class="pub-filter-option" data-value="重庆">重庆</button><button class="pub-filter-option" data-value="河北">河北</button><button class="pub-filter-option" data-value="山西">山西</button><button class="pub-filter-option" data-value="辽宁">辽宁</button><button class="pub-filter-option" data-value="吉林">吉林</button><button class="pub-filter-option" data-value="黑龙江">黑龙江</button><button class="pub-filter-option" data-value="江苏">江苏</button><button class="pub-filter-option" data-value="浙江">浙江</button><button class="pub-filter-option" data-value="安徽">安徽</button><button class="pub-filter-option" data-value="福建">福建</button><button class="pub-filter-option" data-value="江西">江西</button><button class="pub-filter-option" data-value="山东">山东</button><button class="pub-filter-option" data-value="河南">河南</button><button class="pub-filter-option" data-value="湖北">湖北</button><button class="pub-filter-option" data-value="湖南">湖南</button><button class="pub-filter-option" data-value="广东">广东</button><button class="pub-filter-option" data-value="甘肃">甘肃</button><button class="pub-filter-option" data-value="四川">四川</button><button class="pub-filter-option" data-value="贵州">贵州</button><button class="pub-filter-option" data-value="海南">海南</button><button class="pub-filter-option" data-value="云南">云南</button><button class="pub-filter-option" data-value="青海">青海</button><button class="pub-filter-option" data-value="陕西">陕西</button><button class="pub-filter-option" data-value="新疆">新疆</button><button class="pub-filter-option" data-value="宁夏">宁夏</button><button class="pub-filter-option" data-value="内蒙古">内蒙古</button><button class="pub-filter-option" data-value="西藏">西藏</button><button class="pub-filter-option" data-value="广西">广西</button><button class="pub-filter-option" data-value="港澳台">港澳台</button>
</div></div>
<div class="pub-filter-row" data-key="platform"><div class="pub-filter-label">平台</div><div class="pub-filter-options">
<button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="百家号">百家号</button><button class="pub-filter-option" data-value="东方头条">东方头条</button><button class="pub-filter-option" data-value="搜狐号">搜狐号</button><button class="pub-filter-option" data-value="新浪号">新浪号</button><button class="pub-filter-option" data-value="网易号">网易号</button><button class="pub-filter-option" data-value="一点资讯">一点资讯</button><button class="pub-filter-option" data-value="UC头条">UC头条</button><button class="pub-filter-option" data-value="腾讯号">腾讯号</button><button class="pub-filter-option" data-value="凤凰号">凤凰号</button><button class="pub-filter-option" data-value="知乎号">知乎号</button><button class="pub-filter-option" data-value="豆瓣">豆瓣</button><button class="pub-filter-option" data-value="车家号">车家号</button><button class="pub-filter-option" data-value="东方财富号">东方财富号</button><button class="pub-filter-option" data-value="中金在线号">中金在线号</button><button class="pub-filter-option" data-value="微博">微博</button><button class="pub-filter-option" data-value="微信公众号">微信公众号</button><button class="pub-filter-option" data-value="太平洋汽车">太平洋汽车</button><button class="pub-filter-option" data-value="其他">其他</button>
</div></div>
<div class="pub-filter-row" data-key="industry"><div class="pub-filter-label">行业分类</div><div class="pub-filter-options">
<button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="文化">文化</button><button class="pub-filter-option" data-value="历史">历史</button><button class="pub-filter-option" data-value="三农">三农</button><button class="pub-filter-option" data-value="财经">财经</button><button class="pub-filter-option" data-value="科技">科技</button><button class="pub-filter-option" data-value="体育">体育</button><button class="pub-filter-option" data-value="汽车">汽车</button><button class="pub-filter-option" data-value="娱乐">娱乐</button><button class="pub-filter-option" data-value="时尚">时尚</button><button class="pub-filter-option" data-value="健康">健康</button><button class="pub-filter-option" data-value="教育">教育</button><button class="pub-filter-option" data-value="母婴">母婴</button><button class="pub-filter-option" data-value="美食">美食</button><button class="pub-filter-option" data-value="旅游">旅游</button><button class="pub-filter-option" data-value="公益">公益</button><button class="pub-filter-option" data-value="游戏">游戏</button><button class="pub-filter-option" data-value="动漫">动漫</button><button class="pub-filter-option" data-value="社会">社会</button><button class="pub-filter-option" data-value="房产">房产</button><button class="pub-filter-option" data-value="职场">职场</button><button class="pub-filter-option" data-value="情感">情感</button><button class="pub-filter-option" data-value="搞笑">搞笑</button><button class="pub-filter-option" data-value="新闻">新闻</button><button class="pub-filter-option" data-value="家居">家居</button><button class="pub-filter-option" data-value="生活">生活</button>
</div></div>

<div class="pub-filter-row" data-key="geo"><div class="pub-filter-label">可发GEO排名</div><div class="pub-filter-options"><button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="所有">所有</button><button class="pub-filter-option" data-value="豆包">豆包</button><button class="pub-filter-option" data-value="通义千问">通义千问</button><button class="pub-filter-option" data-value="腾讯元宝">腾讯元宝</button><button class="pub-filter-option" data-value="文心一言">文心一言</button><button class="pub-filter-option" data-value="Kimi">Kimi</button><button class="pub-filter-option" data-value="其他">其他</button><button class="pub-filter-option" data-value="DeepSeek">DeepSeek</button></div></div>







<div class="pub-filter-row" data-key="timeliness"><div class="pub-filter-label">时效</div><div class="pub-filter-options"><button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="一个月">一个月</button><button class="pub-filter-option" data-value="三个月">三个月</button><button class="pub-filter-option" data-value="六个月">六个月</button></div></div>
<div class="pub-filter-row" data-key="price"><div class="pub-filter-label">价格分类</div><div class="pub-filter-options"><button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="0~50">0~50</button><button class="pub-filter-option" data-value="50~200">50~200</button><button class="pub-filter-option" data-value="200~500">200~500</button><button class="pub-filter-option" data-value="500~1000">500~1000</button><button class="pub-filter-option" data-value="1000~2000">1000~2000</button><button class="pub-filter-option" data-value="2000~5000">2000~5000</button><button class="pub-filter-option" data-value="5000以上">5000以上</button></div></div>
<div class="pub-filter-row" data-key="sort"><div class="pub-filter-label">排序</div><div class="pub-filter-options"><button class="pub-filter-option on" data-value="不限">不限</button><button class="pub-filter-option" data-value="价格升序">价格升序</button><button class="pub-filter-option" data-value="价格降序">价格降序</button><button class="pub-filter-option" data-value="AI收录率升序">AI收录率升序</button><button class="pub-filter-option" data-value="AI收录率降序">AI收录率降序</button><button class="pub-filter-option" data-value="出稿率升序">出稿率升序</button><button class="pub-filter-option" data-value="出稿率降序">出稿率降序</button><button class="pub-filter-option" data-value="出稿时间升序">出稿时间升序</button><button class="pub-filter-option" data-value="出稿时间降序">出稿时间降序</button><button class="pub-filter-option" data-value="活跃度升序">活跃度升序</button><button class="pub-filter-option" data-value="活跃度降序">活跃度降序</button></div></div>
</div>
</div>
<div class="card pub-resource-card">
<div class="pub-resource-head"><div><div class="ct" style="margin:0">私人媒体资源列表</div></div><div class="pub-resource-meta">匹配结果 <b id="pubVisibleCount">15</b> 条</div></div>
<div class="pub-resource-table-wrap">
<table class="pub-resource-table private-media-table" id="pubMediaTable">

<colgroup><col style="width:12%"/><col style="width:20%"/><col style="width:16%"/><col style="width:14%"/><col style="width:10%"/><col style="width:15%"/><col style="width:13%"/></colgroup><thead><tr><th>行业分类</th><th>媒体名称</th><th>平台</th><th>账号认证</th><th>价格</th><th>地区</th><th>操作</th></tr></thead>
<tbody>
<tr data-active="96" data-ai="88" data-auth="未认证" data-days="1" data-fans="5001-1万" data-geo="豆包,DeepSeek,腾讯元宝" data-industry="财经" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="94" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="自有层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">财经</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">云企观察</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="93" data-ai="84" data-auth="未认证" data-days="1" data-fans="5001-1万" data-geo="豆包,文心一言,Kimi" data-industry="财经" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="91" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="专业层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">财经</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">中经观察</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="92" data-ai="90" data-auth="未认证" data-days="2" data-fans="5001-1万" data-geo="DeepSeek,通义千问,豆包" data-industry="财经" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="89" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="专业层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">财经</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">经观商业</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="86" data-ai="80" data-auth="未认证" data-days="2" data-fans="1001-5000" data-geo="豆包,Kimi" data-industry="生活" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="88" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="基础层" data-timeliness="三个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">生活</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">生活新览</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="97" data-ai="93" data-auth="未认证" data-days="1" data-fans="5001-1万" data-geo="DeepSeek,豆包,腾讯元宝" data-industry="科技" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="92" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="专业层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">科技</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">快科技网</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="88" data-ai="76" data-auth="未认证" data-days="2" data-fans="5001-1万" data-geo="豆包,文心一言" data-industry="生活" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="90" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="基础层" data-timeliness="三个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">生活</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">消费壹线</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="95" data-ai="91" data-auth="未认证" data-days="1" data-fans="5001-1万" data-geo="豆包,DeepSeek,通义千问" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="95" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="专业层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">中讯观点</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="94" data-ai="89" data-auth="未认证" data-days="1" data-fans="5001-1万" data-geo="DeepSeek,Kimi,腾讯元宝" data-industry="科技" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="93" data-platform="微信公众号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="专业层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">科技</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">科创壹线</span><span class="media-entry">（入口）</span></div></td><td class="platform">微信公众号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="90" data-ai="82" data-auth="未认证" data-days="2" data-fans="10万-100万" data-geo="豆包,DeepSeek" data-industry="财经" data-matrix="自媒体矩阵号" data-official="非官方自媒体" data-output="87" data-platform="微博" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="基础层" data-timeliness="一个月" data-type="动态/笔记" data-weekend="周末在线"><td class="industry">财经</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">中经商业</span><span class="media-entry">（入口）</span></div></td><td class="platform">微博</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="93" data-ai="92" data-auth="未认证" data-days="1" data-fans="1万-5万" data-geo="文心一言,豆包" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="91" data-platform="百家号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="基础层" data-timeliness="一个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">云观新闻</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="89" data-ai="87" data-auth="未认证" data-days="2" data-fans="1万-5万" data-geo="文心一言,DeepSeek" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="90" data-platform="百家号" data-reads="0-1000" data-region="湖北" data-signed="可带" data-tier="权威层" data-timeliness="三个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">十堰晚报</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">湖北</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="98" data-ai="95" data-auth="未认证" data-days="1" data-fans="1万-5万" data-geo="文心一言,豆包,DeepSeek" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="96" data-platform="百家号" data-reads="5001-1万" data-region="综合全国" data-signed="可带" data-tier="权威层" data-timeliness="一个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">潇湘晨报网</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="97" data-ai="94" data-auth="未认证" data-days="1" data-fans="100万-500万" data-geo="文心一言,Kimi" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="94" data-platform="百家号" data-reads="0-1000" data-region="综合全国" data-signed="可带" data-tier="权威层" data-timeliness="六个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">大皖新闻</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">综合全国</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="91" data-ai="86" data-auth="未认证" data-days="2" data-fans="1万-5万" data-geo="文心一言,豆包" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="92" data-platform="百家号" data-reads="0-1000" data-region="山东" data-signed="可带" data-tier="权威层" data-timeliness="三个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">淄博日报</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">山东</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
<tr data-active="95" data-ai="91" data-auth="未认证" data-days="1" data-fans="10万-100万" data-geo="文心一言,DeepSeek,豆包" data-industry="新闻" data-matrix="自媒体矩阵号" data-official="官方自媒体" data-output="95" data-platform="百家号" data-reads="5001-1万" data-region="山东" data-signed="可带" data-tier="权威层" data-timeliness="一个月" data-type="可发微头条" data-weekend="周末在线"><td class="industry">新闻</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">鲁中晨报</span><span class="media-entry">（入口）</span></div></td><td class="platform">百家号</td><td class="auth">未认证</td><td class="price"><span class="price-num pub-price"></span><span class="price-unit">元</span></td><td class="region">山东</td><td class="operation"><button class="pub-submit">投稿</button></td></tr>
</tbody>
</table>
<div class="pub-empty" id="pubEmpty">暂无符合当前筛选条件的媒体资源，请调整筛选项</div>
</div>
<div class="pub-resource-foot"><span>已展示 <b id="pubFootCount">15</b> 条</span></div>
</div>
</div>
<div class="media-library-panel" data-library-panel="public"><div class="media-library-search" data-media-search="public"><input class="ipt media-library-search-input" placeholder="搜索媒体名称" type="text"/><button class="btn media-library-search-query" type="button">查询</button><button class="btn o media-library-search-reset" type="button">重置</button></div>
<div class="library-banner"><div><div class="library-banner-title">公共媒体库</div><div class="library-banner-sub">面向公开内容平台与主流内容社区，适合规模化覆盖长尾搜索问题和用户口碑场景。</div></div><div class="library-banner-stat"><span class="library-stat">资源池 12,800+</span><span class="library-stat">平均收录 5.6 天</span><span class="library-stat">支持批量投稿</span></div></div>
<div class="card pub-resource-card"><div class="pub-resource-head"><div><div class="ct" style="margin:0">公共媒体资源</div><div class="cs" style="margin:2px 0 0">平台开放度高，适合知识科普、问答与场景型内容的广度覆盖</div></div><div class="pub-resource-meta">推荐资源 <b>8</b> 条</div></div><div class="pub-resource-table-wrap"><table class="pub-resource-table library-alt-table"><colgroup><col style="width:10%"/><col style="width:22%"/><col style="width:14%"/><col style="width:14%"/><col style="width:10%"/><col style="width:13%"/><col style="width:10%"/><col style="width:7%"/></colgroup><thead><tr><th>行业</th><th>媒体名称</th><th>媒体属性</th><th>平台</th><th>账号认证</th><th>地区</th><th>价格</th><th>操作</th></tr></thead><tbody>
<tr><td>综合</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">知乎机构内容池</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>知乎</td><td>机构认证</td><td>综合全国</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>综合</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">头条内容合作池</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>头条号</td><td>机构认证</td><td>综合全国</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>综合</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">百家号行业内容池</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>百家号</td><td>已认证</td><td>综合全国</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>财经</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">财经问答社区</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>搜狐号</td><td>黄V认证</td><td>北京</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>科技</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">科技开放内容号</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>网易号</td><td>已认证</td><td>上海</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>生活</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">消费生活内容池</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>小红书</td><td>机构认证</td><td>综合全国</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>制造</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">制造业知识社区</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>微信公众号</td><td>已认证</td><td>广东</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>综合</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">行业观察公共号</span></div></td><td><span class="library-type-badge public">公共媒体</span></td><td>微博</td><td>蓝V认证</td><td>综合全国</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
</tbody></table></div></div>
</div>
<div class="media-library-panel" data-library-panel="authority">
<div class="private-media-head">
  <div><div class="private-media-title">私人媒体库</div><div class="private-media-sub">集中管理企业自有媒体账号授权。授权完成后，可直接从「新生文库」选择内容并发布到对应账号。</div></div>
  <button class="btn private-download-auth" id="privateDownloadAuth" type="button">↓ 下载授权软件</button>
</div>
<div class="private-platform-grid" id="privatePlatformGrid">
  <button class="private-platform-card authorized" data-private-platform="头条号" type="button"><span class="private-platform-mark mark-red">头</span><b>头条号</b><small>已授权 1 个账号</small><i></i></button>
  <button class="private-platform-card authorized" data-private-platform="搜狐号" type="button"><span class="private-platform-mark mark-amber">搜</span><b>搜狐号</b><small>已授权 1 个账号</small><i></i></button>
  <button class="private-platform-card authorized" data-private-platform="百家号" type="button"><span class="private-platform-mark mark-blue">百</span><b>百家号</b><small>可继续添加授权</small><i></i></button>
  <button class="private-platform-card authorized" data-private-platform="网易号" type="button"><span class="private-platform-mark mark-red">网</span><b>网易号</b><small>已授权 1 个账号</small><i></i></button>
  <button class="private-platform-card" data-private-platform="小红书" type="button"><span class="private-platform-mark mark-red">红</span><b>小红书</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card" data-private-platform="微博" type="button"><span class="private-platform-mark mark-orange">微</span><b>微博</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card" data-private-platform="知乎" type="button"><span class="private-platform-mark mark-blue">知</span><b>知乎</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card" data-private-platform="微信公众号" type="button"><span class="private-platform-mark mark-green">微</span><b>公众号</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card" data-private-platform="抖音" type="button"><span class="private-platform-mark mark-dark">抖</span><b>抖音</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card" data-private-platform="东方财富号" type="button"><span class="private-platform-mark mark-red">财</span><b>东方财富号</b><small>暂未授权</small><i></i></button>
  <button class="private-platform-card add" data-private-platform="" type="button"><span class="private-platform-mark mark-soft">＋</span><b>添加授权</b><small>接入更多企业媒体账号</small><i></i></button>
</div>
<div class="card private-account-card">
  <div class="private-account-toolbar">
    <div class="private-account-search"><input class="ipt" id="privateAccountKeyword" placeholder="请输入关键词名称"/></div>
    <select class="ipt" id="privateAccountPlatform"><option value="">全部平台</option><option>网易号</option><option>头条号</option><option>搜狐号</option><option>百家号</option><option>知乎</option><option>微信公众号</option></select>
    <select class="ipt" id="privateAccountStatus"><option value="">全部状态</option><option value="已授权">已授权</option><option value="未授权">未授权</option></select>
    <button class="btn" id="privateAccountQuery" type="button">查询</button>
    <button class="btn o" id="privateAccountReset" type="button">重置</button>
  </div>
  <div class="table-scroll"><table class="private-account-table" id="privateAccountTable"><thead><tr><th>序号</th><th>授权账号</th><th>授权平台</th><th>状态</th><th>操作时间</th><th>操作</th></tr></thead><tbody>
    <tr data-platform="网易号" data-status="已授权"><td>1</td><td><span class="media-name">远见包装官方号</span></td><td>网易号</td><td><span class="pill g">已授权</span></td><td>2026-06-30 14:08:02</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="头条号" data-status="已授权"><td>2</td><td><span class="media-name">远见包装产业观察</span></td><td>头条号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:15:20</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="搜狐号" data-status="已授权"><td>3</td><td><span class="media-name">远见包装新材料</span></td><td>搜狐号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:30:12</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="百家号" data-status="已授权"><td>4</td><td><span class="media-name">湖北远见包装</span></td><td>百家号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:15:39</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="知乎" data-status="未授权"><td>5</td><td><span class="media-name">远见包装知识号</span></td><td>知乎</td><td><span class="pill y">未授权</span></td><td>—</td><td><div class="private-account-actions"><button class="article-link private-account-auth" type="button">去授权</button></div></td></tr>
  </tbody></table></div>
  <div class="private-account-empty" id="privateAccountEmpty">暂无符合当前筛选条件的授权账号</div>
  <div class="private-account-pagination"><span>共 <b id="privateAccountCount">5</b> 条</span><select class="page-select"><option>10条/页</option></select><button class="page-num" disabled type="button">‹</button><button class="page-num on" type="button">1</button><button class="page-num" disabled type="button">›</button><span>前往</span><input class="ipt" value="1" style="width:52px;padding:5px 7px;text-align:center"/><span>页</span></div>
</div>
</div>
<div class="media-library-panel" data-library-panel="b2b"><div class="media-library-search" data-media-search="b2b"><input class="ipt media-library-search-input" placeholder="搜索联盟名称" type="text"/><button class="btn media-library-search-query" type="button">查询</button><button class="btn o media-library-search-reset" type="button">重置</button></div>
<div class="library-banner"><div><div class="library-banner-title">B2B 联盟</div><div class="library-banner-sub">面向产业链、供应链和垂直采购场景的联盟站群，适合厂家、供应商、采购参数和解决方案类内容。</div></div><div class="library-banner-stat"><span class="library-stat">联盟站 4,000+</span><span class="library-stat">垂直行业 180+</span><span class="library-stat">批量分发</span></div></div>
<div class="card pub-resource-card"><div class="pub-resource-head"><div><div class="ct" style="margin:0">B2B 联盟资源</div><div class="cs" style="margin:2px 0 0">按产业链主题进行站群分发，增强细分行业与采购意图场景的内容覆盖</div></div><div class="pub-resource-meta">推荐联盟 <b>6</b> 个</div></div><div class="pub-resource-table-wrap"><table class="pub-resource-table library-alt-table"><colgroup><col style="width:14%"/><col style="width:27%"/><col style="width:16%"/><col style="width:15%"/><col style="width:12%"/><col style="width:9%"/><col style="width:7%"/></colgroup><thead><tr><th>行业</th><th>联盟名称</th><th>媒体属性</th><th>覆盖站点</th><th>预计收录</th><th>价格</th><th>操作</th></tr></thead><tbody>
<tr><td>包装制造</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">包装产业 B2B 联盟</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>86 个行业站</td><td>3–7 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>餐饮供应链</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">餐饮供应链内容联盟</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>64 个行业站</td><td>4–8 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>食品工业</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">食品工业采购联盟</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>72 个行业站</td><td>3–6 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>快消品</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">快消品供应商联盟</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>58 个行业站</td><td>5–9 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>印刷包装</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">印刷包装产业站群</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>93 个行业站</td><td>3–7 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
<tr><td>综合制造</td><td><div class="media-cell"><span class="media-rec">荐</span><span class="media-name">中国制造供应链联盟</span></div></td><td><span class="library-type-badge b2b">B2B联盟</span></td><td>120 个行业站</td><td>4–10 天</td><td><span class="price-num alt-price"></span><span class="price-unit">元</span></td><td><button class="pub-submit">投稿</button></td></tr>
</tbody></table></div></div>
</div>
</div>

<div class="page" id="sitepub">
  <!-- Top Banner Card -->
  <div class="card sitepub-banner-card">
    <div class="sitepub-top-row">
      <div class="sitepub-header-info">
        <div class="sitepub-title-row">
          <h2 class="sitepub-title">网站发布</h2>
          <button class="guide-link-btn" id="sitepubGuideBtn" type="button">
            <span>📄</span>
            <span>权威媒体以及B2B投稿推荐指南</span>
          </button>
        </div>
        <p class="sitepub-desc">
          私人媒体库帮助企业做品牌基础建设，公共媒体库做为第三方帮助企业实现多场景搜索展现，权威媒体库提升企业核心关键词权重和影响力。
        </p>
      </div>
      <div class="sitepub-top-actions">
        <button class="btn p download-agent-btn" id="downloadAuthSoftwareBtn" type="button">
          <span style="font-size:14px;margin-right:6px">📥</span>
          <span>下载授权软件</span>
        </button>
      </div>
    </div>

    <!-- Media Library Secondary Tabs -->
    <div class="sitepub-tabs" id="sitepubMediaTabs">
      <button class="sitepub-tab on" data-sitepub-tab="private" type="button">私人媒体库</button>
      <button class="sitepub-tab" data-sitepub-tab="public" type="button">公共媒体库</button>
      <button class="sitepub-tab" data-sitepub-tab="authority" type="button">权威媒体库</button>
      <button class="sitepub-tab" data-sitepub-tab="b2b" type="button">B2B联盟</button>
      <button class="sitepub-tab" data-sitepub-tab="multimodal" type="button">多模态信源</button>
    </div>
  </div>

  <!-- Tab 1: 私人媒体库 Panel -->
  <div class="sitepub-panel on" id="sitepubPanelPrivate">
    <!-- Platform Cards Grid (11 Platforms) -->
    <div class="sitepub-matrix-grid" id="sitepubMatrixGrid">
      <!-- 1. 头条号 -->
      <div class="sitepub-platform-card" data-platform="头条号">
        <div class="platform-card-header">
          <span class="platform-logo-text toutiao">头条号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-avatar-stack">
            <span class="platform-avatar toutiao-av" title="风趣柳叶F20olBm">👤</span>
          </div>
          <div class="platform-account-count">1 个已授权账号</div>
        </div>
      </div>

      <!-- 2. 搜狐号 -->
      <div class="sitepub-platform-card" data-platform="搜狐号">
        <div class="platform-card-header">
          <span class="platform-logo-text sohu">搜狐号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge sohu-bg">狐</span>
            <span class="sync-mini-badge toutiao-bg">条</span>
            <span class="sync-mini-badge wx-bg">微</span>
            <span class="sync-mini-badge ks-bg">快</span>
            <span class="sync-mini-badge dy-bg">抖</span>
          </div>
          <div class="platform-account-count">1 个已授权账号</div>
        </div>
      </div>

      <!-- 3. 百家号 -->
      <div class="sitepub-platform-card" data-platform="百家号">
        <div class="platform-card-header">
          <span class="platform-logo-text baijia">百家号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge bd-bg">百</span>
            <span class="sync-mini-badge zhihu-bg">知</span>
            <span class="sync-mini-badge wx-bg">微</span>
            <span class="sync-mini-badge dy-bg">抖</span>
          </div>
          <div class="platform-account-count">1 个待授权账号</div>
        </div>
      </div>

      <!-- 4. 网易号 -->
      <div class="sitepub-platform-card" data-platform="网易号">
        <div class="platform-card-header">
          <span class="platform-logo-text netease">网易号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge netease-bg">易</span>
            <span class="sync-mini-badge wx-bg">微</span>
            <span class="sync-mini-badge ks-bg">快</span>
            <span class="sync-mini-badge toutiao-bg">条</span>
          </div>
          <div class="platform-account-count">1 个已授权账号</div>
        </div>
      </div>

      <!-- 5. 企鹅号 -->
      <div class="sitepub-platform-card" data-platform="企鹅号">
        <div class="platform-card-header">
          <span class="platform-logo-text tencent">企鹅号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge tx-bg">企</span>
            <span class="sync-mini-badge wx-bg">微</span>
          </div>
          <div class="platform-account-count">支持微信生态联动</div>
        </div>
      </div>

      <!-- 6. 淘江湖 -->
      <div class="sitepub-platform-card" data-platform="淘江湖">
        <div class="platform-card-header">
          <span class="platform-logo-text tao">淘江湖</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge tb-bg">淘</span>
          </div>
          <div class="platform-account-count">电商场景问答信源</div>
        </div>
      </div>

      <!-- 7. 雪球 -->
      <div class="sitepub-platform-card" data-platform="雪球">
        <div class="platform-card-header">
          <span class="platform-logo-text xueqiu">雪球</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge xq-bg">雪</span>
          </div>
          <div class="platform-account-count">财经商业垂直信源</div>
        </div>
      </div>

      <!-- 8. 东方财富网 -->
      <div class="sitepub-platform-card" data-platform="东方财富网">
        <div class="platform-card-header">
          <span class="platform-logo-text eastmoney">东方财富网</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge em-bg">东</span>
          </div>
          <div class="platform-account-count">证券资讯核心权重</div>
        </div>
      </div>

      <!-- 9. 抖音 -->
      <div class="sitepub-platform-card" data-platform="抖音">
        <div class="platform-card-header">
          <span class="platform-logo-text douyin">抖音</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge dy-bg">抖</span>
            <span class="sync-mini-badge ks-bg">快</span>
            <span class="sync-mini-badge wx-bg">微</span>
          </div>
          <div class="platform-account-count">短视频多模态信源</div>
        </div>
      </div>

      <!-- 10. 知乎 -->
      <div class="sitepub-platform-card" data-platform="知乎">
        <div class="platform-card-header">
          <span class="platform-logo-text zhihu">知乎</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge zhihu-bg">知</span>
            <span class="sync-mini-badge bd-bg">百</span>
            <span class="sync-mini-badge toutiao-bg">条</span>
          </div>
          <div class="platform-account-count">高权威问答知识源</div>
        </div>
      </div>

      <!-- 11. 公众号 (带添加授权按钮) -->
      <div class="sitepub-platform-card active-card" data-platform="公众号">
        <div class="platform-card-header">
          <span class="platform-logo-text wechat">公众号</span>
        </div>
        <div class="platform-card-body">
          <div class="platform-badge-cluster">
            <span class="sync-mini-badge wx-bg">微</span>
            <span class="sync-mini-badge tx-bg">企</span>
            <span class="sync-mini-badge toutiao-bg">条</span>
          </div>
          <button class="add-auth-card-btn" id="addAuthFromCardBtn" type="button">
            <span>+</span> 添加授权
          </button>
        </div>
      </div>
    </div>

    <!-- Filter & Query Toolbar Card -->
    <div class="card sitepub-filter-card">
      <div class="sitepub-toolbar-row">
        <div class="sitepub-search-group">
          <div class="kw-search-wrap" style="flex:1;max-width:300px">
            <span class="kw-search-icon">⌕</span>
            <input class="ipt" id="sitepubSearchInput" placeholder="请输入关键词名称 / 账号名称" />
          </div>
          <select class="ipt sitepub-select" id="sitepubPlatformSelect">
            <option value="">请选择平台</option>
            <option value="网易号">网易号</option>
            <option value="公众号">公众号</option>
            <option value="头条号">头条号</option>
            <option value="搜狐号">搜狐号</option>
            <option value="百家号">百家号</option>
            <option value="抖音">抖音</option>
            <option value="知乎">知乎</option>
            <option value="雪球">雪球</option>
            <option value="东方财富网">东方财富网</option>
          </select>
          <select class="ipt sitepub-select" id="sitepubStatusSelect">
            <option value="">请选择状态</option>
            <option value="已授权">已授权</option>
            <option value="未授权">未授权</option>
          </select>
          <button class="btn p" id="sitepubQueryBtn" type="button">查询</button>
          <button class="btn o" id="sitepubResetBtn" type="button">重置</button>
        </div>
        <div class="sitepub-action-group">
          <button class="btn" id="sitepubOpenAddModalBtn" type="button" style="background:var(--primary);color:#fff;border-radius:9px;font-weight:650">
            <span>+</span> 新增账号授权
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div class="sitepub-table-wrap">
        <table class="sitepub-table" id="sitepubAccountsTable">
          <thead>
            <tr>
              <th style="width:70px;text-align:center">序号</th>
              <th style="width:220px">授权账号</th>
              <th style="width:160px">授权平台</th>
              <th style="width:120px;text-align:center">状态</th>
              <th style="width:220px">操作时间</th>
              <th style="width:180px;text-align:right">操作</th>
            </tr>
          </thead>
          <tbody id="sitepubTableBody">
            <!-- Rendered by JS -->
          </tbody>
        </table>
      </div>

      <!-- Pagination Footer -->
      <div class="sitepub-pagination">
        <div class="sitepub-pagination-total" id="sitepubPageTotal">共 5 条</div>
        <select class="ipt" id="sitepubPageSizeSelect" style="width:105px;height:32px;font-size:12px">
          <option value="10">10条/页</option>
          <option value="20">20条/页</option>
          <option value="50">50条/页</option>
        </select>
        <div class="sitepub-pagination-pager">
          <button class="page-num" id="sitepubPrevBtn" type="button">‹</button>
          <button class="page-num on" type="button">1</button>
          <button class="page-num" id="sitepubNextBtn" type="button">›</button>
        </div>
        <div class="sitepub-pagination-jump">
          <span>前往</span>
          <input class="ipt" id="sitepubJumpInput" type="number" min="1" max="1" value="1" style="width:46px;height:32px;text-align:center;padding:2px" />
          <span>页</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Tab 2: 公共媒体库 Panel -->
  <div class="sitepub-panel" id="sitepubPanelPublic">
    <div class="card" style="padding:20px;border-radius:14px;background:#ffffff;border:1px solid var(--line);box-shadow:var(--shadow-sm)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <h3 style="font-size:16px;font-weight:750;color:var(--text);margin:0 0 4px">公共第三方媒体池</h3>
          <p style="font-size:12.5px;color:var(--muted);margin:0">作为第三方高权重信源，助力品牌在主流 AI 搜索及问答引擎中实现多场景提及与收录</p>
        </div>
        <span class="pill b">收录率 96.8%</span>
      </div>
      <div class="sitepub-table-wrap">
        <table class="sitepub-table">
          <thead>
            <tr>
              <th style="width:60px;text-align:center">#</th>
              <th>公共媒体平台</th>
              <th>媒体属性</th>
              <th>搜索引擎权重</th>
              <th>AI 引用倾向</th>
              <th>当前状态</th>
              <th style="text-align:right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="text-align:center">1</td><td><b>新浪新闻开放平台</b></td><td>门户资讯</td><td><span class="pill g">PR 8 / 权重高</span></td><td>品牌口碑背书</td><td><span class="status-pill authed">实时可用</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已加入本周公共媒体投放排期')">一键排期</button></td></tr>
            <tr><td style="text-align:center">2</td><td><b>搜狐公众平台 (焦点)</b></td><td>资讯聚合</td><td><span class="pill g">PR 7 / 权重高</span></td><td>深度问答推荐</td><td><span class="status-pill authed">实时可用</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已加入本周公共媒体投放排期')">一键排期</button></td></tr>
            <tr><td style="text-align:center">3</td><td><b>网易新闻 (态度号)</b></td><td>行业专栏</td><td><span class="pill g">PR 8 / 权重高</span></td><td>客观评测引用</td><td><span class="status-pill authed">实时可用</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已加入本周公共媒体投放排期')">一键排期</button></td></tr>
            <tr><td style="text-align:center">4</td><td><b>凤凰大风号</b></td><td>政商综合</td><td><span class="pill g">PR 7 / 权重高</span></td><td>权威观点引述</td><td><span class="status-pill authed">实时可用</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已加入本周公共媒体投放排期')">一键排期</button></td></tr>
            <tr><td style="text-align:center">5</td><td><b>知乎专业专栏矩阵</b></td><td>知识问答</td><td><span class="pill b">PR 9 / 权重极高</span></td><td>决策期导购关键因子</td><td><span class="status-pill authed">实时可用</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已加入本周公共媒体投放排期')">一键排期</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Tab 3: 权威媒体库 Panel -->
  <div class="sitepub-panel" id="sitepubPanelAuthority">
    <div class="card" style="padding:20px;border-radius:14px;background:#ffffff;border:1px solid var(--line);box-shadow:var(--shadow-sm)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <h3 style="font-size:16px;font-weight:750;color:var(--text);margin:0 0 4px">权威主流媒体矩阵</h3>
          <p style="font-size:12.5px;color:var(--muted);margin:0">国家级及省部级核心权威媒体信源，直接提升企业在通用 AI 大模型事实层知识库中的权重</p>
        </div>
        <span class="pill r">权重核心赋能</span>
      </div>
      <div class="sitepub-table-wrap">
        <table class="sitepub-table">
          <thead>
            <tr>
              <th style="width:60px;text-align:center">#</th>
              <th>权威媒体渠道</th>
              <th>发稿属性</th>
              <th>信源认证级别</th>
              <th>GEO 加权倍数</th>
              <th>状态</th>
              <th style="text-align:right">投稿通道</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="text-align:center">1</td><td><b>人民网 (地方/企业频道)</b></td><td>中央级党媒</td><td><span class="pill r">最高权威信源</span></td><td>3.5x 权重增益</td><td><span class="status-pill authed">准入通道通畅</span></td><td style="text-align:right"><button class="btn p" style="padding:3px 10px;font-size:12px" onclick="showToast('已申请权威媒体专属采编预约')">预约发稿</button></td></tr>
            <tr><td style="text-align:center">2</td><td><b>中国网 (中国品牌频道)</b></td><td>国家重点新闻</td><td><span class="pill r">权威一类信源</span></td><td>3.2x 权重增益</td><td><span class="status-pill authed">准入通道通畅</span></td><td style="text-align:right"><button class="btn p" style="padding:3px 10px;font-size:12px" onclick="showToast('已申请权威媒体专属采编预约')">预约发稿</button></td></tr>
            <tr><td style="text-align:center">3</td><td><b>新华网 (创客与专精特新)</b></td><td>国家通讯社</td><td><span class="pill r">最高权威信源</span></td><td>3.8x 权重增益</td><td><span class="status-pill authed">准入通道通畅</span></td><td style="text-align:right"><button class="btn p" style="padding:3px 10px;font-size:12px" onclick="showToast('已申请权威媒体专属采编预约')">预约发稿</button></td></tr>
            <tr><td style="text-align:center">4</td><td><b>光明网 (科技经济)</b></td><td>中央主要媒体</td><td><span class="pill r">权威一类信源</span></td><td>3.0x 权重增益</td><td><span class="status-pill authed">准入通道通畅</span></td><td style="text-align:right"><button class="btn p" style="padding:3px 10px;font-size:12px" onclick="showToast('已申请权威媒体专属采编预约')">预约发稿</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Tab 4: B2B联盟 Panel -->
  <div class="sitepub-panel" id="sitepubPanelB2B">
    <div class="card" style="padding:20px;border-radius:14px;background:#ffffff;border:1px solid var(--line);box-shadow:var(--shadow-sm)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <h3 style="font-size:16px;font-weight:750;color:var(--text);margin:0 0 4px">B2B 垂直电商与工业采购联盟</h3>
          <p style="font-size:12.5px;color:var(--muted);margin:0">深度覆盖工业品、定制包装、原材料等 B2B 决策搜索场景，长尾询价关键词专属收录源</p>
        </div>
        <span class="pill y">B2B 精准询盘</span>
      </div>
      <div class="sitepub-table-wrap">
        <table class="sitepub-table">
          <thead>
            <tr>
              <th style="width:60px;text-align:center">#</th>
              <th>B2B 联盟平台</th>
              <th>行业类型</th>
              <th>商机匹配度</th>
              <th>黄页索引</th>
              <th>状态</th>
              <th style="text-align:right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="text-align:center">1</td><td><b>慧聪网工业品商铺</b></td><td>工业包装 / 机械</td><td><span class="pill y">98% 匹配</span></td><td>已收录</td><td><span class="status-pill authed">已同步</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('正在同步更新商机产品目录')">立即同步</button></td></tr>
            <tr><td style="text-align:center">2</td><td><b>中国供应商 (高信誉企业库)</b></td><td>制造业综合</td><td><span class="pill y">95% 匹配</span></td><td>已收录</td><td><span class="status-pill authed">已同步</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('正在同步更新商机产品目录')">立即同步</button></td></tr>
            <tr><td style="text-align:center">3</td><td><b>马可波罗采购黄页</b></td><td>定制五金塑料</td><td><span class="pill y">92% 匹配</span></td><td>已收录</td><td><span class="status-pill authed">已同步</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('正在同步更新商机产品目录')">立即同步</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Tab 5: 多模态信源 Panel -->
  <div class="sitepub-panel" id="sitepubPanelMultimodal">
    <div class="card" style="padding:20px;border-radius:14px;background:#ffffff;border:1px solid var(--line);box-shadow:var(--shadow-sm)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <h3 style="font-size:16px;font-weight:750;color:var(--text);margin:0 0 4px">多模态音视频与富媒体信源</h3>
          <p style="font-size:12.5px;color:var(--muted);margin:0">赋能大模型多模态检索（视频切片、图文知识卡、音频播客摘要），全面占领多模态 AI 结果卡片</p>
        </div>
        <span class="pill g">多模态生成就绪</span>
      </div>
      <div class="sitepub-table-wrap">
        <table class="sitepub-table">
          <thead>
            <tr>
              <th style="width:60px;text-align:center">#</th>
              <th>平台名称</th>
              <th>富媒体形态</th>
              <th>AI 视频解构能力</th>
              <th>知识卡引用率</th>
              <th>状态</th>
              <th style="text-align:right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="text-align:center">1</td><td><b>微信视频号 (企业认证)</b></td><td>短视频 / 动态</td><td><span class="pill g">全量 OCR+ASR 索引</span></td><td>88.5%</td><td><span class="status-pill authed">已绑定</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已拉取最新视频数据')">刷新信源</button></td></tr>
            <tr><td style="text-align:center">2</td><td><b>抖音企业号矩阵</b></td><td>短视频 / 问答切片</td><td><span class="pill g">豆包优先直采</span></td><td>92.4%</td><td><span class="status-pill authed">已绑定</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已拉取最新视频数据')">刷新信源</button></td></tr>
            <tr><td style="text-align:center">3</td><td><b>小红书品牌专业号</b></td><td>图文笔记 / 评测</td><td><span class="pill b">决策搜索高发</span></td><td>94.1%</td><td><span class="status-pill authed">已绑定</span></td><td style="text-align:right"><button class="btn o" style="padding:3px 10px;font-size:12px" onclick="showToast('已拉取最新图文笔记')">刷新信源</button></td></tr>
            <tr><td style="text-align:center">4</td><td><b>哔哩哔哩知识库</b></td><td>长视频 / 深度讲解</td><td><span class="pill b">深度知识首选</span></td><td>85.7%</td><td><span class="status-pill unauthed">未授权</span></td><td style="text-align:right"><button class="btn p" style="padding:3px 10px;font-size:12px" onclick="showToast('请使用 B站 客户端扫码授权')">去授权</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- ================= 网站发布相关弹窗 ================= -->
<!-- 1. 新增授权弹窗 -->
<div class="modal-backdrop" id="sitepubAddModal">
  <div class="modal" style="max-width:520px">
    <div class="modal-head">
      <div class="modal-title">添加新媒体账号授权</div>
      <button class="modal-close" id="sitepubAddClose" type="button">×</button>
    </div>
    <div class="modal-body">
      <div class="fg">
        <span class="lb">选择媒体平台 <span class="req">*</span></span>
        <select class="ipt" id="sitepubNewPlatform">
          <option value="公众号">微信公众号</option>
          <option value="头条号">今日头条号</option>
          <option value="搜狐号">搜狐号自媒体</option>
          <option value="百家号">百度百家号</option>
          <option value="网易号">网易号新闻</option>
          <option value="抖音">抖音开放平台</option>
          <option value="知乎">知乎机构号</option>
          <option value="雪球">雪球财经</option>
          <option value="东方财富网">东方财富号</option>
        </select>
      </div>
      <div class="fg">
        <span class="lb">授权账号名称 <span class="req">*</span></span>
        <input class="ipt" id="sitepubNewAccountName" placeholder="例如：企业官方旗舰媒体号 / 花都包装新材料" />
      </div>
      <div class="fg">
        <span class="lb">授权方式</span>
        <div style="display:flex;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer">
            <input type="radio" name="authMethod" value="qrcode" checked /> 官方扫码授权 (推荐)
          </label>
          <label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer">
            <input type="radio" name="authMethod" value="token" /> API Token 授权
          </label>
        </div>
      </div>
      <div class="box" style="background:var(--primary-soft);border-color:var(--primary-border-soft);margin-bottom:0">
        <p style="font-size:12px;color:var(--primary-dark);margin:0;line-height:1.5">
          ✓ 采用企业级 OAuth2.0 与官方无感密钥通道，仅获取文章发布与媒体数据同步权限，严格保障账号资产安全。
        </p>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn o" id="sitepubAddCancel" type="button">取消</button>
      <button class="btn p" id="sitepubAddConfirm" type="button">确认授权并绑定</button>
    </div>
  </div>
</div>

<!-- 2. 下载授权软件弹窗 -->
<div class="modal-backdrop" id="sitepubDownloadModal">
  <div class="modal" style="max-width:560px">
    <div class="modal-head">
      <div class="modal-title">下载媒体多账号授权桌面同步器</div>
      <button class="modal-close" id="sitepubDownloadClose" type="button">×</button>
    </div>
    <div class="modal-body">
      <div style="text-align:center;padding:12px 0 20px">
        <div style="font-size:42px;margin-bottom:8px">📥</div>
        <h4 style="font-size:17px;font-weight:750;margin:0 0 6px">360智见GEO 媒体同步助手 v2.4</h4>
        <p style="font-size:12.5px;color:var(--muted);margin:0">支持多平台一键静默登录、草稿自动排版下发与跨平台状态反哺</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
        <div style="padding:14px;border:1px solid var(--line);border-radius:10px;text-align:center;background:#f8fafc">
          <div style="font-weight:700;font-size:13.5px;margin-bottom:4px">Windows 客户端</div>
          <div style="font-size:11.5px;color:var(--muted);margin-bottom:10px">Windows 10/11 64位</div>
          <button class="btn p" style="width:100%;font-size:12px" onclick="showToast('已开始下载 Windows 安装包 (360GeoSync-v2.4.exe)')">下载安装包 (.exe)</button>
        </div>
        <div style="padding:14px;border:1px solid var(--line);border-radius:10px;text-align:center;background:#f8fafc">
          <div style="font-weight:700;font-size:13.5px;margin-bottom:4px">macOS 客户端</div>
          <div style="font-size:11.5px;color:var(--muted);margin-bottom:10px">Apple Silicon / Intel 通用</div>
          <button class="btn o" style="width:100%;font-size:12px" onclick="showToast('已开始下载 macOS 镜像包 (360GeoSync-v2.4.dmg)')">下载安装包 (.dmg)</button>
        </div>
      </div>
      <div class="box" style="font-size:12px;color:#556987;line-height:1.6">
        <b>使用指引：</b>安装客户端后，登录同一个 360智见GEO 账号，即可在本地一键同步已绑定的头条号、微信公众号、百家号等自媒体创作者中心。
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn o" id="sitepubDownloadDone" type="button">关闭</button>
    </div>
  </div>
</div>

<!-- 3. 权威媒体以及B2B投稿推荐指南弹窗 -->
<div class="modal-backdrop" id="sitepubGuideModal">
  <div class="modal" style="max-width:660px">
    <div class="modal-head">
      <div class="modal-title">权威媒体以及 B2B 投稿推荐指南</div>
      <button class="modal-close" id="sitepubGuideClose" type="button">×</button>
    </div>
    <div class="modal-body" style="max-height:65vh;overflow-y:auto">
      <div style="margin-bottom:16px">
        <h4 style="font-size:15px;color:var(--primary-dark);margin:0 0 6px">1. 为什么要组合分发（私人媒体 + 公共媒体 + 权威媒体 + B2B）？</h4>
        <p style="font-size:13px;color:var(--text);line-height:1.6;margin:0">
          AI 大模型（如 DeepSeek、豆包、元宝、文心一言、通义千问）在生成回答时，会进行多信源交叉验证。单一平台发布极易被判定为自吹自擂或广告。通过在私人媒体（品牌基建）、第三方公共媒体（客观佐证）、权威媒体（高信度事实）与 B2B 垂直网站（商机询盘）同时布局，可最大化提升 AI 采信率与答案首位推荐率。
        </p>
      </div>
      <div style="margin-bottom:16px">
        <h4 style="font-size:15px;color:var(--primary-dark);margin:0 0 6px">2. 黄金分发比例建议</h4>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:8px">
          <div style="background:#eff6ff;padding:10px;border-radius:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:#2563eb">30%</div>
            <div style="font-size:11.5px;color:#1e40af;font-weight:600">私人媒体库</div>
            <div style="font-size:10px;color:#64748b">持续沉淀品牌底蕴</div>
          </div>
          <div style="background:#ecfdf5;padding:10px;border-radius:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:#059669">40%</div>
            <div style="font-size:11.5px;color:#065f46;font-weight:600">公共媒体库</div>
            <div style="font-size:10px;color:#64748b">广覆盖与多词触发</div>
          </div>
          <div style="background:#fef2f2;padding:10px;border-radius:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:#dc2626">20%</div>
            <div style="font-size:11.5px;color:#991b1b;font-weight:600">权威媒体库</div>
            <div style="font-size:10px;color:#64748b">硬核资质与权威首选</div>
          </div>
          <div style="background:#fffbeb;padding:10px;border-radius:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:#d97706">10%</div>
            <div style="font-size:11.5px;color:#92400e;font-weight:600">B2B联盟</div>
            <div style="font-size:10px;color:#64748b">精准采购决策引流</div>
          </div>
        </div>
      </div>
      <div style="margin-bottom:0">
        <h4 style="font-size:15px;color:var(--primary-dark);margin:0 0 6px">3. 内容适配与排版建议</h4>
        <ul style="font-size:12.5px;color:#475569;line-height:1.7;padding-left:18px;margin:0">
          <li><b>权威媒体：</b>侧重企业技术突破、专利资质、ESG绿色合规标准，使用第三人称严谨叙述。</li>
          <li><b>B2B联盟：</b>包含核心产品参数表、定制起订量、交付周期、材质对比，命中采购者询问词。</li>
          <li><b>新媒体矩阵：</b>采用通俗图文与短视频切片，融入问答场景与使用技巧。</li>
        </ul>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn p" id="sitepubGuideDone" type="button">我已了解</button>
    </div>
  </div>
</div>

<div class="page" id="inc">
<div id="incMainView">
  <div class="card inc-reference-card">
    <div class="inc-reference-title">AI 收录查询</div>
    <div class="inc-reference-desc">精准检测已发布内容是否被主流 AI 大模型采纳为可引用参考资料，并分析关键词场景下的信源渠道偏好。</div>
    <div class="inc-platform-grid" id="incPlatformGrid">
      <button class="inc-platform-card on" data-inc-platform="豆包" type="button"><span class="inc-platform-icon icon-doubao">豆</span><b>豆包</b><i>✓</i></button>
      <button class="inc-platform-card on" data-inc-platform="DeepSeek" type="button"><span class="inc-platform-icon icon-deepseek">D</span><b>DeepSeek</b><i>✓</i></button>
      <button class="inc-platform-card on" data-inc-platform="文心一言" type="button"><span class="inc-platform-icon icon-wenxin">文</span><b>文心一言</b><i>✓</i></button>
      <button class="inc-platform-card on" data-inc-platform="腾讯元宝" type="button"><span class="inc-platform-icon icon-yuanbao">元</span><b>腾讯元宝</b><i>✓</i></button>
      <button class="inc-platform-card on" data-inc-platform="通义千问" type="button"><span class="inc-platform-icon icon-tongyi">通</span><b>通义千问</b><i>✓</i></button>
      <button class="inc-platform-card on" data-inc-platform="Kimi" type="button"><span class="inc-platform-icon icon-kimi">K</span><b>Kimi</b><i>✓</i></button>
    </div>
    <div class="inc-reference-form">
      <div class="inc-form-row"><label for="incModeSwitch"><span class="req">*</span> 查询类型</label><select class="ipt" id="incModeSwitch"><option value="url">检测文章链接（URL）</option><option value="keyword">关键词 / 文章标题</option></select></div>
      <div class="inc-form-row"><label for="incQueryInput"><span class="req">*</span> 查询内容</label><input class="ipt" id="incQueryInput" value="https://www.toutiao.com/article/7482915630..."/></div>
      <div class="inc-form-meta"><span class="hint" id="incModeHint">URL模式：通过文章链接反查各 AI 平台是否已将该内容纳入可引用信源池。</span><button class="inc-history-link" id="incHistoryLink" type="button">历史记录 →</button></div>
      <button class="btn inc-primary-query" id="startInclusionQuery" type="button">查询</button>
      <span class="inc-task-status" id="incTaskStatus">请选择检测类型并提交查询</span>
    </div>
  </div>

  <div class="inc-result" id="incUrlResult">
    <div class="card inc-result-card">
      <div class="inc-result-head"><div><div class="ct" style="margin:0">各平台收录状态看板</div><div class="cs" style="margin:3px 0 0">URL 查询完成后，逐平台展示当前内容的收录状态。已收录记录可点击查看。</div></div><span class="pill b" id="incUrlBadge">URL 检测结果</span></div>
      <div class="table-scroll"><table class="inc-platform-status-table"><thead><tr><th>AI平台</th><th>收录状态</th><th>操作</th></tr></thead><tbody>
        <tr data-platform="豆包"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-doubao">豆</span>豆包</div></td><td><span class="pill g">已收录</span></td><td><button class="article-link inc-view-link" data-platform="豆包" type="button">查看</button></td></tr>
        <tr data-platform="DeepSeek"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-deepseek">D</span>DeepSeek</div></td><td><span class="pill g">已收录</span></td><td><button class="article-link inc-view-link" data-platform="DeepSeek" type="button">查看</button></td></tr>
        <tr data-platform="文心一言"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-wenxin">文</span>文心一言</div></td><td><span class="pill n">未收录</span></td><td><span class="inc-disabled-action">—</span></td></tr>
        <tr data-platform="腾讯元宝"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-yuanbao">元</span>腾讯元宝</div></td><td><span class="pill g">已收录</span></td><td><button class="article-link inc-view-link" data-platform="腾讯元宝" type="button">查看</button></td></tr>
        <tr data-platform="通义千问"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-tongyi">通</span>通义千问</div></td><td><span class="pill n">未收录</span></td><td><span class="inc-disabled-action">—</span></td></tr>
        <tr data-platform="Kimi"><td><div class="inc-platform-name"><span class="inc-platform-icon icon-kimi">K</span>Kimi</div></td><td><span class="pill g">已收录</span></td><td><button class="article-link inc-view-link" data-platform="Kimi" type="button">查看</button></td></tr>
      </tbody></table></div>
    </div>
  </div>

  <div class="inc-result" id="incKeywordResult">
    <div class="card inc-result-card">
      <div class="inc-result-head"><div><div class="ct" style="margin:0">AI收录渠道效果</div><div class="cs" style="margin:3px 0 0">分析当前关键词在不同 AI 平台回答中更常引用的信源渠道，辅助下一轮内容投放。</div></div><span class="pill b" id="incKeywordBadge">关键词：外卖袋定制</span></div>
      <div class="inc-channel-tabs" id="incChannelTabs"><button class="inc-channel-tab on" data-channel-platform="all" type="button">⌘ 全部</button><button class="inc-channel-tab" data-channel-platform="豆包" type="button">豆包</button><button class="inc-channel-tab" data-channel-platform="DeepSeek" type="button">DeepSeek</button><button class="inc-channel-tab" data-channel-platform="文心一言" type="button">文心一言</button><button class="inc-channel-tab" data-channel-platform="腾讯元宝" type="button">腾讯元宝</button><button class="inc-channel-tab" data-channel-platform="通义千问" type="button">通义千问</button><button class="inc-channel-tab" data-channel-platform="Kimi" type="button">Kimi</button></div>
      <div class="table-scroll"><table class="inc-channel-table" id="incChannelTable"><thead><tr><th>排名</th><th>收录渠道</th><th>引用次数</th><th>信源建议</th></tr></thead><tbody>
        <tr data-platforms="文心一言,豆包,DeepSeek"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-baijia">百</span>百家号</td><td>10</td><td><span class="pill g">优先布局</span></td></tr>
        <tr data-platforms="豆包,DeepSeek,Kimi"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-zhihu">知</span>知乎</td><td>7</td><td><span class="pill g">优先布局</span></td></tr>
        <tr data-platforms="文心一言,通义千问"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-baike">百</span>百度百科</td><td>3</td><td><span class="pill b">权威补强</span></td></tr>
        <tr data-platforms="DeepSeek,通义千问"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-b2b">阿</span>阿里巴巴1688</td><td>2</td><td><span class="pill y">B2B补强</span></td></tr>
        <tr data-platforms="文心一言,豆包"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-news">新</span>新华网</td><td>2</td><td><span class="pill b">权威背书</span></td></tr>
        <tr data-platforms="豆包,Kimi"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-tao">淘</span>淘宝百科知识</td><td>2</td><td><span class="pill n">消费场景补充</span></td></tr>
        <tr data-platforms="DeepSeek,腾讯元宝"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-site">行</span>包装行业洞察网</td><td>2</td><td><span class="pill b">垂类补强</span></td></tr>
        <tr data-platforms="腾讯元宝,通义千问"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-jd">京</span>京东</td><td>2</td><td><span class="pill n">采购场景补充</span></td></tr>
        <tr data-platforms="豆包,腾讯元宝,Kimi"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-wechat">微</span>微信公众号</td><td>2</td><td><span class="pill g">持续覆盖</span></td></tr>
        <tr data-platforms="豆包,DeepSeek"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-toutiao">今</span>今日头条</td><td>2</td><td><span class="pill g">持续覆盖</span></td></tr>
        <tr data-platforms="DeepSeek,Kimi"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-site">行</span>行业垂直媒体</td><td>2</td><td><span class="pill b">专业补强</span></td></tr>
        <tr data-platforms="文心一言,通义千问"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-science">科</span>科普中国</td><td>2</td><td><span class="pill b">专业背书</span></td></tr>
        <tr data-platforms="文心一言"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-news">海</span>海外网</td><td>1</td><td><span class="pill n">补充覆盖</span></td></tr>
        <tr data-platforms="DeepSeek,通义千问"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-data">万</span>万方数据知识服务平台</td><td>1</td><td><span class="pill y">专业资料源</span></td></tr>
        <tr data-platforms="腾讯元宝,Kimi"><td class="inc-rank-cell"></td><td><span class="channel-badge ch-news">映</span>映象新闻</td><td>1</td><td><span class="pill n">区域补充</span></td></tr>
      </tbody></table></div>
    </div>
  </div>
</div>

<div class="inc-history-view" id="incHistoryView">
  <div class="inc-history-top"><button class="inc-history-back" id="incHistoryBack" type="button">← 返回</button><div><div class="ct" style="margin:0">收录查询历史记录</div><div class="cs" style="margin:3px 0 0">查看历史检测任务、查询状态与报告结果。</div></div></div>
  <div class="card inc-history-card"><div class="table-scroll"><table class="inc-history-table"><thead><tr><th>查询时间</th><th>查询类型</th><th>查询内容</th><th>状态</th><th>操作</th></tr></thead><tbody>
    <tr data-history-mode="keyword" data-history-query="外卖袋"><td>2026-07-26 13:05:36</td><td>关键词/文章标题</td><td>外卖袋</td><td><span class="pill g">已完成</span></td><td><button class="article-link inc-history-report" type="button">查看报告</button></td></tr>
    <tr data-history-mode="url" data-history-query="https://www.toutiao.com/article/7482915630..."><td>2026-07-26 13:03:43</td><td>文章链接(URL)</td><td>https://www.toutiao.com/article/7482915630...</td><td><span class="pill n">查询中</span></td><td><button class="article-link inc-history-report muted" type="button">查看报告</button></td></tr>
    <tr data-history-mode="url" data-history-query="https://www.toutiao.com/article/7482915630..."><td>2026-07-26 12:56:10</td><td>文章链接(URL)</td><td>https://www.toutiao.com/article/7482915630...</td><td><span class="pill n">查询中</span></td><td><button class="article-link inc-history-report muted" type="button">查看报告</button></td></tr>
  </tbody></table></div><div class="inc-history-pagination"><span>共 3 条</span><select class="page-select"><option>10条/页</option></select><button class="page-num" disabled type="button">‹</button><button class="page-num on" type="button">1</button><button class="page-num" disabled type="button">›</button><span>前往</span><input class="ipt" value="1" style="width:52px;padding:5px 7px;text-align:center"/><span>页</span></div></div>
</div>
</div>
<div class="page" id="agent">
<div class="card"><div class="ct">Agent 编排链路<span class="pill g">运行中</span></div><div class="cs">单客户一次完整跑批：画像 → 关键词 → 分流行业 → 生成 → 合规 → 投放 → 监测</div>
<table><tr><th>#</th><th>Agent / 节点</th><th>模型</th><th>输入</th><th>输出</th><th>耗时</th><th>状态</th></tr>
<tr><td>1</td><td>人群画像 Agent</td><td>专属领域大模型</td><td>query + doc_id + 标签ID</td><td>多维图谱 JSON</td><td>42s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>2</td><td>关键词 Agent（独立智能体）</td><td>通用大模型</td><td>核心实体词库</td><td>prefix / suffix JSON</td><td>18s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>3</td><td>规避清单 Agent（独立智能体）</td><td>通用大模型</td><td>行业 + 客户红线</td><td>禁用词清单，存客户ID</td><td>11s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>4</td><td>分流行业节点</td><td>大模型节点</td><td>公司行业属性</td><td>路由至5条赛道之一</td><td>3s</td><td><span class="pill g">通用行业类</span></td></tr>
<tr><td>5</td><td>内容生成 → 内容整合优化</td><td>专一领域大模型 ×2</td><td>图谱 + 长尾词 + 体裁</td><td>HTML 正文</td><td>3m12s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>6</td><td>格式检查修正</td><td>通用大模型</td><td>HTML 草稿</td><td>规范化 HTML</td><td>26s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>7</td><td>合规检查节点</td><td>通用大模型</td><td>正文 + 四维规则</td><td>是否违规 + 违规段落</td><td>34s</td><td><span class="pill y">命中，转重写</span></td></tr>
<tr><td>8</td><td>重写违规段落节点</td><td>通用大模型</td><td>违规段落 + 改写指令</td><td>改写段落，回填原文</td><td>29s</td><td><span class="pill g">成功</span></td></tr>
<tr><td>9</td><td>格式校正二次</td><td>通用大模型</td><td>回填后全文</td><td>最终 HTML</td><td>22s</td><td><span class="pill g">通过，直出</span></td></tr>
<tr><td>10</td><td>效果监控 Agent</td><td>多平台检测 + 判定</td><td>问题集 × 6平台</td><td>标准 JSON 六字段</td><td>异步</td><td><span class="pill b">轮询中</span></td></tr></table></div>
<div class="row"><div class="card"><div class="ct">异常处理<span class="pill r">已知缺口</span></div>
<div class="box" style="margin-bottom:10px"><b>全流程10个大模型节点，任一节点报错会导致整条流程中断。</b>常见原因：token超限、网络超时、输出JSON解析失败。</div>
<div class="kv"><span>本周中断次数</span><b>7</b></div>
<div class="kv"><span>token超限</span><b>3</b></div>
<div class="kv"><span>JSON解析失败</span><b>2</b></div>
<div class="kv"><span>网络超时</span><b>2</b></div>
<div class="hint" style="margin-top:10px">改进方向：为关键节点增加异常处理分支，捕获 node_name + error_type + input_snapshot 并落库，便于定位与重试。</div></div>
<div class="card"><div class="ct">架构待优化项</div>
<div class="box" style="margin-bottom:10px"><b>5条行业赛道结构相同但完全独立部署</b>，形成5维护负担：医疗/美容、法律法规、政务/事业单位、学校单位、通用行业，每条含内容生成+内容整合优化，共10个大模型节点（单篇文章只走其中2个）。<br/><br/><b>改进：</b>采用公共基础层 + 行业差异注入架构——两个通用节点做共享，行业差异通过「行业规则包」JSON实现（禁用词、合规要点、事实来源白名单），新增行业只需新建配置文件，节点数从10个压缩到2个。压缩的是维护成本，执行成本不变：单篇始终2次调用。</div>
<div class="box"><b>分流边界未定义：</b>流程图列出5条专属赛道，但「通用行业类」的定义边界不清。如「健康食品电商」既可算医疗美容也可算通用行业。<br/><br/><b>改进：</b>为每条赛道定义明确的行业代码清单（参考国民经济行业分类），不在清单内则走通用，把硬性判断依据前置，而非依赖大模型语义理解。</div></div></div>
</div>
<!--PAGES-->
</div></main>
<div class="modal-backdrop pub-article-picker-modal" id="pubArticlePickerModal">
<div aria-labelledby="pubPickerTitle" aria-modal="true" class="modal" role="dialog">
<div class="modal-head pub-picker-head">
<div>
<div class="modal-title" id="pubPickerTitle">选择投稿文章</div>
<div class="pub-picker-media">投稿媒体：<b id="pubPickerMediaName">—</b></div>
</div>
<button aria-label="关闭" class="modal-close" id="pubPickerClose" type="button">×</button>
</div>
<div class="modal-body pub-picker-body">
<div class="article-page-toolbar pub-picker-toolbar">
<div class="article-search-group">
<input class="ipt article-search-input" id="pubPickerSearch" placeholder="按标题筛选文章"/>
<button class="btn" id="pubPickerSearchBtn" type="button">查询</button>
<button class="btn o" id="pubPickerSearchReset" type="button">重置</button>
</div>
<div class="pub-picker-tip">从「新生文库」中选择 1 篇后确认投稿</div>
</div>
<div class="card article-list-card pub-picker-card">
<div class="article-tabs" id="pubPickerTabs">
<button class="article-tab on" data-picker-tab="auto" type="button">自动化文章 <span class="article-tab-count" id="pubPickerAutoCount">0</span></button>
<button class="article-tab" data-picker-tab="uploaded" type="button">上传的文章 <span class="article-tab-count" id="pubPickerUploadedCount">0</span></button>
</div>
<div class="pub-picker-table-wrap">
<table class="article-table pub-picker-table">
<colgroup><col style="width:35%"/><col style="width:13%"/><col style="width:15%"/><col style="width:15%"/><col style="width:16%"/><col style="width:6%"/></colgroup>
<thead><tr><th>标题</th><th>创作类型</th><th>已发布平台</th><th>生成时间</th><th>提交时间</th><th>选择</th></tr></thead>
<tbody id="pubPickerTableBody"></tbody>
</table>
<div class="article-empty" id="pubPickerEmpty">没有匹配当前条件的文章</div>
</div>
</div>
</div>
<div class="modal-foot pub-picker-foot">
<div class="pub-picker-selection"><span>已选择：</span><b id="pubPickerSelectedTitle">暂未选择文章</b></div>
<div class="pub-picker-foot-actions">
<button class="btn o" id="pubPickerCancel" type="button">取消</button>
<button class="btn pub-picker-confirm" disabled="" id="pubPickerConfirm" type="button">确认投稿</button>
</div>
</div>
</div>
</div>
<div class="drawer-backdrop" id="articleViewDrawer" aria-hidden="true"><div class="article-drawer" role="dialog" aria-modal="true" aria-labelledby="drawerArticleTitle"><div class="drawer-head"><div><div class="drawer-kicker">ARTICLE PREVIEW</div><div class="drawer-title" id="drawerArticleTitle">文章预览</div></div><button class="drawer-close" id="articleDrawerClose" type="button" aria-label="关闭">×</button></div><div class="drawer-body"><div class="drawer-meta"><div class="drawer-meta-item"><span>创作类型</span><b id="drawerArticleType">—</b></div><div class="drawer-meta-item"><span>发布状态</span><b id="drawerArticleStatus">—</b></div><div class="drawer-meta-item"><span>生成时间</span><b id="drawerArticleGenerated">—</b></div><div class="drawer-meta-item"><span>提交时间</span><b id="drawerArticleSubmitted">—</b></div></div><div class="drawer-preview" id="drawerArticlePreview"><h2>内容预览</h2><p class="preview-note">当前高保真原型以文章列表元数据为主。正式接入文章生成 API 后，此区域可直接渲染 content HTML 全文。</p></div></div><div class="drawer-foot"><button class="btn o" id="articleCopyTitle" type="button">复制标题</button><button class="btn" id="articleDrawerDone" type="button">完成</button></div></div></div>`;
