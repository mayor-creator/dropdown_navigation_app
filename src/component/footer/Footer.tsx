import styled from "styled-components";
import clientAudiophile from "/images/client-audiophile.svg";
import clientDatabiz from "/images/client-databiz.svg";
import clientMaker from "/images/client-maker.svg";
import clientMeet from "/images/client-meet.svg";

const FooterWrapper = styled.footer`
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Footer = () => {
	return (
		<FooterWrapper>
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
		</FooterWrapper>
	);
};
