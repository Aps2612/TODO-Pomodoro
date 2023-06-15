import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const AnalyticsDashboard = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedRatio, setCompletedRatio] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [productivity, setProductivity] = useState(0);

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed);
    setCompletedTasks(completed);
    setCompletedRatio(completed.length / tasks.length);

    const totalTime = completed.reduce((acc, task) => acc + task.timeSpent, 0);
    setTimeSpent(totalTime);

    const productivity = completedRatio * 100;
    setProductivity(productivity);
  }, [tasks]);

  const data = [
    {
      name: "Completed",
      value: completedRatio,
    },
    {
      name: "Incomplete",
      value: 1 - completedRatio,
    },
  ];

  const colors = ["#4BC0C0", "#FF6384"];

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
      <h3>Completed Tasks</h3>
      <p>{completedRatio * 100}%</p>
      <h3>Time Spent</h3>
      <p>{timeSpent} hours</p>
      <h3>Productivity</h3>
      <p>{productivity}%</p>
    </div>
  );
};

export default AnalyticsDashboard;
