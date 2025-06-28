export interface Note {
	date: string; // ISO date string 'YYYY-MM-DD'
	text: string;
}

export const dummyNotes: Note[] = [
	{ date: "2024-06-01", text: "Project kickoff" },
	{ date: "2024-06-15", text: "Mid-month review" },
	{ date: "2024-07-04", text: "Independence Day" },
	{ date: "2024-07-20", text: "Team outing" },
	{ date: "2024-08-05", text: "Client deadline" },
];
