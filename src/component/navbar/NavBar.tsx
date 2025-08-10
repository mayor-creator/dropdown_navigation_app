import desktopHero from "../../../public/images/image-hero-desktop.png";
import mobileHero from "../../../public/images/image-hero-mobile.png";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

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
				<div>
					<h1>Make remote work</h1>
					<p>
						Get your team in sync, no matter your location. Streamline
						processes, create team rituals, and watch productivity soar.
					</p>
					<button type="button">Learn more</button>
				</div>
			</main>
			<Footer />
		</>
	);
};
