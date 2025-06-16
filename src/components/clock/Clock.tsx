import useClock from "./useClock";

const Clock = () => {

	const  { time } = useClock();

  return (
    <div className="">
			{ time }
		</div>
  );
};

export default Clock;
