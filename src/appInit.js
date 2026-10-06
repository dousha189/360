// 360智见GEO 企业AI搜索可见性优化平台 - Client Runtime
export function initApp() {
  if (window.__appInitialized) return;
  window.__appInitialized = true;

  try {

const pageMeta = {
  dash: ['首页概览', '全网AI搜索场景覆盖与GEO增长数据总览'],
  inc: ['收录查询', '精准检测文章在各大AI大模型的收录状态与信源偏好'],
  kb: ['企业知识库', '维护企业事实、主体资质、核心业务与产品知识源'],
  persona: ['人群画像', '从核心产品反推人群特征、搜索场景与采购决策考量'],
  kw: ['关键词挖掘', '基于知识库与语义Agent智能挖掘长尾词与高潜搜索词条'],
  gen: ['内容创作', '组合核心检索词、长尾词、图谱与红线生成深度长文'],
  videographic: ['视频/图文', '多模态AI短视频与新媒体图文内容生成中心'],
  articles: ['发布记录', '统一沉淀全量自动化生成文章与人工上传文档'],
  pub: ['文章发布', '选择私人媒体库或权威矩阵媒体一键分发投稿'],
  agent: ['我的套餐', '企业服务套餐余量、功能配额明细与账户余额充值']
};

window.__geoSwitchPage = function(pageId) {
  if (!pageId) return;
  const target = document.getElementById(pageId);
  if (!target) return;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  target.classList.add('on');

  document.querySelectorAll('.nav a').forEach(a => {
    const match = a.dataset.p === pageId;
    a.classList.toggle('on', match);
    a.setAttribute('aria-current', match ? 'page' : 'false');
  });

  const m = pageMeta[pageId] || ['360智见GEO', '企业AI搜索可见性优化平台'];
  const kicker = document.getElementById('headerKicker');
  const title = document.getElementById('ht');
  const sub = document.getElementById('headerSubtitle');
  if (kicker) {
    if (['dash', 'inc'].includes(pageId)) kicker.textContent = '监测与分析';
    else if (['agent'].includes(pageId)) kicker.textContent = '服务与账户';
    else kicker.textContent = 'GEO 内容增长';
  }
  if (title) title.textContent = m[0];
  if (sub) sub.textContent = m[1];

  if (location.hash.slice(1) !== pageId) {
    history.replaceState(null, '', '#' + pageId);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
};

document.querySelectorAll('.nav a[data-p]').forEach(a => {
  a.onclick = (e) => {
    e.preventDefault();
    window.__geoSwitchPage(a.dataset.p);
  };
});
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{
 if(c.parentNode.dataset.multi){c.classList.toggle('on');return}
 [...c.parentNode.children].forEach(x=>x.classList.remove('on'));c.classList.add('on');});

// Keep wide enterprise tables usable on narrower screens.
document.querySelectorAll('table').forEach(t=>{
 if(t.parentElement.classList.contains('table-scroll'))return;
 const w=document.createElement('div');w.className='table-scroll';
 const cols=t.rows[0]?t.rows[0].cells.length:0;if(cols>=7)w.classList.add('wide');
 t.parentNode.insertBefore(w,t);w.appendChild(t);
});

const toast = document.querySelector('.toast') || (() => { const t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); return t; })();
let toastTimer;
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}


// The growth-loop steps are also navigation shortcuts for live demos.
document.querySelectorAll('.geo-step[data-jump]').forEach(step=>step.onclick=()=>{
 const target=step.dataset.jump;const nav=document.querySelector('.nav a[data-p="'+target+'"]');if(nav)nav.click();
});

// Enterprise knowledge-base, upstream/downstream field sync, and demo interactions.
const enterpriseName=document.getElementById('enterpriseName');
const creditCode=document.getElementById('creditCode');
const industryName=document.getElementById('industryName');
const businessAddress=document.getElementById('businessAddress');
const companyContact=document.getElementById('companyContact');
const companyContactPhone=document.getElementById('companyContactPhone');
const companyContactEmail=document.getElementById('companyContactEmail');
const companyCompletion=document.getElementById('companyCompletion');
const slotC=document.getElementById('slotC');
const licenseInput=document.getElementById('licenseFileInput');
const licenseFileName=document.getElementById('licenseFileName');
let licenseReady=true;
let companyInfoSaved=true;
function requiredCompanyReady(){const basic=[enterpriseName,creditCode,industryName,businessAddress,companyContact,companyContactPhone,companyContactEmail].every(x=>x&&x.value.trim());const phoneOk=/^[0-9+()\-\s]{6,24}$/.test(companyContactPhone.value.trim());const emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyContactEmail.value.trim());return basic&&phoneOk&&emailOk&&licenseReady}
function refreshCompanyState(){
 const ok=requiredCompanyReady();
 companyCompletion.textContent=ok?'● 已完成主体认证':'● 基本信息待完善';
 companyCompletion.style.color=ok?'#12835a':'#a86b10';
 companyCompletion.style.background=ok?'#e9f8f1':'#fff5e3';
 companyCompletion.style.borderColor=ok?'#d4eedf':'#f4ddaf';
 if(slotC)slotC.value=enterpriseName.value.trim();
 return ok;
}
[enterpriseName,creditCode,industryName,businessAddress,companyContact,companyContactPhone,companyContactEmail].forEach(x=>x&&x.addEventListener('input',()=>{companyInfoSaved=false;refreshCompanyState();companyCompletion.textContent='● 基本信息待保存';companyCompletion.style.color='#a86b10';companyCompletion.style.background='#fff5e3';companyCompletion.style.borderColor='#f4ddaf'}));
document.getElementById('saveCompanyInfo').onclick=()=>{
 if(!refreshCompanyState()){showToast('请补全企业信息、联系人电话/邮箱与营业执照');return}
 companyInfoSaved=true;refreshCompanyState();showToast('企业基本信息已保存，并同步到内容创作');
};
document.getElementById('licenseUploadBtn').onclick=()=>licenseInput.click();
licenseInput.onchange=()=>{const f=licenseInput.files&&licenseInput.files[0];if(!f)return;licenseFileName.textContent=f.name;licenseReady=true;companyInfoSaved=false;refreshCompanyState();companyCompletion.textContent='● 基本信息待保存';companyCompletion.style.color='#a86b10';companyCompletion.style.background='#fff5e3';companyCompletion.style.borderColor='#f4ddaf';showToast('营业执照已更新，请保存基本信息')};

const kbModal=document.getElementById('kbUploadModal');
const kbInput=document.getElementById('kbFileInput');
const kbTable=document.getElementById('kbTable');
const kbDocType=document.getElementById('kbDocType');
const kbModalTitle=document.getElementById('kbModalTitle');
let replaceRow=null;
function closeKbModal(){kbModal.classList.remove('show');replaceRow=null}
function openKbModal(row){
 if(!refreshCompanyState()||!companyInfoSaved){showToast('请先完善并保存企业基本信息');document.querySelector('.nav a[data-p="kb"]').click();return}
 replaceRow=row||null;kbInput.value='';kbDocType.value=row?row.querySelector('.doc-type').textContent.trim():'';
 kbModalTitle.textContent=row?'替换知识库文档':'上传企业文档';kbModal.classList.add('show');
}
function bindKbRow(row){
 row.querySelector('.kb-replace').onclick=()=>openKbModal(row);
 row.querySelector('.kb-delete').onclick=()=>{const name=row.querySelector('.doc-name').textContent.trim();if(confirm('确认删除「'+name+'」？')){row.remove();showToast('文档已删除')}};
}
document.getElementById('kbUploadTop').onclick=()=>openKbModal(null);
document.querySelectorAll('#kbTable tr').forEach((row,i)=>{if(i>0)bindKbRow(row)});
document.getElementById('kbModalClose').onclick=closeKbModal;
document.getElementById('kbModalCancel').onclick=closeKbModal;
kbModal.addEventListener('click',e=>{if(e.target===kbModal)closeKbModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&kbModal.classList.contains('show'))closeKbModal()});
document.getElementById('kbModalConfirm').onclick=()=>{
 const f=kbInput.files&&kbInput.files[0];const type=kbDocType.value;
 if(!type){showToast('请选择文件类型');kbDocType.focus();return}
 if(!f){showToast('请选择要上传的文档');kbInput.focus();return}
 if(replaceRow){replaceRow.querySelector('.doc-name').textContent=f.name;replaceRow.querySelector('.doc-type').textContent=type;showToast('文档已替换并重新进入知识库处理')}
 else{
   const row=kbTable.insertRow(-1);row.innerHTML='<td class="doc-name"></td><td class="doc-type"></td><td><div class="op-actions"><button class="action-btn kb-replace"><span class="action-icon">↥</span>上传</button><button class="action-btn danger kb-delete"><span class="action-icon">⌫</span>删除</button></div></td>';
   row.querySelector('.doc-name').textContent=f.name;row.querySelector('.doc-type').textContent=type;bindKbRow(row);showToast('文档已加入企业知识库');
 }
 closeKbModal();
};

// Keyword entity source -> persona products & content creation core keywords.
const keywordEntities = document.getElementById('keywordEntities');
const personaCoreSelect = document.getElementById('personaCoreKeywordSelect');
const personaLongTailSelect = document.getElementById('personaLongTailSelect');
const coreKeywordSelect = document.getElementById('coreKeywordSelect');
const longTailSelect = document.getElementById('longTailSelect');

function getEntities() {
  return [...new Set((keywordEntities?.value || '').split(/\n+/).map(x => x.trim()).filter(Boolean))];
}

function syncEntities() {
  const entities = getEntities();
  const entityPill = document.getElementById('entityCountPill');
  if (entityPill) entityPill.textContent = entities.length + ' 个核心实体';

  if (coreKeywordSelect) {
    const prev = coreKeywordSelect.value;
    coreKeywordSelect.innerHTML = '';
    entities.forEach(x => {
      const o = document.createElement('option');
      o.value = o.textContent = x;
      coreKeywordSelect.appendChild(o);
    });
    if (entities.includes(prev)) coreKeywordSelect.value = prev;
  }

  if (personaCoreSelect) {
    const prevP = personaCoreSelect.value;
    personaCoreSelect.innerHTML = '';
    entities.forEach(x => {
      const o = document.createElement('option');
      o.value = o.textContent = x;
      personaCoreSelect.appendChild(o);
    });
    if (entities.includes(prevP)) personaCoreSelect.value = prevP;
  }

  const kwEntity = document.getElementById('kwEntityFilter');
  if (kwEntity) {
    const curFilter = kwEntity.value;
    kwEntity.innerHTML = '<option value="">全部核心实体</option>';
    entities.forEach(v => {
      const o = document.createElement('option');
      o.value = o.textContent = v;
      kwEntity.appendChild(o);
    });
    if (entities.includes(curFilter)) kwEntity.value = curFilter;
  }

  syncLongTails();
}

function syncLongTails() {
  const core = coreKeywordSelect?.value || personaCoreSelect?.value || '';
  const rows = [...document.querySelectorAll('#longTailTable tr')].slice(1);
  const items = rows
    .filter(r => r.cells[1] && r.cells[1].textContent.trim() === core)
    .map(r => r.cells[0]?.textContent.trim())
    .filter(Boolean);

  if (longTailSelect) {
    longTailSelect.innerHTML = '';
    if (!items.length) {
      const o = document.createElement('option');
      o.textContent = '暂无匹配长尾词';
      o.disabled = true;
      o.selected = true;
      longTailSelect.appendChild(o);
    } else {
      items.forEach(x => {
        const o = document.createElement('option');
        o.value = o.textContent = x;
        longTailSelect.appendChild(o);
      });
    }
  }

  if (personaLongTailSelect) {
    personaLongTailSelect.innerHTML = '';
    if (!items.length) {
      const o = document.createElement('option');
      o.textContent = '暂无匹配长尾词';
      o.disabled = true;
      o.selected = true;
      personaLongTailSelect.appendChild(o);
    } else {
      items.forEach(x => {
        const o = document.createElement('option');
        o.value = o.textContent = x;
        personaLongTailSelect.appendChild(o);
      });
    }
  }
}

keywordEntities?.addEventListener('input', () => {
  document.getElementById('persona')?.classList.remove('agent-generated');
  syncEntities();
  if (typeof applyKwFilters === 'function') applyKwFilters();
});
coreKeywordSelect?.addEventListener('change', () => {
  if (personaCoreSelect) personaCoreSelect.value = coreKeywordSelect.value;
  syncLongTails();
  if (typeof updateGenerationSummary === 'function') updateGenerationSummary();
});
personaCoreSelect?.addEventListener('change', () => {
  if (coreKeywordSelect) coreKeywordSelect.value = personaCoreSelect.value;
  syncLongTails();
  if (typeof updateGenerationSummary === 'function') updateGenerationSummary();
});
syncEntities();
refreshCompanyState();
// Shared Agent icon interactions.
const personaAgentBtn=document.getElementById('personaAgentBtn');
const personaPage=document.getElementById('persona');
if(personaAgentBtn)personaAgentBtn.onclick=()=>{
 personaAgentBtn.classList.add('running');personaAgentBtn.setAttribute('aria-busy','true');
 setTimeout(()=>{personaPage?.classList.add('agent-generated');personaAgentBtn.classList.remove('running');personaAgentBtn.removeAttribute('aria-busy');showToast('人群画像 Agent 已完成分析')},650);
};

// Long-tail keyword generation Agent
const prefixAgent=document.getElementById('prefixSuffixAgent');
if (prefixAgent) {
  prefixAgent.onclick = () => {
    if (!getEntities().length) {
      showToast('请先填写至少一个核心实体');
      return;
    }
    prefixAgent.classList.add('running');
    prefixAgent.setAttribute('aria-busy', 'true');
    const lastRun = document.getElementById('agentLastRun');
    if (lastRun) lastRun.textContent = 'Agent 挖掘中…';
    setTimeout(() => {
      prefixAgent.classList.remove('running');
      prefixAgent.removeAttribute('aria-busy');
      if (lastRun) lastRun.textContent = '刚刚已挖掘';
      showToast('长尾词挖掘 Agent 已完成智能拓词与质检');
    }, 700);
  };
}
// Media library tabs: private/public/authority/B2B.
const mediaLibraryTabs=document.getElementById('mediaLibraryTabs');
if(mediaLibraryTabs){
 mediaLibraryTabs.addEventListener('click',e=>{const btn=e.target.closest('.media-library-tab');if(!btn)return;const key=btn.dataset.library;mediaLibraryTabs.querySelectorAll('.media-library-tab').forEach(x=>x.classList.toggle('on',x===btn));document.querySelectorAll('#pub .media-library-panel').forEach(p=>p.classList.toggle('on',p.dataset.libraryPanel===key));});
 document.querySelectorAll('#pub .library-alt-table .alt-price').forEach((el,i)=>el.textContent=(i*11+7)%51);
}

// All Articles: tabs, title search, view/delete and add article modal.
const articleTabs=document.getElementById('articleTabs');
const articleSearchInput=document.getElementById('articleSearchInput');
let activeArticleTab='auto';
function activeArticlePanel(){return document.querySelector('[data-article-panel="'+activeArticleTab+'"]')}
function filterArticleRows(){const panel=activeArticlePanel();if(!panel)return;const q=(articleSearchInput?.value||'').trim().toLowerCase();let visible=0;panel.querySelectorAll('tbody tr').forEach(row=>{const ok=!q||(row.dataset.title||'').toLowerCase().includes(q);row.style.display=ok?'':'none';if(ok)visible++});const empty=panel.querySelector('.article-empty');if(empty)empty.classList.toggle('show',visible===0)}
if(articleTabs){articleTabs.addEventListener('click',e=>{const btn=e.target.closest('.article-tab');if(!btn)return;activeArticleTab=btn.dataset.articleTab;articleTabs.querySelectorAll('.article-tab').forEach(x=>x.classList.toggle('on',x===btn));document.querySelectorAll('.article-table-panel').forEach(p=>p.classList.toggle('on',p.dataset.articlePanel===activeArticleTab));filterArticleRows()})}
document.getElementById('articleSearchBtn')?.addEventListener('click',filterArticleRows);
articleSearchInput?.addEventListener('keydown',e=>{if(e.key==='Enter')filterArticleRows()});
document.getElementById('articleSearchReset')?.addEventListener('click',()=>{articleSearchInput.value='';filterArticleRows()});
document.getElementById('articles')?.addEventListener('click',e=>{const view=e.target.closest('.article-view');if(view){const title=view.closest('tr').querySelector('.article-title').textContent.trim();showToast('正在打开文章：「'+title+'」');return}const del=e.target.closest('.article-delete');if(del){const row=del.closest('tr');const title=row.querySelector('.article-title').textContent.trim();if(confirm('确认删除文章「'+title+'」？')){row.remove();showToast('文章已删除');filterArticleRows();refreshUploadedCount()}}});
const articleAddModal=document.getElementById('articleAddModal');
function setArticleAddModal(show){articleAddModal?.classList.toggle('show',show)}
document.getElementById('articleAddBtn')?.addEventListener('click',()=>setArticleAddModal(true));
document.getElementById('articleAddClose')?.addEventListener('click',()=>setArticleAddModal(false));
document.getElementById('articleAddCancel')?.addEventListener('click',()=>setArticleAddModal(false));
articleAddModal?.addEventListener('click',e=>{if(e.target===articleAddModal)setArticleAddModal(false)});
function refreshUploadedCount(){const n=document.querySelectorAll('#uploadedArticleTable tbody tr').length;const a=document.getElementById('uploadedArticleCount'),b=document.getElementById('uploadedTotal');if(a)a.textContent=n;if(b)b.textContent=n}
document.getElementById('articleAddConfirm')?.addEventListener('click',()=>{const title=document.getElementById('articleAddTitle').value.trim();if(!title){showToast('请填写文章标题');return}const type=document.getElementById('articleAddType').value;const tbody=document.querySelector('#uploadedArticleTable tbody');const tr=document.createElement('tr');tr.dataset.title=title;const d=new Date(Math.min(Date.now(),new Date('2026-07-30T23:59:59').getTime()));const now=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');tr.innerHTML='<td class="article-title"></td><td><span class="article-type-pill"></span></td><td><span class="article-publish-none">未发布</span></td><td>'+now+'</td><td>—</td><td><div class="article-actions"><button class="article-link article-view">查看</button><button class="article-link danger article-delete">删除</button></div></td>';tr.querySelector('.article-title').textContent=title;tr.querySelector('.article-type-pill').textContent=type;tbody.prepend(tr);document.getElementById('articleAddTitle').value='';document.getElementById('articleAddContent').value='';setArticleAddModal(false);refreshUploadedCount();showToast('文章已添加到「上传的文章」')});
refreshUploadedCount();

// Article-publishing media filters and mock marketplace interactions.
const pubFilterPanel=document.getElementById('pubFilterPanel');
const pubMediaTable=document.getElementById('pubMediaTable');
if(pubFilterPanel&&pubMediaTable){
 const pubRows=[...pubMediaTable.tBodies[0].rows];
 const pubCount=document.getElementById('pubVisibleCount');
 const pubFootCount=document.getElementById('pubFootCount');
 const pubFilterCount=document.getElementById('pubFilterCount');
 const pubEmpty=document.getElementById('pubEmpty');
 // Required mock rule: every media price is generated in the 0-50 range.
 pubRows.forEach((r,i)=>{const price=(i*7+13)%51;r.dataset.priceValue=String(price);r.querySelector('.pub-price').textContent=price});
 function selectedPubFilters(){const out={};pubFilterPanel.querySelectorAll('.pub-filter-row').forEach(row=>{const active=row.querySelector('.pub-filter-option.on');out[row.dataset.key]=active?active.dataset.value:'不限'});return out}
 function pubMatch(row,key,value){if(!value||value==='不限')return true;if(key==='sort')return true;if(key==='price'){const p=Number(row.dataset.priceValue||0);if(value==='0~50')return p>=0&&p<=50;if(value==='50~200')return p>50&&p<=200;if(value==='200~500')return p>200&&p<=500;if(value==='500~1000')return p>500&&p<=1000;if(value==='1000~2000')return p>1000&&p<=2000;if(value==='2000~5000')return p>2000&&p<=5000;if(value==='5000以上')return p>5000;return true}
  if(key==='geo'){return value==='所有'||(row.dataset.geo||'').split(',').includes(value)}
  return (row.dataset[key]||'')===value;
 }
 function pubSortRows(sort){const body=pubMediaTable.tBodies[0];const visible=pubRows.filter(r=>r.style.display!=='none');const hidden=pubRows.filter(r=>r.style.display==='none');const maps={
  '价格升序':['priceValue',1],'价格降序':['priceValue',-1],'AI收录率升序':['ai',1],'AI收录率降序':['ai',-1],'出稿率升序':['output',1],'出稿率降序':['output',-1],'出稿时间升序':['days',1],'出稿时间降序':['days',-1],'活跃度升序':['active',1],'活跃度降序':['active',-1]
 };
  if(maps[sort]){const [key,dir]=maps[sort];visible.sort((a,b)=>(Number(a.dataset[key])-Number(b.dataset[key]))*dir)}
  [...visible,...hidden].forEach(r=>body.appendChild(r));
 }
 function applyPubFilters(){const filters=selectedPubFilters();const q=(document.querySelector('[data-media-search=\"private\"] .media-library-search-input')?.value||'').trim().toLowerCase();let shown=0;pubRows.forEach(r=>{const name=(r.querySelector('.media-name')?.textContent||'').trim().toLowerCase();const ok=Object.entries(filters).every(([k,v])=>pubMatch(r,k,v))&&(!q||name.includes(q));r.style.display=ok?'':'none';if(ok)shown++});pubSortRows(filters.sort);pubCount.textContent=shown;pubFootCount.textContent=shown;pubFilterCount.textContent=shown+' 家媒体';pubEmpty.classList.toggle('show',shown===0)}
 window.__applyPrivateMediaFilters=applyPubFilters;
 pubFilterPanel.addEventListener('click',e=>{const btn=e.target.closest('.pub-filter-option');if(!btn)return;const row=btn.closest('.pub-filter-row');row.querySelectorAll('.pub-filter-option').forEach(x=>x.classList.remove('on'));btn.classList.add('on');applyPubFilters()});
 document.getElementById('pubFilterReset').onclick=()=>{pubFilterPanel.querySelectorAll('.pub-filter-row').forEach(row=>{row.querySelectorAll('.pub-filter-option').forEach(x=>x.classList.remove('on'));const first=row.querySelector('.pub-filter-option[data-value="不限"]')||row.querySelector('.pub-filter-option');if(first)first.classList.add('on')});applyPubFilters();showToast('媒体筛选条件已重置')};
 applyPubFilters();
}

// Media library search: each tab owns its query/reset state.
document.querySelectorAll('#pub .media-library-search').forEach(box=>{
 const panel=box.closest('.media-library-panel');
 const key=box.dataset.mediaSearch;
 const input=box.querySelector('.media-library-search-input');
 const queryBtn=box.querySelector('.media-library-search-query');
 const resetBtn=box.querySelector('.media-library-search-reset');
 function applySearch(){
   if(key==='private'){window.__applyPrivateMediaFilters?.();return}
   const q=(input.value||'').trim().toLowerCase();
   const table=panel.querySelector('.pub-resource-table');if(!table)return;
   let shown=0;[...table.tBodies[0].rows].forEach(row=>{const name=(row.querySelector('.media-name')?.textContent||'').trim().toLowerCase();const ok=!q||name.includes(q);row.style.display=ok?'':'none';if(ok)shown++});
   const count=panel.querySelector('.pub-resource-meta b');if(count)count.textContent=shown;
 }
 queryBtn.addEventListener('click',applySearch);
 resetBtn.addEventListener('click',()=>{input.value='';applySearch()});
 input.addEventListener('keydown',e=>{if(e.key==='Enter')applySearch()});
});

// Article quantity selection (1-20 articles)
const articleCountSelect = document.getElementById('articleCount');


// Ranking detection lifecycle: results and diagnostic report do not exist visually before detection.
const startRankingTest=document.getElementById('startRankingTest');
const rankingResults=document.getElementById('rankingResults');
const rankTaskStatus=document.getElementById('rankTaskStatus');
const openDiagnosticReport=document.getElementById('openDiagnosticReport');
const diagnosticReportTemplate=document.getElementById('diagnosticReportTemplate');
if(startRankingTest&&rankingResults){
 startRankingTest.addEventListener('click',()=>{
  rankingResults.classList.remove('show');
  startRankingTest.disabled=true;startRankingTest.textContent='检测中…';
  if(rankTaskStatus){rankTaskStatus.className='rank-task-status running';rankTaskStatus.textContent='正在调用 6 个 AI 平台并生成排名诊断…'}
  setTimeout(()=>{
   rankingResults.classList.add('show');startRankingTest.disabled=false;startRankingTest.textContent='重新检测';
   if(rankTaskStatus){rankTaskStatus.className='rank-task-status done';rankTaskStatus.textContent='检测完成 · 36 条结果 · 诊断报告已生成'}
   showToast('排名检测完成，诊断报告已生成');
   rankingResults.scrollIntoView({behavior:'smooth',block:'start'});
  },720);
 });
}
function buildDiagnosticDocument(){
 const baseStyle=Array.from(document.querySelectorAll('style')).map(s=>s.textContent||'').join('\n')||'';
 const reportHtml=diagnosticReportTemplate?.innerHTML||'';
 return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI搜索可见性诊断报告 · 360智见GEO</title><link rel="stylesheet" href="https://miaoda.feishu.cn/fonts/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap"><style>'+baseStyle+`\nbody.report-window{display:block;min-height:100vh;background:#f3f7f5;padding:0;color:#1f2937}.report-window-top{position:sticky;top:0;z-index:30;height:64px;padding:0 34px;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #e6ece9}.report-window-brand{display:flex;align-items:center;gap:11px;font-size:16px;font-weight:800}.report-window-logo{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(145deg,#10b981,#059669);color:#fff}.report-window-meta{font-size:12px;color:#64748b}.report-window-actions{display:flex;align-items:center;gap:10px}.report-print{border:1px solid #dfe5e2;background:#fff;color:#526069;border-radius:9px;padding:7px 13px;font:inherit;font-size:12px;font-weight:650;cursor:pointer}.report-document-wrap{max-width:1320px;margin:0 auto;padding:24px 28px 48px}.report-document-title{margin-bottom:18px}.report-document-title h1{font-size:24px;line-height:1.25;margin-bottom:5px}.report-document-title p{font-size:12.5px;color:#64748b}.report-document-wrap>.card{margin-bottom:16px}.report-window .geo-step{cursor:default}.report-window .chip{cursor:default}@media print{.report-window-top{display:none}.report-document-wrap{max-width:none;padding:0}.card{box-shadow:none!important;break-inside:avoid}}`+'</style></head><body class="report-window"><div class="report-window-top"><div><div class="report-window-brand"><span class="report-window-logo">◎</span>360智见GEO · AI搜索可见性诊断报告</div><div class="report-window-meta">AI搜索收录检测报告 · 第3期 · 2026-07-14</div></div><div class="report-window-actions"><button class="report-print" onclick="window.print()">打印 / 导出 PDF</button></div></div><div class="report-document-wrap"><div class="report-document-title"><h1>AI 搜索可见性诊断报告</h1><p>基于本次 6 个问题 × 6 个 AI 平台的排名 / 品牌曝光检测结果自动生成</p></div>'+reportHtml+'</div></body></html>';
}
if(openDiagnosticReport&&diagnosticReportTemplate){
 openDiagnosticReport.addEventListener('click',()=>{
  const reportWindow=window.open('','_blank');
  if(!reportWindow){showToast('浏览器拦截了新窗口，请允许弹窗后重试');return}
  reportWindow.document.open();reportWindow.document.write(buildDiagnosticDocument());reportWindow.document.close();
 });
}

// Inclusion query: reference-style URL/keyword modes + history subview.
const incModeSwitch=document.getElementById('incModeSwitch');
const incQueryInput=document.getElementById('incQueryInput');
const incModeHint=document.getElementById('incModeHint');
const incTaskStatus=document.getElementById('incTaskStatus');
const startInclusionQuery=document.getElementById('startInclusionQuery');
const incUrlResult=document.getElementById('incUrlResult');
const incKeywordResult=document.getElementById('incKeywordResult');
const incKeywordBadge=document.getElementById('incKeywordBadge');
const incUrlBadge=document.getElementById('incUrlBadge');
const incMainView=document.getElementById('incMainView');
const incHistoryView=document.getElementById('incHistoryView');
const incHistoryLink=document.getElementById('incHistoryLink');
const incHistoryBack=document.getElementById('incHistoryBack');
const incQueryMemory={url:'https://www.toutiao.com/article/7482915630...',keyword:'360终端安全防护'};
let incMode='url';
function resetInclusionResults(){incUrlResult?.classList.remove('show');incKeywordResult?.classList.remove('show');if(incTaskStatus){incTaskStatus.className='inc-task-status';incTaskStatus.textContent='请选择检测类型并提交查询'}if(startInclusionQuery){startInclusionQuery.disabled=false;startInclusionQuery.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span>立即查询</span>'}}
function setInclusionMode(mode,keepResult=false){if(!['url','keyword'].includes(mode))return;incQueryMemory[incMode]=incQueryInput.value;incMode=mode;if(incModeSwitch)incModeSwitch.value=mode;incQueryInput.value=incQueryMemory[mode];if(mode==='url'){incQueryInput.placeholder='请输入文章 URL';incModeHint.textContent='URL模式：通过文章链接反查各 AI 平台是否已将该内容纳入可引用信源池。'}else{incQueryInput.placeholder='请输入行业词、品类词或文章标题';incModeHint.textContent='关键词模式：统计 AI 回答常引用的信源渠道，并按引用次数形成渠道效果排行。'}if(!keepResult)resetInclusionResults()}
incModeSwitch?.addEventListener('change',()=>setInclusionMode(incModeSwitch.value));
document.getElementById('incPlatformGrid')?.addEventListener('click',e=>{const b=e.target.closest('.inc-platform-card');if(!b)return;b.classList.toggle('on');const selected=document.querySelectorAll('#incPlatformGrid .inc-platform-card.on').length;if(!selected){b.classList.add('on');showToast('至少保留一个 AI 平台')}});
startInclusionQuery?.addEventListener('click',()=>{const q=incQueryInput.value.trim();if(!q){incQueryInput.focus();showToast(incMode==='url'?'请输入待检测 URL':'请输入查询关键词');return}const selected=[...document.querySelectorAll('#incPlatformGrid .inc-platform-card.on')].map(x=>x.dataset.incPlatform);if(!selected.length){showToast('请至少选择一个 AI 平台');return}incQueryMemory[incMode]=q;incUrlResult?.classList.remove('show');incKeywordResult?.classList.remove('show');startInclusionQuery.disabled=true;startInclusionQuery.innerHTML='<span style="display:inline-flex;align-items:center;gap:6px">⏳ 查询中…</span>';incTaskStatus.className='inc-task-status running';incTaskStatus.textContent=incMode==='url'?'正在查询 '+selected.length+' 个 AI 平台的收录状态…':'正在统计 '+selected.length+' 个 AI 平台的信源引用渠道…';setTimeout(()=>{startInclusionQuery.disabled=false;startInclusionQuery.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg><span>重新查询</span>';incTaskStatus.className='inc-task-status done';if(incMode==='url'){if(incUrlBadge)incUrlBadge.textContent='已检测 '+selected.length+' 个平台';document.querySelectorAll('#incUrlResult tbody tr').forEach(r=>r.style.display=selected.includes(r.dataset.platform)?'':'none');incUrlResult.classList.add('show');incTaskStatus.textContent='URL 查询完成 · 已生成平台收录状态';incUrlResult.scrollIntoView({behavior:'smooth',block:'start'})}else{if(incKeywordBadge)incKeywordBadge.textContent='关键词：'+q;incKeywordResult.classList.add('show');incTaskStatus.textContent='关键词查询完成 · 已生成 AI 收录渠道效果';applyChannelFilter('all');incKeywordResult.scrollIntoView({behavior:'smooth',block:'start'})}},620)});
document.querySelectorAll('.inc-view-link').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.platform+'：已打开收录详情（原型）')));
function setIncHistory(open){incMainView?.classList.toggle('hidden',open);incHistoryView?.classList.toggle('show',open);const h=document.getElementById('ht');const sub=document.getElementById('headerSubtitle');if(open){if(h)h.textContent='收录查询 · 历史记录';if(sub)sub.textContent='查看过往AI收录检测任务与结果'}else{if(h)h.textContent='收录查询';if(sub)sub.textContent='验证文章与关键词是否进入AI可引用信源池';window.scrollTo({top:0,behavior:'smooth'})}}
incHistoryLink?.addEventListener('click',()=>setIncHistory(true));incHistoryBack?.addEventListener('click',()=>setIncHistory(false));
document.querySelectorAll('.inc-history-report').forEach(b=>b.addEventListener('click',()=>{const row=b.closest('tr');if(b.classList.contains('muted')){showToast('该任务仍在查询中，请稍后查看');return}const mode=row.dataset.historyMode||'url',q=row.dataset.historyQuery||'';setIncHistory(false);incQueryMemory[mode]=q;setInclusionMode(mode,true);incQueryInput.value=q;incTaskStatus.className='inc-task-status done';if(mode==='url'){incUrlResult.classList.add('show');incKeywordResult.classList.remove('show')}else{incKeywordResult.classList.add('show');incUrlResult.classList.remove('show');if(incKeywordBadge)incKeywordBadge.textContent='关键词：'+q;applyChannelFilter('all')}setTimeout(()=>document.querySelector(mode==='url'?'#incUrlResult':'#incKeywordResult')?.scrollIntoView({behavior:'smooth',block:'start'}),30)}));
function applyChannelFilter(platform){const rows=[...document.querySelectorAll('#incChannelTable tbody tr')];let rank=0;rows.forEach(r=>{const ok=platform==='all'||(r.dataset.platforms||'').split(',').includes(platform);r.style.display=ok?'':'none';if(ok){rank++;const cell=r.querySelector('.inc-rank-cell');if(cell){if(rank===1)cell.innerHTML='<span class="rank-medal gold">1</span>';else if(rank===2)cell.innerHTML='<span class="rank-medal silver">2</span>';else if(rank===3)cell.innerHTML='<span class="rank-medal bronze">3</span>';else cell.textContent=rank}}});}
document.getElementById('incChannelTabs')?.addEventListener('click',e=>{const b=e.target.closest('.inc-channel-tab');if(!b)return;document.querySelectorAll('#incChannelTabs .inc-channel-tab').forEach(x=>x.classList.toggle('on',x===b));applyChannelFilter(b.dataset.channelPlatform)});applyChannelFilter('all');

  } catch(err) {
    console.error('Error in core script 5:', err);
  }

  try {

// v9: 投稿必须先从「发布记录」中选择文章；同时覆盖旧版直接投稿行为。
(()=>{
 const pubPage=document.getElementById('pub');
 const picker=document.getElementById('pubArticlePickerModal');
 if(!pubPage||!picker)return;
 const body=picker.querySelector('#pubPickerTableBody');
 const search=picker.querySelector('#pubPickerSearch');
 const empty=picker.querySelector('#pubPickerEmpty');
 const confirmBtn=picker.querySelector('#pubPickerConfirm');
 const selectedTitleEl=picker.querySelector('#pubPickerSelectedTitle');
 const mediaNameEl=picker.querySelector('#pubPickerMediaName');
 let activeTab='auto';
 let selectedArticle=null;
 let activeSubmitButton=null;
 let activeMediaName='';
 let activeLibrary='private';

 function sourceTable(){return document.getElementById(activeTab==='auto'?'autoArticleTable':'uploadedArticleTable')}
 function sourceRows(tab){const t=document.getElementById(tab==='auto'?'autoArticleTable':'uploadedArticleTable');return t?[...t.tBodies[0].rows]:[]}
 function syncCounts(){const a=sourceRows('auto').length,u=sourceRows('uploaded').length;picker.querySelector('#pubPickerAutoCount').textContent=a;picker.querySelector('#pubPickerUploadedCount').textContent=u}
 function resetSelection(){selectedArticle=null;selectedTitleEl.textContent='暂未选择文章';confirmBtn.disabled=true}
 function articleDataFromRow(row){
  const cells=row.querySelectorAll('td');
  return {title:(cells[0]?.textContent||row.dataset.title||'').trim(),type:(cells[1]?.textContent||'').trim(),published:(cells[2]?.textContent||'').trim(),generated:(cells[3]?.textContent||'').trim(),submitted:(cells[4]?.textContent||'').trim(),sourceRow:row};
 }
 function render(){
  const q=(search.value||'').trim().toLowerCase();body.innerHTML='';let shown=0;
  sourceRows(activeTab).forEach(row=>{
   const d=articleDataFromRow(row);if(q&&!d.title.toLowerCase().includes(q))return;shown++;
   const tr=document.createElement('tr');tr.className='pub-picker-row';tr.dataset.articleTitle=d.title;
   tr.innerHTML='<td class="article-title"></td><td><span class="article-type-pill"></span></td><td></td><td></td><td></td><td><span class="pub-picker-radio" aria-hidden="true"></span></td>';
   tr.children[0].textContent=d.title;tr.querySelector('.article-type-pill').textContent=d.type;tr.children[2].textContent=d.published;tr.children[3].textContent=d.generated;tr.children[4].textContent=d.submitted;
   tr.addEventListener('click',()=>{body.querySelectorAll('tr').forEach(x=>x.classList.remove('selected'));tr.classList.add('selected');selectedArticle=d;selectedTitleEl.textContent=d.title;confirmBtn.disabled=false});
   body.appendChild(tr);
  });
  empty.classList.toggle('show',shown===0);
 }
 function setOpen(open){picker.classList.toggle('show',open);if(!open){activeSubmitButton=null;activeMediaName='';resetSelection()}}
 function openPicker(btn){
  activeSubmitButton=btn;const row=btn.closest('tr');activeMediaName=row?.querySelector('.media-name')?.textContent.trim()||'当前媒体';activeLibrary=btn.closest('.media-library-panel')?.dataset.libraryPanel||'private';
  mediaNameEl.textContent=activeMediaName;activeTab='auto';search.value='';picker.querySelectorAll('[data-picker-tab]').forEach(x=>x.classList.toggle('on',x.dataset.pickerTab==='auto'));resetSelection();syncCounts();render();setOpen(true);
 }
 // Capture phase prevents the legacy table listeners from turning 投稿 into 已投稿 immediately.
 pubPage.addEventListener('click',e=>{const btn=e.target.closest('.pub-submit');if(!btn)return;e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();openPicker(btn)},true);
 picker.querySelector('#pubPickerClose').addEventListener('click',()=>setOpen(false));
 picker.querySelector('#pubPickerCancel').addEventListener('click',()=>setOpen(false));
 picker.addEventListener('click',e=>{if(e.target===picker)setOpen(false)});
 picker.querySelector('#pubPickerTabs').addEventListener('click',e=>{const b=e.target.closest('[data-picker-tab]');if(!b)return;activeTab=b.dataset.pickerTab;picker.querySelectorAll('[data-picker-tab]').forEach(x=>x.classList.toggle('on',x===b));resetSelection();render()});
 picker.querySelector('#pubPickerSearchBtn').addEventListener('click',()=>{resetSelection();render()});
 picker.querySelector('#pubPickerSearchReset').addEventListener('click',()=>{search.value='';resetSelection();render()});
 search.addEventListener('keydown',e=>{if(e.key==='Enter'){resetSelection();render()}});
 confirmBtn.addEventListener('click',()=>{
  if(!selectedArticle)return;
  const now=new Date(Math.min(Date.now(),new Date('2026-07-30T23:59:59').getTime()));const yyyy=now.getFullYear(),mm=String(now.getMonth()+1).padStart(2,'0'),dd=String(now.getDate()).padStart(2,'0'),hh=String(now.getHours()).padStart(2,'0'),mi=String(now.getMinutes()).padStart(2,'0'),ss=String(now.getSeconds()).padStart(2,'0');
  const submitted=yyyy+'-'+mm+'-'+dd+' '+hh+':'+mi+':'+ss;
  const sourceRow=selectedArticle.sourceRow;
  if(sourceRow){
   const cells=sourceRow.querySelectorAll('td');
   if(cells[2])cells[2].innerHTML='<span class="article-publish-review">审核中</span>';
   if(cells[4])cells[4].textContent=submitted;
   sourceRow.dataset.pendingMedia=activeMediaName;
   sourceRow.dataset.submitTime=submitted;
  }
  if(activeSubmitButton){activeSubmitButton.classList.add('done');activeSubmitButton.textContent='已投稿'}
  const title=selectedArticle.title,media=activeMediaName;setOpen(false);showToast('「'+title+'」已提交至「'+media+'」，文章状态更新为审核中');

 });
})();

  } catch(err) {
    console.error('Error in picker script 6:', err);
  }

  try {

// v12 UX enhancement layer. Keeps all existing prototype IDs/API hooks intact.
(()=>{
  // Safer button defaults for future form wrappers.
  document.querySelectorAll('button:not([type])').forEach(b=>b.type='button');

  const navs=[...document.querySelectorAll('.nav a[data-p]')];
  const pageMeta={
    dash:['首页','全网AI搜索场景覆盖与GEO增长数据总览'],
    inc:['检测分析','验证文章与关键词是否进入AI可引用信源池'],
    kb:['GEO 内容增长','维护企业事实、资质、案例与问答知识源'],
    persona:['GEO 内容增长','从核心产品反推人群、场景与购买考量'],
    kw:['GEO 内容增长','生成并筛选面向AI搜索场景的长尾问题词库'],
    gen:['GEO 内容增长','组合核心词、长尾词、图谱与红线生成内容'],    videographic:['GEO 内容增长','使用多模态AI模型，生成短视频或新媒体图文。内容基于大模型训练数据生成，可能存在局限性或不准确性。'],
    articles:['GEO 内容增长','统一管理自动化文章与人工上传内容'],
    pub:['GEO 内容增长','按媒体属性与GEO适配度选择信源并投稿'],
    
    agent:['账户中心','查看企业服务套餐余量、功能配额明细与账户余额充值']
  };
  const headerKicker=document.getElementById('headerKicker');
  const headerSubtitle=document.getElementById('headerSubtitle');
  function syncHeader(page){const m=pageMeta[page]||['360智见GEO','AI 搜索可见性优化平台'];if(headerKicker)headerKicker.textContent=m[0];if(headerSubtitle)headerSubtitle.textContent=m[1];navs.forEach(n=>n.setAttribute('aria-current',n.dataset.p===page?'page':'false'));}
  navs.forEach(a=>{
    a.setAttribute('tabindex','0');a.setAttribute('role','button');a.title=a.textContent.trim();
    a.addEventListener('click',()=>{syncHeader(a.dataset.p);history.replaceState(null,'','#'+a.dataset.p);});
    a.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();a.click();}});
  });
  const hashPage=location.hash.slice(1);const initialNav=navs.find(n=>n.dataset.p===hashPage);if(initialNav)initialNav.click();else{const current=navs.find(n=>n.classList.contains('on'));if(current)syncHeader(current.dataset.p)}
  
  // ================= 视频/图文互动引擎 (1:1高保真复刻 + 剃刀原则极简交互) =================
  function initVideoGraphicModule() {
    const vgPage = document.getElementById('videographic');
    if (!vgPage) return;

    // 1. 顶部 Tab 切换 (视频创作 vs 图文创作)
    const tabBtns = vgPage.querySelectorAll('.vg-tab-btn');
    const videoPanel = document.getElementById('vgVideoPanel');
    const graphicPanel = document.getElementById('vgGraphicPanel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        const isVideo = btn.dataset.vgMode === 'video';
        if (videoPanel) videoPanel.style.display = isVideo ? 'block' : 'none';
        if (graphicPanel) graphicPanel.style.display = isVideo ? 'none' : 'block';
      });
    });

    // 2. 视频创作方式 Tabs (视频快剪 / AI生成视频 / 上传视频)
    const methodTabs = document.querySelectorAll('#vgMethodTabs .vg-method-pill');
    methodTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        methodTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const m = tab.dataset.vmethod;
        if (m === 'ai') showToast('已切换至「AI全流程生成视频」模式');
        else if (m === 'upload') showToast('已切换至「自主上传视频」模式，支持本地多片段拖拽');
        else showToast('已切换至「视频快剪」模式（推荐）');
      });
    });

    // 3. 左侧竖排功能导航 (视频字幕 / 选择声音 / 字幕样式 / 背景音乐)
    const vnavBtns = document.querySelectorAll('#vgVNav .vg-vnav-btn');
    const vviews = {
      subtitles: document.getElementById('vtabSubtitlesView'),
      voice: document.getElementById('vtabVoiceView'),
      styles: document.getElementById('vtabStylesView'),
      bgm: document.getElementById('vtabBgmView')
    };

    vnavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        vnavBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const key = btn.dataset.vtab;
        Object.entries(vviews).forEach(([k, viewEl]) => {
          if (viewEl) viewEl.style.display = k === key ? 'block' : 'none';
        });
      });
    });

    // 4. 数据字典与预置全案模型 (支持一键秒级生成与关键词联动)
    const creativePacks = {
      '360安全卫士': {
        longTail: '360安全卫士极速版与企业版区别测评',
        creativeType: '测评推荐类',
        title: '2026版360安全卫士深度测评与企业部署方案',
        tags: '#360安全卫士 #终端安全 #勒索病毒防御 #网络安全',
        content: '360安全科技自主研发云端安全大脑与自研AI杀毒双引擎。毫秒级识别未知勒索与木马威胁，拦截率高达99.98%，全方位守护企业与个人终端数据资产！',
        bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
      },
      '终端安全防护': {
        longTail: '企业终端安全防护系统如何选型部署',
        creativeType: '排行类',
        title: '2026企业级终端安全EDR厂商推荐与选型对比',
        tags: '#终端安全防护 #EDR端点响应 #企业网络防护 #360安全',
        content: '360天擎终端安全管理系统，集防病毒、终端准入合规、补丁分发、微隔离管控于一体。支持十万级终端集中下发策略，满足等级保护三级安全合规标准！',
        bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'
      },
      '勒索病毒拦截': {
        longTail: '服务器如何彻底防范勒索病毒加密勒索',
        creativeType: '痛点解决方案类',
        title: '针对LockBit/BlackCat勒索病毒的实时防御白皮书',
        tags: '#勒索病毒拦截 #360安全大脑 #诱饵防御 #数据备份',
        content: '360首创文件主动解密防护与底层只读诱饵陷阱。动态阻断进程未授权加密行为，自带云端文件热备份秒级无损回滚，让勒索攻击无所遁形！',
        bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
      },
      'AI安全大模型': {
        longTail: '企业私有化部署AI大模型安全风控方案',
        creativeType: '避坑科普类',
        title: '360智脑安全大模型如何赋能企业安全运营SOC',
        tags: '#AI安全大模型 #360智脑 #数字安全 #智能告警研判',
        content: '依托数百亿级安全知识库与攻击样本微调训练。360安全大模型实现海量安全告警秒级智能降噪研判，自动生成处置工单与SOAR联动阻断响应！',
        bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
      },
      '网络安全等级保护': {
        longTail: '等级保护2.0三级测评整改必备安全产品清单',
        creativeType: '探厂实测类',
        title: '2026最新网络安全等保2.0三级合规建设与整改指南',
        tags: '#等级保护 #合规测评 #下一代防火墙 #360企业安全',
        content: '360提供等保2.0全流程一体化咨询测评与合规套件支撑，涵盖下一代防火墙、日志审计、堡垒机与数据库审计，最快15个工作日完成达标整改！',
        bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
      }
    };

    const coreSelect = document.getElementById('vgVideoCoreKeyword');
    const longTailInput = document.getElementById('vgVideoLongTail');
    const creativeTypeSelect = document.getElementById('vgVideoCreativeType');
    const titleInput = document.getElementById('vgVideoTitle');
    const tagsInput = document.getElementById('vgVideoTags');
    const contentTextarea = document.getElementById('vgVideoContent');
    const segmentTextarea = document.getElementById('vgSegmentScript');

    const titleCounter = document.getElementById('vgTitleCounter');
    const tagsCounter = document.getElementById('vgTagsCounter');
    const contentCounter = document.getElementById('vgContentCounter');

    // 手机模拟器元素
    const phoneVideoCanvas = document.getElementById('vgPhoneVideoCanvas');
    const phoneTitleText = document.getElementById('vgPhoneTitleText');
    const phoneTagsText = document.getElementById('vgPhoneTagsText');
    const phoneSubtitleLayer = document.getElementById('vgPhoneSubtitleLayer');
    const phoneMusicText = document.getElementById('vgPhoneMusicText');
    const phonePlayBtn = document.getElementById('vgPhonePlayBtn');

    // 6. 剃刀原则：毫秒级实时双向数据同步引擎
    function syncAllToPhone() {
      const t = titleInput?.value.trim() || '请输入视频标题';
      const tg = tagsInput?.value.trim() || '#热门话题';
      const c = contentTextarea?.value.trim() || '请输入正文口播内容';

      if (phoneTitleText) phoneTitleText.textContent = t;
      if (phoneTagsText) phoneTagsText.textContent = tg;
      if (phoneSubtitleLayer) phoneSubtitleLayer.textContent = c.slice(0, 36) + (c.length > 36 ? '...' : '');

      if (titleCounter) titleCounter.textContent = t.length + ' / 30';
      const tagCount = tg.split(/\s+/).filter(Boolean).length;
      if (tagsCounter) tagsCounter.textContent = Math.min(tagCount, 5) + ' / 5';
      if (contentCounter) contentCounter.textContent = c.length + ' / 150';
    }

    // 关键词联动
    function applyKeywordPack(key) {
      const pack = creativePacks[key] || creativePacks['360安全卫士'];
      if (longTailInput) longTailInput.value = pack.longTail;
      if (creativeTypeSelect) creativeTypeSelect.value = pack.creativeType;
      if (titleInput) titleInput.value = pack.title;
      if (tagsInput) tagsInput.value = pack.tags;
      if (contentTextarea) contentTextarea.value = pack.content;
      if (segmentTextarea) segmentTextarea.value = pack.content;
      if (phoneVideoCanvas) phoneVideoCanvas.style.backgroundImage = 'url("' + pack.bgImage + '")';
      syncAllToPhone();
    }

    coreSelect?.addEventListener('change', () => {
      applyKeywordPack(coreSelect.value);
      showToast('已根据「' + coreSelect.value + '」自动更新全案文案与分镜');
    });

    titleInput?.addEventListener('input', syncAllToPhone);
    tagsInput?.addEventListener('input', syncAllToPhone);
    contentTextarea?.addEventListener('input', () => {
      if (segmentTextarea) segmentTextarea.value = contentTextarea.value;
      syncAllToPhone();
    });
    segmentTextarea?.addEventListener('input', () => {
      if (contentTextarea) contentTextarea.value = segmentTextarea.value;
      syncAllToPhone();
    });

    // 7. AI 一键智能生成按钮（符合剃刀原则，零繁琐配置一键全案）
    function triggerAIGeneration(msg) {
      const key = coreSelect?.value || '360安全卫士';
      applyKeywordPack(key);
      showToast(msg || '✨ AI 智能引擎已一秒秒级生成爆款标题、话题标签与口播分镜');
    }

    document.getElementById('vgSuperSyncBtn')?.addEventListener('click', () => triggerAIGeneration('✨ 智能全案秒级生成完毕！已同步至手机模拟器'));
    document.getElementById('vgKeywordAIBtn')?.addEventListener('click', () => triggerAIGeneration());
    document.getElementById('vgCopyAIBtn')?.addEventListener('click', () => triggerAIGeneration());
    document.getElementById('vgSegmentAIBtn')?.addEventListener('click', () => triggerAIGeneration());

    document.getElementById('vgClipBtn')?.addEventListener('click', () => {
      showToast('已从「企业知识库」剪藏最新事实与产品技术参数');
    });

    // 8. 声音选择卡片交互
    document.querySelectorAll('.vg-voice-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.vg-voice-card').forEach(c => {
          c.classList.remove('active');
          const b = c.querySelector('.chip-mini');
          if (b) { b.classList.remove('on'); b.textContent = '选用'; }
        });
        card.classList.add('active');
        const b = card.querySelector('.chip-mini');
        if (b) { b.classList.add('on'); b.textContent = '已选用'; }

        const voiceName = card.dataset.voice || '知性干练商务女声';
        if (phoneMusicText) phoneMusicText.textContent = '原声 - 360智见GEO智能播音 · ' + voiceName;
        showToast('已选用【' + voiceName + '】作为口播音色，手机端已实时生效');
      });
    });

    // 9. 字幕样式卡片交互
    document.querySelectorAll('.vg-style-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.vg-style-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const style = chip.dataset.style;
        if (phoneSubtitleLayer) {
          phoneSubtitleLayer.className = 'vg-phone-subtitle-preview' + (style === 'yellow' ? ' style-yellow' : style === 'karaoke' ? ' style-karaoke' : '');
        }
        showToast('字幕样式已切换，手机画面已实时呈现');
      });
    });

    // 10. 背景音乐交互
    document.getElementById('vtabBgmView')?.addEventListener('click', e => {
      const btn = e.target.closest('.chip-mini');
      if (btn) {
        document.querySelectorAll('#vtabBgmView .chip-mini').forEach(b => {
          b.classList.remove('on');
          b.textContent = '选用';
        });
        btn.classList.add('on');
        btn.textContent = '当前选用';
        showToast('背景音乐已切换并与解说音轨完成智能音量闪避配置');
      }
    });

    // 11. 手机模拟器交互 (播放/暂停、点赞)
    let isPlaying = false;
    let playTimer = null;
    phonePlayBtn?.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        phonePlayBtn.textContent = '❚❚';
        phonePlayBtn.style.background = 'rgba(99, 102, 241, 0.85)';
        showToast('▶ 正在模拟短视频口播演示与音波跳动');
        let step = 0;
        const scriptParts = (contentTextarea?.value || '360安全科技自主研发云端安全大脑与自研AI杀毒双引擎，毫秒级识别未知勒索与木马威胁。').split('，');
        playTimer = setInterval(() => {
          if (!isPlaying) return;
          if (phoneSubtitleLayer && scriptParts.length) {
            phoneSubtitleLayer.textContent = scriptParts[step % scriptParts.length];
            step++;
          }
        }, 1800);
      } else {
        phonePlayBtn.textContent = '▶';
        phonePlayBtn.style.background = 'rgba(0, 0, 0, 0.45)';
        clearInterval(playTimer);
        syncAllToPhone();
      }
    });

    document.getElementById('vgLikeBtn')?.addEventListener('click', () => {
      const icon = document.querySelector('#vgLikeBtn .vg-phone-action-icon');
      const count = document.getElementById('vgLikeCount');
      if (icon) {
        icon.style.transform = 'scale(1.35)';
        setTimeout(() => { icon.style.transform = ''; }, 200);
      }
      if (count) count.textContent = '11.5w';
      showToast('❤️ 模拟点赞交互成功！');
    });

    // 12. 底部操作栏 (合成、存文库、分发)
    const renderBtn = document.getElementById('vgStartRenderBtn');
    renderBtn?.addEventListener('click', () => {
      const old = renderBtn.innerHTML;
      renderBtn.disabled = true;
      renderBtn.innerHTML = '<span>🎬 正在云端渲染 1080P 短视频…</span>';
      setTimeout(() => {
        renderBtn.disabled = false;
        renderBtn.innerHTML = old;
        showToast('短视频合成成功！已生成 1080P 竖屏 MP4 文件与配套字幕轨');
      }, 900);
    });

    document.getElementById('vgSaveDraftBtn')?.addEventListener('click', () => {
      showToast('当前短视频文案、音色与分镜脚本已成功沉淀至「发布记录」');
    });

    document.getElementById('vgDispatchBtn')?.addEventListener('click', () => {
      const pubNav = document.querySelector('.nav a[data-p="pub"]');
      if (pubNav) {
        pubNav.click();
        showToast('已携带当前短视频跳转至「文章发布」中心');
      }
    });

    document.getElementById('vgResetAllBtn')?.addEventListener('click', () => {
      applyKeywordPack('360安全卫士');
      showToast('已重置回默认推荐配置');
    });

    // 初始化一次
    syncAllToPhone();
  }

  initVideoGraphicModule();
  initThemeSwitcher();

  // ================= 智能配色主题引擎 =================
  function initThemeSwitcher() {
    const wrap = document.getElementById('themeSwitcherWrap');
    const btn = document.getElementById('themeSwitchBtn');
    const nameLabel = document.getElementById('currentThemeName');
    if (!wrap || !btn) return;

    const themeNames = {
      blue: '极光科技蓝',
      green: '清新碧翠绿',
      purple: '深空星曜紫',
      slate: '商务钛金灰'
    };

    function applyTheme(themeKey, notify = false) {
      if (!themeNames[themeKey]) themeKey = 'blue';
      document.documentElement.setAttribute('data-theme', themeKey);
      document.body.setAttribute('data-theme', themeKey);
      try { localStorage.setItem('geo_theme', themeKey); } catch (e) {}

      if (nameLabel) nameLabel.textContent = themeNames[themeKey];

      const items = wrap.querySelectorAll('.theme-item');
      items.forEach(it => {
        if (it.dataset.theme === themeKey) {
          it.classList.add('on');
        } else {
          it.classList.remove('on');
        }
      });

      if (notify && typeof showToast === 'function') {
        showToast('已切换至「' + themeNames[themeKey] + '」配色方案');
      }
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    wrap.querySelectorAll('.theme-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const theme = item.dataset.theme;
        applyTheme(theme, true);
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    let savedTheme = 'blue';
    try { savedTheme = localStorage.getItem('geo_theme') || 'blue'; } catch (e) {}
    applyTheme(savedTheme, false);
  }

  window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);const n=navs.find(x=>x.dataset.p===id);if(n&&!n.classList.contains('on'))n.click();});

  // ================= 侧边栏收起/展开引擎 =================
  const sidebarToggle = document.getElementById('sidebarToggle');
  const collapseKey = 'geo-sidebar-collapsed';

  function setSidebarCollapsed(collapsed) {
    document.body.classList.toggle('sidebar-collapsed', collapsed);
    if (sidebarToggle) {
      sidebarToggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      sidebarToggle.title = collapsed ? '展开侧边栏 (点击恢复完整菜单)' : '收起侧边栏 (点击折叠为图标栏)';
    }
    try { localStorage.setItem(collapseKey, collapsed ? '1' : '0'); } catch(e) {}
    window.dispatchEvent(new Event('resize'));
  }

  try {
    const isCol = localStorage.getItem(collapseKey) === '1';
    setSidebarCollapsed(isCol);
  } catch(e) {
    setSidebarCollapsed(false);
  }

  sidebarToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    setSidebarCollapsed(!isCollapsed);
    if (typeof showToast === 'function') {
      showToast(isCollapsed ? '已展开侧边导航栏' : '已收起侧边导航栏');
    }
  });

  // Header company name mirrors enterprise info.
  const headerCompanyTag=document.getElementById('headerCompanyTag');
  const enterprise=document.getElementById('enterpriseName');
  function syncHeaderCompany(){if(!headerCompanyTag||!enterprise)return;const name=enterprise.value.trim()||'未命名企业';headerCompanyTag.textContent=name;headerCompanyTag.title=name;}
  enterprise?.addEventListener('input',syncHeaderCompany);syncHeaderCompany();

  // Upgrade toast semantics and allow status type without breaking existing calls.
  const toastEl=document.querySelector('.toast');
  if(toastEl){toastEl.setAttribute('role','status');toastEl.setAttribute('aria-live','polite');toastEl.setAttribute('aria-atomic','true')}
  const legacyShowToast=window.showToast;
  window.showToast=function(msg,type='success'){
    if(toastEl){toastEl.classList.remove('toast-warn','toast-error');if(type==='warn')toastEl.classList.add('toast-warn');if(type==='error')toastEl.classList.add('toast-error')}
    legacyShowToast(msg);
  };

  // Keyboard-operable chips and growth-loop shortcuts.
  document.querySelectorAll('.chip,.geo-step[data-jump]').forEach(el=>{
    if(!el.hasAttribute('tabindex'))el.tabIndex=0;if(!el.hasAttribute('role'))el.setAttribute('role','button');
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});
  });
  document.querySelectorAll('.chip').forEach(el=>{const update=()=>el.setAttribute('aria-pressed',el.classList.contains('on')?'true':'false');el.addEventListener('click',()=>setTimeout(update,0));update();});

  // Private media account authorization management (the tab formerly labeled Authority).
  const privateTable=document.getElementById('privateAccountTable');
  const privateKeyword=document.getElementById('privateAccountKeyword');
  const privatePlatform=document.getElementById('privateAccountPlatform');
  const privateStatus=document.getElementById('privateAccountStatus');
  const privateCount=document.getElementById('privateAccountCount');
  const privateEmpty=document.getElementById('privateAccountEmpty');
  function applyPrivateAccountFilters(){if(!privateTable)return;const q=(privateKeyword?.value||'').trim().toLowerCase(),p=privatePlatform?.value||'',s=privateStatus?.value||'';let shown=0;[...privateTable.tBodies[0].rows].forEach(r=>{const name=(r.querySelector('.media-name')?.textContent||'').toLowerCase();const ok=(!q||name.includes(q))&&(!p||r.dataset.platform===p)&&(!s||r.dataset.status===s);r.style.display=ok?'':'none';if(ok)shown++});if(privateCount)privateCount.textContent=shown;if(privateEmpty)privateEmpty.classList.toggle('show',shown===0)}
  document.getElementById('privateAccountQuery')?.addEventListener('click',applyPrivateAccountFilters);document.getElementById('privateAccountReset')?.addEventListener('click',()=>{if(privateKeyword)privateKeyword.value='';if(privatePlatform)privatePlatform.value='';if(privateStatus)privateStatus.value='';applyPrivateAccountFilters()});privateKeyword?.addEventListener('keydown',e=>{if(e.key==='Enter')applyPrivateAccountFilters()});
  document.getElementById('privatePlatformGrid')?.addEventListener('click',e=>{const card=e.target.closest('.private-platform-card');if(!card)return;if(card.classList.contains('add')){showToast('已打开新增媒体授权入口（原型）');return}if(privatePlatform){privatePlatform.value=card.dataset.privatePlatform||'';applyPrivateAccountFilters()}document.getElementById('privateAccountTable')?.scrollIntoView({behavior:'smooth',block:'center'})});
  document.getElementById('privateDownloadAuth')?.addEventListener('click',()=>showToast('授权软件将在正式环境提供安全下载'));document.querySelectorAll('.private-account-auth').forEach(b=>b.addEventListener('click',()=>showToast('已进入账号授权流程（原型）')));applyPrivateAccountFilters();

  // Long-tail keyword library: live query + filters + useful counts.
  function bindBringToGenButtons() {
    document.querySelectorAll('#longTailTable .btn-bring-to-gen').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tr = btn.closest('tr');
        const kw = tr?.dataset.kw || tr?.cells[0]?.textContent.trim();
        const entity = tr?.dataset.entity || tr?.cells[1]?.textContent.trim();
        const coreSelect = document.getElementById('coreKeywordSelect');
        const tailSelect = document.getElementById('longTailSelect');
        if (coreSelect && entity) {
          if (![...coreSelect.options].some(o => o.value === entity)) {
            coreSelect.add(new Option(entity, entity));
          }
          coreSelect.value = entity;
        }
        if (typeof syncLongTails === 'function') syncLongTails();
        if (tailSelect && kw) {
          if (![...tailSelect.options].some(o => o.value === kw)) {
            tailSelect.add(new Option(kw, kw));
          }
          tailSelect.value = kw;
        }
        if (typeof updateGenerationSummary === 'function') updateGenerationSummary();
        if (typeof window.__geoSwitchPage === 'function') {
          window.__geoSwitchPage('gen');
        } else {
          document.querySelector('.nav a[data-p="gen"]')?.click();
        }
        showToast('已带入「' + kw + '」至内容创作');
      };
    });
  }
  bindBringToGenButtons();

  const kwTable = document.getElementById('longTailTable');
  const kwSearch = document.getElementById('kwSearchInput');
  const kwEntity = document.getElementById('kwEntityFilter');
  const kwIntent = document.getElementById('kwIntentFilter');
  const kwCount = document.getElementById('kwResultCount');
  const kwEmpty = document.getElementById('kwEmpty');

  function allKwRows() {
    return kwTable ? [...kwTable.rows].slice(1) : [];
  }

  function applyKwFilters() {
    const q = (kwSearch?.value || '').trim().toLowerCase();
    const e = kwEntity?.value || '';
    const i = kwIntent?.value || '';
    let shown = 0;
    allKwRows().forEach(r => {
      const text = r.textContent.toLowerCase();
      const ok = (!q || text.includes(q)) &&
                 (!e || r.cells[1]?.textContent.trim() === e) &&
                 (!i || r.cells[2]?.textContent.trim() === i);
      r.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    if (kwCount) kwCount.textContent = shown + ' 条';
    kwEmpty?.classList.toggle('show', shown === 0);
  }

  [kwSearch, kwEntity, kwIntent].forEach(x => x?.addEventListener(x === kwSearch ? 'input' : 'change', applyKwFilters));
  document.getElementById('kwFilterReset')?.addEventListener('click', () => {
    if (kwSearch) kwSearch.value = '';
    if (kwEntity) kwEntity.value = '';
    if (kwIntent) kwIntent.value = '';
    applyKwFilters();
  });
  applyKwFilters();

  function updateKeywordKpis() {
    const entities = typeof getEntities === 'function' ? getEntities().length : 3;
    const entityPill = document.getElementById('entityCountPill');
    if (entityPill) entityPill.textContent = entities + ' 个核心实体';
  }
  document.getElementById('keywordEntities')?.addEventListener('input', updateKeywordKpis);
  const prefixAgent = document.getElementById('prefixSuffixAgent');
  if (prefixAgent) {
    prefixAgent.onclick = () => {
      prefixAgent.classList.add('running');
      const lastRun = document.getElementById('agentLastRun');
      if (lastRun) lastRun.textContent = 'Agent 正在进行语义深度挖掘与质量清洗…';
      setTimeout(() => {
        prefixAgent.classList.remove('running');
        if (lastRun) lastRun.textContent = '已完成智能挖掘 · 数据已同步';
        updateKeywordKpis();
        showToast('360 智见 Agent 已完成智能长尾词挖掘，数据已同步至内容创作！');
      }, 650);
    };
  }
  updateKeywordKpis();

  // Content-generation parameter synchronization
  const summaryCore = document.getElementById('summaryCore');
  const summaryPersona = document.getElementById('summaryPersona');
  const summaryLength = document.getElementById('summaryLength');
  const summaryIllustration = document.getElementById('summaryIllustration');
  const summaryReady = document.getElementById('summaryReady');
  const articleCountSelect = document.getElementById('articleCount');
  const illustrationMode = document.getElementById('illustrationModeSelect');
  const illustrationStyle = document.getElementById('illustrationStyleSelect');
  const illustrationStatusPill = document.getElementById('illustrationStatusPill');

  function updateGenerationSummary() {
    const core = document.getElementById('coreKeywordSelect')?.value || '—';
    const persona = document.getElementById('genArticleType')?.value || document.getElementById('genUserPersonaSelect')?.value?.split('/')[0]?.trim() || '排行推荐';
    if (summaryCore) summaryCore.textContent = core;
    if (summaryPersona) summaryPersona.textContent = persona;

    const count = articleCountSelect?.value || '2';
    if (summaryLength) summaryLength.textContent = '标准3000 × ' + count + '篇';

    // Update quick chips
    document.querySelectorAll('.article-count-quick-chips .chip-mini').forEach(chip => {
      chip.classList.toggle('on', chip.dataset.c === count);
    });

    // Update Illustration summary & visual indicator
    const mode = illustrationMode?.value || 'auto_3';
    const thumbs = document.querySelectorAll('#illustrationPreviewRow .illustration-preview-thumb');
    if (mode === 'none') {
      if (summaryIllustration) {
        summaryIllustration.textContent = '纯文本 (无配图)';
        summaryIllustration.style.color = '#64748b';
      }
      if (illustrationStatusPill) {
        illustrationStatusPill.textContent = '○ 纯文本无图';
        illustrationStatusPill.className = 'pill n';
      }
      thumbs.forEach(t => t.classList.remove('active'));
    } else {
      let modeText = 'AI智能配图 (3张/篇)';
      if (mode === 'hero_1') modeText = '单图极速配图 (1张/篇)';
      if (mode === 'dense_5') modeText = '深度图文混排 (5张/篇)';

      if (summaryIllustration) {
        summaryIllustration.textContent = modeText;
        summaryIllustration.style.color = 'var(--primary)';
      }
      if (illustrationStatusPill) {
        illustrationStatusPill.textContent = '✓ 已开启智能配图';
        illustrationStatusPill.className = 'pill g';
      }
      thumbs.forEach((t, idx) => {
        if (mode === 'hero_1') {
          t.classList.toggle('active', idx === 0);
        } else {
          t.classList.add('active');
        }
      });
    }

    const ok = Number(count) >= 1 && Number(count) <= 20 && core && document.getElementById('longTailSelect')?.value;
    if (summaryReady) {
      summaryReady.textContent = ok ? '● 可生成' : '● 参数待完善';
      summaryReady.style.color = ok ? '#18815c' : '#a86b10';
    }
  }

  // Quick chip click
  document.querySelectorAll('.article-count-quick-chips .chip-mini').forEach(chip => {
    chip.addEventListener('click', () => {
      if (articleCountSelect) articleCountSelect.value = chip.dataset.c;
      updateGenerationSummary();
    });
  });

  articleCountSelect?.addEventListener('change', updateGenerationSummary);
  illustrationMode?.addEventListener('change', updateGenerationSummary);
  illustrationStyle?.addEventListener('change', updateGenerationSummary);
  document.getElementById('longTailSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('coreKeywordSelect')?.addEventListener('change', () => setTimeout(updateGenerationSummary, 0));
  document.getElementById('genUserPersonaSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('genSearchScenarioSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('genUserPainPointsSelect')?.addEventListener('change', updateGenerationSummary);
  updateGenerationSummary();

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && document.getElementById('gen')?.classList.contains('on')) {
      e.preventDefault();
      document.getElementById('generateArticleBtn')?.click();
    }
  });

  const genBtn = document.getElementById('generateArticleBtn');
  genBtn?.addEventListener('click', () => {
    if (genBtn.disabled) return;
    const count = articleCountSelect?.value || '2';
    const old = genBtn.innerHTML;
    genBtn.disabled = true;
    genBtn.innerHTML = '<span>正在批量创建 ' + count + ' 篇任务…</span>';
    setTimeout(() => {
      genBtn.disabled = false;
      genBtn.innerHTML = old;
      showToast('已成功发起 ' + count + ' 篇深度长文生成任务（标准3000字）');
    }, 850);
  });
// Article live search and richer preview drawer.
  let searchTimer;document.getElementById('articleSearchInput')?.addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{if(typeof filterArticleRows==='function')filterArticleRows()},140)});
  const drawer=document.getElementById('articleViewDrawer'),drawerTitle=document.getElementById('drawerArticleTitle'),drawerType=document.getElementById('drawerArticleType'),drawerStatus=document.getElementById('drawerArticleStatus'),drawerGenerated=document.getElementById('drawerArticleGenerated'),drawerSubmitted=document.getElementById('drawerArticleSubmitted'),drawerPreview=document.getElementById('drawerArticlePreview');let drawerCurrentTitle='';
  function setDrawer(open){drawer?.classList.toggle('show',open);drawer?.setAttribute('aria-hidden',open?'false':'true');document.body.classList.toggle('modal-open',open||document.querySelector('.modal-backdrop.show'))}
  function openArticleDrawer(row){if(!row)return;const c=row.querySelectorAll('td');drawerCurrentTitle=(c[0]?.textContent||'文章预览').trim();drawerTitle.textContent=drawerCurrentTitle;drawerType.textContent=(c[1]?.textContent||'—').trim();drawerStatus.textContent=(c[2]?.textContent||'—').trim();drawerGenerated.textContent=(c[3]?.textContent||'—').trim();drawerSubmitted.textContent=(c[4]?.textContent||'—').trim();drawerPreview.innerHTML='';const h=document.createElement('h2');h.textContent='内容预览';const p=document.createElement('p');p.className='preview-note';p.textContent='当前高保真原型以文章列表元数据为主。正式接入文章生成 API 后，此区域可直接渲染 content HTML 全文。';const intro=document.createElement('p');intro.textContent='当前文章：'+drawerCurrentTitle+'。这里已预留完整正文预览区，后续接入 WF_ARTICLE_GENERATE 返回的 content 字段即可直接展示。';drawerPreview.append(h,p,intro);setDrawer(true)}
  document.getElementById('articles')?.addEventListener('click',e=>{const b=e.target.closest('.article-view');if(b)openArticleDrawer(b.closest('tr'))});document.getElementById('articleDrawerClose')?.addEventListener('click',()=>setDrawer(false));document.getElementById('articleDrawerDone')?.addEventListener('click',()=>setDrawer(false));drawer?.addEventListener('click',e=>{if(e.target===drawer)setDrawer(false)});document.getElementById('articleCopyTitle')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(drawerCurrentTitle);showToast('文章标题已复制')}catch(e){showToast('浏览器未开放剪贴板权限','warn')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer?.classList.contains('show'))setDrawer(false)});

  // Stable mock media prices across reloads to avoid visual jitter in demos.
  function stablePrice(text,max=50){let h=0;for(const ch of text)h=(h*31+ch.charCodeAt(0))>>>0;return h%(max+1)}
  document.querySelectorAll('#pubMediaTable tbody tr').forEach(r=>{const name=r.querySelector('.media-name')?.textContent.trim()||r.rowIndex.toString();const p=stablePrice(name,50);r.dataset.priceValue=String(p);const el=r.querySelector('.pub-price');if(el)el.textContent=p});document.querySelectorAll('#pub .library-alt-table .alt-price').forEach((el,i)=>{const row=el.closest('tr');el.textContent=stablePrice(row?.textContent||String(i),50)});window.__applyPrivateMediaFilters?.();

  // Generic ESC for visible non-KB modals + body scroll lock sync.
  const modalObserver=new MutationObserver(()=>{const open=!!document.querySelector('.modal-backdrop.show,.drawer-backdrop.show');document.body.classList.toggle('modal-open',open)});document.querySelectorAll('.modal-backdrop,.drawer-backdrop').forEach(x=>modalObserver.observe(x,{attributes:true,attributeFilter:['class']}));
  document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;document.querySelectorAll('.modal-backdrop.show').forEach(m=>{const close=m.querySelector('.modal-close');if(close)close.click()})});

  // API-ready payload helpers: useful when wiring the three published Coze workflows later.
  window.getPersonaPayload=()=>({cname:document.getElementById('enterpriseName')?.value.trim()||'',industry:document.getElementById('industryName')?.value.trim()||'',core_entities:typeof getEntities==='function'?getEntities():[]});
  window.getKeywordPayload=()=>({industry:document.getElementById('industryName')?.value.trim()||'',core_entities:typeof getEntities==='function'?getEntities():[]});
  window.getArticlePayload = () => ({
    cname: document.getElementById('slotC')?.value.trim() || '',
    core_keyword: document.getElementById('coreKeywordSelect')?.value || '',
    long_tail_keyword: document.getElementById('longTailSelect')?.value || '',
    user_persona: document.getElementById('genUserPersonaSelect')?.value || '',
    search_scenario: document.getElementById('genSearchScenarioSelect')?.value || '',
    user_pain_points: document.getElementById('genUserPainPointsSelect')?.value || '',
    article_length: 3000,
    article_count: Number(document.getElementById('articleCount')?.value || 2),
    illustration_mode: document.getElementById('illustrationModeSelect')?.value || 'auto_3',
    illustration_style: document.getElementById('illustrationStyleSelect')?.value || 'photo',
    redline: document.getElementById('redlineInput')?.value.trim() || ''
  });

  
  // ================= 用户需求建模与人群画像 交互引擎 =================
  function initPersonaDemandModeling() {
    const personaPage = document.getElementById('persona');
    if (!personaPage) return;

    const personaCoreSelect = document.getElementById('personaCoreKeywordSelect');
    const personaLongTailSelect = document.getElementById('personaLongTailSelect');
    const personaRoleSelect = document.getElementById('personaRoleSelect');
    const personaScenarioSelect = document.getElementById('personaScenarioSelect');
    const personaPainPointsSelect = document.getElementById('personaPainPointsSelect');
    const personaModelCardsGrid = document.getElementById('personaModelCardsGrid');
    const personaModelCountPill = document.getElementById('personaModelCountPill');

    const personaSmartSuggestions = {
      '360安全卫士': {
        role: '企业网络管理员 / IT运维主管',
        scenario: '公司全员电脑防病毒与系统流氓软件一键清理',
        pain: '弹窗广告多影响办公、全网更新补丁难集中下发'
      },
      '终端安全防护': {
        role: '信息安全总监 / CISO',
        scenario: '分支机构分散办公电脑勒索病毒统一管控',
        pain: '未知威胁发现慢、跨平台终端缺乏一体化安全资产看板'
      },
      '勒索病毒拦截': {
        role: '核心业务数据库运维工程师',
        scenario: '生产网核心服务器防御勒索加密与0day漏洞攻击',
        pain: '勒索病毒变种快无解密私钥、业务中断损失巨大'
      },
      'AI安全大模型': {
        role: 'SOC安全运营中心分析师',
        scenario: '海量安全告警自动化智能研判与事件秒级溯源',
        pain: '告警误报率高达90%人手严重不足、应急响应超时'
      },
      '网络安全等级保护': {
        role: '央国企/金融机构合规负责人',
        scenario: '等级保护2.0三级测评定级与安全加固整改',
        pain: '整改技术要求复杂周期紧、缺乏全套合规产品与服务闭环'
      }
    };

    document.getElementById('personaAiSuggestBtn')?.addEventListener('click', () => {
      const core = personaCoreSelect?.value || '360安全卫士';
      const match = personaSmartSuggestions[core] || personaSmartSuggestions['360安全卫士'];
      if (personaRoleSelect) personaRoleSelect.value = match.role;
      if (personaScenarioSelect) personaScenarioSelect.value = match.scenario;
      if (personaPainPointsSelect) personaPainPointsSelect.value = match.pain;
      
      const formCard = personaRoleSelect?.closest('.user-demand-block');
      if (formCard) {
        formCard.style.boxShadow = '0 0 0 2px var(--primary), 0 8px 24px rgba(37,99,235,0.15)';
        setTimeout(() => { formCard.style.boxShadow = ''; }, 1200);
      }
      showToast('✨ AI 智能推理已根据「' + core + '」生成最佳用户需求模型');
    });

    // Reset Form button
    document.getElementById('personaResetFormBtn')?.addEventListener('click', () => {
      if (personaRoleSelect) personaRoleSelect.selectedIndex = 0;
      if (personaScenarioSelect) personaScenarioSelect.selectedIndex = 0;
      if (personaPainPointsSelect) personaPainPointsSelect.selectedIndex = 0;
      showToast('已重置需求建模表单');
    });

    // Bind apply-to-gen buttons
    function bindApplyButtons() {
      document.querySelectorAll('.apply-to-gen-btn').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = 'true';
        btn.addEventListener('click', () => {
          const role = btn.dataset.role || '';
          const scenario = btn.dataset.scenario || '';
          const pain = btn.dataset.pain || '';

          const genRole = document.getElementById('genUserPersonaSelect');
          const genScenario = document.getElementById('genSearchScenarioSelect');
          const genPain = document.getElementById('genUserPainPointsSelect');

          if (genRole && role) {
            if (![...genRole.options].some(o => o.value === role)) {
              genRole.add(new Option(role, role));
            }
            genRole.value = role;
          }
          if (genScenario && scenario) {
            if (![...genScenario.options].some(o => o.value === scenario)) {
              genScenario.add(new Option(scenario, scenario));
            }
            genScenario.value = scenario;
          }
          if (genPain && pain) {
            if (![...genPain.options].some(o => o.value === pain)) {
              genPain.add(new Option(pain, pain));
            }
            genPain.value = pain;
          }

          if (typeof updateGenerationSummary === 'function') updateGenerationSummary();

          // Switch to 'gen' nav
          const genNav = document.querySelector('.nav a[data-p="gen"]');
          if (genNav) genNav.click();
          showToast('已将【' + role.split('/')[0].trim() + '】用户需求模型带入内容创作');
        });
      });
    }
    bindApplyButtons();

    // Save Model button
    document.getElementById('personaSaveModelBtn')?.addEventListener('click', () => {
      const core = personaCoreSelect?.value || '360安全卫士';
      const lt = personaLongTailSelect?.value || '360安全卫士极速版与企业版区别测评';
      const role = personaRoleSelect?.value || '餐饮企业采购负责人 / 门店店长';
      const scenario = personaScenarioSelect?.value || '外卖高峰打包破损急需换环保加厚袋';
      const pain = personaPainPointsSelect?.value || '起订量门槛过高、交货周期长耽误开业';

      const card = document.createElement('div');
      card.className = 'persona-model-card';
      card.innerHTML = `
        <div class="persona-card-head">
          <span class="persona-card-role">${role}</span>
          <span class="pill b">${core}</span>
        </div>
        <div class="persona-card-body">
          <div class="persona-card-row"><b>触发长尾词：</b>${lt}</div>
          <div class="persona-card-row"><b>搜索场景：</b>${scenario}</div>
          <div class="persona-card-row"><b>核心痛点：</b>${pain}</div>
        </div>
        <div class="persona-card-foot">
          <span style="font-size:11.5px;color:var(--muted)">刚刚新建</span>
          <button class="btn o apply-to-gen-btn" data-role="${role}" data-scenario="${scenario}" data-pain="${pain}" style="padding:3px 10px;font-size:12px">带入创作 ›</button>
        </div>
      `;

      personaModelCardsGrid?.prepend(card);
      bindApplyButtons();

      const count = personaModelCardsGrid?.children.length || 0;
      if (personaModelCountPill) personaModelCountPill.textContent = count + ' 组模型';
      showToast('已成功保存用户需求模型并同步至内容创作库');
    });
  }
// ================= 网站发布 (Site Publication) 交互引擎 =================
  function initSitePublicationModule() {
    const sitepubPage = document.getElementById('sitepub');
    if (!sitepubPage) return;

    let sitepubAccounts = [
      { id: 1, name: '360安全科技官方号', platform: '网易号', status: '已授权', time: '2026-06-30 14:08:02' },
      { id: 2, name: '360数字安全官方', platform: '公众号', status: '已授权', time: '2025-11-17 15:41:14' },
      { id: 3, name: '360安全大脑观察', platform: '头条号', status: '已授权', time: '2026-05-14 14:15:20' },
      { id: 4, name: '360企业安全服务', platform: '搜狐号', status: '已授权', time: '2026-05-14 14:30:12' },
      { id: 5, name: '360安全科技官方', platform: '百家号', status: '未授权', time: '2026-05-14 14:15:39' },
    ];

    let selectedPlatformFilter = '';

    const tbody = document.getElementById('sitepubTableBody');
    const searchInput = document.getElementById('sitepubSearchInput');
    const platformSelect = document.getElementById('sitepubPlatformSelect');
    const statusSelect = document.getElementById('sitepubStatusSelect');
    const queryBtn = document.getElementById('sitepubQueryBtn');
    const resetBtn = document.getElementById('sitepubResetBtn');
    const totalEl = document.getElementById('sitepubPageTotal');
    const matrixGrid = document.getElementById('sitepubMatrixGrid');

    function renderTable() {
      if (!tbody) return;
      const kw = (searchInput?.value || '').trim().toLowerCase();
      const p = platformSelect?.value || selectedPlatformFilter || '';
      const s = statusSelect?.value || '';

      const filtered = sitepubAccounts.filter(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.platform.toLowerCase().includes(kw);
        const matchP = !p || item.platform === p;
        const matchS = !s || item.status === s;
        return matchKw && matchP && matchS;
      });

      if (totalEl) totalEl.textContent = '共 ' + filtered.length + ' 条';

      if (!filtered.length) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:36px;color:#94a3b8;font-size:13px">暂无匹配的媒体账号数据</td></tr>';
        return;
      }

      tbody.innerHTML = filtered.map((item, idx) => {
        const isAuthed = item.status === '已授权';
        const statusBadge = isAuthed 
          ? '<span class="status-pill authed">● 已授权</span>' 
          : '<span class="status-pill unauthed">○ 未授权</span>';

        const actionLinks = isAuthed
          ? `<button class="table-op-link" data-action="publish" data-id="${item.id}">发布文章</button>
             <button class="table-op-link warning" data-action="edit" data-id="${item.id}">编辑</button>
             <button class="table-op-link danger" data-action="delete" data-id="${item.id}">删除</button>`
          : `<button class="table-op-link" data-action="auth" data-id="${item.id}" style="font-weight:700">去授权</button>`;

        return `
          <tr>
            <td style="text-align:center;color:#64748b">${idx + 1}</td>
            <td style="font-weight:600;color:#1e293b">${item.name}</td>
            <td><span class="pill n">${item.platform}</span></td>
            <td style="text-align:center">${statusBadge}</td>
            <td style="color:#64748b;font-size:12px">${item.time}</td>
            <td style="text-align:right">
              <div class="table-op-links">${actionLinks}</div>
            </td>
          </tr>
        `;
      }).join('');
    }

    // Platform card filtering
    matrixGrid?.addEventListener('click', (e) => {
      const card = e.target.closest('.sitepub-platform-card');
      if (!card || e.target.closest('.add-auth-card-btn')) return;
      const platform = card.dataset.platform;
      if (selectedPlatformFilter === platform) {
        selectedPlatformFilter = '';
        card.classList.remove('selected-filter');
        if (platformSelect) platformSelect.value = '';
      } else {
        matrixGrid.querySelectorAll('.sitepub-platform-card').forEach(c => c.classList.remove('selected-filter'));
        selectedPlatformFilter = platform;
        card.classList.add('selected-filter');
        if (platformSelect) platformSelect.value = platform;
      }
      renderTable();
    });

    queryBtn?.addEventListener('click', renderTable);
    searchInput?.addEventListener('input', renderTable);
    platformSelect?.addEventListener('change', () => {
      selectedPlatformFilter = platformSelect.value;
      matrixGrid?.querySelectorAll('.sitepub-platform-card').forEach(c => {
        c.classList.toggle('selected-filter', c.dataset.platform === selectedPlatformFilter);
      });
      renderTable();
    });
    statusSelect?.addEventListener('change', renderTable);

    resetBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (platformSelect) platformSelect.value = '';
      if (statusSelect) statusSelect.value = '';
      selectedPlatformFilter = '';
      matrixGrid?.querySelectorAll('.sitepub-platform-card').forEach(c => c.classList.remove('selected-filter'));
      renderTable();
      showToast('已重置筛选条件');
    });

    // Table operations
    tbody?.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      const id = Number(btn.dataset.id);
      const acc = sitepubAccounts.find(x => x.id === id);
      if (!acc) return;

      if (action === 'publish') {
        showToast(`已选取【${acc.name}】(${acc.platform})，正在准备文章投稿通道...`);
        setTimeout(() => {
          const pubNav = document.querySelector('.nav a[data-p="pub"]');
          if (pubNav) pubNav.click();
        }, 600);
      } else if (action === 'auth') {
        acc.status = '已授权';
        acc.time = new Date().toISOString().replace('T', ' ').slice(0, 19);
        renderTable();
        showToast(`【${acc.name}】官方授权成功！现可直接分发文章。`);
      } else if (action === 'edit') {
        const newName = prompt(`编辑【${acc.platform}】账号名称：`, acc.name);
        if (newName && newName.trim()) {
          acc.name = newName.trim();
          acc.time = new Date().toISOString().replace('T', ' ').slice(0, 19);
          renderTable();
          showToast('账号名称已更新');
        }
      } else if (action === 'delete') {
        if (confirm(`确定解除【${acc.name}】(${acc.platform})的授权绑定吗？`)) {
          sitepubAccounts = sitepubAccounts.filter(x => x.id !== id);
          renderTable();
          showToast(`已解除【${acc.name}】的授权`);
        }
      }
    });

    // Sub tabs switching
    const sitepubMediaTabs = document.getElementById('sitepubMediaTabs');
    sitepubMediaTabs?.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.sitepub-tab');
      if (!tabBtn) return;
      const tabKey = tabBtn.dataset.sitepubTab;
      sitepubMediaTabs.querySelectorAll('.sitepub-tab').forEach(b => b.classList.remove('on'));
      tabBtn.classList.add('on');

      const panels = {
        private: document.getElementById('sitepubPanelPrivate'),
        public: document.getElementById('sitepubPanelPublic'),
        authority: document.getElementById('sitepubPanelAuthority'),
        b2b: document.getElementById('sitepubPanelB2B'),
        multimodal: document.getElementById('sitepubPanelMultimodal'),
      };

      Object.keys(panels).forEach(k => {
        if (panels[k]) panels[k].classList.toggle('on', k === tabKey);
      });
    });

    // Add Auth Modal
    const addModal = document.getElementById('sitepubAddModal');
    const openAddBtns = [
      document.getElementById('sitepubOpenAddModalBtn'),
      document.getElementById('addAuthFromCardBtn')
    ];
    openAddBtns.forEach(b => b?.addEventListener('click', () => {
      addModal?.classList.add('show');
    }));
    document.getElementById('sitepubAddClose')?.addEventListener('click', () => addModal?.classList.remove('show'));
    document.getElementById('sitepubAddCancel')?.addEventListener('click', () => addModal?.classList.remove('show'));
    document.getElementById('sitepubAddConfirm')?.addEventListener('click', () => {
      const plat = document.getElementById('sitepubNewPlatform')?.value || '公众号';
      const name = (document.getElementById('sitepubNewAccountName')?.value || '').trim();
      if (!name) {
        showToast('请输入授权账号名称', 'warn');
        return;
      }
      const newAcc = {
        id: Date.now(),
        name: name,
        platform: plat,
        status: '已授权',
        time: new Date().toISOString().replace('T', ' ').slice(0, 19)
      };
      sitepubAccounts.unshift(newAcc);
      renderTable();
      addModal?.classList.remove('show');
      if (document.getElementById('sitepubNewAccountName')) {
        document.getElementById('sitepubNewAccountName').value = '';
      }
      showToast(`【${name}】(${plat}) 授权绑定成功！`);
    });

    // Download Modal
    const downloadModal = document.getElementById('sitepubDownloadModal');
    document.getElementById('downloadAuthSoftwareBtn')?.addEventListener('click', () => {
      downloadModal?.classList.add('show');
    });
    document.getElementById('sitepubDownloadClose')?.addEventListener('click', () => downloadModal?.classList.remove('show'));
    document.getElementById('sitepubDownloadDone')?.addEventListener('click', () => downloadModal?.classList.remove('show'));

    // Guide Modal
    const guideModal = document.getElementById('sitepubGuideModal');
    document.getElementById('sitepubGuideBtn')?.addEventListener('click', () => {
      guideModal?.classList.add('show');
    });
    document.getElementById('sitepubGuideClose')?.addEventListener('click', () => guideModal?.classList.remove('show'));
    document.getElementById('sitepubGuideDone')?.addEventListener('click', () => guideModal?.classList.remove('show'));

    // Initial render
    renderTable();
  }

  initPersonaDemandModeling();
  initSitePublicationModule();


  // ================= 首页概览 (Dashboard Overview) 交互引擎 =================
  function initDashboardModule() {
    // 1. Notice Popover
    const noticeBtn = document.getElementById('dashNoticeBtn');
    const noticePopover = document.getElementById('dashNoticePopover');
    const noticeBadge = document.getElementById('dashNoticeBadge');
    const noticeCountText = document.getElementById('dashNoticeCountText');
    const noticeReadAll = document.getElementById('dashNoticeReadAll');
    const noticeClear = document.getElementById('dashNoticeClear');
    const noticeList = document.getElementById('dashNoticeList');

    noticeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      noticePopover?.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!noticePopover?.contains(e.target) && e.target !== noticeBtn) {
        noticePopover?.classList.remove('show');
      }
    });

    noticeReadAll?.addEventListener('click', () => {
      noticeList?.querySelectorAll('.dash-notice-item').forEach(item => {
        item.classList.remove('unread');
      });
      if (noticeBadge) noticeBadge.style.display = 'none';
      if (noticeCountText) noticeCountText.textContent = '(0)';
      showToast('所有通知已标记为已读');
    });

    noticeClear?.addEventListener('click', () => {
      if (noticeList) {
        noticeList.innerHTML = '<div style="text-align:center;padding:24px;color:#94a3b8;font-size:12px">暂无新通知</div>';
      }
      if (noticeBadge) noticeBadge.style.display = 'none';
      if (noticeCountText) noticeCountText.textContent = '(0)';
      showToast('通知已清空');
    });

    // 2. Tutorial Modal
    const tutorialBtn = document.getElementById('dashTutorialBtn');
    const tutorialModal = document.getElementById('dashTutorialModal');
    const tutorialClose = document.getElementById('dashTutorialClose');
    const tutorialDone = document.getElementById('dashTutorialDone');

    tutorialBtn?.addEventListener('click', () => {
      tutorialModal?.classList.add('show');
    });
    tutorialClose?.addEventListener('click', () => tutorialModal?.classList.remove('show'));
    tutorialDone?.addEventListener('click', () => tutorialModal?.classList.remove('show'));

    // 3. Quick navigation from KPI cards
    document.querySelectorAll('.dash-kpi-card').forEach(card => {
      card.addEventListener('click', () => {
        const kpi = card.dataset.kpi;
        if (kpi === 'articles') {
          document.querySelector('.nav a[data-p="articles"]')?.click();
        } else if (kpi === 'publishes') {
          document.querySelector('.nav a[data-p="pub"]')?.click();
        } else if (kpi === 'ranks') {
          document.querySelector('.nav a[data-p="inc"]')?.click();
        }
      });
    });

    document.querySelectorAll('.dash-recent-articles-table tbody tr').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        const title = row.querySelector('.dash-article-title-cell')?.textContent.trim();
        showToast('已选择文章【' + title + '】');
      });
    });

    // 4. View Switching: 首页概览 <--> 数据报表
    const dashMainView = document.getElementById('dashMainView');
    const dashReportView = document.getElementById('dashReportView');
    const dashReportBtn = document.getElementById('dashReportBtn');
    const dashBackToMainBtn = document.getElementById('dashBackToMainBtn');
    const ht = document.getElementById('ht');
    const headerSubtitle = document.getElementById('headerSubtitle');

    dashReportBtn?.addEventListener('click', () => {
      dashMainView?.classList.add('hidden');
      dashReportView?.classList.add('show');
      if (ht) ht.textContent = '数据报表';
      if (headerSubtitle) headerSubtitle.textContent = '360安全科技股份有限公司 · 全网AI搜索数据分析报表';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('已打开企业数据报表');
    });

    dashBackToMainBtn?.addEventListener('click', () => {
      dashReportView?.classList.remove('show');
      dashMainView?.classList.remove('hidden');
      if (ht) ht.textContent = '首页概览';
      if (headerSubtitle) headerSubtitle.textContent = '全网AI搜索场景覆盖与GEO增长数据总览';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Data Report Runtime: Keyword Search vs Brand Search (NO Scene Search)
    const keywordDataset = [
      { core: '360安全卫士', query: '360安全卫士极速版与企业版区别评测', platform: 'Kimi', source: '移动端', time: '2026-09-30 10:50:15' },
      { core: '360安全卫士', query: 'Windows11装哪个杀毒软件好360安全卫士实测', platform: 'Kimi', source: 'PC端', time: '2026-10-02 02:56:13' },
      { core: '终端安全防护', query: '企业级终端安全EDR厂商推荐与选型对比', platform: 'Kimi', source: 'PC端', time: '2026-09-30 22:16:51' },
      { core: '终端安全防护', query: '360天擎终端安全管理系统部署方案', platform: 'Kimi', source: '移动端', time: '2026-10-05 02:09:09' },
      { core: '勒索病毒拦截', query: '服务器防勒索病毒哪家强360安全拦截率', platform: '豆包', source: '移动端', time: '2026-10-04 18:22:10' },
      { core: 'AI安全大模型', query: '360智脑安全大模型如何赋能企业安全运营', platform: 'DeepSeek', source: 'PC端', time: '2026-10-05 01:14:32' },
      { core: '网络安全等级保护', query: '等保2.0三级测评整改必备安全产品清单', platform: '文心一言', source: 'PC端', time: '2026-10-04 14:10:05' },
      { core: '终端安全防护', query: '金融企业终端杀毒与桌面管理合规选型', platform: '腾讯元宝', source: '移动端', time: '2026-10-03 19:25:40' },
      { core: '勒索病毒拦截', query: 'LockBit勒索病毒专杀与文件主动防护工具', platform: '通义千问', source: '移动端', time: '2026-10-03 16:30:18' }
    ];

    const brandDataset = [
      { core: '360安全科技', query: '360安全科技股份有限公司企业安全实力怎么样', platform: '豆包', source: '移动端', time: '2026-10-04 15:20:11' },
      { core: '360安全科技', query: '360安全大脑与数字安全国家队能力解析', platform: 'Kimi', source: 'PC端', time: '2026-10-03 19:42:08' },
      { core: '三六零', query: '三六零数字安全集团政企客户标杆案例', platform: '文心一言', source: 'PC端', time: '2026-10-02 11:15:30' },
      { core: '360天擎', query: '360天擎终端安全管理系统企业版采购报价', platform: 'DeepSeek', source: '移动端', time: '2026-10-05 02:00:19' },
      { core: '360安全科技', query: '360安全科技AI大模型安全测评报告', platform: '腾讯元宝', source: '移动端', time: '2026-10-04 09:12:33' },
      { core: '360智脑', query: '360智脑大模型安全与垂直行业落地应用', platform: '通义千问', source: 'PC端', time: '2026-10-03 21:05:44' }
    ];

    let currentReportMode = 'keyword';
    let selectedReportPlatform = 'all';
    let selectedReportDevice = 'all';

    const reportTableBody = document.getElementById('reportTableBody');
    const reportCoreSelect = document.getElementById('reportCoreKeywordSelect');
    const reportSummary = document.getElementById('reportResultSummary');

    function renderReportTable() {
      if (!reportTableBody) return;
      const data = currentReportMode === 'keyword' ? keywordDataset : brandDataset;
      const coreVal = reportCoreSelect?.value || '';

      const filtered = data.filter(item => {
        const matchCore = !coreVal || item.core === coreVal;
        const matchPlat = selectedReportPlatform === 'all' || item.platform === selectedReportPlatform;
        const matchDev = selectedReportDevice === 'all' || item.source === selectedReportDevice;
        return matchCore && matchPlat && matchDev;
      });

      if (reportSummary) {
        reportSummary.textContent = '共匹配 ' + filtered.length + ' 条高权重搜索记录';
      }

      if (!filtered.length) {
        reportTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:36px;color:#94a3b8;font-size:13px">暂无匹配的搜索记录</td></tr>';
        return;
      }

      reportTableBody.innerHTML = filtered.map(item => {
        return `
          <tr>
            <td style="font-weight:700;color:#1e293b">${item.core}</td>
            <td style="color:#334155;font-weight:500">${item.query}</td>
            <td><span class="pill n">${item.platform}</span></td>
            <td><span class="pill b" style="font-size:11px">${item.source}</span></td>
            <td style="color:#64748b;font-size:12px">${item.time}</td>
            <td style="text-align:right">
              <div class="table-op-links">
                <button class="table-op-link" data-report-act="shot" data-query="${item.query}" data-plat="${item.platform}" data-time="${item.time}">截图</button>
                <button class="table-op-link" data-report-act="link" data-query="${item.query}" style="color:#ea580c">链接</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    // Mode tab click: 关键词搜索 vs 品牌搜索
    const keywordBtn = document.getElementById('reportModeKeywordBtn');
    const brandBtn = document.getElementById('reportModeBrandBtn');

    keywordBtn?.addEventListener('click', () => {
      currentReportMode = 'keyword';
      keywordBtn.classList.add('on');
      brandBtn?.classList.remove('on');
      if (reportCoreSelect) {
        reportCoreSelect.innerHTML = `
          <option value="">全部核心关键词</option>
          <option value="360安全卫士">360安全卫士</option>
          <option value="终端安全防护">终端安全防护</option>
          <option value="勒索病毒拦截">勒索病毒拦截</option>
          <option value="AI安全大模型">AI安全大模型</option>
          <option value="网络安全等级保护">网络安全等级保护</option>
        `;
        reportCoreSelect.value = '';
      }
      renderReportTable();
    });

    brandBtn?.addEventListener('click', () => {
      currentReportMode = 'brand';
      brandBtn.classList.add('on');
      keywordBtn?.classList.remove('on');
      if (reportCoreSelect) {
        reportCoreSelect.innerHTML = `
          <option value="">全部品牌关键词</option>
          <option value="360安全科技">360安全科技</option>
          <option value="三六零">三六零</option>
          <option value="360天擎">360天擎</option>
          <option value="360智脑">360智脑</option>
        `;
        reportCoreSelect.value = '';
      }
      renderReportTable();
    });

    // Platform filter tabs
    document.getElementById('reportPlatformTabs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.report-plat-tab');
      if (!btn) return;
      document.querySelectorAll('.report-plat-tab').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      selectedReportPlatform = btn.dataset.plat || 'all';
      renderReportTable();
    });

    // Device switch buttons
    document.getElementById('reportDeviceSwitch')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.report-device-btn');
      if (!btn) return;
      document.querySelectorAll('.report-device-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      selectedReportDevice = btn.dataset.device || 'all';
      renderReportTable();
    });

    reportCoreSelect?.addEventListener('change', renderReportTable);

    // Screenshot modal
    const shotModal = document.getElementById('reportScreenshotModal');
    const shotClose = document.getElementById('reportScreenshotClose');
    const shotDone = document.getElementById('reportScreenshotDone');
    const modalQuery = document.getElementById('reportModalQuery');
    const modalPlatLogo = document.getElementById('reportModalPlatformLogo');
    const modalPlatName = document.getElementById('reportModalPlatformName');
    const modalTime = document.getElementById('reportModalTime');

    shotClose?.addEventListener('click', () => shotModal?.classList.remove('show'));
    shotDone?.addEventListener('click', () => shotModal?.classList.remove('show'));

    reportTableBody?.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-report-act]');
      if (!btn) return;
      const act = btn.dataset.reportAct;
      const query = btn.dataset.query || '';
      const plat = btn.dataset.plat || '';
      const time = btn.dataset.time || '';

      if (act === 'shot') {
        if (modalQuery) modalQuery.textContent = query;
        if (modalPlatName) modalPlatName.textContent = plat + ' 搜索终端';
        if (modalPlatLogo) {
          modalPlatLogo.textContent = plat.slice(0, 1);
          modalPlatLogo.className = 'dash-tool-logo ' + (
            plat === '豆包' ? 'doubao-logo' :
            plat === '文心一言' ? 'ernie-logo' :
            plat === 'DeepSeek' ? 'deepseek-logo' :
            plat === '腾讯元宝' ? 'yuanbao-logo' :
            plat === '通义千问' ? 'qianwen-logo' : 'kimi-logo'
          );
        }
        if (modalTime) modalTime.textContent = time;
        shotModal?.classList.add('show');
      } else if (act === 'link') {
        showToast('已复制【' + query + '】AI 搜索直达检索链接');
      }
    });

    // Initial render
    renderReportTable();
  }

  initDashboardModule();
    try { initPackageModule(); } catch(e) { console.error(e); }

})();

  } catch(err) {
    console.error('Error in UX script 7:', err);
  }
}

// ================= 我的套餐 & 余额充值互动逻辑 (一比一复刻) =================
function initPackageModule() {
  const rechargeModal = document.getElementById('pkgRechargeModal');
  const openBtn = document.getElementById('pkgOpenRechargeBtn');
  const quickBtn = document.getElementById('pkgQuickRechargeBtn');
  const closeBtn = document.getElementById('pkgRechargeClose');
  const cancelBtn = document.getElementById('pkgRechargeCancelBtn');
  const simulatePayBtn = document.getElementById('pkgSimulatePayBtn');

  function setModal(show) {
    if (rechargeModal) rechargeModal.classList.toggle('show', !!show);
  }

  openBtn?.addEventListener('click', () => setModal(true));
  quickBtn?.addEventListener('click', () => setModal(true));
  closeBtn?.addEventListener('click', () => setModal(false));
  cancelBtn?.addEventListener('click', () => setModal(false));
  rechargeModal?.addEventListener('click', (e) => {
    if (e.target === rechargeModal) setModal(false);
  });

  // Amount options
  const amountCards = document.querySelectorAll('#pkgAmountGrid .pkg-amount-card');
  const customInput = document.getElementById('pkgCustomAmountInput');
  const checkoutBase = document.getElementById('pkgCheckoutBaseVal');
  const checkoutBonus = document.getElementById('pkgCheckoutBonusVal');
  const checkoutTotal = document.getElementById('pkgCheckoutTotalVal');

  let currentSelectedAmount = 5000;
  let currentSelectedBonus = 500;

  amountCards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('custom')) {
        amountCards.forEach(c => c.classList.remove('on'));
        card.classList.add('on');
        customInput?.focus();
        const val = parseFloat(customInput?.value) || 0;
        currentSelectedAmount = val;
        currentSelectedBonus = val >= 1000 ? Math.floor(val * 0.1) : 0;
        updateCheckout();
        return;
      }
      amountCards.forEach(c => c.classList.remove('on'));
      card.classList.add('on');
      currentSelectedAmount = parseFloat(card.dataset.amount) || 5000;
      currentSelectedBonus = parseFloat(card.dataset.bonus) || 500;
      updateCheckout();
    });
  });

  customInput?.addEventListener('input', () => {
    const parent = customInput.closest('.pkg-amount-card');
    amountCards.forEach(c => c.classList.remove('on'));
    parent?.classList.add('on');
    const val = parseFloat(customInput.value) || 0;
    currentSelectedAmount = val;
    currentSelectedBonus = val >= 1000 ? Math.floor(val * 0.1) : 0;
    updateCheckout();
  });

  function updateCheckout() {
    if (checkoutBase) checkoutBase.textContent = '¥' + currentSelectedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 });
    if (checkoutBonus) checkoutBonus.textContent = '+¥' + currentSelectedBonus.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' 余额';
    if (checkoutTotal) checkoutTotal.textContent = currentSelectedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 });
  }

  // Pay methods
  const payMethodBtns = document.querySelectorAll('#pkgPayMethods .pkg-pay-method-btn');
  const payTypeNameText = document.getElementById('pkgPayTypeNameText');
  payMethodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      payMethodBtns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const m = btn.dataset.method;
      if (payTypeNameText) {
        payTypeNameText.textContent = m === 'alipay' ? '支付宝' : (m === 'bank' ? '对公银行网银' : '微信');
      }
      showToast('已切换支付通道至：' + (m === 'alipay' ? '企业/个人支付宝' : (m === 'bank' ? '对公银行转账' : '微信快捷支付')));
    });
  });

  // Simulate Pay Confirm
  simulatePayBtn?.addEventListener('click', () => {
    if (currentSelectedAmount <= 0) {
      showToast('请选择或输入有效的充值金额');
      return;
    }
    simulatePayBtn.disabled = true;
    simulatePayBtn.textContent = '⏳ 正在请求银行对公网关验证入账…';
    setTimeout(() => {
      simulatePayBtn.disabled = false;
      simulatePayBtn.textContent = '✓ 我已完成扫码支付 (立即入账)';
      setModal(false);

      // Update balance
      const balEl = document.getElementById('pkgBalanceVal');
      const modalBalEl = document.getElementById('pkgModalCurrentBalance');
      if (balEl) {
        const num = parseFloat(balEl.textContent.replace(/,/g, '')) || 28650;
        const newNum = num + currentSelectedAmount + currentSelectedBonus;
        balEl.textContent = newNum.toLocaleString('en-US', { minimumFractionDigits: 2 });
        if (modalBalEl) modalBalEl.textContent = newNum.toLocaleString('en-US', { minimumFractionDigits: 2 });
      }

      // Add history row
      const tableBody = document.getElementById('pkgHistoryTableBody');
      if (tableBody) {
        const tr = document.createElement('tr');
        const nowStr = new Date().toISOString().replace('T', ' ').slice(0, 19);
        const tid = 'TX' + Date.now().toString().slice(-8);
        tr.innerHTML = `
          <td style="font-family:monospace;color:#64748b">${tid}</td>
          <td><span class="pill g">账户充值</span></td>
          <td>实时微信/网银快捷充值 (赠送 ¥${currentSelectedBonus.toFixed(2)})</td>
          <td style="color:#16a34a;font-weight:700">+¥${(currentSelectedAmount + currentSelectedBonus).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td style="font-weight:700">¥${(parseFloat(balEl?.textContent.replace(/,/g, '') || '0')).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td>${nowStr}</td>
          <td><span class="pill g">充值成功</span></td>
        `;
        tableBody.insertBefore(tr, tableBody.firstChild);
      }

      showToast('🎉 恭喜！成功充值 ¥' + currentSelectedAmount.toLocaleString() + '，额外获赠 ¥' + currentSelectedBonus.toLocaleString() + ' 余额！');
    }, 1000);
  });

  // History filter
  document.getElementById('pkgHistoryTypeFilter')?.addEventListener('change', (e) => {
    const val = e.target.value;
    const rows = document.querySelectorAll('#pkgHistoryTableBody tr');
    rows.forEach(r => {
      if (val === 'all') r.style.display = '';
      else if (val === 'recharge') r.style.display = r.textContent.includes('充值') ? '' : 'none';
      else if (val === 'consume') r.style.display = r.textContent.includes('消耗') || r.textContent.includes('扣减') ? '' : 'none';
    });
  });
}

try {
  initPackageModule();
} catch (e) {
  console.error('initPackageModule error:', e);
}
