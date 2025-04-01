"use client";
import { useState } from "react";

interface Issue {
  title: string;
  status: string;
  priority: "High" | "Medium" | "Low";
  lastSeen: string;
  assignee?: string;
}

const issuesData: Issue[] = [
  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
  },
  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
  },

  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
  },

  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
  },
];

const priorityColors = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-green-500",
};

// Dummy user options
const dummyUsers = ["🧑‍💻 John", "👩‍💻 Alice", "👨‍💻 Bob", "👩‍💻 Emma", "🧑‍💻 Mike"];

const countOccurrences = (title: string) => {
  return issuesData.filter((issue) => issue.title === title).length;
};

const IssueTable: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>(issuesData);

  // Handle priority change
  const handlePriorityChange = (
    index: number,
    newPriority: "High" | "Medium" | "Low"
  ) => {
    const updatedIssues = [...issues];
    updatedIssues[index].priority = newPriority;
    setIssues(updatedIssues);
  };

  // Handle assignee change
  const handleAssigneeChange = (index: number, newAssignee: string) => {
    const updatedIssues = [...issues];
    updatedIssues[index].assignee = newAssignee;
    setIssues(updatedIssues);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 bg-pink-900 text-white rounded-lg">
        <thead className="bg-gray-700 text-gray-300">
          <tr>
            <th className="py-3 px-4 text-left">Issue</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Priority</th>
            <th className="py-3 px-4 text-left">Last Seen</th>
            <th className="py-3 px-4 text-left">Assignee</th>
            <th className="py-3 px-4 text-left">Events</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 hover:bg-pink-700 transition"
            >
              <td className="py-3 px-4">{issue.title}</td>
              <td className="py-3 px-4">{issue.status}</td>
              <td className="py-3 px-4 font-bold">
                <span className={`${priorityColors[issue.priority]}`}>
                  {issue.priority}
                </span>
                <select
                  className="ml-2 bg-gray-800 text-white px-2 py-1 rounded border border-gray-600"
                  value={issue.priority}
                  onChange={(e) =>
                    handlePriorityChange(
                      index,
                      e.target.value as "High" | "Medium" | "Low"
                    )
                  }
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </td>
              <td className="py-3 px-4 text-gray-400">{issue.lastSeen}</td>
              <td className="py-3 px-4">
                <select
                  className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600"
                  value={issue.assignee || "Unassigned"}
                  onChange={(e) => handleAssigneeChange(index, e.target.value)}
                >
                  <option value="Unassigned">Unassigned</option>
                  {dummyUsers.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-3 px-4 font-bold text-blue-400">
                {countOccurrences(issue.title)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
