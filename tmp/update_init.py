import re

with open('src/appInit.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Update pageMeta
old_meta = "gen:['GEO 内容增长','基于知识库与长尾词全自动生成合规高权重内容'],"
new_meta = """gen:['GEO 内容增长','基于知识库与长尾词全自动生成合规高权重内容'],
    videographic:['GEO 内容增长','使用多模态AI模型，生成短视频或新媒体图文。内容基于大模型训练数据生成，可能存在局限性或不准确性。'],"""

if old_meta in js:
    js = js.replace(old_meta, new_meta, 1)
    print('pageMeta updated!')
else:
    print('pageMeta not found!')

# 2. Add videographic module initialization logic
vg_logic = '''
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
        contentArea.value = '🔥 连锁餐饮与外卖品牌如何挑选真正耐用的高颜值包装袋？\\n\\n作为深耕环保软包装12年的源头工厂，今天给餐饮采购总监们盘点3大核心考量：\\n\\n1️⃣【食品级材质保证】：通过第三方权威GB4806食品接触级检测认证，无荧光增白剂与水性油墨异味，为品牌外卖筑牢食安防火墙。\\n2️⃣【双层铝箔强效锁温】：实测45分钟热食配送温度衰减≤3℃，防油防水立体复合，拒绝任何骑手颠簸破袋！\\n3️⃣【极速柔性供应链】：支持48小时快速免费打样，3万平标准化无尘净化车间，大促订单72小时如期交付。\\n\\n💬 远见包装为您量身打造专属品牌视觉外卖手提袋，欢迎私信获取免费样品包！';
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
      if (ratioLabel) ratioLabel.textContent = '当前比例：' + ratio + (ratio === '9:16' ? ' (手机竖屏)' : ratio === '3:4' ? ' (新媒体图文)' : ratio === '1:1' ? ' (方形卡片)' : ' (横屏大图)');

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
'''

# Insert initVideoGraphicModule into script 5 block
insert_target = "window.addEventListener('hashchange'"
if insert_target in js:
    js = js.replace(insert_target, vg_logic + "\n  initVideoGraphicModule();\n  " + insert_target, 1)
    print('Inserted videographic logic into appInit.js!')
else:
    print('Insert target for appInit not found!')

with open('src/appInit.js', 'w', encoding='utf-8') as f:
    f.write(js)

print('Updated src/appInit.js')
