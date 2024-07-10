import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 3.6, duration: 2 });
	useCountUp({ ref: 'clientsCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'coursesCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'technologiesCounter', end: 7, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Clients Served"
					counter={<span id="clientsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Courses Completed"
					counter={<span id="coursesCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Technologies Used"
					counter={<span id="technologiesCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
