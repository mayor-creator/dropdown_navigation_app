import clientAudiophile from "/images/client-audiophile.svg";
import clientDatabiz from "/images/client-databiz.svg";
import clientMaker from "/images/client-maker.svg";
import clientMeet from "/images/client-meet.svg";

export const Footer = () => {
	return (
		<footer>
			<div>
				<img src={clientDatabiz} alt="data icon" />
			</div>
			<div>
				<img src={clientAudiophile} alt="audio icon" />
			</div>
			<div>
				<img src={clientMeet} alt="meet icon" />
			</div>
			<div>
				<img src={clientMaker} alt="client icon" />
			</div>
		</footer>
	);
};
