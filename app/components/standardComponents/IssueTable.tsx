"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { errorData } from "../constants";
import MyBarChart from "./BarChart";
interface Issue {
  title: string;
  status: string;
  priority: "High" | "Medium" | "Low";
  lastSeen: string;
  assignee?: string;
  hourlyOccurences?: number[];
}

const issuesData: Issue[] = [
  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },

  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },

  {
    title: "DataValidationException",
    status: "Ongoing",
    priority: "High",
    lastSeen: "2hr ago",
    assignee: "🧑‍💻 John",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "DeclinedAuthorizationException",
    status: "Ongoing",
    priority: "Medium",
    lastSeen: "9mo ago",
    assignee: "👩‍💻 Alice",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
  },
  {
    title: "HttpMessageNotReadableException",
    status: "New",
    priority: "High",
    lastSeen: "19hr ago",
    assignee: "👨‍💻 Bob",
    hourlyOccurences: [
      3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3, 2, 1, 3, 4,
    ],
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
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/alert/v1/alert-monitering"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();
  }, []);
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
      <table className="min-w-full border border-gray-700 bg-purple-700 text-white rounded-lg">
        <thead className="bg-gray-700 text-gray-300">
          <tr>
            <th className="py-3 px-4 text-left font-serif">Issue</th>
            <th className="py-3 px-4 text-left font-serif">Status</th>
            <th className="py-3 px-4 text-left font-serif">Priority</th>
            <th className="py-3 px-4 text-left font-serif">Last Seen</th>
            <th className="py-3 px-4 text-left font-serif">Assignee</th>
            <th className="py-3 px-4 text-left font-serif">Events</th>
            <th className="py-3 px-4 text-left font-serif">Trend</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 hover:bg-purple-900 transition"
            >
              <td className="py-3 px-4 font-serif">
                <Link
                  href={{
                    pathname: "../../users",
                    query: {
                      primaryKey: "temp",
                      issueTitle: issue.title,
                      stackTrace: errorData,
                    },
                  }}
                  passHref
                >
                  {issue.title}
                </Link>
              </td>
              <td className="py-3 px-4 font-serif">
                <Link
                  href={{
                    pathname: "../../users",
                    query: {
                      primaryKey: "temp",
                      issueTitle: issue.title,
                      stackTrace: errorData,
                    },
                  }}
                  passHref
                >
                  {issue.status}
                </Link>
              </td>
              <td className="py-3 px-4 font-medium font-serif">
                <Link
                  href={{
                    pathname: "../../users",
                    query: {
                      primaryKey: "temp",
                      issueTitle: issue.title,
                      stackTrace: errorData,
                    },
                  }}
                  passHref
                >
                  <span className={`${priorityColors[issue.priority]}`}>
                    {issue.priority}
                  </span>
                </Link>
                <select
                  className="ml-2 bg-gray-800 text-white px-2 py-1 rounded-lg border border-gray-600 font-serif"
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
              <td className="py-3 px-4 text-gray-400 font-serif">
                <Link
                  href={{
                    pathname: "../../users",
                    query: {
                      primaryKey: "temp",
                      issueTitle: issue.title,
                      stackTrace: errorData,
                    },
                  }}
                  passHref
                >
                  {issue.lastSeen}
                </Link>
              </td>
              <td className="py-3 px-4 font-serif">
                <select
                  className="bg-gray-800 text-white px-2 py-1 rounded-lg"
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
              <td className="py-3 px-4 text-yellow-400 font-serif">
                <Link
                  href={{
                    pathname: "../../users",
                    query: {
                      primaryKey: "temp",
                      issueTitle: issue.title,
                      stackTrace: errorData,
                    },
                  }}
                  passHref
                >
                  {countOccurrences(issue.title)}
                </Link>
              </td>
              <td className="">
                <MyBarChart
                  datasets={[
                    3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 7, 6, 4, 3,
                    2, 1, 3, 4,
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
