import { useParams, useLocation, useNavigate } from "react-router-dom";

const WithRouter = (Component) => {
  return function Wrapper(props) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <Component
        {...props}
        params={params}
        location={location}
        navigate={navigate}
      />
    );
  };
};

export default WithRouter;
