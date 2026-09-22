import Button from "./Button";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="w-1/2 mx-auto mt-10 bg-gray-400 p-5 rounded-lg flex flex-col items-center">
      <h3 className="text-3xl font-bold text-black">{count}</h3>
      <div className="flex gap-5 mt-5">
        <Button varient="primary" onClick={onIncrement}>
          Increment
        </Button>
        <Button varient="secondary" onClick={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
