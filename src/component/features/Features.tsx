import { useState } from "react";
import arrowDownIcon from "/images/icon-arrow-down.svg";
import arrowUpIcon from "/images/icon-arrow-up.svg";
import calendarIcon from "/images/icon-calendar.svg";
import planningIcon from "/images/icon-planning.svg";
import remindersIcon from "/images/icon-reminders.svg";
import todoIcon from "/images/icon-todo.svg";

export const Features = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleFeatures = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
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
			</button>

			{isOpen && (
				<ul id="feature-menu">
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
				</ul>
			)}
		</>
	);
};
