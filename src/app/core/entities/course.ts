export class Course {
	public title: string;
	public length: number;
	public date: Date;
	public description: string;

	constructor(title: string, length: number, date: Date, description: string) {
		this.title = title;
		this.length = length;
		this.date = date;
		this.description = description;
	}
}
