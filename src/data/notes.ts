export interface Note {
	date: string; // ISO date string 'YYYY-MM-DD'
	text: string;
}

export const dummyNotes: Note[] = [
	{ date: "2025-06-01", text: "Project kickoff" },
	{ date: "2025-06-28", text: "Mid-month review" },
	{ date: "2025-06-28", text: "2-month review" },
	{ date: "2025-06-28", text: "3-month review" },
	{ date: "2025-06-29", text: "Independence Day" },
	{ date: "2025-06-27", text: "previous note" },
	{ date: "2025-07-20", text: "Team outing" },
	{ date: "2025-08-05", text: "Client deadline" },
];
