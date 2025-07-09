

export default function Contact() {
  return (
    <>

      <main className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-2">Department of Computer Science, Your University</p>
        <p className="text-gray-700 mb-2">Address: XYZ Road, Haridwar, Uttarakhand, India</p>
        <p className="text-gray-700 mb-2">Email: cse@youruniversity.ac.in</p>
        <p className="text-gray-700 mb-2">Phone: +91-XXXXXXXXXX</p>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
   
    </>
  );
}
