import { useState } from "react";
import styled from "styled-components";
import arrowDownIcon from "/images/icon-arrow-down.svg";
import arrowUpIcon from "/images/icon-arrow-up.svg";
import calendarIcon from "/images/icon-calendar.svg";
import planningIcon from "/images/icon-planning.svg";
import remindersIcon from "/images/icon-reminders.svg";
import todoIcon from "/images/icon-todo.svg";

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

export const Features = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleFeatures = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<DropdownWrapper>
			<DropdownButton
				type="button"
				onClick={handleToggleFeatures}
				aria-controls="features-menu"
				aria-expanded={isOpen}
			>
				Features
				<img
					src={isOpen ? arrowUpIcon : arrowDownIcon}
					alt={isOpen ? "collapse icon" : "expand icon"}
				/>
			</DropdownButton>

			<DropdownMenu id="feature-menu" isOpen={isOpen}>
				<li>
					<img src={todoIcon} alt="todo list icon" />
					<span>Todo List</span>
				</li>
				<li>
					<img src={calendarIcon} alt="calendar icon" />
					<span>Calendar</span>
				</li>
				<li>
					<img src={remindersIcon} alt="reminders icon" />
					<span>Reminders</span>
				</li>
				<li>
					<img src={planningIcon} alt="planning icon" />
					<span>Planning</span>
				</li>
			</DropdownMenu>
		</DropdownWrapper>
	);
};
