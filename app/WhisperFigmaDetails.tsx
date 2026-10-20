import PortfolioImage from './PortfolioImage';
const precedents = [
  { source: 'teamLab', principle: '环境随人的参与变化', response: '把花朵、流动等自然意象转化为响应式光线，让参与者看见自己的行动带来的变化。' },
  { source: 'WATERLICHT / Daan Roosegaarde', principle: '用光塑造空间，而非只作装饰', response: '借鉴光线对氛围与空间感的塑造，将湖水、树冠的意象延伸为头顶的悬挂光环境。' },
  { source: '悬挂式灯光装置', principle: '分散的节点支持多人参与', response: '以不同长度的灯串容纳不同触达高度，让个人局部反馈与多人共同变化发生在同一系统中。' },
];

export default function WhisperFigmaDetails() {
  return <div className="whisper-figma-details">
    <div className="whisper-section-heading"><h3>从参考案例，走向自己的互动原则。</h3><p>Living Canopy 的设计参考不止于自然主题的外观：我们从互动生态、环境光线与悬挂结构中，提取能用于这一场地的参与方式。</p></div>
    <div className="whisper-precedent-list">{precedents.map((item,index)=><article key={item.source}><div className="whisper-precedent-name"><span>0{index+1}</span><h4>{item.source}</h4></div><div><small>借鉴的原则</small><p>{item.principle}</p></div><div><small>在方案中的转化</small><p>{item.response}</p></div></article>)}</div>
    <p className="whisper-source">整理自 Figma「Living Canopy」概念页的设计参考说明；参考作品不属于本项目成果。</p>
    <div className="whisper-section-heading whisper-detail-heading"><h3>把整体光环境拆成可回应的单元。</h3><p>课程方案以不同长度的悬挂灯串组成互动区域。灯球内的发光单元与感应构想，让靠近、移动和多人参与对应不同范围的光线变化。</p></div>
    <div className="whisper-device-layout">
      <div className="whisper-device-images">
        <figure><div className="whisper-device-crop whisper-node-crop" data-node-id="507:201"><PortfolioImage src="/assets/masters/mima/story/living-canopy-node-source.png" alt="Figma 中的灯球结构参考图，呈现悬挂连接、内部构件与花形灯体" loading="lazy" /></div><figcaption>灯球结构参考</figcaption></figure>
        <figure><div className="whisper-device-crop whisper-drape-crop" data-node-id="507:210"><PortfolioImage src="/assets/masters/mima/story/living-canopy-drape-source.png" alt="Figma 中的灯串单元细节图，多条嵌入微型 LED 的灯线由顶部悬挂" loading="lazy" /></div><figcaption>悬挂灯串单元</figcaption></figure>
      </div>
      <dl className="whisper-device-notes"><div><dt>触达</dt><dd>以不同悬挂高度，让成人和儿童在不同位置接近互动节点。</dd></div><div><dt>感应</dt><dd>方案提出在灯球中设置运动与距离感应，以局部灯光回应人的靠近和移动。</dd></div><div><dt>反馈</dt><dd>从单个节点的亮度、花形光效与拖尾，扩展到多人加入后的灯串共同变化。</dd></div></dl>
    </div>
    <p className="whisper-source">图片取自 Figma「Layout and interaction process」中的结构参考。此处展示课程技术构想，不代表实物制作或设备性能验证。</p>
    <div className="whisper-section-heading whisper-detail-heading"><h3>让参与发生，也承认场地的限制。</h3><p>课程反思中，我们没有把“孩子愿意互动”直接等同于“母亲一定能休息”。这套户外方案还受到以下条件影响。</p></div>
    <ol className="whisper-constraints"><li><span>01 / 环境与维护</span><h4>户外光线不是恒定的。</h4><p>雨水、湿度、温度与灰尘会影响元件和感应器；强日光也可能削弱灯光提示。持续运行还依赖稳定供电与维护。</p></li><li><span>02 / 多人使用</span><h4>更多参与，不一定更平静。</h4><p>人数增加时，互动区域可能重叠，感应响应与视觉秩序也可能受影响，打破个人探索与共同参与的平衡。</p></li><li><span>03 / 照看负担</span><h4>休息仍然伴随照看。</h4><p>孩子可能需要帮助触达节点，或需要母亲回应意外情况。持续的注意力需求，仍可能限制母亲真正放松。</p></li></ol>
    <p className="whisper-source">以上来自 Figma「Living Canopy」的 Design Strategy / limitations，不作为已完成的场地测试结论。</p>
  </div>;
}
