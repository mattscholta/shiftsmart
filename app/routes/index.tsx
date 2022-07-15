/**
 * @name Index
 * @description This is our homepage route
 */
export default function Index() {
  const _array = [1, 2, 3];
  const _boolean = true;
  const name = "john doe";

  debugger;

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-monospace text-primary">
          Welcome ShiftSmart 👋
        </h1>
        <p className="text-xs">{name}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          consequuntur, doloribus sint iusto officiis veritatis iste quasi
          aperiam architecto itaque ut quas, vitae unde natus totam voluptatem
          molestias corrupti quae.
        </p>
      </div>
    </div>
  );
}
