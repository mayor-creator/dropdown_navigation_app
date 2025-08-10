import clientAudiophile from "../../../public/images/client-audiophile.svg";
import clientDatabiz from "../../../public/images/client-databiz.svg";
import clientMaker from "../../../public/images/client-maker.svg";
import clientMeet from "../../../public/images/client-meet.svg";

export const Footer = () => {
	return (
		<footer>
			<div>
				<img src={clientDatabiz} alt="" />
			</div>
			<div>
				<img src={clientAudiophile} alt="" />
			</div>
			<div>
				<img src={clientMeet} alt="" />
			</div>
			<div>
				<img src={clientMaker} alt="" />
			</div>
		</footer>
	);
};
