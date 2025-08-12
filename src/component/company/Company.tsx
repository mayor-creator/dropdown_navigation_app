import { useState } from "react";
import arrowDownIcon from "/images/icon-arrow-down.svg";
import arrowUpIcon from "/images/icon-arrow-up.svg";

export const Company = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleFeatures = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
				type="button"
				onClick={handleToggleFeatures}
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
				<div>
					<div>
						<p>History</p>
					</div>
					<div>
						<p>Our Team</p>
					</div>
					<div>
						<p>Blog</p>
					</div>
				</div>
			)}
		</>
	);
};
