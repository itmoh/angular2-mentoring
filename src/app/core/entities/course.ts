export interface ICourse {
	id: string;
	title: string;
	duration: number;
	date: Date;
	description: string;
}

export class Course implements ICourse {
	constructor(
		public id: string,
		public title: string,
		public duration: number,
		public date: Date,
		public description: string
	) {
	}
}