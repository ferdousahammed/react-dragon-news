import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-3 mt-8 lg:mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
