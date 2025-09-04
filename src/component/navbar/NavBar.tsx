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

	@media (min-width: 758px){
		grid-column-start: 1;
    grid-row-start: 1;
		justify-content: center;
		gap: 0rem;
		padding: 0rem;
		align-items: flex-start;
		border: 1px solid red;
	}
`;

const Title = styled.h1`
  text-align: center;
	font-size: 2.25rem;
	font-weight: 700;
	color: var(--color-gray-950);

	@media (min-width: 758px){
		text-align: start;
		font-size: 5rem;
		font-weight: bold;
	}
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

const MainContainer = styled.main`
	@media (min-width: 758px){
		display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 24px;
	}
`;

const ImageContainer = styled.div`
	@media (min-width: 758px){
		grid-column-start: 2;
    grid-row-start: 1;
		width: 100%;
		max-width: 480px;
		height: auto;
	}
`;

export const NavBar = () => {
	return (
		<>
			<Header />
			<MainContainer>
				<ImageContainer>
					<picture>
						<source media="(min-width: 1024px)" srcSet={desktopHero} />
						<img src={mobileHero} alt="hero" className="desktop-only" />
					</picture>
				</ImageContainer>
				<TitleContainer>
					<Title>Make remote work</Title>
					<Message>
						Get your team in sync, no matter your location. Streamline
						processes, create team rituals, and watch productivity soar.
					</Message>
					<Button type="button">Learn more</Button>
				</TitleContainer>
			</MainContainer>
			<Footer />
		</>
	);
};
