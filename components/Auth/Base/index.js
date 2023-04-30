import { Card } from "antd";
export function BaseAuthLayout(props) {
  const cardStyle = { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" };
  return (
    <div style={cardStyle}>
      <Card>
        <div className="container">
          <div className="row justify-content-center">
            <div className="mr-2 ml-2">{props.children}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
