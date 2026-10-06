with open('src/appInit.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Replace the top entity sync block
p_start = js.find('// Keyword entity source -> persona products -> content creation core keyword.')
p_end = js.find('// Shared Agent icon interactions.', p_start)
assert p_start != -1 and p_end != -1, f'{p_start}, {p_end}'

new_entity_block = '''// Keyword entity source -> persona products & content creation core keywords.
const keywordEntities = document.getElementById('keywordEntities');
const personaCoreSelect = document.getElementById('personaCoreKeywordSelect');
const personaLongTailSelect = document.getElementById('personaLongTailSelect');
const coreKeywordSelect = document.getElementById('coreKeywordSelect');
const longTailSelect = document.getElementById('longTailSelect');

function getEntities() {
  return [...new Set((keywordEntities?.value || '').split(/\\n+/).map(x => x.trim()).filter(Boolean))];
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
'''

js = js[:p_start] + new_entity_block + js[p_end:]

# 2. Update line 268 品牌诊断检测产物
js = js.replace('品牌诊断检测产物', 'AI搜索收录检测报告')

# 3. Update keyword filters, kpis, and generation summary
kw_block_start = js.find('// Long-tail keyword library: live query + filters + useful counts.')
kw_block_end = js.find('// Article live search and richer preview drawer.', kw_block_start)
assert kw_block_start != -1 and kw_block_end != -1, f'{kw_block_start}, {kw_block_end}'

new_kw_block = '''// Long-tail keyword library: live query + filters + useful counts.
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
  document.getElementById('prefixSuffixAgent')?.addEventListener('click', () => setTimeout(updateKeywordKpis, 760));
  updateKeywordKpis();

  // Content-generation parameter synchronization
  const summaryCore = document.getElementById('summaryCore');
  const summaryPersona = document.getElementById('summaryPersona');
  const summaryLength = document.getElementById('summaryLength');
  const summaryReady = document.getElementById('summaryReady');
  const articleCountInput = document.getElementById('articleCount');

  function selectedLength() {
    return document.querySelector('.article-length-options .chip.on')?.dataset.length || '标准';
  }

  function updateGenerationSummary() {
    const core = document.getElementById('coreKeywordSelect')?.value || '—';
    const persona = document.getElementById('genUserPersonaSelect')?.value?.split('/')[0]?.trim() || '—';
    if (summaryCore) summaryCore.textContent = core;
    if (summaryPersona) summaryPersona.textContent = persona;
    const chip = document.querySelector('.article-length-options .chip.on')?.textContent.trim() || '标准3000';
    const count = articleCountInput?.value.trim() || '0';
    if (summaryLength) summaryLength.textContent = chip + ' × ' + count + '篇';
    const ok = /^[1-9]\\d*$/.test(count) && core && document.getElementById('longTailSelect')?.value;
    if (summaryReady) {
      summaryReady.textContent = ok ? '● 可生成' : '● 参数待完善';
      summaryReady.style.color = ok ? '#18815c' : '#a86b10';
    }
  }

  document.getElementById('longTailSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('coreKeywordSelect')?.addEventListener('change', () => setTimeout(updateGenerationSummary, 0));
  document.getElementById('genUserPersonaSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('genSearchScenarioSelect')?.addEventListener('change', updateGenerationSummary);
  document.getElementById('genUserPainPointsSelect')?.addEventListener('change', updateGenerationSummary);
  articleCountInput?.addEventListener('input', updateGenerationSummary);
  document.querySelectorAll('.article-length-options .chip').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('.article-length-options .chip').forEach(x => x.setAttribute('aria-checked', x.classList.contains('on') ? 'true' : 'false'));
    updateGenerationSummary();
  }));
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
    const count = articleCountInput?.value.trim();
    if (!/^[1-9]\\d*$/.test(count)) return;
    const old = genBtn.innerHTML;
    genBtn.disabled = true;
    genBtn.innerHTML = '<span>正在创建任务…</span>';
    setTimeout(() => {
      genBtn.disabled = false;
      genBtn.innerHTML = old;
      showToast('文章生成任务已提交，将在后台并发撰写');
    }, 850);
  });
'''

js = js[:kw_block_start] + new_kw_block + js[kw_block_end:]

# 4. Update window.getArticlePayload
old_payload = """window.getArticlePayload=()=>({cname:document.getElementById('slotC')?.value.trim()||'',core_keyword:document.getElementById('coreKeywordSelect')?.value||'',long_tail_keyword:document.getElementById('longTailSelect')?.value||'',article_type:document.getElementById('articleTypePreview')?.value||'',graph_json:document.getElementById('graphSelect')?.value||'',article_length:selectedLength(),article_count:Number(document.getElementById('articleCount')?.value||0),redline:document.getElementById('redlineInput')?.value.trim()||''});"""

new_payload = """window.getArticlePayload = () => ({
    cname: document.getElementById('slotC')?.value.trim() || '',
    core_keyword: document.getElementById('coreKeywordSelect')?.value || '',
    long_tail_keyword: document.getElementById('longTailSelect')?.value || '',
    user_persona: document.getElementById('genUserPersonaSelect')?.value || '',
    search_scenario: document.getElementById('genSearchScenarioSelect')?.value || '',
    user_pain_points: document.getElementById('genUserPainPointsSelect')?.value || '',
    article_length: selectedLength(),
    article_count: Number(document.getElementById('articleCount')?.value || 0),
    redline: document.getElementById('redlineInput')?.value.trim() || ''
  });"""

if old_payload in js:
    js = js.replace(old_payload, new_payload, 1)

# 5. Add initPersonaDemandModeling function call right before initSitePublicationModule
persona_func = """
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
      '外卖袋': {
        role: '餐饮企业采购负责人 / 门店店长',
        scenario: '外卖高峰打包破损急需换环保加厚袋',
        pain: '起订量门槛过高、交货周期长耽误开业'
      },
      '食品级无纺布袋': {
        role: '生鲜电商冷链包装采购',
        scenario: '连锁门店扩张大批量工厂直供定制打样',
        pain: '缺乏专业检测报告、担心环保部门复检不合规'
      },
      '奶茶保温袋': {
        role: '连锁茶饮物料经理 / 品牌督导',
        scenario: '夏季冷饮配送保冰防漏定制反光袋',
        pain: '材质薄易漏底渗油、严重影响消费者好评'
      },
      '管道疏通': {
        role: '家庭租客 / 自住业主',
        scenario: '老旧小区下水道反水、马桶堵塞紧急上门',
        pain: '怕施工师傅乱收费中途加价、疏通不彻底'
      },
      '化粪池清理': {
        role: '物业工程维修主管',
        scenario: '商场化粪池定期清掏与隔油池资质年检',
        pain: '夜间应急响应慢、不能提供对公发票与维保合同'
      }
    };

    // AI Suggestion button
    document.getElementById('personaAiSuggestBtn')?.addEventListener('click', () => {
      const core = personaCoreSelect?.value || '外卖袋';
      const match = personaSmartSuggestions[core] || personaSmartSuggestions['外卖袋'];
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
      const core = personaCoreSelect?.value || '外卖袋';
      const lt = personaLongTailSelect?.value || '口碑好的外卖袋定制哪家好';
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
"""

insert_pos = js.find('// ================= 网站发布 (Site Publication) 交互引擎 =================')
assert insert_pos != -1, 'insert_pos not found'
js = js[:insert_pos] + persona_func + js[insert_pos:]

# Also call initPersonaDemandModeling() at the end
js = js.replace('initSitePublicationModule();', 'initPersonaDemandModeling();\\n  initSitePublicationModule();', 1)

with open('src/appInit.js', 'w', encoding='utf-8') as f:
    f.write(js)

print('appInit.js successfully updated!')
