"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const SHEET_ID = "1ZaLspUECMbuHMRhdP9W1k2R18WEhwuu9ufLwVzFHJdY";
  const API_KEY = "AIzaSyDWXoV2aSIpVEeCYG6zeJ0wVwRgo1xdxnw";
  const RANGE = "Students!A2:E";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const rows = data.values || [];
        const studentData = rows
          .filter((row) => row[0] && row[1] && row[2])
          .map((row) => ({
            name: row[0].trim(),
            course: row[1].trim(),
            year: row[2].trim(),
            mobile: row[3] ? row[3].trim() : "",
            email: row[4] ? row[4].trim() : "",
          }));
        setStudents(studentData);
      } catch (error) {
        console.error("Error fetching students data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      ? student.name.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    const matchesCourse = courseFilter
      ? student.course.toLowerCase() === courseFilter.toLowerCase()
      : true;
    const matchesYear = yearFilter
      ? student.year.toLowerCase() === yearFilter.toLowerCase()
      : true;
    return matchesSearch && matchesCourse && matchesYear;
  });

  // Stats calculations
  const totalStudents = students.length;
  const bitCount = students.filter((s) => s.course.toLowerCase() === "bit").length;
  const bcaCount = students.filter((s) => s.course.toLowerCase() === "bca").length;
  const mcaCount = students.filter((s) => s.course.toLowerCase() === "mca data science").length;

  const firstYearCount = students.filter((s) => s.year.toLowerCase() === "first year").length;
  const secondYearCount = students.filter((s) => s.year.toLowerCase() === "second year").length;
  const thirdYearCount = students.filter((s) => s.year.toLowerCase() === "third year").length;
  const fourthYearCount = students.filter((s) => s.year.toLowerCase() === "fourth year").length;

  return (
    <>
      <Head>
        <title>Students | Department of Computer Science</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-iitbblue mb-6">Students Directory</h1>

        {/* ✅ Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#003366" }}>
            <p className="text-sm">Total Students</p>
            <p className="text-xl font-bold">{totalStudents}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#336699" }}>
            <p className="text-sm">BIT Students</p>
            <p className="text-xl font-bold">{bitCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#336699" }}>
            <p className="text-sm">BCA Students</p>
            <p className="text-xl font-bold">{bcaCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#336699" }}>
            <p className="text-sm">MCA Data Science</p>
            <p className="text-xl font-bold">{mcaCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#6699cc" }}>
            <p className="text-sm">First Year</p>
            <p className="text-xl font-bold">{firstYearCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#6699cc" }}>
            <p className="text-sm">Second Year</p>
            <p className="text-xl font-bold">{secondYearCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#6699cc" }}>
            <p className="text-sm">Third Year</p>
            <p className="text-xl font-bold">{thirdYearCount}</p>
          </div>
          <div className="rounded-lg p-4 shadow text-center text-white" style={{ backgroundColor: "#6699cc" }}>
            <p className="text-sm">Fourth Year</p>
            <p className="text-xl font-bold">{fourthYearCount}</p>
          </div>
        </div>

        {/* ✅ Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by student name..."
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-iitbblue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="w-full md:w-1/3">
            <label className="block text-sm text-gray-600 mb-1">Course</label>
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-iitbblue"
            >
              <option value="">All Courses</option>
              <option value="BIT">BIT</option>
              <option value="BCA">BCA</option>
              <option value="MCA DATA SCIENCE">MCA DATA SCIENCE</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label className="block text-sm text-gray-600 mb-1">Year</label>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-iitbblue"
            >
              <option value="">All Years</option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
            </select>
          </div>
        </div>

        {/* ✅ Student Cards */}
        {loading ? (
          <p>Loading student data...</p>
        ) : filteredStudents.length === 0 ? (
          <p className="text-gray-500">No students found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredStudents.map((student, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-[#003366] flex-shrink-0"
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(student.name)}`}
                    alt={student.name}
                  />
                  <div className="truncate w-[180px]">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">{student.name}</h2>
                    <p className="text-sm text-gray-500">Year: <span className="font-medium">{student.year}</span></p>
                  </div>
                </div>

                <div className="mt-4 space-y-1 text-gray-700 text-sm">
                  <p><span className="font-medium text-gray-900">Course:</span> {student.course}</p>
                  {student.email && (
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{" "}
                      <a href={`mailto:${student.email}`} className="text-[#003366] hover:underline break-all">
                        {student.email}
                      </a>
                    </p>
                  )}
                 
                  {student.mobile && (
                    <p><span className="font-medium text-gray-900">Mobile:</span> {student.mobile}</p>
                  )}
                
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
