import PortfolioImage from './PortfolioImage';
import './myco-cover.css';

export default function MycoCover({ priority = false }: { priority?: boolean }) {
  return <span className="myco-cover">
    <PortfolioImage
      className="myco-cover-art"
      src="/assets/myco/cover-source-20261021.png"
      alt="MyCo 快闪场景概念：红黄集装箱、鸭嘴兽角色、帆布袋与海港地图钥匙扣"
      fetchPriority={priority ? 'high' : undefined}
    />
    <span className="myco-cover-copy">
      <span className="myco-cover-kicker">POP-UP × HARBOUR EXPLORATION</span>
      <span className="myco-cover-title">MyCo</span>
      <span className="myco-cover-subtitle">一次海港冒险，<br />一场快闪相遇。</span>
      <span className="myco-cover-note">线下快闪 · 海港探索 · 纪念品</span>
    </span>
  </span>;
}
