import { useRouteError } from "react-router-dom";
const Error = () => {
  const errorDetails = useRouteError();
  console.log(errorDetails);
  return (
    <div>
      <h1>Oop Something went wrong !!!</h1>
      <h2>{errorDetails.status}:{errorDetails.statusText}</h2>
    </div>
  );
};

export default Error;
