import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { decrement, increment } from "./features/counters/counterSlice";

function App() {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const totalValue = counters.reduce(
    (total, counter) => total + counter.value,
    0,
  );

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900">Hello, React-redux!</h1>
      <>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </>
      <div className="w-1/2 mx-auto mt-10 bg-gray-200 p-5 rounded-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900">Total Value</h2>
        <p className="text-lg text-gray-700">{totalValue}</p>
      </div>
    </>
  );
}

export default App;
