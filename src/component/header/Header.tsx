import { useState } from "react";
import iconClose from "/images/icon-close-menu.svg";
import iconMenu from "/images/icon-menu.svg";
import logo from "/images/logo.svg";
import { Company } from "../company/Company";
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
					<ul>
						<li>
							<Features />
						</li>
						<li>
							<Company />
						</li>
						<li>career</li>
						<li>about</li>
						<li>login</li>
						<li>
							<button type="button">Register</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};
