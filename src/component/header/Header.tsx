import { useState } from "react";
import styled from "styled-components";
import iconClose from "/images/icon-close-menu.svg";
import iconMenu from "/images/icon-menu.svg";
import logo from "/images/logo.svg";
import { Company } from "../company/Company";
import { Features } from "../features/Features";

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:1rem;
	position: relative;
`;

const MenuToggle = styled.button`
	background: none;
	border: none;
	padding:0;
	cursor: pointer;
  z-index: 1000;
	display:inline-block;

	@media (min-width: 768px){
		display: none;
	}
`;

const Nav = styled.nav<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 50vw;
	background-color: var(--color-gray-50);
	padding: 2rem 1rem;
	box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
	z-index: 999;
	transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
	transition: transform 0.3s ease-in-out;

	display: flex;
	flex-direction: column;
	justify-content: space-between;


	@media (min-width: 768px) {
		position: static;
		transform: none;
		width: auto;
		height: auto;
		flex-direction: row;
		align-items: center;
		background: none;
		box-shadow: none;
		padding: 0;
	}
`;

const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	@media (min-width: 768px) {
		display: flex;
		gap: 2rem;
	}
`;

const AuthLinks = styled.div`
	margin-top: 1rem;

	@media (min-width: 768px) {
		display: flex;
		gap: 1rem;
		margin-top: 0;
	}
`;

const AuthButton = styled.button`
	background: none;
	border: 1px solid #000;
	padding: 0.5rem 1rem;
	cursor: pointer;
	border-radius: 4px;
`;

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<HeaderContainer>
			<div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
				<img src={logo} alt="logo" />
			</div>

			<MenuToggle
				type="button"
				aria-expanded={isMenuOpen}
				aria-controls="main-navigation"
				onClick={handleToggleMenu}
			>
				<img
					src={isMenuOpen ? iconClose : iconMenu}
					alt={isMenuOpen ? "Close menu" : "Open menu"}
					height="24"
					width="24"
				/>
			</MenuToggle>
			<Nav id="main-navigation" isOpen={isMenuOpen}>
				<NavList>
					<li>
						<Features />
					</li>
					<li>
						<Company />
					</li>
					<li>career</li>
					<li>about</li>
				</NavList>
				<AuthLinks>
					<a href="#">login</a>
					<AuthButton>Register</AuthButton>
				</AuthLinks>
			</Nav>
		</HeaderContainer>
	);
};
