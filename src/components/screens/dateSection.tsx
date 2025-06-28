"use client";

import { useState, useEffect } from "react";
import { dummyNotes } from "@/data/notes";
import CalendarComponent from "./calender";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import NoteCard from "./noteCard";
// import { DayPicker } from "react-day-picker";

export default function DateSection() {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [notes, setNotes] = useState(dummyNotes);
	useEffect(() => {
		const savedNotes = localStorage.getItem("calendarNotes");
		if (savedNotes) {
			setNotes(JSON.parse(savedNotes));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem("calendarNotes", JSON.stringify(notes));
	}, [notes]);
	// console.log("Clicked day object:", day);

	return (
		<section className="bg-black w-full flex max-sm:flex-col justify-center">
			<div className="bg-green-300 w-full">right side</div>

			<div className="bg-purple-500 flex max-sm:justify-center items-left w-full">
				<div className="flex justify-center  min-w-[20rem]">
					{/* <CalendarComponent /> */}
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
						components={{
							Day: ({ day, modifiers, ...props }) => (
								// console.log("formatted ---", format(day.date, "yyyy-MM-dd")),
								<Popover>
									<PopoverTrigger asChild>
										<button
											{...props}
											className={`w-8 h-8 flex items-center justify-center rounded hover:bg-accent transition ${
												modifiers.selected ? "bg-blue-500 text-white" : ""
											} ${modifiers.today ? "border-2 border-red-500" : ""}`}
											aria-label={`Select ${day.date}`}
										>
											{format(day.date, "d")}
										</button>
									</PopoverTrigger>
									<PopoverContent side="top" align="center">
										<NoteCard
											date={`${format(day.date, "PPP")}`}
											notes={notes.filter(
												(n) => n.date === format(day.date, "yyyy-MM-dd")
											)}
											onAddNote={(text) =>
												setNotes((prev) => [
													...prev,
													{ date: format(day.date, "yyyy-MM-dd"), text },
												])
											}
										/>

										{/* <div>Add your note for {format(day.date, "PPP")}</div> */}
									</PopoverContent>
								</Popover>
							),
						}}
					/>
				</div>
			</div>
		</section>
	);
}
