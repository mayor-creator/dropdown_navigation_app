import { useId, useState } from "react";
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
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	position: static;
	
	@media (min-width: 768px) {
		background: white;
		border-radius: 8px;
		box-shadow: 0 8px 16px rgba(0,0,0,0.1);
		position: absolute;
		top: 100%; 
		left: 0;
		min-width: 9.563rem;
		z-index: 1000;
	}
`;

const NavList = styled.li`
	display: flex;
	gap: 1rem;
	padding-bottom: 1rem;
`;

export const Features = () => {
	const [isOpen, setIsOpen] = useState(false);
	const featureMenu = useId();

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

			<DropdownMenu id={featureMenu} isOpen={isOpen}>
				<NavList>
					<img src={todoIcon} alt="todo list icon" />
					<span>Todo List</span>
				</NavList>
				<NavList>
					<img src={calendarIcon} alt="calendar icon" />
					<span>Calendar</span>
				</NavList>
				<NavList>
					<img src={remindersIcon} alt="reminders icon" />
					<span>Reminders</span>
				</NavList>
				<NavList>
					<img src={planningIcon} alt="planning icon" />
					<span>Planning</span>
				</NavList>
			</DropdownMenu>
		</DropdownWrapper>
	);
};
