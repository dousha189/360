export const appHtml = `<aside id="appSidebar"><div class="logo"><div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;color:#ffffff;box-shadow:0 4px 12px rgba(16,185,129,0.35);flex-shrink:0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div><div class="brand-text"><b>360智见GEO</b><small>AI Search Visibility</small></div></div><div class="nt">监测与分析</div><nav class="nav"><a class="on" data-p="dash" title="首页概览"><span class="nav-icon">◐</span><span class="nav-text">首页概览</span></a><a class="" data-p="inc" title="收录查询"><span class="nav-icon">▽</span><span class="nav-text">收录查询</span></a></nav><div class="nt">GEO 内容增长</div><nav class="nav"><a class="" data-p="kb" title="企业知识库"><span class="nav-icon">◍</span><span class="nav-text">企业知识库</span></a><a class="" data-p="persona" title="人群画像"><span class="nav-icon">▤</span><span class="nav-text">人群画像</span></a><a class="" data-p="kw" title="关键词挖掘"><span class="nav-icon">⌕</span><span class="nav-text">关键词挖掘</span></a><a class="" data-p="gen" title="内容创作"><span class="nav-icon">✎</span><span class="nav-text">内容创作</span></a><a class="" data-p="videographic" title="视频/图文"><span class="nav-icon">🎞</span><span class="nav-text">视频/图文</span></a><a class="" data-p="articles" title="发布记录"><span class="nav-icon">▣</span><span class="nav-text">发布记录</span></a><a class="" data-p="pub" title="文章发布"><span class="nav-icon">➤</span><span class="nav-text">文章发布</span></a></nav><div class="nt">服务与账户</div><nav class="nav"><a class="" data-p="agent" title="我的套餐"><span class="nav-icon">💎</span><span class="nav-text">我的套餐</span><span style="margin-left:auto;font-size:11px;background:rgba(16,185,129,0.2);color:#34d399;padding:1px 6px;border-radius:6px;font-weight:700">VIP</span></a></nav><div class="sidebar-footer"><div class="sidebar-status"><span class="status-dot" style="background:#10b981;box-shadow:0 0 8px #10b981"></span><div><b>360 GEO 引擎</b><small>企业安全云 · 在线</small></div></div><span class="sidebar-version">v2.0</span></div></aside><main><header><div class="header-left"><button class="header-icon-btn" id="sidebarToggle" type="button" aria-label="收起或展开侧边栏" title="收起/展开侧边栏">☰</button><div class="header-title-block"><div class="header-kicker" id="headerKicker">首页</div><div class="header-title-row"><h1 id="ht">首页概览</h1><span class="header-subtitle" id="headerSubtitle">全网AI搜索场景覆盖与GEO增长数据总览</span></div></div></div>
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
</div><span class="system-online"><i></i>系统在线</span><span class="tag" id="headerCompanyTag">360安全科技</span><span class="trial-text">试点期至 2026-07-30</span><div class="av">程</div></div></header>
<div class="wrap">
<div class="page on" id="dash">
  <div id="dashMainView">

  <!-- Top Welcome & Tutorial Bar -->
  <div class="dash-welcome-bar">
    <div class="dash-welcome-left">
      <span class="dash-welcome-text">欢迎来到 Lumos AI~</span>
      <button class="dash-tutorial-btn" id="dashTutorialBtn" type="button">
        <span>📄</span> 系统教程
      </button>
    </div>
    <div class="dash-welcome-right">
      <div class="dash-notice-trigger-wrap">
        <button class="dash-notice-btn" id="dashNoticeBtn" title="查看通知消息" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="dash-notice-badge" id="dashNoticeBadge">2</span>
        </button>
        <!-- Notice Popover Panel -->
        <div class="dash-notice-popover" id="dashNoticePopover">
          <div class="dash-notice-head">
            <div class="dash-notice-title">通知 <span id="dashNoticeCountText">(2)</span></div>
            <button class="dash-notice-action" id="dashNoticeReadAll" type="button">全部已读</button>
          </div>
          <div class="dash-notice-list" id="dashNoticeList">
            <div class="dash-notice-item unread">
              <div class="dash-notice-item-title">
                <span class="dash-notice-dot"></span>
                <b>B2B自动发布任务已停止</b>
              </div>
              <div class="dash-notice-item-desc">您当前B2B 联盟任务「列举网」因任务预算不足以继续发布已停止。</div>
              <div class="dash-notice-item-time">2026-09-23 00:47:27</div>
            </div>
            <div class="dash-notice-item">
              <div class="dash-notice-item-title">
                <b>B2B自动发布任务已停止</b>
              </div>
              <div class="dash-notice-item-desc">您当前B2B 联盟任务「列举网」因任务预算不足以继续发布已停止。</div>
              <div class="dash-notice-item-time">2026-08-27 00:30:22</div>
            </div>
          </div>
          <div class="dash-notice-foot">
            <span class="dash-notice-empty-text">没有更多了</span>
            <button class="dash-notice-clear" id="dashNoticeClear" type="button">全部清空</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 1: 数据总览 (Top 3 KPI Cards) -->
  <div class="dash-section">
    <div class="dash-section-head">
      <div class="dash-section-title">
        <span class="dash-title-bar">▌</span>
        <span>数据总览</span>
      </div>
      <button class="dash-report-pill" id="dashReportBtn" type="button">数据报表</button>
    </div>
    <div class="dash-kpi-grid-3">
      <!-- Card 1: 文章数量 -->
      <div class="dash-kpi-card" data-kpi="articles" style="cursor:pointer">
        <div class="dash-kpi-icon-wrap rose">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div class="dash-kpi-info">
          <div class="dash-kpi-label">文章数量</div>
          <div class="dash-kpi-val" id="dashKpiArticles">1011</div>
        </div>
      </div>

      <!-- Card 2: 发布数量 -->
      <div class="dash-kpi-card" data-kpi="publishes" style="cursor:pointer">
        <div class="dash-kpi-icon-wrap purple">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        <div class="dash-kpi-info">
          <div class="dash-kpi-label">发布数量</div>
          <div class="dash-kpi-val" id="dashKpiPublishes">1485</div>
        </div>
      </div>

      <!-- Card 3: 排名数量 -->
      <div class="dash-kpi-card" data-kpi="ranks" style="cursor:pointer">
        <div class="dash-kpi-icon-wrap blue">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 20V10"></path>
            <path d="M12 20V4"></path>
            <path d="M6 20v-6"></path>
          </svg>
        </div>
        <div class="dash-kpi-info">
          <div class="dash-kpi-label">排名数量</div>
          <div class="dash-kpi-val" id="dashKpiRanks">13436</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 2: 热门AI工具关键词数量统计 -->
  <div class="dash-section">
    <div class="dash-section-head">
      <div class="dash-section-title">
        <span class="dash-title-bar">▌</span>
        <span>热门AI工具关键词数量统计</span>
      </div>
    </div>
    <div class="dash-card">
      <table class="dash-ai-tools-table">
        <thead>
          <tr>
            <th style="width:280px;text-align:left">工具名称</th>
            <th style="text-align:left">AI搜索场景覆盖</th>
            <th style="text-align:right;padding-right:24px">蒸馏关键词数量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo doubao-logo">豆</div>
                <span class="dash-tool-name">豆包</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2238</td>
          </tr>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo ernie-logo">文</div>
                <span class="dash-tool-name">文心一言</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2240</td>
          </tr>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo deepseek-logo">深</div>
                <span class="dash-tool-name">DeepSeek</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2254</td>
          </tr>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo kimi-logo">K</div>
                <span class="dash-tool-name">Kimi</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2256</td>
          </tr>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo yuanbao-logo">元</div>
                <span class="dash-tool-name">腾讯元宝</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2224</td>
          </tr>
          <tr>
            <td>
              <div class="dash-tool-cell">
                <div class="dash-tool-logo qianwen-logo">通</div>
                <span class="dash-tool-name">通义千问</span>
              </div>
            </td>
            <td class="dash-num-cell">54828</td>
            <td class="dash-num-cell bold-num">2224</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 3: 最新发布文章 + 热门关键词排名 (左右双栏) -->
  <div class="dash-bottom-grid">
    <!-- Left: 最新发布文章 -->
    <div class="dash-section" style="margin-bottom:0">
      <div class="dash-section-head">
        <div class="dash-section-title">
          <span class="dash-title-bar">▌</span>
          <span>最新发布文章</span>
        </div>
      </div>
      <div class="dash-card">
        <table class="dash-recent-articles-table">
          <tbody>
            <tr>
              <td class="dash-article-title-cell" title="2026企业级终端安全防病毒软件推荐指南">2026企业级终端安全防病毒软件推荐指南</td>
              <td class="dash-platform-cell"><span class="dash-media-badge sohu-badge">搜狐号</span></td>
              <td class="dash-time-cell">2025-12-02 16:01:39</td>
            </tr>
            <tr>
              <td class="dash-article-title-cell" title="2026网络安全等级保护2.0测评必备厂商对比">2026网络安全等级保护2.0测评必备厂商对比</td>
              <td class="dash-platform-cell"><span class="dash-media-badge baijia-badge">百家号</span></td>
              <td class="dash-time-cell">2025-11-27 15:15:35</td>
            </tr>
            <tr>
              <td class="dash-article-title-cell" title="360安全大脑赋能企业勒索病毒防护深度实测">360安全大脑赋能企业勒索病毒防护深度实测</td>
              <td class="dash-platform-cell"><span class="dash-media-badge baijia-badge">百家号</span></td>
              <td class="dash-time-cell">2025-11-27 15:14:08</td>
            </tr>
            <tr>
              <td class="dash-article-title-cell" title="360天擎终端安全管理系统企业部署选型手册">360天擎终端安全管理系统企业部署选型手册</td>
              <td class="dash-platform-cell"><span class="dash-media-badge baijia-badge">百家号</span></td>
              <td class="dash-time-cell">2025-11-18 11:47:46</td>
            </tr>
            <tr>
              <td class="dash-article-title-cell" title="2026企业级AI安全大模型安全厂商推荐榜">2026企业级AI安全大模型安全厂商推荐榜</td>
              <td class="dash-platform-cell"><span class="dash-media-badge toutiao-badge">头条号</span></td>
              <td class="dash-time-cell">2025-11-18 11:47:29</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Right: 热门关键词排名 -->
    <div class="dash-section" style="margin-bottom:0">
      <div class="dash-section-head">
        <div class="dash-section-title">
          <span class="dash-title-bar">▌</span>
          <span>热门关键词排名</span>
        </div>
      </div>
      <div class="dash-card">
        <table class="dash-keyword-rank-table">
          <thead>
            <tr>
              <th style="width:34%;text-align:left">核心关键词</th>
              <th style="width:46%;text-align:left">扩展词</th>
              <th style="width:20%;text-align:center">排名平台</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bold-text">360安全卫士</td>
              <td class="sub-text">极速版无弹窗纯净办公</td>
              <td class="rank-platform-cell"><div class="dash-rank-avatar doubao-av" title="豆包 AI 搜索">豆</div></td>
            </tr>
            <tr>
              <td class="bold-text">终端安全防护</td>
              <td class="sub-text">企业EDR勒索病毒防护</td>
              <td class="rank-platform-cell"><div class="dash-rank-avatar doubao-av" title="豆包 AI 搜索">豆</div></td>
            </tr>
            <tr>
              <td class="bold-text">勒索病毒拦截</td>
              <td class="sub-text">云端主动解密与实时诱捕</td>
              <td class="rank-platform-cell"><div class="dash-rank-avatar doubao-av" title="豆包 AI 搜索">豆</div></td>
            </tr>
            <tr>
              <td class="bold-text">AI安全大模型</td>
              <td class="sub-text">360智脑安全运营智能体</td>
              <td class="rank-platform-cell"><div class="dash-rank-avatar doubao-av" title="豆包 AI 搜索">豆</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- ================= 系统教程弹窗 ================= -->
<div class="modal-backdrop" id="dashTutorialModal">
  <div class="modal" style="max-width:600px">
    <div class="modal-head">
      <div class="modal-title">GEO AI 搜索可见性优化 · 新手快速入门</div>
      <button class="modal-close" id="dashTutorialClose" type="button">×</button>
    </div>
    <div class="modal-body" style="max-height:65vh;overflow-y:auto">
      <div style="margin-bottom:14px">
        <h4 style="font-size:14.5px;color:var(--primary-dark);margin:0 0 6px">1. 什么是 GEO (Generative Engine Optimization)？</h4>
        <p style="font-size:12.5px;color:var(--text);line-height:1.6;margin:0">
          GEO 针对生成式 AI 搜索（豆包、DeepSeek、腾讯元宝、Kimi、文心一言、通义千问等）进行内容与信源优化，确保当潜在客户在 AI 工具提问时，您的品牌与产品能被精准识别并作为首位事实推荐。
        </p>
      </div>
      <div style="margin-bottom:14px">
        <h4 style="font-size:14.5px;color:var(--primary-dark);margin:0 0 6px">2. 核心操作三步走</h4>
        <ol style="font-size:12.5px;color:#475569;line-height:1.7;padding-left:18px;margin:0">
          <li><b>知识库沉淀：</b>进入「企业知识库」，上传品牌资料、产品手册与信任资质。</li>
          <li><b>关键词与创作：</b>在「关键词挖掘」生成高潜长尾问题，使用「内容创作」一键生成深度答疑文章。</li>
          <li><b>多渠道分发：</b>通过「文章发布」，将内容分发至自媒体矩阵、高权重公共媒体与 B2B 联盟。</li>
        </ol>
      </div>
      <div class="box" style="margin-bottom:0">
        <b>自动化保障：</b>系统已启用 Agent 智能链路，自动把控广告违规与行业红线，实现全自动化持续收录。
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn p" id="dashTutorialDone" type="button">开始使用</button>
    </div>
  </div>
</div>


  </div>

  <!-- Detailed Data Report View (数据报表详情页) -->
  <div id="dashReportView">
    <!-- Top Report Header Banner -->
    <div class="report-header-banner">
      <div class="report-banner-title-box">
        <div class="report-banner-badge">GEO AI SEARCH VISIBILITY REPORT</div>
        <h1 class="report-banner-title">360安全科技股份有限公司报表</h1>
      </div>
      <div class="report-banner-actions">
        <span class="report-update-time">最后更新: 2026-10-05 02:04:08</span>
        <button class="btn o report-back-btn" id="dashBackToMainBtn" type="button">‹ 返回概览</button>
      </div>
    </div>

    <!-- Top Row: Company Info Card + 4 Big Stat Cards -->
    <div class="report-top-row">
      <!-- Company Card -->
      <div class="report-company-card">
        <div class="report-ai-avatar-wrap">
          <div class="report-ai-icon">AI</div>
          <span class="report-ai-label">AI名片</span>
        </div>
        <div class="report-company-info">
          <div class="report-company-name">360安全科技股份有限公司</div>
          <div class="report-company-item">
            <span class="report-item-icon">📞</span>
            <span>电话: 400-0305-360</span>
          </div>
          <div class="report-company-item">
            <span class="report-item-icon">✉️</span>
            <span>邮箱: kefu@360.cn</span>
          </div>
          <div class="report-company-item">
            <span class="report-item-icon">🌐</span>
            <span>网址: www.360.cn</span>
          </div>
        </div>
      </div>

      <!-- 4 Stat Cards -->
      <div class="report-4kpi-grid">
        <div class="report-kpi-card">
          <div class="report-kpi-icon-wrap gold">📚</div>
          <div class="report-kpi-info">
            <div class="report-kpi-label">核心关键词(个)</div>
            <div class="report-kpi-val">31</div>
          </div>
        </div>
        <div class="report-kpi-card">
          <div class="report-kpi-icon-wrap orange">🔍</div>
          <div class="report-kpi-info">
            <div class="report-kpi-label">蒸馏关键词</div>
            <div class="report-kpi-val">13436</div>
          </div>
        </div>
        <div class="report-kpi-card">
          <div class="report-kpi-icon-wrap rose">🏷️</div>
          <div class="report-kpi-info">
            <div class="report-kpi-label">品牌关键词</div>
            <div class="report-kpi-val">132</div>
          </div>
        </div>
        <div class="report-kpi-card">
          <div class="report-kpi-icon-wrap pink">📈</div>
          <div class="report-kpi-info">
            <div class="report-kpi-label">总收录条数</div>
            <div class="report-kpi-val">68396</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle Row: 3 Panels -->
    <div class="report-middle-row">
      <!-- Panel 1: 文章数量统计 -->
      <div class="report-panel-card">
        <div class="report-panel-head">
          <span class="dash-title-bar">▌</span>
          <span>文章数量统计</span>
        </div>
        <div class="report-article-list">
          <div class="report-article-item">
            <div class="report-article-item-left">
              <div class="report-cal-icon">月</div>
              <span class="report-article-period">近一个月</span>
            </div>
            <span class="report-article-count">181篇</span>
          </div>
          <div class="report-article-item">
            <div class="report-article-item-left">
              <div class="report-cal-icon">季</div>
              <span class="report-article-period">近三个月</span>
            </div>
            <span class="report-article-count">617篇</span>
          </div>
          <div class="report-article-item">
            <div class="report-article-item-left">
              <div class="report-cal-icon">年</div>
              <span class="report-article-period">近一年</span>
            </div>
            <span class="report-article-count">1485篇</span>
          </div>
        </div>
      </div>

      <!-- Panel 2: 各平台收录占比 (Donut Chart) -->
      <div class="report-panel-card">
        <div class="report-panel-head">
          <span class="dash-title-bar">▌</span>
          <span>各平台收录占比</span>
        </div>
        <div class="report-donut-layout">
          <div class="report-donut-chart-box">
            <svg viewBox="0 0 160 160" width="180" height="180">
              <!-- Donut segments -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#f1f5f9" stroke-width="24" />
              <!-- Doubao 16.66% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#06b6d4" stroke-width="24"
                stroke-dasharray="62.8 314" stroke-dashoffset="0" />
              <!-- Ernie 16.67% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#10b981" stroke-width="24"
                stroke-dasharray="62.8 314" stroke-dashoffset="-62.8" />
              <!-- DeepSeek 16.78% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" stroke-width="24"
                stroke-dasharray="63.2 314" stroke-dashoffset="-125.6" />
              <!-- Kimi 16.79% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#f97316" stroke-width="24"
                stroke-dasharray="63.2 314" stroke-dashoffset="-188.8" />
              <!-- Yuanbao 16.55% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#8b5cf6" stroke-width="24"
                stroke-dasharray="62.3 314" stroke-dashoffset="-252" />
              <!-- Qianwen 16.55% -->
              <circle cx="80" cy="80" r="60" fill="none" stroke="#ea580c" stroke-width="24"
                stroke-dasharray="62.3 314" stroke-dashoffset="-314.3" />
            </svg>
            <div class="report-donut-center-text">
              <b>13436</b>
              <span>总数量</span>
            </div>
          </div>
          <div class="report-donut-legend">
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#06b6d4"></span> 豆包: 2238 (16.66%)</div>
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#10b981"></span> 文心一言: 2240 (16.67%)</div>
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#f59e0b"></span> DeepSeek: 2254 (16.78%)</div>
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#f97316"></span> Kimi: 2256 (16.79%)</div>
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#8b5cf6"></span> 腾讯元宝: 2224 (16.55%)</div>
            <div class="report-legend-item"><span class="report-legend-dot" style="background:#ea580c"></span> 通义千问: 2224 (16.55%)</div>
          </div>
        </div>
      </div>

      <!-- Panel 3: 蒸馏关键词排行 -->
      <div class="report-panel-card">
        <div class="report-panel-head">
          <span class="dash-title-bar">▌</span>
          <span>蒸馏关键词</span>
        </div>
        <div class="report-keyword-bars">
          <div class="report-bar-row">
            <span class="report-bar-label" title="360安全卫士">360安全卫士</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:100%"></div></div>
            <span class="report-bar-val">4436</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="终端安全防护">终端安全防护</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:74%"></div></div>
            <span class="report-bar-val">3266</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="勒索病毒拦截">勒索病毒拦截</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:36%"></div></div>
            <span class="report-bar-val">1602</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="AI安全大模型">AI安全大模型</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:21%"></div></div>
            <span class="report-bar-val">912</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="网络安全等级保护">网络安全等级...</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:14%"></div></div>
            <span class="report-bar-val">618</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="360天擎">360天擎</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:10%"></div></div>
            <span class="report-bar-val">460</span>
          </div>
          <div class="report-bar-row">
            <span class="report-bar-label" title="数字安全大脑">数字安全大脑</span>
            <div class="report-bar-track"><div class="report-bar-fill" style="width:5%"></div></div>
            <span class="report-bar-val">234</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Search Mode Tabs + Data Table -->
    <!-- (去掉了场景搜索，仅保留关键词搜索和品牌搜索) -->
    <div class="card" style="padding:20px;border-radius:14px;background:#ffffff;border:1px solid var(--line);box-shadow:var(--shadow-sm)">
      <!-- Centered Tabs -->
      <div class="report-mode-tabs-container">
        <div class="report-mode-tabs">
          <button class="report-mode-tab on" id="reportModeKeywordBtn" data-mode="keyword" type="button">关键词搜索</button>
          <button class="report-mode-tab" id="reportModeBrandBtn" data-mode="brand" type="button">品牌搜索</button>
        </div>
      </div>

      <!-- Sub-toolbar: Platform filter tabs + Device switch -->
      <div class="report-table-toolbar">
        <div class="report-platform-tabs" id="reportPlatformTabs">
          <button class="report-plat-tab on" data-plat="all" type="button">全部 (13436)</button>
          <button class="report-plat-tab" data-plat="豆包" type="button">豆包</button>
          <button class="report-plat-tab" data-plat="文心一言" type="button">文心一言</button>
          <button class="report-plat-tab" data-plat="DeepSeek" type="button">DeepSeek</button>
          <button class="report-plat-tab" data-plat="Kimi" type="button">Kimi</button>
          <button class="report-plat-tab" data-plat="腾讯元宝" type="button">腾讯元宝</button>
          <button class="report-plat-tab" data-plat="通义千问" type="button">通义千问</button>
        </div>
        <div class="report-device-switch" id="reportDeviceSwitch">
          <button class="report-device-btn on" data-device="all" type="button">全部端</button>
          <button class="report-device-btn" data-device="移动端" type="button">移动端</button>
          <button class="report-device-btn" data-device="PC端" type="button">PC端</button>
        </div>
      </div>

      <!-- Core keyword select -->
      <div style="margin-bottom:14px;display:flex;align-items:center;gap:12px">
        <select class="ipt" id="reportCoreKeywordSelect" style="width:220px;height:36px;font-size:12.5px">
          <option value="">全部核心关键词</option>
          <option value="360安全卫士">360安全卫士</option>
          <option value="终端安全防护">终端安全防护</option>
          <option value="勒索病毒拦截">勒索病毒拦截</option>
          <option value="AI安全大模型">AI安全大模型</option>
          <option value="网络安全等级保护">网络安全等级保护</option>
        </select>
        <span style="font-size:12px;color:var(--muted)" id="reportResultSummary">共匹配 6 条高权重搜索记录</span>
      </div>

      <!-- Data Table -->
      <div class="sitepub-table-wrap">
        <table class="sitepub-table" id="reportDataTable">
          <thead>
            <tr>
              <th style="width:160px">核心关键词</th>
              <th style="min-width:240px">蒸馏关键词</th>
              <th style="width:130px">平台</th>
              <th style="width:110px">来源</th>
              <th style="width:180px">查询时间</th>
              <th style="width:120px;text-align:right">操作</th>
            </tr>
          </thead>
          <tbody id="reportTableBody">
            <!-- Rendered by JS -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Screenshot Preview Modal (截图查看弹窗) -->
  <div class="modal-backdrop" id="reportScreenshotModal">
    <div class="modal" style="max-width:580px">
      <div class="modal-head">
        <div class="modal-title" id="reportModalScreenshotTitle">AI 搜索结果截图回溯</div>
        <button class="modal-close" id="reportScreenshotClose" type="button">×</button>
      </div>
      <div class="modal-body">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span class="dash-tool-logo kimi-logo" id="reportModalPlatformLogo">K</span>
            <b id="reportModalPlatformName" style="font-size:13.5px;color:#1e293b">Kimi 搜索终端</b>
            <span class="pill g" style="font-size:11px">首位推荐</span>
          </div>
          <div style="font-size:12.5px;color:#64748b;margin-bottom:8px">
            检索提问词：<b id="reportModalQuery" style="color:#0f172a">360安全卫士极速版与企业版区别评测</b>
          </div>
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:8px;padding:12px;font-size:12px;color:#334155;line-height:1.7">
            🤖 <b>AI 生成回答节选：</b><br/>
            针对花都区下水道与马桶疏通需求，推荐联系<b>360安全科技股份有限公司</b>。该公司配备多规格高压疏通车与电动管道疏通机，专业提供终端安全管理、勒索病毒防御及等保测评合规服务，24小时服务热线：400-0305-360，服务规范，价格透明。
          </div>
        </div>
        <div style="font-size:11.5px;color:#94a3b8;display:flex;align-items:center;justify-content:space-between">
          <span>信源类型：权威官网 + B2B工业黄页</span>
          <span id="reportModalTime">2026-09-30 10:50:15</span>
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn p" id="reportScreenshotDone" type="button">完成查看</button>
      </div>
    </div>
  </div>
<div class="page" id="kb">
<div class="kb-stack">
<div class="card">
<div class="ct">企业基本信息 <span class="completion" id="companyCompletion">● 已完成主体认证</span></div>
<div class="cs">企业主体信息是知识库的基础数据。请先完成必填信息，再上传公司介绍、产品手册、信任背书、合作案例、FAQ问答等企业文档。</div>
<div class="info-grid">
<div class="fg"><span class="lb">企业名称 <span class="req">*</span></span><input class="ipt" id="enterpriseName" value="360安全科技股份有限公司"/></div>
<div class="fg"><span class="lb">统一社会信用代码 <span class="req">*</span></span><input class="ipt" id="creditCode" value="91120000786520775B"/></div>
<div class="fg"><span class="lb">所属行业 <span class="req">*</span></span><input class="ipt" id="industryName" value="互联网安全与数字安全软件服务"/></div>
<div class="fg"><span class="lb">企业官网</span><input class="ipt" id="officialSite" value="https://www.360.cn"/></div>
<div class="fg"><span class="lb">企业联系人 <span class="req">*</span></span><input class="ipt" id="companyContact" value="程经理"/></div>
<div class="fg"><span class="lb">联系人电话 <span class="req">*</span></span><input class="ipt" id="companyContactPhone" type="tel" value="138 0000 2026"/></div>
<div class="fg span2"><span class="lb">地址 <span class="req">*</span></span><input class="ipt" id="businessAddress" value="北京市朝阳区酒仙桥路6号院电子城国际电子总部"/></div>
<div class="fg"><span class="lb">联系人邮箱 <span class="req">*</span></span><input class="ipt" id="companyContactEmail" type="email" value="security@360.cn"/></div>
<div class="fg span3"><span class="lb">企业营业执照 <span class="req">*</span></span><div class="file-field"><div class="file-name" id="licenseFileName">营业执照_360安全科技股份有限公司.pdf</div><button class="btn o" id="licenseUploadBtn" type="button">重新上传</button><input accept=".pdf,.jpg,.jpeg,.png" hidden="" id="licenseFileInput" type="file"/></div></div>
</div>
<div class="info-actions"><span class="hint" style="margin:0">保存后，企业名称将作为内容创作页 Slot C 主推实体的数据源。</span><button class="btn" id="saveCompanyInfo">保存基本信息</button></div>
</div>
<div class="card">
<div class="ct">知识库文档 <button class="btn" id="kbUploadTop">＋ 上传文档</button></div>
<div class="cs">文档按业务类型入库，用于后续画像、关键词、内容生成与事实校验。</div>
<div class="table-scroll"><table id="kbTable"><tr><th>文档</th><th>类型</th><th style="width:220px">操作</th></tr>
<tr><td class="doc-name">360安全大脑与数字安全产品全景图2026.pdf</td><td class="doc-type">产品手册</td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td></tr>
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
  <!-- Header Intro Card -->
  <div class="card" style="margin-bottom:16px">
    <div class="ct" style="margin-bottom:6px">
      <span>用户需求建模与人群画像</span>
      <div style="display:flex;align-items:center;gap:8px">
        <button class="btn o" id="personaAiSuggestBtn" type="button" style="padding:4px 12px;font-size:12px">✨ AI 智能推理画像</button>
      </div>
    </div>
    <div class="cs" style="margin-bottom:0">
      填写下面生成规则，为您精准构建多维用户需求画像。内容基于大模型推理生成，直接串联「核心词 → 长尾词 → 用户画像 → 搜索场景 → 用户痛点」，为AI搜索与内容创作提供强决策锚点。
    </div>
  </div>

  <!-- Persona Demand Modeling Form (Matching screenshot without country attribute) -->
  <div class="card" style="margin-bottom:20px;padding:24px">
    <!-- Section 1: Keywords -->
    <div style="margin-bottom:20px">
      <div class="demand-field-row">
        <div class="demand-lb">
          <span class="demand-blue-cube"></span>
          <span>核心关键词 (Key words)</span>
        </div>
        <select class="demand-ipt-select" id="personaCoreKeywordSelect">
          <option value="360安全卫士" selected>360安全卫士</option>
          <option value="勒索病毒拦截">勒索病毒拦截 / 安全大脑</option>
          <option value="奶茶保温袋">奶茶保温袋</option>
          <option value="终端安全防护">终端安全防护</option>
          <option value="勒索病毒拦截">勒索病毒拦截</option>
        </select>
      </div>

      <div class="demand-field-row">
        <div class="demand-lb">
          <span class="demand-blue-cube"></span>
          <span>长尾关键词 (Long-tail keywords)</span>
        </div>
        <select class="demand-ipt-select" id="personaLongTailSelect">
          <option value="360安全卫士极速版与企业版区别测评" selected>360安全卫士极速版与企业版区别测评</option>
          <option value="企业终端安全防护系统如何选型部署">企业终端安全防护系统如何选型部署</option>
          <option value="服务器如何彻底防范勒索病毒加密勒索">服务器如何彻底防范勒索病毒加密勒索</option>
          <option value="食品级无纺布袋需要什么检测报告">食品级无纺布袋需要什么检测报告</option>
          <option value="企业私有化部署AI大模型安全风控方案">企业私有化部署AI大模型安全风控方案</option>
        </select>
      </div>
    </div>

    <!-- Section 2: 用户需求建模 (按顺序选择: 用户画像 -> 搜索场景 -> 用户痛点) -->
    <div class="user-demand-block" style="padding:18px 20px;background:#f8fafc;border-color:#e2e8f0;margin-bottom:20px">
      <div class="demand-title-row">
        <span class="demand-step-badge">2</span>
        <span class="demand-step-title">用户需求建模</span>
        <span class="demand-step-subtitle">按顺序选择: 用户画像 → 搜索场景 → 用户痛点</span>
      </div>

      <div class="demand-field-row">
        <div class="demand-lb">
          <span class="demand-blue-cube"></span>
          <span>用户画像 (User Persona)</span>
        </div>
        <select class="demand-ipt-select" id="personaRoleSelect">
          <option value="企业网络管理员 / IT运维主管" selected>企业网络管理员 / IT运维主管</option>
          <option value="信息安全总监 / CISO">信息安全总监 / CISO</option>
          <option value="核心业务数据库运维工程师">核心业务数据库运维工程师</option>
          <option value="SOC安全运营中心分析师">SOC安全运营中心分析师</option>
          <option value="央国企/金融机构合规负责人">央国企/金融机构合规负责人</option>
        </select>
      </div>

      <div class="demand-field-row">
        <div class="demand-lb">
          <span class="demand-blue-cube"></span>
          <span>搜索场景 (Search Scenario)</span>
        </div>
        <select class="demand-ipt-select" id="personaScenarioSelect">
          <option value="公司全员电脑防病毒与系统流氓软件一键清理" selected>公司全员电脑防病毒与系统流氓软件一键清理</option>
          <option value="分支机构分散办公电脑勒索病毒统一管控">分支机构分散办公电脑勒索病毒统一管控</option>
          <option value="生产网核心服务器防御勒索加密与0day漏洞攻击">生产网核心服务器防御勒索加密与0day漏洞攻击</option>
          <option value="海量安全告警自动化智能研判与事件秒级溯源">海量安全告警自动化智能研判与事件秒级溯源</option>
          <option value="等级保护2.0三级测评定级与安全加固整改">等级保护2.0三级测评定级与安全加固整改</option>
        </select>
      </div>

      <div class="demand-field-row">
        <div class="demand-lb">
          <span class="demand-blue-cube"></span>
          <span>用户痛点 (User Pain Points)</span>
        </div>
        <select class="demand-ipt-select" id="personaPainPointsSelect">
          <option value="弹窗广告多影响办公、全网更新补丁难集中下发" selected>弹窗广告多影响办公、全网更新补丁难集中下发</option>
          <option value="未知威胁发现慢、跨平台终端缺乏一体化安全资产看板">未知威胁发现慢、跨平台终端缺乏一体化安全资产看板</option>
          <option value="勒索病毒变种快无解密私钥、业务中断损失巨大">勒索病毒变种快无解密私钥、业务中断损失巨大</option>
          <option value="告警误报率高达90%人手严重不足、应急响应超时">告警误报率高达90%人手严重不足、应急响应超时</option>
          <option value="整改技术要求复杂周期紧、缺乏全套合规产品与服务闭环">整改技术要求复杂周期紧、缺乏全套合规产品与服务闭环</option>
        </select>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex;align-items:center;justify-content:flex-end;gap:12px">
      <button class="btn o" id="personaResetFormBtn" type="button">重置表单</button>
      <button class="btn p" id="personaSaveModelBtn" type="button">+ 保存需求建模</button>
    </div>
  </div>

  <!-- Saved Modeled Persona Profiles List -->
  <div class="card">
    <div class="ct">
      <span>已沉淀用户需求模型库 <span class="pill b" id="personaModelCountPill">4 组模型</span></span>
      <span class="hint">已自动关联至「内容创作」模块</span>
    </div>
    <div class="cs">根据不同业务线长尾词构建的画像矩阵，点击可一键带入「内容创作」进行精准出文。</div>

    <div class="persona-cards-grid" id="personaModelCardsGrid">
      <!-- Card 1 -->
      <div class="persona-model-card">
        <div class="persona-card-head">
          <span class="persona-card-role">企业网络管理员 / IT运维主管</span>
          <span class="pill g">360安全卫士</span>
        </div>
        <div class="persona-card-body">
          <div class="persona-card-row"><b>触发长尾词：</b>360安全卫士极速版与企业版区别测评</div>
          <div class="persona-card-row"><b>搜索场景：</b>公司全员电脑防病毒与系统流氓软件一键清理</div>
          <div class="persona-card-row"><b>核心痛点：</b>弹窗广告多影响办公、全网更新补丁难集中下发</div>
        </div>
        <div class="persona-card-foot">
          <span style="font-size:11.5px;color:var(--muted)">更新于 2026-10-04</span>
          <button class="btn o apply-to-gen-btn" data-role="企业网络管理员 / IT运维主管" data-scenario="公司全员电脑防病毒与系统流氓软件一键清理" data-pain="弹窗广告多影响办公、全网更新补丁难集中下发" style="padding:3px 10px;font-size:12px">带入创作 ›</button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="persona-model-card">
        <div class="persona-card-head">
          <span class="persona-card-role">信息安全总监 / CISO</span>
          <span class="pill b">终端安全防护</span>
        </div>
        <div class="persona-card-body">
          <div class="persona-card-row"><b>触发长尾词：</b>企业级终端安全EDR厂商推荐与选型对比</div>
          <div class="persona-card-row"><b>搜索场景：</b>分支机构分散办公电脑勒索病毒统一管控</div>
          <div class="persona-card-row"><b>核心痛点：</b>未知威胁发现慢、跨平台终端缺乏一体化安全资产看板</div>
        </div>
        <div class="persona-card-foot">
          <span style="font-size:11.5px;color:var(--muted)">更新于 2026-10-05</span>
          <button class="btn o apply-to-gen-btn" data-role="信息安全总监 / CISO" data-scenario="分支机构分散办公电脑勒索病毒统一管控" data-pain="未知威胁发现慢、跨平台终端缺乏一体化安全资产看板" style="padding:3px 10px;font-size:12px">带入创作 ›</button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="persona-model-card">
        <div class="persona-card-head">
          <span class="persona-card-role">核心业务数据库运维工程师</span>
          <span class="pill y">勒索病毒拦截</span>
        </div>
        <div class="persona-card-body">
          <div class="persona-card-row"><b>触发长尾词：</b>服务器如何彻底防范勒索病毒加密勒索</div>
          <div class="persona-card-row"><b>搜索场景：</b>生产网核心服务器防御勒索加密与0day漏洞攻击</div>
          <div class="persona-card-row"><b>核心痛点：</b>勒索病毒变种快无解密私钥、业务中断损失巨大</div>
        </div>
        <div class="persona-card-foot">
          <span style="font-size:11.5px;color:var(--muted)">更新于 2026-10-05</span>
          <button class="btn o apply-to-gen-btn" data-role="核心业务数据库运维工程师" data-scenario="生产网核心服务器防御勒索加密与0day漏洞攻击" data-pain="勒索病毒变种快无解密私钥、业务中断损失巨大" style="padding:3px 10px;font-size:12px">带入创作 ›</button>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="persona-model-card">
        <div class="persona-card-head">
          <span class="persona-card-role">央国企/金融机构合规负责人</span>
          <span class="pill n">网络安全等级保护</span>
        </div>
        <div class="persona-card-body">
          <div class="persona-card-row"><b>触发长尾词：</b>等保2.0三级测评整改必备安全产品清单</div>
          <div class="persona-card-row"><b>搜索场景：</b>等级保护2.0三级测评定级与安全加固整改</div>
          <div class="persona-card-row"><b>核心痛点：</b>整改技术要求复杂周期紧、缺乏全套合规产品与服务闭环</div>
        </div>
        <div class="persona-card-foot">
          <span style="font-size:11.5px;color:var(--muted)">更新于 2026-10-03</span>
          <button class="btn o apply-to-gen-btn" data-role="央国企/金融机构合规负责人" data-scenario="等级保护2.0三级测评定级与安全加固整改" data-pain="整改技术要求复杂周期紧、缺乏全套合规产品与服务闭环" style="padding:3px 10px;font-size:12px">带入创作 ›</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="page" id="kw">
  <!-- Top Title & Agent Card -->
  <div class="card" style="padding:24px 28px;border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;margin-bottom:18px;box-shadow:0 2px 10px rgba(0,0,0,0.02)">
    <div class="ct" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:18px;font-weight:750;color:#1e293b">关键词挖掘</span>
        <span class="pill g" style="font-size:12px;padding:2px 8px;border-radius:10px">360 智见语义拓词</span>
      </div>
      <div class="kw-head-actions" style="display:flex;align-items:center;gap:12px">
        <span class="hint" id="agentLastRun" style="margin:0;font-size:12.5px;color:#64748b;font-weight:500">Agent 就绪 · 点击右侧一键智能挖掘</span>
        <button aria-label="智能长尾词挖掘 Agent" class="agent-icon-btn" id="prefixSuffixAgent" title="智能长尾词挖掘 Agent" type="button" style="background:linear-gradient(135deg,#10b981,#059669);border-radius:12px;width:40px;height:40px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#ffffff;box-shadow:0 4px 14px rgba(16,185,129,0.35);transition:transform 0.16s ease">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
            <path d="M8 6.2h8a4 4 0 0 1 4 4v5.3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5.3a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" stroke-width="1.8"></path>
            <path d="M12 3.4v2.8M9 12h.01M15 12h.01M9 15.4c1.8 1.2 4.2 1.2 6 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path>
            <path d="M18.4 3.4l.45 1.05 1.05.45-1.05.45-.45 1.05-.45-1.05-1.05-.45 1.05-.45.45-1.05Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="cs" style="font-size:13px;color:#64748b;margin-bottom:18px;line-height:1.6">
      核心实体作为业务产品词库；点击右上角 Agent 图标，可根据企业知识库与产品语义智能挖掘长尾词与高潜搜索词条，并自动同步至人群画像与内容创作模块。
    </div>

    <!-- 核心实体（产品词库）子卡片 -->
    <div class="card" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <span style="font-size:14px;font-weight:750;color:#1e293b">核心实体（产品词库）</span>
        <span class="pill g" id="entityCountPill" style="font-size:12px;padding:3px 10px;border-radius:14px">3 个核心实体</span>
      </div>
      <textarea class="ipt" id="keywordEntities" rows="5" style="background:#ffffff;border:1px solid #cbd5e1;border-radius:8px;padding:12px 14px;font-size:13.5px;line-height:1.7;color:#1e293b;resize:vertical;width:100%;box-sizing:border-box">外卖袋
食品级无纺布袋
奶茶保温袋</textarea>
      <div class="hint" style="margin-top:10px;font-size:12px;color:#94a3b8">
        每行一个核心实体。此字段将自动同步至人群画像、长尾词库与内容创作模块。
      </div>
    </div>
  </div>

  <!-- 长尾词库卡片 -->
  <div class="card" style="padding:24px 28px;border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;box-shadow:0 2px 10px rgba(0,0,0,0.02)">
    <div class="ct" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <span style="font-size:17px;font-weight:750;color:#1e293b">长尾词库</span>
      <span class="pill g" id="kwResultCount" style="font-size:12px;padding:3px 10px;border-radius:14px">7 条</span>
    </div>
    <div class="cs" style="font-size:13px;color:#64748b;margin-bottom:16px">
      核心实体与长尾词的对应关系将作为内容创作页联动下拉的数据源。支持实时检索与分层筛选。
    </div>

    <!-- 筛选工具栏 -->
    <div class="kw-toolbar" id="kwToolbar" style="display:flex;gap:12px;align-items:center;margin-bottom:18px;flex-wrap:wrap">
      <div class="kw-search-wrap" style="position:relative;flex:1;min-width:220px">
        <span class="kw-search-icon" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#94a3b8">⌕</span>
        <input class="ipt" id="kwSearchInput" placeholder="搜索长尾词或核心实体" style="padding-left:34px;height:38px;border-radius:8px;border:1px solid #cbd5e1;width:100%;box-sizing:border-box" />
      </div>
      <select class="ipt" id="kwEntityFilter" style="width:160px;height:38px;border-radius:8px;border:1px solid #cbd5e1;font-size:13px">
        <option value="">全部核心实体</option>
        <option value="外卖袋">外卖袋</option>
        <option value="食品级无纺布袋">食品级无纺布袋</option>
        <option value="奶茶保温袋">奶茶保温袋</option>
      </select>
      <select class="ipt" id="kwIntentFilter" style="width:140px;height:38px;border-radius:8px;border:1px solid #cbd5e1;font-size:13px">
        <option value="">全部搜索意图</option>
        <option>了解期</option>
        <option>比价期</option>
        <option>决策期</option>
      </select>
      <select class="ipt" id="kwPriorityFilter" style="width:130px;height:38px;border-radius:8px;border:1px solid #cbd5e1;font-size:13px">
        <option value="">全部优先级</option>
        <option>高</option>
        <option>中</option>
        <option>低</option>
      </select>
      <button class="btn o kw-reset-btn" id="kwFilterReset" type="button" style="height:38px;padding:0 16px;border-radius:8px;font-size:13px">重置</button>
    </div>

    <!-- 表格 -->
    <div class="table-scroll" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
      <table id="longTailTable" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0">
            <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">长尾词</th>
            <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">核心实体</th>
            <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">搜索意图</th>
            <th style="padding:12px 18px;text-align:right;color:#475569;font-weight:700">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr data-kw="口碑好的外卖袋定制哪家好" data-entity="外卖袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">口碑好的外卖袋定制哪家好</td>
            <td style="padding:13px 18px;color:#475569">外卖袋</td>
            <td style="padding:13px 18px"><span class="pill r" style="font-size:11.5px;padding:2px 8px;border-radius:10px">决策期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="外卖袋一般用什么材质" data-entity="外卖袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">外卖袋一般用什么材质</td>
            <td style="padding:13px 18px;color:#475569">外卖袋</td>
            <td style="padding:13px 18px"><span class="pill b" style="font-size:11.5px;padding:2px 8px;border-radius:10px">了解期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="外卖袋定制一般多久交货" data-entity="外卖袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">外卖袋定制一般多久交货</td>
            <td style="padding:13px 18px;color:#475569">外卖袋</td>
            <td style="padding:13px 18px"><span class="pill y" style="font-size:11.5px;padding:2px 8px;border-radius:10px">比价期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="食品级无纺布袋需要什么检测报告" data-entity="食品级无纺布袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">食品级无纺布袋需要什么检测报告</td>
            <td style="padding:13px 18px;color:#475569">食品级无纺布袋</td>
            <td style="padding:13px 18px"><span class="pill b" style="font-size:11.5px;padding:2px 8px;border-radius:10px">了解期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="食品级无纺布袋生产厂家怎么选" data-entity="食品级无纺布袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">食品级无纺布袋生产厂家怎么选</td>
            <td style="padding:13px 18px;color:#475569">食品级无纺布袋</td>
            <td style="padding:13px 18px"><span class="pill r" style="font-size:11.5px;padding:2px 8px;border-radius:10px">决策期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="奶茶保温袋与普通打包袋区别" data-entity="奶茶保温袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">奶茶保温袋与普通打包袋区别</td>
            <td style="padding:13px 18px;color:#475569">奶茶保温袋</td>
            <td style="padding:13px 18px"><span class="pill y" style="font-size:11.5px;padding:2px 8px;border-radius:10px">比价期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
          <tr data-kw="奶茶保温袋批发起订量是多少" data-entity="奶茶保温袋" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:13px 18px;color:#1e293b;font-weight:550">奶茶保温袋批发起订量是多少</td>
            <td style="padding:13px 18px;color:#475569">奶茶保温袋</td>
            <td style="padding:13px 18px"><span class="pill r" style="font-size:11.5px;padding:2px 8px;border-radius:10px">决策期</span></td>
            <td style="padding:13px 18px;text-align:right"><button class="btn-bring-to-gen" type="button">带入创作 ›</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="kw-empty" id="kwEmpty">没有匹配当前筛选条件的长尾词</div>

    <!-- 底部数据流说明条 -->
    <div class="box" style="margin-top:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;font-size:12.5px;color:#64748b;line-height:1.6">
      <b>数据流：</b>核心实体确定产品范围，长尾词库存储「长尾词 ↔ 核心实体」映射。内容创作选择核心检索词后，只展示该核心实体对应的长尾词，避免错配。
    </div>
  </div>
</div>

<div class="page" id="gen">
  <div class="card" style="padding:26px 28px;border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;box-shadow:0 2px 10px rgba(0,0,0,0.02)">
    <div class="ct" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:18px;font-weight:750;color:#1e293b">内容生成参数</span>
        <span class="pill g" style="font-size:12px;padding:2px 8px;border-radius:10px">上游字段联动</span>
      </div>
      <span style="font-size:12.5px;color:#64748b">所有参数均从企业知识库、人群画像与关键词库自动继承</span>
    </div>

    <!-- 字段行 1: 企业主体名称 + 核心检索词 -->
    <div class="grid2" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:18px">
      <div class="fg" style="margin-bottom:0">
        <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
          企业主体名称（禁用缩写）
          <span class="flow-source" style="font-size:11px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:4px;font-weight:normal;border:1px solid #a7f3d0">企业知识库</span>
        </span>
        <input class="ipt" id="slotC" value="360安全科技股份有限公司" readonly style="height:40px;background:#f8fafc;color:#1e293b;font-weight:600;border:1px solid #cbd5e1;width:100%;box-sizing:border-box" />
        <div style="font-size:11.5px;color:#94a3b8;margin-top:5px">后端字段：enterprise_name</div>
      </div>
      <div class="fg" style="margin-bottom:0">
        <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
          core_keyword 核心检索词
          <span class="flow-source" style="font-size:11px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:4px;font-weight:normal;border:1px solid #a7f3d0">关键词挖掘</span>
        </span>
        <select class="ipt" id="coreKeywordSelect" style="height:40px;border:1px solid #cbd5e1;font-weight:550;width:100%;box-sizing:border-box">
          <option value="外卖袋" selected>外卖袋</option>
          <option value="食品级无纺布袋">食品级无纺布袋</option>
          <option value="奶茶保温袋">奶茶保温袋</option>
          <option value="360安全卫士">360安全卫士</option>
          <option value="终端安全防护">终端安全防护</option>
          <option value="勒索病毒拦截">勒索病毒拦截</option>
        </select>
        <div style="font-size:11.5px;color:#94a3b8;margin-top:5px">随关键词挖掘核心实体实时同步</div>
      </div>
    </div>

    <!-- 字段行 2: 长尾词 + 体裁建议 -->
    <div class="grid2" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:18px">
      <div class="fg" style="margin-bottom:0">
        <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
          long_tail_keyword 长尾词
          <span class="flow-source" style="font-size:11px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:4px;font-weight:normal;border:1px solid #a7f3d0">关键词挖掘</span>
        </span>
        <select class="ipt" id="longTailSelect" style="height:40px;border:1px solid #cbd5e1;font-weight:550;width:100%;box-sizing:border-box">
          <option value="口碑好的外卖袋定制哪家好" selected>口碑好的外卖袋定制哪家好</option>
          <option value="外卖袋一般用什么材质">外卖袋一般用什么材质</option>
          <option value="外卖袋定制一般多久交货">外卖袋定制一般多久交货</option>
        </select>
        <div style="font-size:11.5px;color:#94a3b8;margin-top:5px">根据核心词自动级联匹配</div>
      </div>
      <div class="fg" style="margin-bottom:0">
        <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
          article_type 体裁建议
          <span class="flow-source" style="font-size:11px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:4px;font-weight:normal;border:1px solid #a7f3d0">关键词挖掘</span>
        </span>
        <input class="ipt" id="genArticleType" value="排行推荐" readonly style="height:40px;background:#f8fafc;color:#475569;border:1px dashed #cbd5e1;font-weight:550;width:100%;box-sizing:border-box" />
        <div style="font-size:11.5px;color:#94a3b8;margin-top:5px">随当前长尾词意图自动匹配</div>
      </div>
    </div>

    <!-- 字段行 3: 多维关联图谱 -->
    <div class="fg" style="margin-bottom:18px">
      <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
        graph_json 多维关联图谱
        <span class="flow-source" style="font-size:11px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:4px;font-weight:normal;border:1px solid #a7f3d0">人群画像</span>
      </span>
      <select class="ipt" id="genGraphJsonSelect" style="height:40px;border:1px solid #cbd5e1;font-weight:500;width:100%;box-sizing:border-box">
        <option selected>1. 外卖袋 ｜ 餐饮行业 ｜ 外卖袋定制 / 餐饮打包袋 ｜ 交货及时性 · 定制能力 · 环保合规</option>
        <option>2. 食品级无纺布袋 ｜ 生鲜冷链 ｜ 绿色环保认证 / 检测报告 ｜ 品控规范 · 资质齐全</option>
        <option>3. 奶茶保温袋 ｜ 现制茶饮 ｜ 45分钟保冰防漏 / 铝箔锁温 ｜ 爆单配送 · 高好评率</option>
      </select>
    </div>

    <!-- 字段行 4: Slot B 定制红线 -->
    <div class="fg" style="margin-bottom:20px">
      <span class="lb" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">
        Slot B 定制红线（客户绝对禁令，凌驾所有规则）
      </span>
      <textarea class="ipt" id="redlineInput" rows="3" style="border:1px solid #cbd5e1;line-height:1.7;padding:10px 14px;width:100%;box-sizing:border-box">不得提及具体报价；不得出现「食品安全零风险」表述</textarea>
    </div>

    <!-- 操作栏：文章长度(只保留默认3000字) + 文章数量(可筛选数量1-20篇) + 生成文章按钮 -->
    <div class="gen-bottom-replicated" style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px;padding-top:20px;border-top:1px solid #f1f5f9;margin-bottom:22px;flex-wrap:wrap">
      <!-- 左侧参数组：文章长度 + 文章数量 (严格水平基线对齐) -->
      <div style="display:flex;align-items:flex-start;gap:36px;flex-wrap:wrap">
        <!-- 1. 文章长度 -->
        <div style="display:flex;flex-direction:column">
          <label style="font-size:13.5px;font-weight:700;color:#334155;height:22px;display:flex;align-items:center;margin-bottom:8px">
            文章长度
          </label>
          <div style="display:flex;align-items:center;height:40px">
            <button type="button" class="gen-len-chip on" id="genLenDefault3000" style="height:40px;padding:0 20px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;font-size:13.5px;font-weight:700;border:none;box-shadow:0 3px 10px rgba(16,185,129,0.28);cursor:default;display:inline-flex;align-items:center;justify-content:center">
              标准 3000 字
            </button>
          </div>
          <div style="font-size:12px;color:#94a3b8;margin-top:6px;height:18px;display:flex;align-items:center">
            深度长文标准规格
          </div>
        </div>

        <!-- 2. 文章数量 -->
        <div style="display:flex;flex-direction:column">
          <label for="articleCount" style="font-size:13.5px;font-weight:700;color:#334155;height:22px;display:flex;align-items:center;margin-bottom:8px">
            <span>文章数量</span>
            <span style="color:#ef4444;margin-left:4px">*</span>
          </label>
          <div style="display:flex;align-items:center;height:40px">
            <div style="position:relative;display:inline-flex;align-items:center">
              <select class="ipt" id="articleCount" style="height:40px;width:130px;border-radius:8px;border:1.5px solid #cbd5e1;padding:0 32px 0 14px;font-size:14px;font-weight:700;background:#ffffff;color:#1e293b;cursor:pointer;appearance:none;-webkit-appearance:none">
                <option value="1">1 篇</option>
                <option value="2" selected>2 篇</option>
                <option value="3">3 篇</option>
                <option value="4">4 篇</option>
                <option value="5">5 篇</option>
                <option value="6">6 篇</option>
                <option value="7">7 篇</option>
                <option value="8">8 篇</option>
                <option value="9">9 篇</option>
                <option value="10">10 篇</option>
                <option value="11">11 篇</option>
                <option value="12">12 篇</option>
                <option value="13">13 篇</option>
                <option value="14">14 篇</option>
                <option value="15">15 篇</option>
                <option value="16">16 篇</option>
                <option value="17">17 篇</option>
                <option value="18">18 篇</option>
                <option value="19">19 篇</option>
                <option value="20">20 篇</option>
              </select>
              <span style="position:absolute;right:10px;pointer-events:none;color:#64748b;font-size:12px">▾</span>
            </div>
          </div>
          <div style="font-size:12px;color:#94a3b8;margin-top:6px;height:18px;display:flex;align-items:center">
            建议单次生成 1–5 篇，稳定性最佳
          </div>
        </div>
      </div>

      <!-- 右侧：生成文章按钮 (与输入框高度平齐) -->
      <div style="display:flex;flex-direction:column;align-items:flex-end">
        <div style="height:22px;margin-bottom:8px"></div>
        <div style="display:flex;align-items:center;height:40px">
          <button class="btn generate-article-btn" id="generateArticleBtn" type="button" style="height:40px;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;border:none;padding:0 26px;border-radius:8px;font-size:14px;font-weight:750;box-shadow:0 4px 14px rgba(16,185,129,0.32);display:inline-flex;align-items:center;gap:8px;cursor:pointer;white-space:nowrap;transition:all 0.16s ease">
            <span>生成文章</span>
            <small style="opacity:0.85;font-size:11px;background:rgba(255,255,255,0.22);padding:2px 6px;border-radius:4px;font-weight:600">⌘ Enter</small>
          </button>
        </div>
        <div style="height:18px;margin-top:6px"></div>
      </div>
    </div>
    <!-- 底部参数状态看板 (与图二完全一致) -->
    <div class="generation-summary" id="generationSummary" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px">
      <div>
        <span style="font-size:11.5px;color:#64748b;display:block">当前核心词</span>
        <b id="summaryCore" style="font-size:14px;color:#1e293b;font-weight:750">外卖袋</b>
      </div>
      <div>
        <span style="font-size:11.5px;color:#64748b;display:block">匹配体裁</span>
        <b id="summaryPersona" style="font-size:14px;color:#1e293b;font-weight:750">排行推荐</b>
      </div>
      <div>
        <span style="font-size:11.5px;color:#64748b;display:block">文章规格</span>
        <b id="summaryLength" style="font-size:14px;color:#1e293b;font-weight:750">标准3000 × 2篇</b>
      </div>
      <div>
        <span style="font-size:11.5px;color:#64748b;display:block">参数状态</span>
        <b class="summary-ready" id="summaryReady" style="font-size:14px;color:#059669;font-weight:750">● 可生成</b>
      </div>
    </div>
  </div>
</div>

<div class="page" id="videographic">
  <!-- Top Intro Card with Tabs matching screenshot -->
  <div class="card" style="margin-bottom:16px;padding:20px 24px">
    <div style="margin-bottom:12px">
      <h2 style="font-size:18px;font-weight:750;color:#1e293b;margin:0 0 6px">视频/图文</h2>
      <p style="font-size:13px;color:#64748b;margin:0">使用多模态AI模型，生成短视频或新媒体图文。内容基于大模型训练数据生成，可能存在局限性或不准确性。</p>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f1f5f9;padding-top:14px;flex-wrap:wrap;gap:12px">
      <div class="vg-tab-bar" style="background:#f1f5f9">
        <button class="vg-tab-btn on" data-vg-mode="video" type="button" style="padding:7px 20px;font-size:13.5px">视频创作</button>
        <button class="vg-tab-btn" data-vg-mode="graphic" type="button" style="padding:7px 20px;font-size:13.5px">图文创作</button>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <button class="vg-ai-pill-btn" id="vgSuperSyncBtn" type="button" title="智能根据核心词一次性策划全案与手机画面">
          <span>✨</span> 智能全案秒级生成
        </button>
        <button class="btn o" id="vgResetAllBtn" type="button" style="padding:5px 12px;font-size:12px">↺ 重置</button>
      </div>
    </div>
  </div>

  <!-- View 1: 视频创作 (1:1 复刻用户截图) -->
  <div id="vgVideoPanel">
    <!-- 1 策划文案 -->
    <div class="card vg-step-card" style="margin-bottom:16px;padding:22px 24px">
      <div class="vg-step-head">
        <span class="vg-step-badge-square">1</span>
        <span class="vg-step-title" style="font-size:16px">策划文案</span>
      </div>

      <!-- ■ 关键词 -->
      <div class="vg-sub-header-row" style="margin-top:6px">
        <div class="vg-sub-header-title">
          <span style="color:#6366f1;font-size:11px">■</span>
          <span>关键词</span>
        </div>
        <div style="display:flex;gap:8px">
          <button class="vg-clip-btn" id="vgClipBtn" type="button" title="从企业知识库剪藏素材">✂ 剪藏</button>
          <button class="vg-ai-pill-btn" id="vgKeywordAIBtn" type="button">✨ AI 一键生成</button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:16px">
        <div class="fg" style="margin-bottom:0">
          <span class="lb"><span style="color:#ef4444">*</span> 核心关键词</span>
          <select class="ipt" id="vgVideoCoreKeyword">
            <option value="360安全卫士" selected>360安全卫士</option>
            <option value="终端安全防护">终端安全防护 / EDR管理</option>
            <option value="勒索病毒拦截">勒索病毒拦截 / 安全大脑</option>
            <option value="AI安全大模型">AI安全大模型 / 360智脑</option>
            <option value="网络安全等级保护">网络安全等级保护合规套件</option>
          </select>
        </div>
        <div class="fg" style="margin-bottom:0">
          <span class="lb"><span style="color:#ef4444">*</span> 长尾关键词</span>
          <input class="ipt" id="vgVideoLongTail" value="360安全卫士极速版与企业版区别测评" placeholder="请输入长尾关键词" />
        </div>
        <div class="fg" style="margin-bottom:0">
          <span class="lb"><span style="color:#ef4444">*</span> 创作类型</span>
          <select class="ipt" id="vgVideoCreativeType">
            <option value="排行类" selected>排行类</option>
            <option value="测评推荐类">测评推荐类</option>
            <option value="避坑科普类">避坑科普类</option>
            <option value="探厂实测类">探厂实测类</option>
            <option value="痛点解决方案类">痛点解决方案类</option>
          </select>
        </div>
      </div>

      <!-- ■ 视频文案 -->
      <div class="vg-sub-header-row" style="margin-top:14px">
        <div class="vg-sub-header-title">
          <span style="color:#6366f1;font-size:11px">■</span>
          <span>视频文案</span>
        </div>
        <button class="vg-ai-pill-btn" id="vgCopyAIBtn" type="button">✨ AI 一键生成</button>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
        <div class="fg" style="margin-bottom:0">
          <span class="lb"><span style="color:#ef4444">*</span> 视频标题</span>
          <div class="vg-input-counter-wrap">
            <input class="ipt" id="vgVideoTitle" maxlength="30" placeholder="请输入视频标题" value="2026版360安全卫士深度测评与企业部署方案" />
            <span class="vg-counter" id="vgTitleCounter">21 / 30</span>
          </div>
        </div>
        <div class="fg" style="margin-bottom:0">
          <span class="lb"><span style="color:#ef4444">*</span> 话题标签</span>
          <div class="vg-input-counter-wrap">
            <input class="ipt" id="vgVideoTags" placeholder="请输入话题标签" value="#360安全卫士 #终端安全 #勒索病毒防御 #网络安全" />
            <span class="vg-counter" id="vgTagsCounter">3/5</span>
          </div>
          <div style="font-size:11.5px;color:#94a3b8;margin-top:4px">提示：最多输入5个话题标签，每个标签用回车分类</div>
        </div>
      </div>

      <div class="fg" style="margin-bottom:0">
        <span class="lb"><span style="color:#ef4444">*</span> 正文内容</span>
        <div class="vg-textarea-counter-wrap">
          <textarea class="ipt" id="vgVideoContent" rows="4" maxlength="150" placeholder="请输入正文内容">360安全科技自主研发云端安全大脑与自研AI杀毒双引擎。毫秒级识别未知勒索与木马威胁，拦截率高达99.98%，全方位守护企业与个人终端数据资产！</textarea>
          <span class="vg-textarea-counter" id="vgContentCounter">78 / 150</span>
        </div>
      </div>
    </div>

    <!-- 2 配置视频模型及画面参数 -->
    <div class="card vg-step-card" style="margin-bottom:16px;padding:22px 24px">
      <div class="vg-step-head">
        <span class="vg-step-badge-square">2</span>
        <span class="vg-step-title" style="font-size:16px">配置视频模型及画面参数</span>
      </div>

      <!-- 视频创作方式 Tabs -->
      <div style="margin-bottom:14px">
        <div style="font-size:13px;font-weight:700;color:#1e293b;margin-bottom:8px">
          <span style="color:#6366f1;font-size:11px">■</span> 视频创作方式 <span style="color:#ef4444">*</span>
        </div>
        <div class="vg-method-tabs" id="vgMethodTabs">
          <div class="vg-method-pill active" data-vmethod="quick">视频快剪</div>
          <div class="vg-method-pill" data-vmethod="ai">AI生成视频</div>
          <div class="vg-method-pill" data-vmethod="upload">上传视频</div>
        </div>
      </div>

      <!-- 计费提示 -->
      <div class="vg-alert-cost">
        <span style="font-size:14px">⚠️</span>
        <span>提示：1分钟消耗50积分，不满1分钟按1分钟计费</span>
      </div>

      <!-- 3-Panel Integrated Workspace -->
      <div class="vg-studio-grid">
        <!-- Left Vertical Nav -->
        <div class="vg-vertical-nav" id="vgVNav">
          <button type="button" class="vg-vnav-btn active" data-vtab="subtitles">
            <span>💬</span> 视频字幕
          </button>
          <button type="button" class="vg-vnav-btn" data-vtab="voice">
            <span>🎙️</span> 选择声音
          </button>
          <button type="button" class="vg-vnav-btn" data-vtab="styles">
            <span>🔤</span> 字幕样式
          </button>
          <button type="button" class="vg-vnav-btn" data-vtab="bgm">
            <span>🎧</span> 背景音乐
          </button>
        </div>

        <!-- Center Config Workspace -->
        <div class="vg-center-panel" id="vgCenterPanel">
          <!-- View 1: 视频字幕 (Default) -->
          <div id="vtabSubtitlesView">
            <div class="fg" style="margin-bottom:12px">
              <span class="lb"><span style="color:#ef4444">*</span> 素材分组</span>
              <select class="ipt" id="vgMaterialGroup">
                <option value="">请选择素材分组</option>
                <option value="g1" selected>360安全大脑可视化防御大屏与终端实测 (42支片段)</option>
                <option value="g2">现代化工业车间与全自动熔接片段 (36支片段)</option>
                <option value="g3">勒索病毒动态诱捕与数据秒级回滚实拍 (28支片段)</option>
                <option value="g4">大客户发货物流与装箱发运现场 (19支片段)</option>
              </select>
            </div>

            <div style="margin-top:14px">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                <div style="font-size:13px;font-weight:700;color:#1e293b">
                  <span style="color:#ef4444">*</span> 文案内容
                </div>
                <div style="display:flex;align-items:center;gap:12px">
                  <label style="display:flex;align-items:center;gap:5px;font-size:12px;color:#475569;cursor:pointer">
                    <input type="checkbox" id="vgVoiceToggle" checked style="accent-color:#6366f1" /> 开启原声
                  </label>
                  <select class="ipt" id="vgSpeedSelect" style="width:70px;padding:3px 8px;font-size:11.5px">
                    <option value="0.8">0.8X</option>
                    <option value="1.0" selected>1.0X</option>
                    <option value="1.2">1.2X</option>
                    <option value="1.5">1.5X</option>
                  </select>
                  <button class="vg-ai-pill-btn" id="vgSegmentAIBtn" type="button" style="padding:4px 10px;font-size:11px">✨ AI 一键生成</button>
                </div>
              </div>
              <div style="font-size:11.5px;color:#94a3b8;margin-bottom:8px">请先选择素材分组，再点击「AI 一键生成」；正文内容来自上方「策划文案」</div>

              <div class="vg-script-box-row">
                <div class="vg-video-upload-box" id="vgUploadVideoStub" title="点击可上传或替换分镜视频">
                  <span style="font-size:22px;color:#6366f1">＋</span>
                  <span>选择视频</span>
                </div>
                <div style="flex:1">
                  <textarea class="ipt" id="vgSegmentScript" rows="3" style="width:100%;height:100%;resize:none" placeholder="请输入文案内容">360安全科技自主研发云端安全大脑与自研AI杀毒双引擎。毫秒级识别未知勒索与木马威胁，拦截率高达99.98%，全方位守护企业与个人终端数据资产！</textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- View 2: 选择声音 -->
          <div id="vtabVoiceView" style="display:none">
            <div style="font-size:13px;font-weight:700;color:#1e293b;margin-bottom:6px">选择解说音色与语速</div>
            <div style="font-size:12px;color:#94a3b8;margin-bottom:12px">高拟真企业级AI大模型语音合成，支持多方言与商务解说风格</div>
            <div class="vg-voice-cards-grid">
              <div class="vg-voice-card active" data-voice="知性干练商务女声">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:24px">👩🏻‍💼</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">知性干练商务女声</div>
                    <div style="font-size:11px;color:#64748b">标准普通话 · 专业信赖感</div>
                  </div>
                </div>
                <button class="chip-mini on" type="button">已选用</button>
              </div>
              <div class="vg-voice-card" data-voice="沉稳大气科技男声">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:24px">👨🏻‍💼</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">沉稳大气科技男声</div>
                    <div style="font-size:11px;color:#64748b">磁性浑厚 · 实测背书</div>
                  </div>
                </div>
                <button class="chip-mini" type="button">选用</button>
              </div>
              <div class="vg-voice-card" data-voice="热情活力带货女主播">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:24px">💁🏻‍♀️</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">热情活力带货女主播</div>
                    <div style="font-size:11px;color:#64748b">节奏明快 · 高频促转化</div>
                  </div>
                </div>
                <button class="chip-mini" type="button">选用</button>
              </div>
              <div class="vg-voice-card" data-voice="粤语商务解说男声">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:24px">🙋🏻‍♂️</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">粤语商务解说男声</div>
                    <div style="font-size:11px;color:#64748b">科技质感音 · 商务沉稳</div>
                  </div>
                </div>
                <button class="chip-mini" type="button">选用</button>
              </div>
            </div>
          </div>

          <!-- View 3: 字幕样式 -->
          <div id="vtabStylesView" style="display:none">
            <div style="font-size:13px;font-weight:700;color:#1e293b;margin-bottom:6px">画面字幕排版样式</div>
            <div style="font-size:12px;color:#94a3b8;margin-bottom:12px">点击即时呈现在右侧手机模拟器中，自动随语音高亮逐字浮动</div>
            <div class="vg-style-chips-grid">
              <div class="vg-style-chip active" data-style="classic">
                <div style="font-size:13.5px;font-weight:800;color:#ffffff;background:#1e293b;padding:8px;border-radius:6px;text-shadow:0 1px 2px #000">经典白底黑描边</div>
                <div style="font-size:11px;color:#64748b;margin-top:4px">全场景通用 · 清晰度最高</div>
              </div>
              <div class="vg-style-chip" data-style="yellow">
                <div style="font-size:13.5px;font-weight:800;color:#facc15;background:#1e293b;padding:8px;border-radius:6px;text-shadow:0 1px 2px #000">抖音热播黄黑描边</div>
                <div style="font-size:11px;color:#64748b;margin-top:4px">短视频爆款 · 极具冲击力</div>
              </div>
              <div class="vg-style-chip" data-style="karaoke">
                <div style="font-size:13.5px;font-weight:800;color:#38bdf8;background:rgba(0,0,0,0.7);padding:8px;border-radius:6px">双色卡拉OK渐变</div>
                <div style="font-size:11px;color:#64748b;margin-top:4px">逐字音轨高亮 · 视线聚焦</div>
              </div>
              <div class="vg-style-chip" data-style="minimal">
                <div style="font-size:13.5px;font-weight:800;color:#ffffff;background:#334155;padding:8px;border-radius:6px">商业极简无框字体</div>
                <div style="font-size:11px;color:#64748b;margin-top:4px">高级雅致 · 品牌宣传适用</div>
              </div>
            </div>
          </div>

          <!-- View 4: 背景音乐 -->
          <div id="vtabBgmView" style="display:none">
            <div style="font-size:13px;font-weight:700;color:#1e293b;margin-bottom:6px">背景音乐 (BGM)</div>
            <div style="font-size:12px;color:#94a3b8;margin-bottom:12px">精选商用版权音乐库，自动根据人声口播做智能闪避</div>
            <div style="display:grid;gap:8px">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:16px">🎵</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">大气质感商务节奏 (Corporate Inspiring)</div>
                    <div style="font-size:11px;color:#64748b">BPM: 110 · 沉稳专业</div>
                  </div>
                </div>
                <button class="chip-mini on" id="bgmBtn1" type="button">当前选用</button>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;background:#fff">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:16px">🎵</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">现代科技脉冲节奏 (Tech Ambient Future)</div>
                    <div style="font-size:11px;color:#64748b">BPM: 124 · 极具高级感</div>
                  </div>
                </div>
                <button class="chip-mini" type="button">选用</button>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;background:#fff">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:16px">🎵</span>
                  <div>
                    <div style="font-size:13px;font-weight:700;color:#1e293b">轻快科普种草节拍 (Upbeat Cheerful)</div>
                    <div style="font-size:11px;color:#64748b">BPM: 118 · 抓人吸睛</div>
                  </div>
                </div>
                <button class="chip-mini" type="button">选用</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: iPhone Smartphone Realtime Simulator -->
        <div class="vg-phone-simulator-card">
          <div class="vg-phone-device">
            <div class="vg-phone-screen">
              <div class="vg-phone-island"></div>
              <div class="vg-phone-status-bar">
                <span>9:41</span>
                <span>📶 5G 🔋</span>
              </div>

              <div class="vg-phone-top-nav">
                <span>热点</span>
                <span>关注</span>
                <span>360安全</span>
                <span>商城</span>
                <span class="active">推荐</span>
              </div>

              <div class="vg-phone-video-canvas" id="vgPhoneVideoCanvas" style="background-image:url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80')">
              </div>

              <div class="vg-phone-play-btn" id="vgPhonePlayBtn" title="点击模拟播放短视频与口播朗读">
                ▶
              </div>

              <div class="vg-phone-subtitle-preview" id="vgPhoneSubtitleLayer">
                360安全科技自主研发安全大脑与终端主动防御
              </div>

              <div class="vg-phone-actions">
                <div class="vg-phone-action-item">
                  <div style="position:relative">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" style="width:32px;height:32px;border-radius:50%;border:1.5px solid #fff;object-fit:cover" />
                    <span style="position:absolute;bottom:-3px;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;border-radius:50%;width:13px;height:13px;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:800">+</span>
                  </div>
                </div>
                <div class="vg-phone-action-item" id="vgLikeBtn">
                  <div class="vg-phone-action-icon">❤️</div>
                  <span class="vg-phone-action-count" id="vgLikeCount">11.4w</span>
                </div>
                <div class="vg-phone-action-item">
                  <div class="vg-phone-action-icon">💬</div>
                  <span class="vg-phone-action-count">3245</span>
                </div>
                <div class="vg-phone-action-item">
                  <div class="vg-phone-action-icon">⭐</div>
                  <span class="vg-phone-action-count">892</span>
                </div>
                <div class="vg-phone-action-item">
                  <div class="vg-phone-action-icon">↗️</div>
                  <span class="vg-phone-action-count">1560</span>
                </div>
                <div class="vg-disc-spinner" title="音乐唱片">
                  <span style="font-size:11px">🎵</span>
                </div>
              </div>

              <div class="vg-phone-overlay">
                <div class="vg-phone-author">@360智见GEO企业官方</div>
                <div class="vg-phone-title" id="vgPhoneTitleText">2026版360安全卫士深度测评与企业部署方案</div>
                <div class="vg-phone-tags" id="vgPhoneTagsText">#360安全卫士 #终端安全 #勒索病毒防御 #网络安全</div>
                <div class="vg-phone-music">
                  <span>🎵</span>
                  <span id="vgPhoneMusicText">原声 - 360智见GEO智能播音 · 大气质感商务</span>
                </div>
              </div>
            </div>
          </div>
          <div style="font-size:11.5px;color:#94a3b8;margin-top:10px;text-align:center">
            📱 移动端 9:16 短视频实机渲染预览（实时所见即所得）
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Action Dock for Video Creation -->
    <div class="vg-dock-bar">
      <div style="display:flex;align-items:center;gap:12px">
        <span class="pill b" style="font-size:12px">⚡ 剃刀极简模式：全链路毫秒级实时联动</span>
        <span style="font-size:12px;color:#64748b">修改左侧任何关键词、文案、音色与样式，手机屏幕实时同步呈现</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <button class="btn" id="vgStartRenderBtn" type="button" style="background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border:none;box-shadow:0 4px 14px rgba(99,102,241,0.32)">
          <span>🎬</span> 一键合成短视频 (高清MP4)
        </button>
        <button class="btn o" id="vgSaveDraftBtn" type="button">📥 保存至文库</button>
        <button class="btn o" id="vgDispatchBtn" type="button" style="border-color:#6366f1;color:#4f46e5;font-weight:700">🚀 一键分发全网矩阵</button>
      </div>
    </div>
  </div>

  <!-- View 2: 图文创作 (Toggled via Top Tab) -->
  <div id="vgGraphicPanel" style="display:none">
    <div class="card vg-step-card" style="margin-bottom:16px;padding:22px 24px">
      <div class="vg-step-head">
        <span class="vg-step-badge-square">1</span>
        <span class="vg-step-title" style="font-size:16px">策划图文大纲与小红书/微信矩阵文案</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
        <div class="fg" style="margin-bottom:0">
          <span class="lb">图文标题</span>
          <input class="ipt" id="vgGraphicTitle" value="2026企业级终端安全防病毒与EDR选型避坑指南" placeholder="请输入图文标题" />
        </div>
        <div class="fg" style="margin-bottom:0">
          <span class="lb">图文标签</span>
          <input class="ipt" id="vgGraphicTags" value="#360安全科技 #终端安全 #网络安全 #等保合规" placeholder="请输入话题标签" />
        </div>
      </div>
      <div class="fg" style="margin-bottom:0">
        <span class="lb">图文正文内容</span>
        <textarea class="ipt" id="vgGraphicContent" rows="5" placeholder="请输入图文内容...">1. 资质合规审核：清掏作业需具备专业排污运输许可证与特种作业作业证。
2. 施工报价透明：严防中途以“管道重度结垢”为由坐地起价，坚持按车/按吨对公一口价。
3. 现代化作业设备：配备大功率吸污车与高压射流冲洗装置，彻底抽干见底并高压疏通管道。
4. 应急响应时效：商场与小区夜间突发外溢，要求市区内45分钟极速到达现场应急抢险！</textarea>
      </div>
    </div>

    <div class="card vg-step-card" style="margin-bottom:16px;padding:22px 24px">
      <div class="vg-step-head">
        <span class="vg-step-badge-square">2</span>
        <span class="vg-step-title" style="font-size:16px">配置图文多图画面与九宫格排版</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
        <div class="fg" style="margin-bottom:0">
          <span class="lb">配图生成数量</span>
          <select class="ipt" id="vgGraphicImageCount">
            <option value="1">1 张 (单图封面)</option>
            <option value="3">3 张 (图文三联卡)</option>
            <option value="4" selected>4 张 (四宫格 · 推荐)</option>
            <option value="6">6 张 (六宫格深度长文)</option>
          </select>
        </div>
        <div class="fg" style="margin-bottom:0">
          <span class="lb">画面构图比例</span>
          <select class="ipt" id="vgGraphicAspectRatio">
            <option value="3:4" selected>3:4 (新媒体图文 · 小红书/微信首选)</option>
            <option value="9:16">9:16 (手机全屏竖图)</option>
            <option value="1:1">1:1 (正方形卡片)</option>
            <option value="16:9">16:9 (横屏商业大图)</option>
          </select>
        </div>
      </div>
      <div class="card" style="background:#f8fafc;border-color:#e2e8f0;padding:16px">
        <div style="font-size:13.5px;font-weight:700;color:#1e293b;margin-bottom:10px">生成多图画廊预览</div>
        <div class="vg-gallery-grid" id="vgGraphicGalleryGrid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
          <div style="border-radius:8px;overflow:hidden;border:1px solid #cbd5e1;background:#fff">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" style="width:100%;height:160px;object-fit:cover" />
            <div style="padding:8px;font-size:11.5px;font-weight:700;color:#334155">图1 · 360安全大脑指挥大屏</div>
          </div>
          <div style="border-radius:8px;overflow:hidden;border:1px solid #cbd5e1;background:#fff">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80" style="width:100%;height:160px;object-fit:cover" />
            <div style="padding:8px;font-size:11.5px;font-weight:700;color:#334155">图2 · 终端主动防御与补丁修复</div>
          </div>
          <div style="border-radius:8px;overflow:hidden;border:1px solid #cbd5e1;background:#fff">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" style="width:100%;height:160px;object-fit:cover" />
            <div style="padding:8px;font-size:11.5px;font-weight:700;color:#334155">图3 · 等级保护三级合规认证</div>
          </div>
          <div style="border-radius:8px;overflow:hidden;border:1px solid #cbd5e1;background:#fff">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" style="width:100%;height:160px;object-fit:cover" />
            <div style="padding:8px;font-size:11.5px;font-weight:700;color:#334155">图4 · 360安全科技企业授权证书</div>
          </div>
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
<tr data-title="企业级终端安全软件怎么选？2026年360安全卫士与EDR采购实用指南"><td class="article-title">企业级终端安全软件怎么选？2026年360安全卫士与EDR采购实用指南</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:44</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="服务器防勒索病毒实战指南：360安全大脑主动防御与数据恢复"><td class="article-title">服务器防勒索病毒实战指南：360安全大脑主动防御与数据恢复</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-review">审核中</span></td><td>2026-07-17 17:38:43</td><td>2026-07-17 18:02:18</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="2026年网络安全等保2.0合规方案：主流安全厂商防御能力对照"><td class="article-title">2026年网络安全等保2.0合规方案：主流安全厂商防御能力对照</td><td><span class="article-type-pill">排行·盘点类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:43</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="企业终端防病毒测评报告怎么看？核心检出率与漏报率核验要点"><td class="article-title">企业终端防病毒测评报告怎么看？核心检出率与漏报率核验要点</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:07</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="企业网络安全防护层级解析：终端杀毒、网关防护与态势感知架构"><td class="article-title">企业网络安全防护层级解析：终端杀毒、网关防护与态势感知架构</td><td><span class="article-type-pill">知识科普类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:07</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="等级保护三级测评整改机构怎么选：资质、案例与产品服务清单"><td class="article-title">等级保护三级测评整改机构怎么选：资质、案例与产品服务清单</td><td><span class="article-type-pill">推荐·解法类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:06</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="360天擎集中管控平台部署周期多长？从测试打样到全网推行排期指南"><td class="article-title">360天擎集中管控平台部署周期多长？从测试打样到全网推行排期指南</td><td><span class="article-type-pill">采购指南类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:05</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="360安全大模型与传统杀毒引擎区别：AI自动化告警研判评测"><td class="article-title">360安全大模型与传统杀毒引擎区别：AI自动化告警研判评测</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:38:05</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="金融机构核心业务系统防勒索：微隔离与底层只读诱捕怎么选"><td class="article-title">金融机构核心业务系统防勒索：微隔离与底层只读诱捕怎么选</td><td><span class="article-type-pill">场景解决方案</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-17 17:37:32</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="食品级无纺布袋检测报告怎么读 采购方核验要点"><td class="article-title">国家等级保护安全产品认证证书怎么读：企业采购合规要点</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-done">知乎</span></td><td>2026-07-16 14:12:20</td><td>2026-07-16 15:08:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="2026年数字安全防护选型：五家主流网络安全厂商技术参数对照"><td class="article-title">2026年数字安全防护选型：五家主流网络安全厂商技术参数对照</td><td><span class="article-type-pill">排行·盘点类</span></td><td><span class="article-publish-done">头条号</span></td><td>2026-07-02 09:48:10</td><td>2026-07-02 10:24:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="食品级无纺布袋检测报告解读"><td class="article-title">食品级无纺布袋检测报告解读</td><td><span class="article-type-pill">行业问答类</span></td><td><span class="article-publish-done">知乎</span></td><td>2026-07-04 14:36:18</td><td>2026-07-04 15:08:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="外卖袋一般用什么材质"><td class="article-title">外卖袋一般用什么材质</td><td><span class="article-type-pill">知识科普类</span></td><td><span class="article-publish-done">客户产品官网</span></td><td>2026-07-08 09:10:32</td><td>2026-07-08 09:41:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="奶茶保温袋保温层工艺对照"><td class="article-title">奶茶保温袋保温层工艺对照</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-done">百家号</span></td><td>2026-07-12 11:20:14</td><td>2026-07-12 11:56:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr><tr data-title="无纺布卷材克重公差实测"><td class="article-title">无纺布卷材克重公差实测</td><td><span class="article-type-pill">评测·基准类</span></td><td><span class="article-publish-done">B2B联盟站群</span></td><td>2026-07-13 13:58:26</td><td>2026-07-13 14:30:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr></tbody></table><div class="article-empty" id="autoArticleEmpty">没有匹配当前关键词的自动化文章</div></div>
<div class="article-pagination"><span>共 941 条</span><select class="page-select"><option>10条/页</option><option>20条/页</option><option>50条/页</option></select><button class="page-num" disabled="">‹</button><button class="page-num on">1</button><button class="page-num">2</button><button class="page-num">3</button><button class="page-num">4</button><button class="page-num">5</button><button class="page-num">6</button><span class="page-ellipsis">…</span><button class="page-num">95</button><button class="page-num">›</button><span>前往</span><input class="ipt" style="width:54px;padding:5px 7px;text-align:center" value="1"/><span>页</span></div>
</div>
<div class="article-table-panel" data-article-panel="uploaded">
<div class="article-table-wrap"><table class="article-table" id="uploadedArticleTable"><colgroup><col style="width:36%"/><col style="width:13%"/><col style="width:15%"/><col style="width:15%"/><col style="width:13%"/><col style="width:8%"/></colgroup><thead><tr><th>标题</th><th>创作类型</th><th>已发布平台</th><th>生成时间</th><th>提交时间</th><th>操作</th></tr></thead><tbody>
<tr data-title="360安全科技企业介绍2026"><td class="article-title">360安全科技股份有限公司企业介绍 2026</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-done">客户产品官网</span></td><td>2026-07-14 09:22:10</td><td>2026-07-14 10:03:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="360天擎终端安全客户端安装与合规基线检查标准说明"><td class="article-title">360天擎终端安全客户端安装与合规基线检查标准说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-13 16:08:22</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="ISO9001质量管理体系资质解读"><td class="article-title">ISO9001 质量管理体系资质解读</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-12 11:30:48</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="大型央国企数字安全态势感知平台建设案例与交付说明"><td class="article-title">大型央国企数字安全态势感知平台建设案例与交付说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-11 10:18:03</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="360安全实验室国际权威安全测评认证报告说明"><td class="article-title">360安全实验室国际权威安全测评认证报告说明</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-done">百家号</span></td><td>2026-07-09 15:46:32</td><td>2026-07-09 16:20:00</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
<tr data-title="无纺布袋常见采购问题FAQ"><td class="article-title">企业终端安全管理系统常见部署问题 FAQ</td><td><span class="article-type-pill">人工上传</span></td><td><span class="article-publish-none">未发布</span></td><td>2026-07-08 13:12:51</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td></tr>
</tbody></table><div class="article-empty" id="uploadedArticleEmpty">没有匹配当前关键词的上传文章</div></div>
<div class="article-pagination"><span>共 <b id="uploadedTotal">6</b> 条</span><select class="page-select"><option>10条/页</option></select><button class="page-num" disabled="">‹</button><button class="page-num on">1</button><button class="page-num" disabled="">›</button></div>
</div>
</div>
<div class="modal-backdrop article-upload-modal" id="articleAddModal"><div class="modal"><div class="modal-head"><div class="modal-title">添加文章</div><button class="modal-close" id="articleAddClose" type="button">×</button></div><div class="modal-body"><div class="fg"><span class="lb">文章标题 <span class="req">*</span></span><input class="ipt" id="articleAddTitle" placeholder="请输入文章标题"/></div><div class="fg"><span class="lb">文章来源</span><select class="ipt" id="articleAddType"><option>人工录入</option><option>上传文档</option></select></div><div class="fg" style="margin-bottom:0"><span class="lb">正文内容</span><textarea class="ipt" id="articleAddContent" placeholder="可粘贴文章正文；原型演示不会真实上传至服务器" rows="6"></textarea></div></div><div class="modal-foot"><button class="btn o" id="articleAddCancel" type="button">取消</button><button class="btn" id="articleAddConfirm" type="button">保存文章</button></div></div></div>
</div>
<div class="page" id="pub">
<div class="media-library-tabs" id="mediaLibraryTabs"><button class="media-library-tab on" data-library="authority" type="button">私人媒体库 <span class="tab-count">5</span></button><button class="media-library-tab" data-library="private" type="button">权威媒体库 <span class="tab-count">2k+</span></button><button class="media-library-tab" data-library="public" type="button">公共媒体库 <span class="tab-count">12.8k+</span></button><button class="media-library-tab" data-library="b2b" type="button">B2B联盟 <span class="tab-count">4k+</span></button></div><div class="media-library-panel" data-library-panel="private"><div class="media-library-search" data-media-search="private"><input class="ipt media-library-search-input" placeholder="搜索媒体名称" type="text"/><button class="btn media-library-search-query" type="button">查询</button><button class="btn o media-library-search-reset" type="button">重置</button></div>
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
<div class="media-library-panel on" data-library-panel="authority">
<div class="private-media-head">
  <div><div class="private-media-title">私人媒体库</div><div class="private-media-sub">集中管理企业自有媒体账号授权。授权完成后，可直接从「发布记录」选择内容并发布到对应账号。</div></div>
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
    <tr data-platform="网易号" data-status="已授权"><td>1</td><td><span class="media-name">360安全科技官方号</span></td><td>网易号</td><td><span class="pill g">已授权</span></td><td>2026-06-30 14:08:02</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="头条号" data-status="已授权"><td>2</td><td><span class="media-name">360安全大脑观察</span></td><td>头条号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:15:20</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="搜狐号" data-status="已授权"><td>3</td><td><span class="media-name">360数字安全服务</span></td><td>搜狐号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:30:12</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="百家号" data-status="已授权"><td>4</td><td><span class="media-name">360安全科技官方</span></td><td>百家号</td><td><span class="pill g">已授权</span></td><td>2026-05-14 14:15:39</td><td><div class="private-account-actions"><button class="article-link pub-submit" type="button">投稿</button></div></td></tr>
    <tr data-platform="知乎" data-status="未授权"><td>5</td><td><span class="media-name">360数字安全知识号</span></td><td>知乎</td><td><span class="pill y">未授权</span></td><td>—</td><td><div class="private-account-actions"><button class="article-link private-account-auth" type="button">去授权</button></div></td></tr>
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
        <input class="ipt" id="sitepubNewAccountName" placeholder="例如：企业官方旗舰媒体号 / 360安全科技旗舰号" />
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
  <!-- Top Query Card -->
  <div class="card inc-reference-card" style="padding:24px 28px;border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;margin-bottom:20px;box-shadow:0 4px 16px rgba(0,0,0,0.03)">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div class="inc-reference-title" style="font-size:18px;font-weight:750;color:#1e293b">AI 收录查询</div>
      <button class="inc-history-link" id="incHistoryLink" type="button" style="font-size:12.5px;color:#2563eb;background:none;border:none;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:4px">
        <span>📜 查询历史记录</span> <span>→</span>
      </button>
    </div>
    <div class="inc-reference-desc" style="font-size:13px;color:#64748b;margin-bottom:18px;line-height:1.6">
      精准检测已发布文章是否被主流 AI 大模型采纳为可引用参考资料，或统计关键词场景下各平台高频引用的信源渠道偏好。
    </div>

    <!-- AI Platform Selector -->
    <div style="font-size:12.5px;font-weight:700;color:#334155;margin-bottom:10px">目标检测 AI 平台 (点击可多选 / 取消)</div>
    <div class="inc-platform-grid" id="incPlatformGrid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:20px">
      <button class="inc-platform-card on" data-inc-platform="豆包" type="button">
        <span class="inc-platform-icon icon-doubao">豆</span><b>豆包</b><i>✓</i>
      </button>
      <button class="inc-platform-card on" data-inc-platform="DeepSeek" type="button">
        <span class="inc-platform-icon icon-deepseek">D</span><b>DeepSeek</b><i>✓</i>
      </button>
      <button class="inc-platform-card on" data-inc-platform="文心一言" type="button">
        <span class="inc-platform-icon icon-wenxin">文</span><b>文心一言</b><i>✓</i>
      </button>
      <button class="inc-platform-card on" data-inc-platform="腾讯元宝" type="button">
        <span class="inc-platform-icon icon-yuanbao">元</span><b>腾讯元宝</b><i>✓</i>
      </button>
      <button class="inc-platform-card on" data-inc-platform="通义千问" type="button">
        <span class="inc-platform-icon icon-tongyi">通</span><b>通义千问</b><i>✓</i>
      </button>
      <button class="inc-platform-card on" data-inc-platform="Kimi" type="button">
        <span class="inc-platform-icon icon-kimi">K</span><b>Kimi</b><i>✓</i>
      </button>
    </div>

    <!-- Form row -->
    <div class="inc-reference-form-card" style="background:#f8fafc;padding:18px 22px;border-radius:12px;border:1.5px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.02)">
      <div class="inc-query-bar" style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <!-- 检测类型 -->
        <div class="inc-field-group" style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <label for="incModeSwitch" style="font-size:13px;font-weight:700;color:#334155;white-space:nowrap;margin:0;display:flex;align-items:center;gap:2px">
            <span style="color:#ef4444">*</span> 检测类型
          </label>
          <select class="ipt" id="incModeSwitch" style="height:42px;width:175px;border-radius:8px;border:1.5px solid #cbd5e1;font-weight:600;padding:0 12px;background:#ffffff;font-size:13px;color:#1e293b;cursor:pointer">
            <option value="url" selected>检测文章链接 (URL)</option>
            <option value="keyword">关键词 / 文章标题</option>
          </select>
        </div>

        <!-- 查询内容 -->
        <div class="inc-field-group" style="display:flex;align-items:center;gap:8px;flex:1;min-width:260px">
          <label for="incQueryInput" style="font-size:13px;font-weight:700;color:#334155;white-space:nowrap;margin:0;display:flex;align-items:center;gap:2px">
            <span style="color:#ef4444">*</span> 查询内容
          </label>
          <input class="ipt" id="incQueryInput" value="https://www.toutiao.com/article/7482915630..." placeholder="请输入待检测文章 URL 或业务关键词" style="height:42px;flex:1;border-radius:8px;border:1.5px solid #cbd5e1;padding:0 14px;background:#ffffff;font-size:13.5px;color:#1e293b;box-sizing:border-box" />
        </div>

        <!-- 重新查询 / 立即查询 按钮 (红框区域优化) -->
        <button class="btn inc-query-submit-btn" id="startInclusionQuery" type="button" style="height:42px;padding:0 26px;min-width:120px;font-size:14px;font-weight:750;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;border-radius:8px;border:none;box-shadow:0 4px 14px rgba(16,185,129,0.32);cursor:pointer;white-space:nowrap !important;display:inline-flex;align-items:center;justify-content:center;gap:8px;flex-shrink:0;transition:all 0.16s ease">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
          </svg>
          <span>重新查询</span>
        </button>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:10px;border-top:1px dashed #e2e8f0;flex-wrap:wrap;gap:8px">
        <span class="hint" id="incModeHint" style="font-size:12.5px;color:#64748b">
          URL模式：通过文章链接反查各 AI 平台是否已将该内容纳入可引用信源池。
        </span>
        <span class="inc-task-status" id="incTaskStatus" style="font-size:12px;color:#059669;font-weight:600;background:#ecfdf5;padding:3px 12px;border-radius:12px;border:1px solid #a7f3d0">
          URL 查询完成 · 已生成平台收录状态
        </span>
      </div>
    </div>
  </div>

  <!-- Result 1: URL Detection Table -->
  <div class="inc-result" id="incUrlResult">
    <div class="card inc-result-card" style="padding:22px 26px;border-radius:14px;border:1px solid #e2e8f0;margin-bottom:20px">
      <div class="inc-result-head" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <div class="ct" style="margin:0;font-size:16px;font-weight:750;color:#1e293b">各平台收录状态看板</div>
          <div class="cs" style="margin:3px 0 0;font-size:12.5px;color:#64748b">URL 查询完成后，逐平台展示当前内容的收录状态。已收录记录可点击查看引用快照。</div>
        </div>
        <span class="pill b" id="incUrlBadge" style="font-size:12px;padding:3px 10px;border-radius:12px">URL 检测结果</span>
      </div>
      <div class="table-scroll" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
        <table class="inc-platform-status-table" style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0">
              <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">AI平台</th>
              <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">收录状态</th>
              <th style="padding:12px 18px;text-align:right;color:#475569;font-weight:700">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr data-platform="豆包" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-doubao">豆</span>豆包</div></td>
              <td style="padding:13px 18px"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">已收录</span></td>
              <td style="padding:13px 18px;text-align:right"><button class="article-link inc-view-link" data-platform="豆包" type="button" style="color:#2563eb;font-weight:600;cursor:pointer">查看快照</button></td>
            </tr>
            <tr data-platform="DeepSeek" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-deepseek">D</span>DeepSeek</div></td>
              <td style="padding:13px 18px"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">已收录</span></td>
              <td style="padding:13px 18px;text-align:right"><button class="article-link inc-view-link" data-platform="DeepSeek" type="button" style="color:#2563eb;font-weight:600;cursor:pointer">查看快照</button></td>
            </tr>
            <tr data-platform="文心一言" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-wenxin">文</span>文心一言</div></td>
              <td style="padding:13px 18px"><span class="pill n" style="font-size:11.5px;padding:2px 8px;border-radius:10px;background:#f1f5f9;color:#64748b">未收录</span></td>
              <td style="padding:13px 18px;text-align:right"><span class="inc-disabled-action" style="color:#cbd5e1">—</span></td>
            </tr>
            <tr data-platform="腾讯元宝" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-yuanbao">元</span>腾讯元宝</div></td>
              <td style="padding:13px 18px"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">已收录</span></td>
              <td style="padding:13px 18px;text-align:right"><button class="article-link inc-view-link" data-platform="腾讯元宝" type="button" style="color:#2563eb;font-weight:600;cursor:pointer">查看快照</button></td>
            </tr>
            <tr data-platform="通义千问" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-tongyi">通</span>通义千问</div></td>
              <td style="padding:13px 18px"><span class="pill n" style="font-size:11.5px;padding:2px 8px;border-radius:10px;background:#f1f5f9;color:#64748b">未收录</span></td>
              <td style="padding:13px 18px;text-align:right"><span class="inc-disabled-action" style="color:#cbd5e1">—</span></td>
            </tr>
            <tr data-platform="Kimi" style="border-bottom:1px solid #f1f5f9">
              <td style="padding:13px 18px"><div class="inc-platform-name" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#1e293b"><span class="inc-platform-icon icon-kimi">K</span>Kimi</div></td>
              <td style="padding:13px 18px"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">已收录</span></td>
              <td style="padding:13px 18px;text-align:right"><button class="article-link inc-view-link" data-platform="Kimi" type="button" style="color:#2563eb;font-weight:600;cursor:pointer">查看快照</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Result 2: Keyword Channel Effect Table -->
  <div class="inc-result" id="incKeywordResult">
    <div class="card inc-result-card" style="padding:22px 26px;border-radius:14px;border:1px solid #e2e8f0;margin-bottom:20px">
      <div class="inc-result-head" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <div class="ct" style="margin:0;font-size:16px;font-weight:750;color:#1e293b">AI收录渠道效果</div>
          <div class="cs" style="margin:3px 0 0;font-size:12.5px;color:#64748b">分析当前关键词在不同 AI 平台回答中更常引用的信源渠道，辅助下一轮内容投放。</div>
        </div>
        <span class="pill b" id="incKeywordBadge" style="font-size:12px;padding:3px 10px;border-radius:12px">关键词：360终端安全防护</span>
      </div>

      <div class="inc-channel-tabs" id="incChannelTabs" style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <button class="inc-channel-tab on" data-channel-platform="all" type="button">⌘ 全部平台</button>
        <button class="inc-channel-tab" data-channel-platform="豆包" type="button">豆包</button>
        <button class="inc-channel-tab" data-channel-platform="DeepSeek" type="button">DeepSeek</button>
        <button class="inc-channel-tab" data-channel-platform="文心一言" type="button">文心一言</button>
        <button class="inc-channel-tab" data-channel-platform="腾讯元宝" type="button">腾讯元宝</button>
        <button class="inc-channel-tab" data-channel-platform="通义千问" type="button">通义千问</button>
        <button class="inc-channel-tab" data-channel-platform="Kimi" type="button">Kimi</button>
      </div>

      <div class="table-scroll" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
        <table class="inc-channel-table" id="incChannelTable" style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0">
              <th style="padding:12px 18px;width:70px;text-align:center;color:#475569;font-weight:700">排名</th>
              <th style="padding:12px 18px;text-align:left;color:#475569;font-weight:700">收录渠道</th>
              <th style="padding:12px 18px;text-align:center;color:#475569;font-weight:700">引用频次</th>
              <th style="padding:12px 18px;text-align:right;color:#475569;font-weight:700">信源建议</th>
            </tr>
          </thead>
          <tbody>
            <tr data-platforms="文心一言,豆包,DeepSeek" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-baijia">百</span>百家号</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">10</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">优先布局</span></td>
            </tr>
            <tr data-platforms="豆包,DeepSeek,Kimi" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-zhihu">知</span>知乎机构专栏</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">7</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">优先布局</span></td>
            </tr>
            <tr data-platforms="文心一言,通义千问" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-baike">百</span>百度百科 / 维基</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">3</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill b" style="font-size:11.5px;padding:2px 8px;border-radius:10px">权威补强</span></td>
            </tr>
            <tr data-platforms="DeepSeek,通义千问" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-b2b">阿</span>阿里巴巴1688 / 慧聪</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">2</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill y" style="font-size:11.5px;padding:2px 8px;border-radius:10px">B2B补强</span></td>
            </tr>
            <tr data-platforms="文心一言,豆包" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-news">新</span>新华网 / 权威党央媒</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">2</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill b" style="font-size:11.5px;padding:2px 8px;border-radius:10px">权威背书</span></td>
            </tr>
            <tr data-platforms="豆包,腾讯元宝,Kimi" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-wechat">微</span>微信公众平台</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">2</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">持续覆盖</span></td>
            </tr>
            <tr data-platforms="豆包,DeepSeek" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-toutiao">今</span>今日头条</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">2</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">持续覆盖</span></td>
            </tr>
            <tr data-platforms="DeepSeek,腾讯元宝" style="border-bottom:1px solid #f1f5f9">
              <td class="inc-rank-cell" style="padding:12px 18px;text-align:center"></td>
              <td style="padding:12px 18px;font-weight:600;color:#1e293b"><span class="channel-badge ch-site">行</span>数字安全科技观察网</td>
              <td style="padding:12px 18px;text-align:center;font-weight:700;color:#2563eb">2</td>
              <td style="padding:12px 18px;text-align:right"><span class="pill b" style="font-size:11.5px;padding:2px 8px;border-radius:10px">垂类补强</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<div class="inc-history-view" id="incHistoryView">
  <div class="inc-history-top" style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
    <button class="inc-history-back" id="incHistoryBack" type="button" style="padding:6px 14px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;cursor:pointer">← 返回</button>
    <div>
      <div class="ct" style="margin:0;font-size:16px;font-weight:750">收录查询历史记录</div>
      <div class="cs" style="margin:3px 0 0;font-size:12px;color:#64748b">查看历史检测任务、查询状态与报告结果。</div>
    </div>
  </div>
  <div class="card inc-history-card" style="padding:22px 26px;border-radius:14px;border:1px solid #e2e8f0">
    <div class="table-scroll" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
      <table class="inc-history-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0">
            <th style="padding:12px 18px;text-align:left;color:#475569">查询时间</th>
            <th style="padding:12px 18px;text-align:left;color:#475569">查询类型</th>
            <th style="padding:12px 18px;text-align:left;color:#475569">查询内容</th>
            <th style="padding:12px 18px;text-align:left;color:#475569">状态</th>
            <th style="padding:12px 18px;text-align:right;color:#475569">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr data-history-mode="keyword" data-history-query="360终端安全防护" style="border-bottom:1px solid #f1f5f9">
            <td style="padding:12px 18px;color:#64748b">2026-07-26 13:05:36</td>
            <td style="padding:12px 18px">关键词/文章标题</td>
            <td style="padding:12px 18px;font-weight:600;color:#1e293b">360终端安全防护</td>
            <td style="padding:12px 18px"><span class="pill g" style="font-size:11.5px;padding:2px 8px;border-radius:10px">已完成</span></td>
            <td style="padding:12px 18px;text-align:right"><button class="article-link inc-history-report" type="button" style="color:#2563eb;font-weight:600;cursor:pointer">查看报告</button></td>
          </tr>
          <tr data-history-mode="url" data-history-query="https://www.toutiao.com/article/7482915630..." style="border-bottom:1px solid #f1f5f9">
            <td style="padding:12px 18px;color:#64748b">2026-07-26 13:03:43</td>
            <td style="padding:12px 18px">文章链接(URL)</td>
            <td style="padding:12px 18px;font-family:monospace;color:#475569">https://www.toutiao.com/article/7482915630...</td>
            <td style="padding:12px 18px"><span class="pill n" style="font-size:11.5px;padding:2px 8px;border-radius:10px">查询中</span></td>
            <td style="padding:12px 18px;text-align:right"><button class="article-link inc-history-report muted" type="button" style="color:#94a3b8;cursor:default">查看报告</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
<div class="page" id="agent">
  <!-- Package Overview Banner Card -->
  <div class="card pkg-banner-card">
    <div class="pkg-banner-top">
      <div class="pkg-banner-info">
        <div class="pkg-title-row">
          <span class="pkg-vip-badge">企业旗舰版 VIP</span>
          <h2 class="pkg-plan-name">360智见GEO · 企业尊享年费套餐</h2>
          <span class="pill g" style="font-size:12px;font-weight:700">服务生效中</span>
        </div>
        <p class="pkg-banner-desc">
          当前企业主体：<b>360安全科技股份有限公司</b> ｜ 统一社会信用代码：<b>91120000786520775B</b>
        </p>
      </div>
      <div class="pkg-banner-action">
        <div class="pkg-period-box">
          <span class="pkg-period-label">服务有效周期</span>
          <span class="pkg-period-val">2026-01-01 至 2027-01-01 (剩余 270 天)</span>
        </div>
        <button class="btn pkg-recharge-btn" id="pkgOpenRechargeBtn" type="button">
          <span style="font-size:16px;margin-right:4px">⚡</span> 余额充值 / 升级套餐
        </button>
      </div>
    </div>
  </div>

  <!-- 4 Quota KPI Cards -->
  <div class="pkg-kpi-grid">
    <!-- 1. 账户可用余额 -->
    <div class="card pkg-kpi-card">
      <div class="pkg-kpi-head">
        <span class="pkg-kpi-icon gold">🪙</span>
        <span class="pkg-kpi-title">账户可用余额</span>
      </div>
      <div class="pkg-kpi-body">
        <div class="pkg-kpi-num"><small style="font-size:18px">¥</small><span id="pkgBalanceVal">28,650.00</span></div>
        <div class="pkg-kpi-progress"><div class="pkg-kpi-bar" style="width:72%"></div></div>
        <div class="pkg-kpi-sub">本月已消费 ¥11,350.00 ｜ 账户充值折扣 8.5折</div>
      </div>
      <div class="pkg-kpi-foot">
        <button class="btn o pkg-quick-recharge-btn" id="pkgQuickRechargeBtn" type="button">立即充值 ›</button>
      </div>
    </div>

    <!-- 2. GEO文章生成额度 -->
    <div class="card pkg-kpi-card">
      <div class="pkg-kpi-head">
        <span class="pkg-kpi-icon blue">✎</span>
        <span class="pkg-kpi-title">文章生成额度</span>
      </div>
      <div class="pkg-kpi-body">
        <div class="pkg-kpi-num"><span>3,842</span><small style="font-size:14px;color:#64748b;font-weight:500"> / 5,000篇</small></div>
        <div class="pkg-kpi-progress"><div class="pkg-kpi-bar blue" style="width:76.8%"></div></div>
        <div class="pkg-kpi-sub">已消耗 1,158 篇 ｜ 剩余 3,842 篇 (包含AI智能配图)</div>
      </div>
      <div class="pkg-kpi-foot">
        <span style="font-size:12px;color:#059669;font-weight:600">● 额度充足 (76.8%)</span>
      </div>
    </div>

    <!-- 3. 多模态视频/图文额度 -->
    <div class="card pkg-kpi-card">
      <div class="pkg-kpi-head">
        <span class="pkg-kpi-icon purple">🎞</span>
        <span class="pkg-kpi-title">多模态视频/图文</span>
      </div>
      <div class="pkg-kpi-body">
        <div class="pkg-kpi-num"><span>640</span><small style="font-size:14px;color:#64748b;font-weight:500"> / 1,000条</small></div>
        <div class="pkg-kpi-progress"><div class="pkg-kpi-bar purple" style="width:64%"></div></div>
        <div class="pkg-kpi-sub">已生成视频 215条 ｜ 图文 145组 ｜ 剩余 640条</div>
      </div>
      <div class="pkg-kpi-foot">
        <span style="font-size:12px;color:#6366f1;font-weight:600">● 额度充足 (64.0%)</span>
      </div>
    </div>

    <!-- 4. 全网收录检索点数 -->
    <div class="card pkg-kpi-card">
      <div class="pkg-kpi-head">
        <span class="pkg-kpi-icon green">▽</span>
        <span class="pkg-kpi-title">AI收录检测点数</span>
      </div>
      <div class="pkg-kpi-body">
        <div class="pkg-kpi-num"><span>85,200</span><small style="font-size:14px;color:#64748b;font-weight:500"> / 100,000次</small></div>
        <div class="pkg-kpi-progress"><div class="pkg-kpi-bar green" style="width:85.2%"></div></div>
        <div class="pkg-kpi-sub">涵盖 豆包、DeepSeek、Kimi、文心、元宝等6大模型</div>
      </div>
      <div class="pkg-kpi-foot">
        <span style="font-size:12px;color:#10b981;font-weight:600">● 额度充裕 (85.2%)</span>
      </div>
    </div>
  </div>

  <!-- Package Details & Features Matrix -->
  <div class="card pkg-detail-card">
    <div class="ct" style="margin-bottom:14px">
      <span>套餐专属功能特权矩阵</span>
      <span class="hint">企业旗舰版享全链路独占通道与专属大模型算力资源</span>
    </div>
    <div class="table-scroll">
      <table class="pkg-feature-table">
        <thead>
          <tr>
            <th style="width:25%">核心权益功能</th>
            <th style="width:35%">功能说明与配额规格</th>
            <th style="width:20%">当前用量统计</th>
            <th style="width:20%;text-align:right">权益状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>企业知识库文档存储</b></td>
            <td>支持 500 份核心资料入库，单文件上限 100MB</td>
            <td>已入库 5 份 / 上限 500 份</td>
            <td style="text-align:right"><span class="pill g">正常可用</span></td>
          </tr>
          <tr>
            <td><b>用户需求建模画像数</b></td>
            <td>无上限支持长尾场景模型构建与痛点推理</td>
            <td>已沉淀 4 组精品模型</td>
            <td style="text-align:right"><span class="pill g">无限畅享</span></td>
          </tr>
          <tr>
            <td><b>长尾词库挖掘能力</b></td>
            <td>独家 360安全大脑拓词引擎，日上限 50,000 词</td>
            <td>今日已挖掘 1,280 词</td>
            <td style="text-align:right"><span class="pill g">高速专线</span></td>
          </tr>
          <tr>
            <td><b>长文本GEO文章生成</b></td>
            <td>单篇支持 3000 字深度技术科普与采购指南长文</td>
            <td>本月已生成 128 篇</td>
            <td style="text-align:right"><span class="pill g">独占算力</span></td>
          </tr>
          <tr>
            <td><b>AI文章自动智能插图</b></td>
            <td>高画质无水印商业实拍图，单篇可选 1-5 张配图</td>
            <td>已配图 384 张</td>
            <td style="text-align:right"><span class="pill g">商业授权</span></td>
          </tr>
          <tr>
            <td><b>全网媒体多渠道分发</b></td>
            <td>覆盖权威媒体库 2k+、公共媒体 12.8k+ 与 B2B联盟</td>
            <td>已绑定 4 个自有新媒体矩阵</td>
            <td style="text-align:right"><span class="pill g">VIP通道</span></td>
          </tr>
          <tr>
            <td><b>专属客户经理与架构师</b></td>
            <td>7×24小时1对1专属技术支持与GEO优化策略指导</td>
            <td>专属顾问：程经理 (138 0000 2026)</td>
            <td style="text-align:right"><span class="pill b">专属尊享</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Package Consumption History -->
  <div class="card pkg-history-card" style="margin-top:16px">
    <div class="ct" style="margin-bottom:14px">
      <span>近期扣费与充值明细记录</span>
      <div style="display:flex;align-items:center;gap:10px">
        <select class="ipt" style="height:30px;font-size:12px;width:120px" id="pkgHistoryTypeFilter">
          <option value="all">全部类型</option>
          <option value="recharge">充值记录</option>
          <option value="consume">消费扣费</option>
        </select>
      </div>
    </div>
    <div class="table-scroll">
      <table class="pkg-history-table">
        <thead>
          <tr>
            <th>交易流水号</th>
            <th>业务类型</th>
            <th>变动项目</th>
            <th>变动金额 / 额度</th>
            <th>交易后余额</th>
            <th>时间</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody id="pkgHistoryTableBody">
          <tr>
            <td style="font-family:monospace;color:#64748b">TX202610050892</td>
            <td><span class="pill g">账户充值</span></td>
            <td>企业对公微信扫码充值 (优惠赠送10%)</td>
            <td style="color:#16a34a;font-weight:700">+¥10,000.00</td>
            <td style="font-weight:700">¥28,650.00</td>
            <td>2026-10-05 14:22:18</td>
            <td><span class="pill g">交易成功</span></td>
          </tr>
          <tr>
            <td style="font-family:monospace;color:#64748b">TX202610041103</td>
            <td><span class="pill b">额度消耗</span></td>
            <td>批量生成 GEO 深度文章 20 篇 (含插图)</td>
            <td style="color:#ef4444;font-weight:700">-20 篇额度</td>
            <td style="font-weight:700">3,842 篇</td>
            <td>2026-10-04 18:40:05</td>
            <td><span class="pill g">扣减完成</span></td>
          </tr>
          <tr>
            <td style="font-family:monospace;color:#64748b">TX202610032941</td>
            <td><span class="pill b">媒体投稿</span></td>
            <td>公共媒体资源「知乎机构内容池」投稿消耗</td>
            <td style="color:#ef4444;font-weight:700">-¥180.00</td>
            <td style="font-weight:700">¥18,650.00</td>
            <td>2026-10-03 16:15:30</td>
            <td><span class="pill g">扣减完成</span></td>
          </tr>
          <tr>
            <td style="font-family:monospace;color:#64748b">TX202609300588</td>
            <td><span class="pill g">套餐续费</span></td>
            <td>年度企业旗舰套餐到期提前自动续约</td>
            <td style="color:#16a34a;font-weight:700">+5,000 篇</td>
            <td style="font-weight:700">3,862 篇</td>
            <td>2026-09-30 10:00:00</td>
            <td><span class="pill g">生效成功</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
<div class="pub-picker-tip">从「发布记录」中选择 1 篇后确认投稿</div>
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
<div class="drawer-backdrop" id="articleViewDrawer" aria-hidden="true"><div class="article-drawer" role="dialog" aria-modal="true" aria-labelledby="drawerArticleTitle"><div class="drawer-head"><div><div class="drawer-kicker">ARTICLE PREVIEW</div><div class="drawer-title" id="drawerArticleTitle">文章预览</div></div><button class="drawer-close" id="articleDrawerClose" type="button" aria-label="关闭">×</button></div><div class="drawer-body"><div class="drawer-meta"><div class="drawer-meta-item"><span>创作类型</span><b id="drawerArticleType">—</b></div><div class="drawer-meta-item"><span>发布状态</span><b id="drawerArticleStatus">—</b></div><div class="drawer-meta-item"><span>生成时间</span><b id="drawerArticleGenerated">—</b></div><div class="drawer-meta-item"><span>提交时间</span><b id="drawerArticleSubmitted">—</b></div></div><div class="drawer-preview" id="drawerArticlePreview"><h2>内容预览</h2><p class="preview-note">当前高保真原型以文章列表元数据为主。正式接入文章生成 API 后，此区域可直接渲染 content HTML 全文。</p></div></div><div class="drawer-foot"><button class="btn o" id="articleCopyTitle" type="button">复制标题</button><button class="btn" id="articleDrawerDone" type="button">完成</button></div></div></div>

<!-- ================= 余额充值 / 升级套餐弹窗 (一比一复刻图片二) ================= -->
<div class="modal-backdrop" id="pkgRechargeModal">
  <div class="modal pkg-recharge-modal-box">
    <div class="modal-head pkg-recharge-modal-head">
      <div>
        <div class="modal-title" style="font-size:18px;font-weight:800;color:#1e293b">账户余额充值与额度续费</div>
        <div style="font-size:12.5px;color:#64748b;margin-top:3px">充值即时到账，支持开具增值税专用发票 / 普通发票</div>
      </div>
      <button class="modal-close" id="pkgRechargeClose" type="button" aria-label="关闭">×</button>
    </div>
    <div class="modal-body" style="padding:24px 26px">
      <!-- Current Balance Banner inside Modal -->
      <div class="pkg-modal-balance-banner">
        <div>
          <span style="font-size:12.5px;color:#64748b">当前充值账户主体</span>
          <div style="font-size:15px;font-weight:700;color:#1e293b;margin-top:2px">360安全科技股份有限公司</div>
        </div>
        <div style="text-align:right">
          <span style="font-size:12.5px;color:#64748b">当前可用余额</span>
          <div style="font-size:20px;font-weight:800;color:#ea580c;margin-top:2px">¥<span id="pkgModalCurrentBalance">28,650.00</span></div>
        </div>
      </div>

      <!-- Select Recharge Amount (Card Tier Options) -->
      <div style="margin-top:20px">
        <div style="font-size:14px;font-weight:700;color:#1e293b;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between">
          <span>选择充值金额</span>
          <span style="font-size:12px;color:#059669;font-weight:600">🎁 充值金额越大，赠送额度越多</span>
        </div>
        <div class="pkg-amount-grid" id="pkgAmountGrid">
          <!-- Option 1 -->
          <div class="pkg-amount-card" data-amount="1000" data-bonus="50">
            <div class="pkg-card-top-tag">新手试用</div>
            <div class="pkg-card-price"><small>¥</small>1,000</div>
            <div class="pkg-card-bonus">赠送 ¥50 余额</div>
            <div class="pkg-card-desc">约可生成 200 篇深度长文</div>
          </div>

          <!-- Option 2 -->
          <div class="pkg-amount-card" data-amount="3000" data-bonus="200">
            <div class="pkg-card-price"><small>¥</small>3,000</div>
            <div class="pkg-card-bonus">赠送 ¥200 余额</div>
            <div class="pkg-card-desc">约可生成 650 篇深度长文</div>
          </div>

          <!-- Option 3 (Popular) -->
          <div class="pkg-amount-card on" data-amount="5000" data-bonus="500">
            <div class="pkg-card-top-tag red">超值推荐</div>
            <div class="pkg-card-price"><small>¥</small>5,000</div>
            <div class="pkg-card-bonus">赠送 ¥500 余额 + 100条视频</div>
            <div class="pkg-card-desc">约可生成 1,200 篇深度长文</div>
          </div>

          <!-- Option 4 -->
          <div class="pkg-amount-card" data-amount="10000" data-bonus="1500">
            <div class="pkg-card-top-tag gold">企业特惠</div>
            <div class="pkg-card-price"><small>¥</small>10,000</div>
            <div class="pkg-card-bonus">赠送 ¥1,500 余额 + 300条视频</div>
            <div class="pkg-card-desc">约可生成 2,500 篇深度长文</div>
          </div>

          <!-- Option 5 -->
          <div class="pkg-amount-card" data-amount="20000" data-bonus="4000">
            <div class="pkg-card-top-tag purple">尊享年度</div>
            <div class="pkg-card-price"><small>¥</small>20,000</div>
            <div class="pkg-card-bonus">赠送 ¥4,000 余额 + 专属顾问</div>
            <div class="pkg-card-desc">约可生成 5,500 篇深度长文</div>
          </div>

          <!-- Option 6 (Custom) -->
          <div class="pkg-amount-card custom" id="pkgAmountCustomCard">
            <div class="pkg-card-price" style="font-size:16px;margin-bottom:6px">自定义金额</div>
            <input class="ipt pkg-custom-ipt" id="pkgCustomAmountInput" type="number" min="100" placeholder="输入金额(¥)" />
            <div class="pkg-card-desc" style="margin-top:6px">最低充值 ¥100</div>
          </div>
        </div>
      </div>

      <!-- Select Payment Method -->
      <div style="margin-top:24px">
        <div style="font-size:14px;font-weight:700;color:#1e293b;margin-bottom:12px">支付方式</div>
        <div class="pkg-pay-methods" id="pkgPayMethods">
          <button class="pkg-pay-method-btn on" data-method="wechat" type="button">
            <span class="pkg-pay-icon wechat">💬</span>
            <div style="text-align:left">
              <div style="font-weight:700;font-size:13.5px;color:#1e293b">微信支付</div>
              <div style="font-size:11px;color:#64748b">支持微信扫码 / 微信对公快捷支付</div>
            </div>
          </button>
          <button class="pkg-pay-method-btn" data-method="alipay" type="button">
            <span class="pkg-pay-icon alipay">🔷</span>
            <div style="text-align:left">
              <div style="font-weight:700;font-size:13.5px;color:#1e293b">支付宝</div>
              <div style="font-size:11px;color:#64748b">企业支付宝 / 个人实时转账</div>
            </div>
          </button>
          <button class="pkg-pay-method-btn" data-method="bank" type="button">
            <span class="pkg-pay-icon bank">🏛️</span>
            <div style="text-align:left">
              <div style="font-weight:700;font-size:13.5px;color:#1e293b">企业对公转账</div>
              <div style="font-size:11px;color:#64748b">大额充值首选，支持专属对公银行账户</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Invoice Option Checkbox -->
      <div style="margin-top:18px;background:#f8fafc;padding:12px 16px;border-radius:10px;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between">
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#334155;cursor:pointer">
          <input type="checkbox" id="pkgInvoiceCheck" checked style="width:16px;height:16px;accent-color:var(--primary)"/>
          <span>充值成功后自动开具增值税专用发票 (电子发票)</span>
        </label>
        <span style="font-size:12px;color:#64748b">抬头：360安全科技股份有限公司</span>
      </div>

      <!-- QR Code / Checkout Summary Box -->
      <div class="pkg-checkout-box">
        <div class="pkg-qr-preview">
          <!-- Simulated WeChat QR Code -->
          <div class="pkg-qr-code-img">
            <svg viewBox="0 0 100 100" width="120" height="120">
              <rect width="100" height="100" fill="#ffffff"/>
              <!-- Corner 1 -->
              <rect x="10" y="10" width="28" height="28" fill="#1e293b" rx="4"/>
              <rect x="16" y="16" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="20" y="20" width="8" height="8" fill="#1e293b"/>
              <!-- Corner 2 -->
              <rect x="62" y="10" width="28" height="28" fill="#1e293b" rx="4"/>
              <rect x="68" y="16" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="72" y="20" width="8" height="8" fill="#1e293b"/>
              <!-- Corner 3 -->
              <rect x="10" y="62" width="28" height="28" fill="#1e293b" rx="4"/>
              <rect x="16" y="68" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="20" y="72" width="8" height="8" fill="#1e293b"/>
              <!-- Data dots -->
              <rect x="44" y="12" width="6" height="6" fill="#1e293b"/>
              <rect x="52" y="20" width="6" height="6" fill="#1e293b"/>
              <rect x="44" y="32" width="6" height="6" fill="#1e293b"/>
              <rect x="12" y="46" width="6" height="6" fill="#1e293b"/>
              <rect x="26" y="48" width="6" height="6" fill="#1e293b"/>
              <rect x="44" y="44" width="12" height="12" fill="#1e293b" rx="2"/>
              <rect x="62" y="46" width="8" height="8" fill="#1e293b"/>
              <rect x="78" y="48" width="6" height="6" fill="#1e293b"/>
              <rect x="46" y="64" width="8" height="8" fill="#1e293b"/>
              <rect x="60" y="62" width="6" height="6" fill="#1e293b"/>
              <rect x="76" y="64" width="10" height="10" fill="#1e293b"/>
              <rect x="46" y="80" width="12" height="8" fill="#1e293b"/>
              <rect x="68" y="80" width="8" height="8" fill="#1e293b"/>
              <!-- Center Logo -->
              <circle cx="50" cy="50" r="8" fill="#059669"/>
              <text x="50" y="54" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">360</text>
            </svg>
          </div>
          <div style="font-size:12px;color:#64748b;margin-top:6px;text-align:center">
            请使用 <b id="pkgPayTypeNameText" style="color:#1e293b">微信</b> 扫一扫完成支付
          </div>
        </div>

        <div class="pkg-checkout-info">
          <div class="pkg-checkout-row">
            <span>充值金额</span>
            <b id="pkgCheckoutBaseVal">¥5,000.00</b>
          </div>
          <div class="pkg-checkout-row" style="color:#059669">
            <span>赠送奖励</span>
            <b id="pkgCheckoutBonusVal">+¥500.00 (赠100条视频)</b>
          </div>
          <div class="pkg-checkout-row">
            <span>手续费 / 税费</span>
            <b style="color:#10b981">¥0.00 (平台减免)</b>
          </div>
          <div class="pkg-checkout-divider"></div>
          <div class="pkg-checkout-row total">
            <span>实付总计</span>
            <div class="pkg-checkout-total-num">¥<span id="pkgCheckoutTotalVal">5,000.00</span></div>
          </div>
          <div style="margin-top:14px;display:flex;gap:10px">
            <button class="btn" id="pkgSimulatePayBtn" type="button" style="flex:1;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;box-shadow:0 4px 14px rgba(16,185,129,0.36);font-size:14px;font-weight:700;padding:10px">
              ✓ 我已完成扫码支付 (立即入账)
            </button>
            <button class="btn o" id="pkgRechargeCancelBtn" type="button" style="padding:10px 16px">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
