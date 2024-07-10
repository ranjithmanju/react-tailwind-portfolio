import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 shadow">
				<img src={profileImage} className="rounded-lg w-96 bg-primary-light" alt=""
				style={{
					boxShadow:
					  "0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)", width:'500px',height:'auto',maxHeight:'500px'// Custom shadow including top side
				  }}
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
