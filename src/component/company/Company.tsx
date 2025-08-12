import { useState } from "react";
import arrowDownIcon from "/images/icon-arrow-down.svg";
import arrowUpIcon from "/images/icon-arrow-up.svg";

export const Company = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleCompany = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
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
			</button>

			{isOpen && (
				<ul id="company-menu">
					<li>History</li>
					<li>Our Team</li>
					<li>Blog</li>
				</ul>
			)}
		</>
	);
};
