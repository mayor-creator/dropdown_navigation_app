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
				<ul>
					<li>
						<figure>
							<img src={todoIcon} alt="todo list icon" />
							<figcaption>Todo List</figcaption>
						</figure>
					</li>
					<li>
						<figure>
							<img src={calendarIcon} alt="calendar icon" />
							<figcaption>Calendar</figcaption>
						</figure>
					</li>
					<li>
						<figure>
							<img src={remindersIcon} alt="reminders icon" />
							<figcaption>Reminders</figcaption>
						</figure>
					</li>
					<li>
						<figure>
							<img src={planningIcon} alt="planning icon" />
							<figcaption>Planning</figcaption>
						</figure>
					</li>
				</ul>
			)}
		</>
	);
};
