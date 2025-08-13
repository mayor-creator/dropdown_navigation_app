import { useState } from "react";
import styled from "styled-components";
import arrowDownIcon from "/images/icon-arrow-down.svg";
import arrowUpIcon from "/images/icon-arrow-up.svg";

const DropdownWrapper = styled.div`
	position: relative;
`;

const DropdownButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
	list-style: none;
	margin: 0;
	padding: 1rem;
	background: white;
	border-radius: 8px;
	box-shadow: 0 8px 16px rgba(0,0,0,0.1);
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	position: static;
	
	@media (min-width: 768px) {
		position: absolute;
		top: 100%; // place below button
		left: 0;
		min-width: 180px;
		z-index: 1000;
	}
`;

export const Company = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleCompany = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<DropdownWrapper>
			<DropdownButton
				type="button"
				onClick={handleToggleCompany}
				aria-controls="company-menu"
				aria-expanded={isOpen}
			>
				Company{" "}
				<img
					src={isOpen ? arrowUpIcon : arrowDownIcon}
					alt={isOpen ? "collapse icon" : "expand icon"}
				/>
			</DropdownButton>

			<DropdownMenu id="company-menu" isOpen={isOpen}>
				<li>History</li>
				<li>Our Team</li>
				<li>Blog</li>
			</DropdownMenu>
		</DropdownWrapper>
	);
};
