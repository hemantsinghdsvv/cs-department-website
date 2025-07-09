import Head from "next/head";
import TopHeaderBar from "../components/TopHeaderBar";
import HeroSection from "../components/HeroSection";
import QuickLinksSection from "../components/QuickLinksSection";
import NewsEventsSection from "../components/NewsEventsSection";
import Sidebar from "../components/Sidebar";
import AnnouncementCard from "../components/AnnouncementCard";
import EventCard from "../components/EventCard";
import announcements from "../data/announcements.json";
import events from "../data/events.json";

export default function Home() {
  return (
    <>
      <TopHeaderBar />
      
      <>
   <Head>
        <title>Department of Computer Science | Your University</title>
        <meta
          name="description"
          content="Welcome to the Department of Computer Science at Your University, fostering excellence in computing education, research, and innovation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Department of Computer Science | Your University" />
        <meta
          property="og:description"
          content="Explore our programs, research, and admissions at the Department of Computer Science, Your University."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cs.youruniversity.ac.in/" />
        <meta property="og:image" content="https://cs.youruniversity.ac.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Department of Computer Science | Your University" />
        <meta
          name="twitter:description"
          content="Discover our Computer Science programs and research at Your University."
        />
        <meta name="twitter:image" content="https://cs.youruniversity.ac.in/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <HeroSection />
<QuickLinksSection />

 
 <section className="bg-gray-50 py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:space-x-6">
    {/* Main Content */}
    <div className="md:w-2/3 w-full mb-6 md:mb-0">
      <NewsEventsSection />
    </div>

    {/* Sidebar */}
    <div className="md:w-1/3 w-full">
      <Sidebar />
    </div>
  </div>
</section>

</>


      
    </>
  );
}
