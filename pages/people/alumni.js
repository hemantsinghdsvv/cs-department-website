"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function AlumniPage() {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const SHEET_ID = "1JBUqbTDb3M7-_CDT7d3RLDE9aHqJ-xYyp-NEwBrkjsI";
  const API_KEY = "AIzaSyDg9B_gV-In-tti3OqXc0Dhu1M-bl0R4Gk";
  const RANGE = "All!A2:E";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const rows = data.values || [];
        const alumniData = rows.map((row) => ({
          name: row[0] || "N/A",
          passedOutYear: row[1] || "N/A",
          course: row[2] || "N/A",
          mobile: row[3] || "",
          email: row[4] || "",
        }));
        setAlumni(alumniData);
        setFilteredAlumni(alumniData);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlumni();
  }, []);

  const uniqueYears = Array.from(new Set(alumni.map((a) => a.passedOutYear))).filter(Boolean).sort();
  const uniqueCourses = Array.from(new Set(alumni.map((a) => a.course))).filter(Boolean).sort();

  useEffect(() => {
    let filtered = alumni.filter((alum) =>
      alum.name.toLowerCase().includes(search.toLowerCase())
    );
    if (yearFilter) {
      filtered = filtered.filter((alum) => alum.passedOutYear === yearFilter);
    }
    if (courseFilter) {
      filtered = filtered.filter((alum) => alum.course === courseFilter);
    }
    setFilteredAlumni(filtered);
    setCurrentPage(1);
  }, [search, yearFilter, courseFilter, alumni]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentAlumni = filteredAlumni.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);

  return (
    <>
      <Head>
        <title>Alumni | Department of Computer Science</title>
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-6"> Alumni Directory</h1>

        {/* STAT BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-100 border border-gray-200 rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-[#003366]">{alumni.length}</p>
            <p className="text-sm text-gray-600">Total Alumni</p>
          </div>
          <div className="bg-green-100 border border-gray-200 rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-[#003366]">{uniqueCourses.length}</p>
            <p className="text-sm text-gray-600">Total Courses</p>
          </div>
          <div className="bg-blue-100 border border-gray-200 rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-[#003366]">{uniqueYears.length}</p>
            <p className="text-sm text-gray-600">Years Passed Out</p>
          </div>
          <div className="bg-yellow-200 border border-gray-200 rounded-lg shadow-sm p-4 text-center">
            <p className="text-sm text-gray-700">
              Currently we run only <span className="font-semibold text-[#003366]">3 programs: BIT, BCA & MCA(Data Science) </span>
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search alumni by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
          />

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
          >
            <option value="">Passed Out Year</option>
            {uniqueYears.map((year, idx) => (
              <option key={idx} value={year}>{year}</option>
            ))}
          </select>

          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
          >
            <option value="">Course</option>
            {uniqueCourses.map((course, idx) => (
              <option key={idx} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Loading alumni data...</p>
        ) : currentAlumni.length === 0 ? (
          <p>No alumni found matching the criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentAlumni.map((alum, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-200 flex flex-col justify-between  w-full"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-blue-500 flex-shrink-0"
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(alum.name)}`}
                    alt={alum.name}
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 break-words">{alum.name}</h2>
                    <p className="text-sm text-gray-500">
                      Passed Out: <span className="font-medium">{alum.passedOutYear}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium text-gray-900">Course:</span> {alum.course}
                  </p>
                  {/*
      {alum.mobile && (
        <p>
          <span className="font-medium text-gray-900">Mobile:</span> {alum.mobile}
        </p>
      )}
      */}
                  {alum.email && (
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{" "}
                      <a
                        href={`mailto:${alum.email}`}
                        className="text-blue-600 hover:underline break-all"
                      >
                        {alum.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </>
  );
}
