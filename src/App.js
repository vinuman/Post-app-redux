import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/actions/postActions";

function App() {
  /*  const obj = useSelector((state) => state);
  let { loading, data, error } = obj; */

  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h1>djsjhj</h1>
      <div>
        {data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <h1>item.title</h1>
              <h3>item.body</h3>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
