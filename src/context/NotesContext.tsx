"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { dummyNotes } from "@/data/notes";

type Note = { date: string; text: string };

interface NotesContextType {
	notes: Note[];
	addNote: (note: Note) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
	const [notes, setNotes] = useState<Note[]>([]);

	useEffect(() => {
		const saved = localStorage.getItem("calendarNotes");
		if (saved) {
			setNotes(JSON.parse(saved));
		} else {
			setNotes(dummyNotes);
			localStorage.setItem("calendarNotes", JSON.stringify(dummyNotes));
		}
	}, []);

	useEffect(() => {
		if (notes.length > 0) {
			localStorage.setItem("calendarNotes", JSON.stringify(notes));
		}
	}, [notes]);

	const addNote = (note: Note) => {
		setNotes((prev) => [...prev, note]);
	};

	return (
		<NotesContext.Provider value={{ notes, addNote }}>
			{children}
		</NotesContext.Provider>
	);
}

export const useNotes = () => {
	const ctx = useContext(NotesContext);
	if (!ctx) throw new Error("useNotes must be inside NotesProvider");
	return ctx;
};
