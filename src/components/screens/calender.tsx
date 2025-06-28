"use client";

import { useState } from "react";
// import { Calendar } from "../../../calendar";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Optional default styles

export default function CalendarComponent() {
	const [selected, setSelected] = useState<Date | undefined>(
		new Date(2025, 5, 12)
	);
	const defaultClassNames = getDefaultClassNames();
	return (
		<div className="p-4 border  rounded-lg shadow w-auto sm:min-w-[20rem] bg-white">
			<DayPicker
				captionLayout="dropdown"
				navLayout="around"
				animate
				mode="single"
				selected={selected}
				onSelect={setSelected}
				classNames={{
					today: `border-2 rounded-full text-red-500 `,
					selected: ` rounded-full  bg-blue-500  text-white`,
					root: `${defaultClassNames.root} shadow-lg p-5`,
					chevron: `${defaultClassNames.chevron} fill-amber-500`,
				}}
				components={{
					Day: () => <div>My Custom Day</div>,
				}}
			/>
		</div>
	);
}
