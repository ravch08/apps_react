import { useState } from "react";
import BackButton from "../../layout/BackButton";

const office = {
  person1: [
    {
      userID: 4,
      name: "Shaun",
      contact: {
        phone: "934-379-1420",
        email: "shaun2000@abc.com",
        address: {
          city: "London",
          country: "United Kingdom",
        },
      },
    },
    {
      DepartmentID: 3,
      Department: "Finance",
    },
    {
      Boss: "John",
      employees: [
        {
          name: "Shaun",
          age: 30,
        },
        {
          name: "Paul",
          age: 27,
        },
      ],
    },
  ],
};

const TreeNode = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  if (typeof data !== "object" || data === null) return <div>{data}</div>;

  if (Array.isArray(data)) {
    // Render array nodes
    return (
      <div>
        <button onClick={toggleCollapse}>
          {!collapsed ? "▶" : "▼"} Array
        </button>
        {collapsed &&
          data.map((item, index) => (
            <div key={index} style={{ marginLeft: "20px" }}>
              <TreeNode data={item} />
            </div>
          ))}
      </div>
    );
  }

  // Render object nodes
  return (
    <div>
      <button onClick={toggleCollapse}>{!collapsed ? "▶" : "▼"} Object</button>
      {collapsed &&
        Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            style={{ marginLeft: "10px", display: "flex", gap: "4px" }}
          >
            <strong>{key}: </strong>
            <TreeNode data={value} />
          </div>
        ))}
    </div>
  );
};

const Nested = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-[80vh]">
        <BackButton />
        <div className="flex flex-col ">
          <h2 className="mb-20 text-center font-serif text-5xl">
            Office Tree Structure
          </h2>
          <TreeNode data={office} />
        </div>
      </div>
    </section>
  );
};

export default Nested;
