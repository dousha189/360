// 360智见GEO 企业AI搜索可见性优化平台 - Client Runtime
export function initApp() {
  if (window.__appInitialized) return;
  window.__appInitialized = true;

  try {

document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>{
document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('on'));a.classList.add('on');
document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
document.getElementById(a.dataset.p).classList.add('on');
document.getElementById('ht').textContent=(a.querySelector('.nav-text')?.textContent || a.textContent.slice(2)).trim();window.scrollTo(0,0);});
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

// Keyword entity source -> persona products -> content creation core keyword.
const keywordEntities=document.getElementById('keywordEntities');
const personaProducts=document.getElementById('personaProducts');
const personaProductCount=document.getElementById('personaProductCount');
const coreKeywordSelect=document.getElementById('coreKeywordSelect');
const longTailSelect=document.getElementById('longTailSelect');
const graphSelect=document.getElementById('graphSelect');
function getEntities(){return [...new Set(keywordEntities.value.split(/\n+/).map(x=>x.trim()).filter(Boolean))]}
function syncEntities(){
 const entities=getEntities();personaProductCount.textContent=entities.length+'项';personaProducts.innerHTML='';
 entities.forEach(x=>{const t=document.createElement('span');t.className='entity-token';t.textContent=x;personaProducts.appendChild(t)});
 const previous=coreKeywordSelect.value;coreKeywordSelect.innerHTML='';
 entities.forEach(x=>{const o=document.createElement('option');o.value=o.textContent=x;coreKeywordSelect.appendChild(o)});
 if(entities.includes(previous))coreKeywordSelect.value=previous;syncLongTails();
}
function syncLongTails(){
 const core=coreKeywordSelect.value;const rows=[...document.querySelectorAll('#longTailTable tr')].slice(1);const items=rows.filter(r=>r.cells[1]&&r.cells[1].textContent.trim()===core).map(r=>r.cells[0].textContent.trim());
 longTailSelect.innerHTML='';
 if(!items.length){const o=document.createElement('option');o.textContent='暂无匹配长尾词';o.disabled=true;o.selected=true;longTailSelect.appendChild(o)}
 else{items.forEach(x=>{const o=document.createElement('option');o.value=o.textContent=x;longTailSelect.appendChild(o)})}
 syncGraphOptions(core);
}
function syncGraphOptions(core=coreKeywordSelect.value){
 const rows=[...document.querySelectorAll('#graphTable tr')].slice(1).filter(r=>r.cells[0]&&r.cells[0].textContent.trim()===core);graphSelect.innerHTML='';
 if(!rows.length){const o=document.createElement('option');o.textContent='暂无匹配的多维关联图谱';o.disabled=true;o.selected=true;graphSelect.appendChild(o);return}
 rows.forEach((r,i)=>{const parts=[...r.cells].map(c=>c.textContent.trim());const o=document.createElement('option');const payload={core_product:parts[0]||'',persona:parts[1]||'',search_scene:parts[2]||'',factors:(parts[3]||'').split('·').map(x=>x.trim()).filter(Boolean)};o.value=JSON.stringify(payload);o.textContent=(i+1)+'. '+parts.join(' ｜ ');graphSelect.appendChild(o)});
}
keywordEntities.addEventListener('input',()=>{document.getElementById('persona')?.classList.remove('agent-generated');syncEntities()});coreKeywordSelect.addEventListener('change',syncLongTails);syncEntities();refreshCompanyState();

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

// Positive-integer validation for article quantity.
const articleCount=document.getElementById('articleCount');
const articleCountError=document.getElementById('articleCountError');
function validateArticleCount(){const v=articleCount.value.trim();const ok=/^[1-9]\d*$/.test(v);articleCount.classList.toggle('invalid',!ok);articleCountError.textContent=ok?'':'请输入大于 0 的整数';return ok}
articleCount.addEventListener('input',validateArticleCount);
articleCount.addEventListener('blur',validateArticleCount);
document.getElementById('generateArticleBtn').onclick=()=>{
 if(!validateArticleCount()){articleCount.focus();showToast('文章数量校验未通过');return}
 showToast('已提交 '+articleCount.value+' 篇内容生成任务');
};


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
 return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI搜索可见性诊断报告 · 360智见GEO</title><link rel="stylesheet" href="https://miaoda.feishu.cn/fonts/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap"><style>'+baseStyle+`\nbody.report-window{display:block;min-height:100vh;background:#f3f7f5;padding:0;color:#1f2937}.report-window-top{position:sticky;top:0;z-index:30;height:64px;padding:0 34px;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #e6ece9}.report-window-brand{display:flex;align-items:center;gap:11px;font-size:16px;font-weight:800}.report-window-logo{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(145deg,#10b981,#059669);color:#fff}.report-window-meta{font-size:12px;color:#64748b}.report-window-actions{display:flex;align-items:center;gap:10px}.report-print{border:1px solid #dfe5e2;background:#fff;color:#526069;border-radius:9px;padding:7px 13px;font:inherit;font-size:12px;font-weight:650;cursor:pointer}.report-document-wrap{max-width:1320px;margin:0 auto;padding:24px 28px 48px}.report-document-title{margin-bottom:18px}.report-document-title h1{font-size:24px;line-height:1.25;margin-bottom:5px}.report-document-title p{font-size:12.5px;color:#64748b}.report-document-wrap>.card{margin-bottom:16px}.report-window .geo-step{cursor:default}.report-window .chip{cursor:default}@media print{.report-window-top{display:none}.report-document-wrap{max-width:none;padding:0}.card{box-shadow:none!important;break-inside:avoid}}`+'</style></head><body class="report-window"><div class="report-window-top"><div><div class="report-window-brand"><span class="report-window-logo">◎</span>360智见GEO · AI搜索可见性诊断报告</div><div class="report-window-meta">品牌诊断检测产物 · 第3期 · 2026-07-14</div></div><div class="report-window-actions"><button class="report-print" onclick="window.print()">打印 / 导出 PDF</button></div></div><div class="report-document-wrap"><div class="report-document-title"><h1>AI 搜索可见性诊断报告</h1><p>基于本次 6 个问题 × 6 个 AI 平台的排名 / 品牌曝光检测结果自动生成</p></div>'+reportHtml+'</div></body></html>';
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
const incQueryMemory={url:'https://www.toutiao.com/article/7482915630...',keyword:'外卖袋定制'};
let incMode='url';
function resetInclusionResults(){incUrlResult?.classList.remove('show');incKeywordResult?.classList.remove('show');if(incTaskStatus){incTaskStatus.className='inc-task-status';incTaskStatus.textContent='请选择检测类型并提交查询'}if(startInclusionQuery){startInclusionQuery.disabled=false;startInclusionQuery.textContent='查询'}}
function setInclusionMode(mode,keepResult=false){if(!['url','keyword'].includes(mode))return;incQueryMemory[incMode]=incQueryInput.value;incMode=mode;if(incModeSwitch)incModeSwitch.value=mode;incQueryInput.value=incQueryMemory[mode];if(mode==='url'){incQueryInput.placeholder='请输入文章 URL';incModeHint.textContent='URL模式：通过文章链接反查各 AI 平台是否已将该内容纳入可引用信源池。'}else{incQueryInput.placeholder='请输入行业词、品类词或文章标题';incModeHint.textContent='关键词模式：统计 AI 回答常引用的信源渠道，并按引用次数形成渠道效果排行。'}if(!keepResult)resetInclusionResults()}
incModeSwitch?.addEventListener('change',()=>setInclusionMode(incModeSwitch.value));
document.getElementById('incPlatformGrid')?.addEventListener('click',e=>{const b=e.target.closest('.inc-platform-card');if(!b)return;b.classList.toggle('on');const selected=document.querySelectorAll('#incPlatformGrid .inc-platform-card.on').length;if(!selected){b.classList.add('on');showToast('至少保留一个 AI 平台')}});
startInclusionQuery?.addEventListener('click',()=>{const q=incQueryInput.value.trim();if(!q){incQueryInput.focus();showToast(incMode==='url'?'请输入待检测 URL':'请输入查询关键词');return}const selected=[...document.querySelectorAll('#incPlatformGrid .inc-platform-card.on')].map(x=>x.dataset.incPlatform);if(!selected.length){showToast('请至少选择一个 AI 平台');return}incQueryMemory[incMode]=q;incUrlResult?.classList.remove('show');incKeywordResult?.classList.remove('show');startInclusionQuery.disabled=true;startInclusionQuery.textContent='查询中…';incTaskStatus.className='inc-task-status running';incTaskStatus.textContent=incMode==='url'?'正在查询 '+selected.length+' 个 AI 平台的收录状态…':'正在统计 '+selected.length+' 个 AI 平台的信源引用渠道…';setTimeout(()=>{startInclusionQuery.disabled=false;startInclusionQuery.textContent='重新查询';incTaskStatus.className='inc-task-status done';if(incMode==='url'){if(incUrlBadge)incUrlBadge.textContent='已检测 '+selected.length+' 个平台';document.querySelectorAll('#incUrlResult tbody tr').forEach(r=>r.style.display=selected.includes(r.dataset.platform)?'':'none');incUrlResult.classList.add('show');incTaskStatus.textContent='URL 查询完成 · 已生成平台收录状态';incUrlResult.scrollIntoView({behavior:'smooth',block:'start'})}else{if(incKeywordBadge)incKeywordBadge.textContent='关键词：'+q;incKeywordResult.classList.add('show');incTaskStatus.textContent='关键词查询完成 · 已生成 AI 收录渠道效果';applyChannelFilter('all');incKeywordResult.scrollIntoView({behavior:'smooth',block:'start'})}},620)});
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

// v9: 投稿必须先从「新生文库」中选择文章；同时覆盖旧版直接投稿行为。
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
    dash:['工作台','经营与GEO增长关键指标总览'],
    monitor:['检测分析','跨平台检测品牌推荐、提及与曝光表现'],
    inc:['检测分析','验证文章与关键词是否进入AI可引用信源池'],
    kb:['GEO 内容增长','维护企业事实、资质、案例与问答知识源'],
    persona:['GEO 内容增长','从核心产品反推人群、场景与购买考量'],
    kw:['GEO 内容增长','生成并筛选面向AI搜索场景的长尾问题词库'],
    gen:['GEO 内容增长','组合核心词、长尾词、图谱与红线生成内容'],    videographic:['GEO 内容增长','使用多模态AI模型，生成短视频或新媒体图文。内容基于大模型训练数据生成，可能存在局限性或不准确性。'],
    articles:['GEO 内容增长','统一管理自动化文章与人工上传内容'],
    pub:['GEO 内容增长','按媒体属性与GEO适配度选择信源并投稿'],
    sitepub:['媒体库','全网新媒体矩阵、权威媒体与B2B联盟多渠道分发与发布管理'],
    agent:['系统工具','查看Agent执行状态、耗时与任务结果']
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
  
  // ================= 视频/图文互动引擎 =================
  function initVideoGraphicModule() {
    const vgPage = document.getElementById('videographic');
    if (!vgPage) return;

    // 1. 模式切换 (视频创作 vs 图文创作)
    const tabBtns = vgPage.querySelectorAll('.vg-tab-btn');
    const graphicPanel = document.getElementById('vgGraphicPanel');
    const videoPanel = document.getElementById('vgVideoPanel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        const mode = btn.dataset.vgMode;
        if (mode === 'video') {
          if (graphicPanel) graphicPanel.style.display = 'none';
          if (videoPanel) videoPanel.style.display = 'block';
        } else {
          if (graphicPanel) graphicPanel.style.display = 'block';
          if (videoPanel) videoPanel.style.display = 'none';
        }
      });
    });

    // 2. 配图获取方式切换 (AI生成 vs 上传)
    const segBtns = vgPage.querySelectorAll('.vg-seg-btn');
    segBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        segBtns.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        if (btn.dataset.method === 'upload') {
          if (typeof showToast === 'function') showToast('已切换至自主上传配图模式，支持本地多图批量拖拽');
        } else {
          if (typeof showToast === 'function') showToast('已切换至多模态AI图像生成模式');
        }
      });
    });

    // 3. 标题字数统计
    const titleInput = document.getElementById('vgTitle');
    const titleCounter = document.getElementById('vgTitleCounter');
    function updateTitleCount() {
      if (titleInput && titleCounter) {
        const len = titleInput.value.length;
        titleCounter.textContent = len + ' / 20';
        titleCounter.style.color = len >= 20 ? '#ef4444' : '#94a3b8';
      }
    }
    titleInput?.addEventListener('input', updateTitleCount);
    updateTitleCount();

    // 4. 话题标签交互 (按回车添加)
    const tagInput = document.getElementById('vgTagInput');
    const tagCounter = document.getElementById('vgTagCounter');
    const tagTokens = document.getElementById('vgTagTokens');
    let tags = ['外卖袋定制', '环保包装', '餐饮供应链'];

    function renderTags() {
      if (!tagTokens) return;
      tagTokens.innerHTML = '';
      tags.forEach((t, idx) => {
        const span = document.createElement('span');
        span.className = 'vg-tag';
        span.innerHTML = '#' + t + ' <i class="vg-del-tag" data-idx="' + idx + '">×</i>';
        tagTokens.appendChild(span);
      });
      if (tagCounter) tagCounter.textContent = tags.length + ' / 5';
    }

    tagInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const val = tagInput.value.trim().replace(/^#/, '');
        if (!val) return;
        if (tags.length >= 5) {
          if (typeof showToast === 'function') showToast('最多可添加5个话题标签');
          return;
        }
        if (tags.includes(val)) {
          if (typeof showToast === 'function') showToast('该话题标签已存在');
          return;
        }
        tags.push(val);
        tagInput.value = '';
        renderTags();
      }
    });

    tagTokens?.addEventListener('click', (e) => {
      const del = e.target.closest('.vg-del-tag');
      if (del) {
        const idx = parseInt(del.dataset.idx, 10);
        tags.splice(idx, 1);
        renderTags();
      }
    });
    renderTags();

    // 5. 正文操作栏
    const contentArea = document.getElementById('vgContent');
    document.getElementById('vgAIPolish')?.addEventListener('click', () => {
      if (!contentArea || !contentArea.value.trim()) {
        if (typeof showToast === 'function') showToast('请先输入或生成正文内容');
        return;
      }
      contentArea.style.opacity = '0.6';
      setTimeout(() => {
        contentArea.style.opacity = '1';
        contentArea.value = '🔥 连锁餐饮与外卖品牌如何挑选真正耐用的高颜值包装袋？\n\n作为深耕环保软包装12年的源头工厂，今天给餐饮采购总监们盘点3大核心考量：\n\n1️⃣【食品级材质保证】：通过第三方权威GB4806食品接触级检测认证，无荧光增白剂与水性油墨异味，为品牌外卖筑牢食安防火墙。\n2️⃣【双层铝箔强效锁温】：实测45分钟热食配送温度衰减≤3℃，防油防水立体复合，拒绝任何骑手颠簸破袋！\n3️⃣【极速柔性供应链】：支持48小时快速免费打样，3万平标准化无尘净化车间，大促订单72小时如期交付。\n\n💬 远见包装为您量身打造专属品牌视觉外卖手提袋，欢迎私信获取免费样品包！';
        if (typeof showToast === 'function') showToast('AI智能润色已完成，已优化小红书/新媒体爆款排版');
      }, 500);
    });

    document.getElementById('vgAddEmoji')?.addEventListener('click', () => {
      if (!contentArea) return;
      contentArea.value = '✨【实测爆款】' + contentArea.value + ' 💯📦';
      if (typeof showToast === 'function') showToast('已添加营销表情符号');
    });

    document.getElementById('vgCopyContent')?.addEventListener('click', async () => {
      if (!contentArea || !contentArea.value.trim()) {
        if (typeof showToast === 'function') showToast('暂无正文可复制');
        return;
      }
      try {
        await navigator.clipboard.writeText(contentArea.value);
        if (typeof showToast === 'function') showToast('正文内容已复制到剪贴板');
      } catch (err) {
        if (typeof showToast === 'function') showToast('浏览器未授权剪贴板');
      }
    });

    document.getElementById('vgClearContent')?.addEventListener('click', () => {
      if (contentArea) contentArea.value = '';
      if (typeof showToast === 'function') showToast('正文已清空');
    });

    // 6. 各图片生成提示词卡片联动与预览生成
    const countSelect = document.getElementById('vgImageCount');
    const ratioSelect = document.getElementById('vgAspectRatio');
    const promptsList = document.getElementById('vgPromptsList');
    const galleryGrid = document.getElementById('vgGalleryGrid');
    const promptsTitle = document.getElementById('vgPromptsSectionTitle');
    const ratioLabel = document.getElementById('vgGalleryRatioLabel');

    const defaultPrompts = [
      { name: '封面主图', desc: '工业级质感食品级无纺布外卖保温袋，高端墨绿色与金色品牌定制LOGO，立体平口手提，背景微虚化呈现洁净明亮餐饮后厨，商业摄影，4K超清实拍，柔和棚光' },
      { name: '材质细节特写', desc: '双层食品级覆铝箔内胆与加厚无纺布横截面微距特写，高精细纹理，防油防水冷热阻隔测试水珠滚落特写，材质剖析图，高保真画质' },
      { name: '使用与承重场景', desc: '整齐码放的精美外卖打包袋，十字加固提手挂重测试，外卖小哥从容取餐，专业骑手配送保温箱，阳光街景，充满食欲与品质感' },
      { name: '工厂资质背书', desc: '现代自动化无尘净化车间全景，智能超声波立体缝合生产流水线，质检工程师佩戴无尘服检测报告对比，企业实力硬核背书' },
      { name: '品牌定制方案', desc: '多种尺寸与色彩的外卖保温袋矩阵陈列，支持个性化LOGO烫金烫银工艺，高端商务礼品级陈列' },
      { name: '环保降解认证', desc: 'PLA生物全降解材质在泥土中降解过程对比图，绿色环保标示与国际权威质检合格证书' },
      { name: '冷链奶茶实测', desc: '冰块冷饮保温袋实测，杯壁水雾冷气缭绕，隔热不冰手，实测保冷6小时效果对比' },
      { name: '大促仓储出货', desc: '高标准大型立体仓储库房，托盘叉车标准化打包，封口胶带整齐，整装待发的大货出厂景象' },
      { name: '餐饮名店案例', desc: '一线高端餐饮连锁门店出餐台打包实拍，顾客提着精美外卖袋步出餐厅，品质生活场景' }
    ];

    function renderPromptsAndGallery() {
      const count = parseInt(countSelect?.value || '4', 10);
      const ratio = ratioSelect?.value || '9:16';
      const ratioClass = 'ratio-' + ratio.replace(':', '-');

      if (promptsTitle) promptsTitle.textContent = '■ 各图片生成提示词 (共 ' + count + ' 张)';
      if (ratioLabel) ratioLabel.textContent = '当前比例：' + ratio + (ratio === '9:16' ? ' (手机竖屏)' : ratio === '3:4' ? ' (新媒体图文)' : ratio === '1:1' ? ' (方形卡片)' : ' (横屏视频)');

      if (promptsList) {
        promptsList.innerHTML = '';
        for (let i = 0; i < count; i++) {
          const p = defaultPrompts[i % defaultPrompts.length];
          const card = document.createElement('div');
          card.className = 'vg-prompt-card';
          card.innerHTML = `
            <div class="vg-prompt-head">
              <span class="vg-prompt-num"><span style="width:18px;height:18px;border-radius:50%;background:#ecfdf5;color:#059669;display:inline-grid;place-items:center;font-size:11px">` + (i + 1) + `</span> 图 ` + (i + 1) + ` (` + p.name + `)</span>
              <button class="action-btn" type="button" style="padding:2px 8px;font-size:11px"><i class="action-icon">✦</i> AI优化提示词</button>
            </div>
            <textarea class="ipt vg-prompt-input" rows="2" placeholder="请输入图 ` + (i + 1) + ` 的画面生成提示词...">` + p.desc + `</textarea>
            <div class="vg-prompt-quick">
              <span class="vg-quick-chip">+ 商业棚拍实景</span>
              <span class="vg-quick-chip">+ 4K超高清微距</span>
              <span class="vg-quick-chip">+ 极简科技感</span>
              <span class="vg-quick-chip">+ 绿色环保视觉</span>
            </div>
          `;
          promptsList.appendChild(card);
        }
      }

      if (galleryGrid) {
        galleryGrid.innerHTML = '';
        for (let i = 0; i < count; i++) {
          const p = defaultPrompts[i % defaultPrompts.length];
          const imgCard = document.createElement('div');
          imgCard.className = 'vg-image-card';
          imgCard.innerHTML = `
            <div class="vg-image-thumb ` + ratioClass + `">
              <div style="font-size:28px;margin-bottom:6px">📦</div>
              <div style="font-size:12px;font-weight:700;color:#065f46">图 ` + (i + 1) + ` · ` + p.name + `</div>
              <div style="font-size:10.5px;color:#059669;margin-top:2px">已生成 · 4K超清渲染</div>
              <div style="position:absolute;top:6px;right:6px;background:rgba(255,255,255,0.9);border-radius:6px;padding:2px 6px;font-size:10px;color:#1e293b;font-weight:600">` + ratio + `</div>
            </div>
            <div class="vg-image-info">
              <div class="vg-image-title">图 ` + (i + 1) + `：` + p.name + `</div>
              <div class="vg-image-meta">多模态视觉生成 · 扣10积分</div>
            </div>
          `;
          galleryGrid.appendChild(imgCard);
        }
      }
    }

    countSelect?.addEventListener('change', renderPromptsAndGallery);
    ratioSelect?.addEventListener('change', renderPromptsAndGallery);
    renderPromptsAndGallery();

    // 快捷标签点击填入提示词
    promptsList?.addEventListener('click', (e) => {
      const chip = e.target.closest('.vg-quick-chip');
      if (chip) {
        const card = chip.closest('.vg-prompt-card');
        const ta = card?.querySelector('.vg-prompt-input');
        if (ta) {
          const text = chip.textContent.replace(/^\+\s*/, '');
          ta.value = ta.value + '，' + text;
          if (typeof showToast === 'function') showToast('已将「' + text + '」加入画面提示词');
        }
      }
    });

    // 7. 一键生成全套图文
    const autoGenBtn = document.getElementById('vgAutoGenerateBtn');
    autoGenBtn?.addEventListener('click', () => {
      const origText = autoGenBtn.innerHTML;
      autoGenBtn.disabled = true;
      autoGenBtn.innerHTML = '<span>⚡ 正在调用多模态模型生成文案与配图…</span>';

      setTimeout(() => {
        autoGenBtn.disabled = false;
        autoGenBtn.innerHTML = origText;
        renderPromptsAndGallery();
        if (typeof showToast === 'function') showToast('全套图文策划及4张高精度配图已生成完毕！');
      }, 750);
    });

    // 8. 重置按钮
    document.getElementById('vgResetBtn')?.addEventListener('click', () => {
      if (confirm('确认重置当前策划表单吗？')) {
        tags = ['外卖袋定制', '环保包装', '餐饮供应链'];
        renderTags();
        if (titleInput) titleInput.value = '外卖袋定制怎么选？源头工厂教你避坑5大雷区！';
        updateTitleCount();
        renderPromptsAndGallery();
        if (typeof showToast === 'function') showToast('已恢复默认配置');
      }
    });

    // 9. 保存至新生文库
    document.getElementById('vgSaveToArticlesBtn')?.addEventListener('click', () => {
      if (typeof showToast === 'function') showToast('当前图文已成功存入「新生文库」，可在文库中查阅或审核');
    });

    // 10. 立即分发投稿 (自动跳转到发布中心)
    document.getElementById('vgPublishBtn')?.addEventListener('click', () => {
      const pubNav = document.querySelector('.nav a[data-p="pub"]');
      if (pubNav) {
        pubNav.click();
        if (typeof showToast === 'function') showToast('已携带当前图文跳转至「文章发布」中心，可选择投产媒体');
      }
    });
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
  const kwTable=document.getElementById('longTailTable');const kwSearch=document.getElementById('kwSearchInput');const kwEntity=document.getElementById('kwEntityFilter');const kwIntent=document.getElementById('kwIntentFilter');const kwPriority=document.getElementById('kwPriorityFilter');const kwCount=document.getElementById('kwResultCount');const kwEmpty=document.getElementById('kwEmpty');
  function allKwRows(){return kwTable?[...kwTable.rows].slice(1):[]}
  if(kwEntity){[...new Set(allKwRows().map(r=>r.cells[1]?.textContent.trim()).filter(Boolean))].forEach(v=>{const o=document.createElement('option');o.value=o.textContent=v;kwEntity.appendChild(o)})}
  function applyKwFilters(){const q=(kwSearch?.value||'').trim().toLowerCase(),e=kwEntity?.value||'',i=kwIntent?.value||'',p=kwPriority?.value||'';let shown=0;allKwRows().forEach(r=>{const text=r.textContent.toLowerCase();const ok=(!q||text.includes(q))&&(!e||r.cells[1]?.textContent.trim()===e)&&(!i||r.cells[2]?.textContent.trim()===i)&&(!p||r.cells[4]?.textContent.trim()===p);r.style.display=ok?'':'none';if(ok)shown++});if(kwCount)kwCount.textContent=shown+' 条';kwEmpty?.classList.toggle('show',shown===0)}
  [kwSearch,kwEntity,kwIntent,kwPriority].forEach(x=>x?.addEventListener(x===kwSearch?'input':'change',applyKwFilters));document.getElementById('kwFilterReset')?.addEventListener('click',()=>{if(kwSearch)kwSearch.value='';if(kwEntity)kwEntity.value='';if(kwIntent)kwIntent.value='';if(kwPriority)kwPriority.value='';applyKwFilters()});applyKwFilters();

  // Keyword KPI counts derived from current editable inputs / rows.
  const comboEl=document.getElementById('keywordComboCount'),libraryEl=document.getElementById('keywordLibraryCount'),productionEl=document.getElementById('keywordProductionCount');
  function updateKeywordKpis(){
    const entities = typeof getEntities === 'function' ? getEntities().length : 3;
    const entityPill = document.getElementById('entityCountPill');
    if (entityPill) entityPill.textContent = entities + ' 个核心实体';
    if (comboEl) comboEl.textContent = entities.toLocaleString('zh-CN');
    const rows = allKwRows();
    if (libraryEl) libraryEl.textContent = rows.length.toLocaleString('zh-CN');
    if (productionEl) productionEl.textContent = rows.filter(r=>r.cells[5]?.textContent.includes('已选投产')).length.toLocaleString('zh-CN');
  }
  document.getElementById('keywordEntities')?.addEventListener('input', updateKeywordKpis);
  document.getElementById('prefixSuffixAgent')?.addEventListener('click', ()=>setTimeout(updateKeywordKpis, 760));
  updateKeywordKpis();
  
  // Content-generation parameter traceability: derive article type from selected long-tail row.
  const typePreview=document.getElementById('articleTypePreview');const summaryCore=document.getElementById('summaryCore');const summaryType=document.getElementById('summaryType');const summaryLength=document.getElementById('summaryLength');const summaryReady=document.getElementById('summaryReady');const articleCountInput=document.getElementById('articleCount');
  function currentArticleType(){const lt=document.getElementById('longTailSelect')?.value||'';const row=allKwRows().find(r=>r.cells[0]?.textContent.trim()===lt);return row?.cells[3]?.textContent.trim()||'待匹配'}
  function selectedLength(){return document.querySelector('.article-length-options .chip.on')?.dataset.length||'标准'}
  function updateGenerationSummary(){const core=document.getElementById('coreKeywordSelect')?.value||'—';const type=currentArticleType();if(typePreview)typePreview.value=type;if(summaryCore)summaryCore.textContent=core;if(summaryType)summaryType.textContent=type;const chip=document.querySelector('.article-length-options .chip.on')?.textContent.trim()||'标准3000';const count=articleCountInput?.value.trim()||'0';if(summaryLength)summaryLength.textContent=chip+' × '+count+'篇';const ok=/^[1-9]\d*$/.test(count)&&core&&document.getElementById('longTailSelect')?.value;if(summaryReady){summaryReady.textContent=ok?'● 可生成':'● 参数待完善';summaryReady.style.color=ok?'#18815c':'#a86b10'}}
  document.getElementById('longTailSelect')?.addEventListener('change',updateGenerationSummary);document.getElementById('coreKeywordSelect')?.addEventListener('change',()=>setTimeout(updateGenerationSummary,0));articleCountInput?.addEventListener('input',updateGenerationSummary);document.querySelectorAll('.article-length-options .chip').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.article-length-options .chip').forEach(x=>x.setAttribute('aria-checked',x.classList.contains('on')?'true':'false'));updateGenerationSummary()}));updateGenerationSummary();
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'&&document.getElementById('gen')?.classList.contains('on')){e.preventDefault();document.getElementById('generateArticleBtn')?.click()}});
  const genBtn=document.getElementById('generateArticleBtn');genBtn?.addEventListener('click',()=>{if(genBtn.disabled)return;const count=articleCountInput?.value.trim();if(!/^[1-9]\d*$/.test(count))return;const old=genBtn.innerHTML;genBtn.disabled=true;genBtn.innerHTML='<span>正在创建任务…</span>';setTimeout(()=>{genBtn.disabled=false;genBtn.innerHTML=old},850)});

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
  window.getArticlePayload=()=>({cname:document.getElementById('slotC')?.value.trim()||'',core_keyword:document.getElementById('coreKeywordSelect')?.value||'',long_tail_keyword:document.getElementById('longTailSelect')?.value||'',article_type:document.getElementById('articleTypePreview')?.value||'',graph_json:document.getElementById('graphSelect')?.value||'',article_length:selectedLength(),article_count:Number(document.getElementById('articleCount')?.value||0),redline:document.getElementById('redlineInput')?.value.trim()||''});

  // ================= 网站发布 (Site Publication) 交互引擎 =================
  function initSitePublicationModule() {
    const sitepubPage = document.getElementById('sitepub');
    if (!sitepubPage) return;

    let sitepubAccounts = [
      { id: 1, name: '鱼跃在花见', platform: '网易号', status: '已授权', time: '2026-06-30 14:08:02' },
      { id: 2, name: '花都管道疏通', platform: '公众号', status: '已授权', time: '2025-11-17 15:41:14' },
      { id: 3, name: '风趣柳叶F20olBm', platform: '头条号', status: '已授权', time: '2026-05-14 14:15:20' },
      { id: 4, name: '花都疏通厕所', platform: '搜狐号', status: '已授权', time: '2026-05-14 14:30:12' },
      { id: 5, name: 'yayuan010', platform: '百家号', status: '未授权', time: '2026-05-14 14:15:39' },
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

  initSitePublicationModule();

})();

  } catch(err) {
    console.error('Error in UX script 7:', err);
  }
}
