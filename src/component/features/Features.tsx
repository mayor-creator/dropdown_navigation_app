import { useState } from "react";
import arrowDownIcon from "../../../public/images/icon-arrow-down.svg";
import arrowUpIcon from "../../../public/images/icon-arrow-up.svg";
import calendarIcon from "../../../public/images/icon-calendar.svg";
import planningIcon from "../../../public/images/icon-planning.svg";
import remindersIcon from "../../../public/images/icon-reminders.svg";
import todoIcon from "../../../public/images/icon-todo.svg";

export const Features = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleFeatures = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button type="button" onClick={handleToggleFeatures}>
				Features
				<img
					src={isOpen ? arrowUpIcon : arrowDownIcon}
					alt={isOpen ? "collapse icon" : "expand icon"}
				/>
			</button>

			{isOpen && (
				<div>
					<li>
						<img src={todoIcon} alt="todo list icon" />
						<figcaption>Todo List</figcaption>
					</li>
					<li>
						<img src={calendarIcon} alt="calendar icon" />
						<figcaption>Calendar</figcaption>
					</li>
					<li>
						<img src={remindersIcon} alt="reminders icon" />
						<figcaption>Reminders</figcaption>
					</li>
					<li>
						<img src={planningIcon} alt="planning icon" />
						<figcaption>Planning</figcaption>
					</li>
				</div>
			)}
		</>
	);
};
