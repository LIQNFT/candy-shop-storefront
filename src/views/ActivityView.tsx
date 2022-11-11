import styled from 'styled-components';
import { Activity } from '@liqnft/candy-shop';
import { useShopStore } from '@/store/useShopStore';

const ActivityView: React.FC = () => {
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 40 }}>Activity</h1>
      <Activity candyShop={candyShop} />
    </DesContainer>
  );
};

export default ActivityView;

const DesContainer = styled.div`
  width: 100%;

  .candy-activity {
    font-size: 14px;
  }

  a {
    color: white;
  }
`;
