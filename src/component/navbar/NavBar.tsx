import styled from "styled-components";
import desktopHero from "/images/image-hero-desktop.png";
import mobileHero from "/images/image-hero-mobile.png";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const TitleContainer = styled.div`
  display: flex;
	flex-direction:column;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
`;

const Title = styled.h1`
  text-align: center;
	font-size: 2.25rem;
	font-weight: 700;
	color: var(--color-gray-950);
`;

const Message = styled.p`
	color: var(--color-gray-500);
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
	padding-left: 1rem;
	padding-right: 1rem;
`;

const Button = styled.button`
	border: none;
	background: var(--color-gray-950);
	border-radius: 0.625rem;
	color: var(--color-gray-50);
	cursor: pointer;
	font-weight: 700;
	font-size: 1rem;
	width: 8.5rem;
	height: 3rem;
`;

export const NavBar = () => {
	return (
		<>
			<Header />
			<main>
				<div>
					<picture>
						<source media="(min-width: 1024px)" srcSet={desktopHero} />
						<img src={mobileHero} alt="" />
					</picture>
				</div>
				<TitleContainer>
					<Title>Make remote work</Title>
					<Message>
						Get your team in sync, no matter your location. Streamline
						processes, create team rituals, and watch productivity soar.
					</Message>
					<Button type="button">Learn more</Button>
				</TitleContainer>
			</main>
			<Footer />
		</>
	);
};
