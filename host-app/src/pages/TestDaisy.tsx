import React, { useState } from "react";

const TestDaisy = () => {
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const assignments = [
    { name: "Fulltime Employee", process: "50%", end: "01/08/2025", status: 50 },
    { name: "Part-time Staff", process: "80%", end: "02/08/2025", status: 80 },
    { name: "Intern", process: "30%", end: "03/08/2025", status: 30 },
    { name: "Remote Staff", process: "60%", end: "04/08/2025", status: 60 },
    { name: "Contractor", process: "90%", end: "05/08/2025", status: 90 },
    { name: "Volunteer", process: "70%", end: "06/08/2025", status: 70 },
  ];

  const totalPages = Math.ceil(assignments.length / pageSize);

  // แยกข้อมูลตามหน้าปัจจุบัน
  const paginatedData = assignments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="min-h-screen flex bg-base-100">
      {/* Sidebar */}
      <aside className="w-20 bg-green-800 text-white flex flex-col items-center py-4 space-y-6">
        <div className="text-sm">MENU</div>
        <div className="flex flex-col gap-4">
          <button className="btn btn-circle btn-sm bg-green-600">🏠</button>
          <button className="btn btn-circle btn-sm bg-green-600">📄</button>
          <button className="btn btn-circle btn-sm bg-green-600">📊</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            Sustainability Data Collection
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-60"
          />
        </div>

        {/* Hero Banner */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://source.unsplash.com/featured/?farm,field"
            alt="Banner"
            className="w-full h-48 object-cover"
          />
          <div className="bg-green-700 text-white p-4 text-sm">
            Kindly be reminded to gather and record all necessary information...
          </div>
        </div>

        {/* Welcome + Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Welcome Box */}
          <div className="bg-green-100 p-4 rounded-xl shadow">
            <h2 className="font-bold text-lg">Welcome Back,</h2>
            <p className="text-sm mt-2">
              Mohamad Manmohan Abdullah
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>

          {/* Assignments */}
          <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Your Assignments</h2>
              <div className="tabs">
                <a className="tab tab-active">On Process</a>
                <a className="tab">Finished</a>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-4">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Questionnaire Name</th>
                    <th>Process</th>
                    <th>End Term</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.process}</td>
                      <td>{item.end}</td>
                      <td>
                        <progress
                          className="progress progress-error w-20"
                          value={item.status}
                          max={100}
                        ></progress>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="btn btn-sm"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="btn btn-sm btn-disabled">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-sm"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="bg-green-100 rounded-xl p-4">
          <h2 className="font-bold text-lg text-green-900 mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Bar Chart */}
            <div className="bg-white rounded-xl p-4 shadow col-span-2">
              <h3 className="font-medium mb-2">Graph Title</h3>
              <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center">
                Bar Chart Here
              </div>
            </div>

            {/* Two small charts */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-medium mb-2">Graph Title</h3>
                <div className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center">
                  Line Chart
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <h3 className="font-medium mb-2">Graph Title</h3>
                <div className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center">
                  Column Chart
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestDaisy;
