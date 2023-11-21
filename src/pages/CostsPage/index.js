import { useState } from "react";
import Costs from "modules/costs";

export default function CostsPage(props) {
  const costsData = [
    {
      date: new Date(2022, 5, 15),
      title: "Fridge",
      price: Math.round(Math.random() * 100),
      id: "zds",
    },
    {
      date: new Date(2012, 4, 1),
      title: "TV",
      price: Math.round(Math.random() * 100),
      id: "uuula45",
    },
  ];

  const [costs, setCosts] = useState(costsData);

  function onCostChange(v) {
    setCosts(v);
  }
  function onAdd() {
    const newCost = {
      date: new Date(),
      title: "New Item",
      price: 0,
      id: `it_${performance.now()}_gzt`,
    };

    setCosts(costs.concat(newCost));
  }

  return (
    <div className="costs-page">
      <Costs data={costs} onChange={onCostChange} onAdd={onAdd} />
    </div>
  );
}
