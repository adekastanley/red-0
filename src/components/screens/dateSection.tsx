"use client";

import { useState, useEffect } from "react";
import { dummyNotes } from "@/data/notes";
// import CalendarComponent from "./calender";
import { Calendar } from "../ui/calendar";
// import { Button } from "../ui/button";
import { Dot } from "lucide-react";
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
		<section className=" w-full flex max-sm:flex-col justify-center gap-5">
			<div className=" w-full px-2 sm:px-10">
				<h1 className="text-6xl ">The best calender app for your life work</h1>
				<p>control your day, week and month</p>
			</div>

			<div className="flex max-sm:justify-center items-left w-full">
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
										<div
											{...props}
											className={`w-8 h-8 flex items-center justify-between rounded relative hover:bg-accent transition   ${
												modifiers.selected ? "bg-blue-500 text-white" : ""
											} ${
												modifiers.today
													? "border-2 bg-blue-200 rounded-full"
													: ""
											}
													
											`}
											aria-label={`Select ${day.date}`}
											role="button"
											tabIndex={0}
										>
											<div className="relative w-full text-center">
												{format(day.date, "d")}
											</div>
											{notes.some(
												(n) => n.date === format(day.date, "yyyy-MM-dd")
											) && (
												<div className="w-fit h-fit m-0 p-0 absolute -bottom-2 left-1">
													<Dot className="w-5 h-5 text-green-500" />
												</div>
											)}
											{/* <div className="w-fit h-fit m-0 p-0 absolute -bottom-1 left-1">
												<Dot className="w-5 h-5 text-green-500" />
											</div> */}
										</div>
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
