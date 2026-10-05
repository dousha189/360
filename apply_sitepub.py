with open('src/appInit.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Update pageMeta
old_pagemeta = "pub:['GEO 内容增长','按媒体属性与GEO适配度选择信源并投稿'],"
new_pagemeta = "pub:['GEO 内容增长','按媒体属性与GEO适配度选择信源并投稿'],\n    sitepub:['媒体库','全网新媒体矩阵、权威媒体与B2B联盟多渠道分发与发布管理'],"

if old_pagemeta in js and "sitepub:" not in js:
    js = js.replace(old_pagemeta, new_pagemeta, 1)
    print('Updated pageMeta with sitepub!')

# 2. Add initSitePublicationModule before closing })();
sitepub_init_code = """
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
"""

pos = js.rfind('})();')
if pos != -1 and 'initSitePublicationModule' not in js:
    js = js[:pos] + sitepub_init_code + '\n' + js[pos:]
    with open('src/appInit.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print('Injected sitepub logic into appInit.js!')
else:
    print('Already injected or pos not found')
