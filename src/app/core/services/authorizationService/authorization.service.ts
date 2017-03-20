import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
	constructor() {
	}

	public login(userName: string, password: string): boolean {
		localStorage.setItem('userInfo', JSON.stringify({
			userName,
		}));
		return true;
	}

	public logout(): boolean {
		localStorage.removeItem('userInfo');
		return true;
	}

	public IsAuthenticated(): boolean {
		return !!localStorage.getItem('userInfo');
	}

	public GetUserInfo(): string {
		const userInfoStr = localStorage.getItem('userInfo');
		if (!userInfoStr) {
			return null;
		}
		const userInfo = JSON.parse(userInfoStr);
		return userInfo.userName || '';
	}
}
