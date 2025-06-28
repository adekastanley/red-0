import {
	Card,
	// CardAction,
	CardContent,
	// CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import { useState } from "react";
type NotesCardProps = {
	date: string;
	notes?: notesProp[];
	onAddNote: (text: string) => void;
};

type notesProp = {
	date: string;
	text: string;
};

function NoteCard({ date, notes, onAddNote }: NotesCardProps) {
	// console.log("notes are - ", notes);
	const [input, setInput] = useState("");
	return (
		<Card className="border-none shadow-none  m-0">
			<CardHeader className=" p-2">
				<CardTitle className="flex items-start  w-full m-0">
					Date {date}
				</CardTitle>
				{/* <CardDescription>Card Description</CardDescription>
				<CardAction>Card Action</CardAction> */}
			</CardHeader>
			<CardContent className="p-0  max-h-[20vh] overflow-auto">
				<ul className="p-2">
					{notes && notes.length > 0 ? (
						notes.map((items, index) => (
							<li className="border-b-2 my-2" key={index}>
								<div>
									<div className="text-xs">{items.date}</div>
									<div>{items.text}</div>
								</div>
							</li>
						))
					) : (
						<li className="my-2 text-sm text-muted-foreground">
							No notes for this date
						</li>
					)}
				</ul>
			</CardContent>
			<CardFooter className="flex flex-col items-start gap-2 p-2 m-0">
				<p>Add New note</p>
				<div className="flex gap-2">
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="note"
					/>{" "}
					<Button
						onClick={() => {
							if (!input.trim()) return;
							onAddNote(input);
							setInput("");
						}}
					>
						<ArrowBigRight />
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
export default NoteCard;
