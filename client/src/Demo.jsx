function Demo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="text-lg">Your Profession / Title</p>
      </header>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <ul className="list-disc ml-4">
          <li>Email: your.email@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, City, State, ZIP</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div>
          <p className="font-bold">Degree, Major</p>
          <p>School/University Name, Graduation Year</p>
        </div>
        {/* Add more education entries as needed */}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div>
          <p className="font-bold">Job Title</p>
          <p>Company Name, Start Date - End Date</p>
          <ul className="list-disc ml-4">
            <li>Description of responsibilities and achievements.</li>
          </ul>
        </div>
        {/* Add more experience entries as needed */}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <ul className="list-disc ml-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills */}
        </ul>
      </section>
    </div>
  );
}

export default Demo;
