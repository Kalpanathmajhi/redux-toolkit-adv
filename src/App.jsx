import './App.css';
import { Counter } from './features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './features/api/apicall';

function App() {
  const dispatch = useDispatch();
  const apiCall = useSelector((state) => state.apiCall);
  console.log("state", apiCall);

  if (apiCall.isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch(fetchApi())}>Fetch todos</button>
      <ul>
        {apiCall.data && apiCall.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Counter />
    </>
  );
}

export default App;
