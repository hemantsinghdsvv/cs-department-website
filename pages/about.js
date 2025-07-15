// pages/about.js

import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Department of Computer Science</title>
        <meta
          name="description"
          content="Learn about the vision, mission, and journey of the Department of Computer Science at Dev Sanskriti Vishwavidyalaya."
        />
      </Head>

      <section className="bg-[#f5f5f5] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2">
            About the Department
          </h1>

          <div className="flex flex-col md:flex-row md:space-x-8 items-start">
            <div className="md:w-2/3 w-full">
              <p className="text-gray-700 mb-4 text-justify">
                The Department of Computer Science at Dev Sanskriti Vishwavidyalaya is committed to nurturing
                excellence in education, research, and innovation in computing. Rooted in the ethos of blending
                technical rigor with human values, the department focuses on producing industry-ready, ethically
                grounded professionals aligned with societal needs.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                The department offers a range of programs, including BCA, B.Sc. IT, MCA, and PhD, designed with
                a balanced curriculum and practical exposure to equip students with essential computing and
                problem-solving skills. It actively engages in industry collaborations, internships, and
                placement drives while encouraging students to participate in hackathons, coding challenges,
                and research projects to develop a practical mindset.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Our faculty consists of experienced academicians and industry professionals committed to
                delivering quality education, mentoring students, and fostering a culture of continuous
                learning and curiosity. The department also runs a Software Development Cell and AI Center
                to allow students to work on live projects aligned with institutional and societal needs.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                We believe in creating an environment that encourages creativity, ethical decision-making,
                spiritual grounding, and a quest for excellence in the rapidly evolving world of computing.
              </p>
            </div>

            <div className="md:w-1/3 w-full mt-6 md:mt-0">
              <Image
                src="/about-dsvv-cs.jpg"
                alt="Department of Computer Science, DSVV"
                width={400}
                height={300}
                className="rounded shadow"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">Campus labs and vibrant learning environment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-4 border-b-2 border-[#003366] pb-2">
            Vision
          </h2>
          <p className="text-gray-700 mb-8 text-justify">
            To build a vibrant ecosystem for learning, research, and innovation in computer science that blends technical excellence with ethical and spiritual values, contributing to societal transformation and nation-building.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-4 border-b-2 border-[#003366] pb-2">
            Mission
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Deliver quality education in computing aligned with global and industry standards.</li>
            <li>Foster a spirit of innovation and problem-solving among students and faculty.</li>
            <li>Blend technology education with ethical, cultural, and spiritual values for holistic development.</li>
            <li>Promote research and live projects addressing local and global challenges.</li>
            <li>Encourage community outreach through technology for societal benefit.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
