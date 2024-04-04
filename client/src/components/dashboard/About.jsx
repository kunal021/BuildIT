import { useResume } from "../../Context";

function About() {
  const { about, setAbout } = useResume();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };
  //add event.preventDefault()
  return (
    <div>
      <form className="flex flex-col gap-2">
        <input
          onChange={(e) => handleChange(e)}
          name="name"
          id="name"
          placeholder="Full Name"
          type="text"
          required
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="role"
          id="role"
          placeholder="Role"
          type="text"
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="mobile"
          id="mobile"
          placeholder="+91 9999999999"
          type="tel"
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="email"
          id="email"
          placeholder="E-mail"
          type="email"
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="address"
          id="address"
          placeholder="Address"
          type="text"
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <textarea
          onChange={(e) => handleChange(e)}
          name="description"
          id="description"
          placeholder="Summary (Max 400)"
          maxLength="400"
          rows={4}
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
      </form>
    </div>
  );
}

export default About;
