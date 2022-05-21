import "./styles.css";

import { Tree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";

export default function App() {
  let data = {
    name: "Parent",
    children: [
      {
        name: "Child One"
      },
      {
        name: "Child Two"
      }
    ]
  };
  return <Tree data={data} height={400} width={400} />;
}
