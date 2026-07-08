import React from "react";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaRupeeSign,
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    {
      title: "Doctors",
      value: 18,
      icon: <FaUserMd size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Patients",
      value: 245,
      icon: <FaUsers size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Appointments",
      value: 120,
      icon: <FaCalendarCheck size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Revenue",
      value: "₹58,400",
      icon: <FaRupeeSign size={28} />,
      color: "bg-purple-500",
    },
  ];

  const appointments = [
    {
      id: 1,
      patient: "Rahul Sharma",
      doctor: "Dr. Anurag Singh",
      date: "12 Jul 2026",
      status: "Completed",
    },
    {
      id: 2,
      patient: "Priya Verma",
      doctor: "Dr. Neha Gupta",
      date: "13 Jul 2026",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Amit Kumar",
      doctor: "Dr. Raj Patel",
      date: "14 Jul 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="w-full p-6">

      <h1 className="text-3xl font-bold text-gray-700 mb-8">
        Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition"
          >
            <div>
              <p className="text-gray-500">{card.title}</p>
              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>

            <div
              className={`${card.color} text-white p-4 rounded-full`}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}

      <div className="bg-white mt-10 rounded-xl shadow-md p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Appointments
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="py-3">Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">{item.patient}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      item.status === "Completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;