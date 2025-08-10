import { useState } from "react";
import iconClose from "../../../public/images/icon-close-menu.svg";
import iconMenu from "../../../public/images/icon-menu.svg";
import logo from "../../../public/images/logo.svg";
import { Features } from "../features/Features";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header>
			<div>
				<img src={logo} alt="logo" />
			</div>

			<div>
				<button
					type="button"
					style={{
						background: "none",
						border: "none",
						padding: 0,
						cursor: "pointer",
					}}
					aria-expanded={isMenuOpen}
					onClick={handleToggleMenu}
				>
					<img
						src={isMenuOpen ? iconClose : iconMenu}
						alt={isMenuOpen ? "close menu" : "open menu"}
						height="24"
						width="24"
					/>
				</button>
			</div>

			{isMenuOpen && (
				<nav>
					<Features />
					<li>career</li>
					<li>about</li>
					<p>login</p>
					<button type="button">Register</button>
				</nav>
			)}
		</header>
	);
};
