const Contact = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-center font-semibold text-xl">Contact us</h1>
      <form>
        <input
          className="m-2 p-2 border border-black "
          name="name"
          placeholder="name"
        />
        <input
          className="m-2 p-2 border border-black "
          name="email"
          placeholder="email"
        />
        <button className="m-2 p-2 border border-black bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
