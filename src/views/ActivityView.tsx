import { Activity } from "@liqnft/candy-shop";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const ActivityView: React.FC = () => {
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
