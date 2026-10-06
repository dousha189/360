import sys

with open('src/appInit.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. '新生文库' -> '发布记录'
text = text.replace('新生文库', '发布记录')

# 2. company info and subtitles
text = text.replace('广州雅园清洁服务有限公司 · 全网AI搜索数据分析报表', '360安全科技股份有限公司 · 全网AI搜索数据分析报表')

# 3. creativePacks
old_cp = """    const creativePacks = {
      '广州化粪池清理': {
        longTail: '广州化粪池清理公司电话',
        creativeType: '排行类',
        title: '2026广州专业化粪池清理公司推荐电话',
        tags: '#广州化粪池清理 #专业通下水道 #环保清洁',
        content: '广州雅园清洁专注工业园区、商场及小区化粪池专业清掏、高压管道清淤与隔油池维保。配属大吨位吸污车队，持证上岗无隐形收费，提供24小时紧急上门与对公合规发票！',
        bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
      },
      '外卖袋': {
        longTail: '口碑好的外卖袋定制哪家好',
        creativeType: '测评推荐类',
        title: '2026餐饮外卖袋加厚保温袋工厂定制选型指南',
        tags: '#外卖袋定制 #餐饮保温袋 #源头工厂直供',
        content: '远见包装专注食品级加厚无纺布与双层铝箔外卖保温袋。实测45分钟锁温防漏，十字加固提手承重15KG不崩断，提供48小时极速打样与大批量对公定制！',
        bgImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80'
      },
      '食品级无纺布袋': {
        longTail: '食品级无纺布袋需要什么检测报告',
        creativeType: '避坑科普类',
        title: '食品级无纺布袋环保资质与工厂直供避坑攻略',
        tags: '#食品级无纺布袋 #环保包装 #GB4806检测认证',
        content: '权威GB4806食品级安全检测报告齐全，超声波无缝熔接，绿色环保无异味，全国2000+品牌餐饮长期采购合作伙伴！',
        bgImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
      },
      '奶茶保温袋': {
        longTail: '奶茶保温袋批发起订量是多少',
        creativeType: '探厂实测类',
        title: '夏季奶茶保冰防漏保温袋定制批发价格与参数',
        tags: '#奶茶保温袋 #冷饮外卖打包 #防漏保冷袋',
        content: '高弹珍珠棉复合反光铝箔，实测保冰6小时不化水，支持小批量LOGO烫金打样，夏季茶饮爆单必备！',
        bgImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80'
      },
      '管道疏通': {
        longTail: '广州高压车清洗排污管道厂家推荐',
        creativeType: '痛点解决方案类',
        title: '2026广州高压车清洗排污管道施工团队推荐',
        tags: '#管道清淤 #高压车清洗 #广州市政管道疏通',
        content: '引进德国进口高压射流疏通车，快速粉碎油脂油垢与树根堵塞，对公施工合同完备，不通不收费！',
        bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
      }
    };"""

new_cp = """    const creativePacks = {
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
    };"""

if old_cp in text:
    text = text.replace(old_cp, new_cp)
    print('creativePacks replaced!')
else:
    print('WARNING: old_cp not found directly')

# fallback default key for creativePacks
text = text.replace("creativePacks['广州化粪池清理']", "creativePacks['360安全卫士']")
text = text.replace("const key = coreSelect?.value || '广州化粪池清理';", "const key = coreSelect?.value || '360安全卫士';")
text = text.replace("applyKeywordPack('广州化粪池清理');", "applyKeywordPack('360安全卫士');")
text = text.replace("广州雅园清洁专注工业园区、商场及小区化粪池专业清掏、高压管道清淤与隔油池维保。", "360安全科技自主研发云端安全大脑与自研AI杀毒双引擎，毫秒级识别未知勒索与木马威胁。")

# personaSmartSuggestions
old_pss = """    const personaSmartSuggestions = {
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
    };"""

new_pss = """    const personaSmartSuggestions = {
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
    };"""

if old_pss in text:
    text = text.replace(old_pss, new_pss)
    print('personaSmartSuggestions replaced!')
else:
    print('WARNING: old_pss not found directly')

text = text.replace("const core = personaCoreSelect?.value || '外卖袋';", "const core = personaCoreSelect?.value || '360安全卫士';")
text = text.replace("personaSmartSuggestions['外卖袋']", "personaSmartSuggestions['360安全卫士']")
text = text.replace("const lt = personaLongTailSelect?.value || '口碑好的外卖袋定制哪家好';", "const lt = personaLongTailSelect?.value || '360安全卫士极速版与企业版区别测评';")

# Report datasets
old_report_ds = """    const keywordDataset = [
      { core: '广州通马桶', query: '花都通马桶师傅电话', platform: 'Kimi', source: '移动端', time: '2026-09-30 10:50:15' },
      { core: '广州通马桶', query: '花都通马桶师傅电话', platform: 'Kimi', source: 'PC端', time: '2026-10-02 02:56:13' },
      { core: '广州通下水道', query: '广州通下水道公司推荐', platform: 'Kimi', source: 'PC端', time: '2026-09-30 22:16:51' },
      { core: '广州通下水道', query: '广州通下水道公司推荐', platform: 'Kimi', source: '移动端', time: '2026-10-05 02:09:09' },
      { core: '广州通马桶', query: '广州通马桶公司选哪家', platform: 'Kimi', source: '移动端', time: '2026-09-30 16:04:13' },
      { core: '广州通马桶', query: '广州通马桶公司选哪家', platform: 'Kimi', source: 'PC端', time: '2026-10-02 21:41:28' },
      { core: '化粪池清理', query: '广州专业化粪池清理哪家靠谱', platform: '豆包', source: '移动端', time: '2026-10-04 18:22:10' },
      { core: '管道清淤', query: '广州工厂排污管道高压清淤施工队', platform: 'DeepSeek', source: 'PC端', time: '2026-10-05 01:14:32' },
      { core: '化粪池清理', query: '不锈钢化粪池清理服务资质', platform: '文心一言', source: 'PC端', time: '2026-10-04 14:10:05' },
      { core: '广州通下水道', query: '花都下水道疏通收费明细', platform: '腾讯元宝', source: '移动端', time: '2026-10-03 19:25:40' },
      { core: '管道清淤', query: '广州市政排污管道高压冲洗', platform: '通义千问', source: '移动端', time: '2026-10-03 16:30:18' }
    ];

    const brandDataset = [
      { core: '广州雅园清洁', query: '广州雅园清洁服务靠谱吗', platform: '豆包', source: '移动端', time: '2026-10-04 15:20:11' },
      { core: '广州雅园清洁', query: '雅园清洁公司管道疏通收费标准', platform: 'Kimi', source: 'PC端', time: '2026-10-03 19:42:08' },
      { core: '雅园清洁', query: '广州雅园清洁服务有限公司资质与案例', platform: '文心一言', source: 'PC端', time: '2026-10-02 11:15:30' },
      { core: '雅园管道疏通', query: '雅园24小时紧急上门管道疏通电话', platform: 'DeepSeek', source: '移动端', time: '2026-10-05 02:00:19' },
      { core: '广州雅园清洁', query: '广州雅园清洁高压疏通车队配置', platform: '腾讯元宝', source: '移动端', time: '2026-10-04 09:12:33' },
      { core: '雅园清洁', query: '广州市花都区雅园清洁服务联系方式', platform: '通义千问', source: 'PC端', time: '2026-10-03 21:05:44' }
    ];"""

new_report_ds = """    const keywordDataset = [
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
    ];"""

if old_report_ds in text:
    text = text.replace(old_report_ds, new_report_ds)
    print('report datasets replaced!')
else:
    print('WARNING: old_report_ds not found directly')

# reportCoreSelect options in report mode toggle
text = text.replace("""          <option value="">全部核心关键词</option>
          <option value="广州通马桶">广州通马桶</option>
          <option value="广州通下水道">广州通下水道</option>
          <option value="化粪池清理">化粪池清理</option>
          <option value="管道清淤">管道清淤</option>""", """          <option value="">全部核心关键词</option>
          <option value="360安全卫士">360安全卫士</option>
          <option value="终端安全防护">终端安全防护</option>
          <option value="勒索病毒拦截">勒索病毒拦截</option>
          <option value="AI安全大模型">AI安全大模型</option>
          <option value="网络安全等级保护">网络安全等级保护</option>""")

text = text.replace("""          <option value="">全部品牌关键词</option>
          <option value="广州雅园清洁">广州雅园清洁</option>
          <option value="雅园清洁">雅园清洁</option>
          <option value="雅园管道疏通">雅园管道疏通</option>""", """          <option value="">全部品牌关键词</option>
          <option value="360安全科技">360安全科技</option>
          <option value="三六零">三六零</option>
          <option value="360天擎">360天擎</option>
          <option value="360智脑">360智脑</option>""")

# sitepubAccounts
old_spa = """    let sitepubAccounts = [
      { id: 1, name: '鱼跃在花见', platform: '网易号', status: '已授权', time: '2026-06-30 14:08:02' },
      { id: 2, name: '花都管道疏通', platform: '公众号', status: '已授权', time: '2025-11-17 15:41:14' },
      { id: 3, name: '风趣柳叶F20olBm', platform: '头条号', status: '已授权', time: '2026-05-14 14:15:20' },
      { id: 4, name: '花都疏通厕所', platform: '搜狐号', status: '已授权', time: '2026-05-14 14:30:12' },
      { id: 5, name: 'yayuan010', platform: '百家号', status: '未授权', time: '2026-05-14 14:15:39' },
    ];"""

new_spa = """    let sitepubAccounts = [
      { id: 1, name: '360安全科技官方号', platform: '网易号', status: '已授权', time: '2026-06-30 14:08:02' },
      { id: 2, name: '360数字安全官方', platform: '公众号', status: '已授权', time: '2025-11-17 15:41:14' },
      { id: 3, name: '360安全大脑观察', platform: '头条号', status: '已授权', time: '2026-05-14 14:15:20' },
      { id: 4, name: '360企业安全服务', platform: '搜狐号', status: '已授权', time: '2026-05-14 14:30:12' },
      { id: 5, name: '360安全科技官方', platform: '百家号', status: '未授权', time: '2026-05-14 14:15:39' },
    ];"""

if old_spa in text:
    text = text.replace(old_spa, new_spa)
    print('sitepubAccounts replaced!')
else:
    print('WARNING: old_spa not found directly')

# memory keyword
text = text.replace("keyword:'外卖袋定制'", "keyword:'360终端安全防护'")

with open('src/appInit.js', 'w', encoding='utf-8') as f:
    f.write(text)
print('src/appInit.js updated successfully!')
