import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {
	private loggedInObserver;
	private loggedInObservable;
	private userInfoObserver;
	private userInfoObservable;

	constructor() {
		this.loggedInObservable = new Observable((observer) => {
			this.loggedInObserver = observer;
			observer.next(!!localStorage.getItem('userInfo'));
		})
		this.userInfoObservable = new Observable((observer) => {
			this.userInfoObserver = observer;
			const userInfoStr = localStorage.getItem('userInfo');
			if (!userInfoStr) {
				observer.next('');
			} else {
				const userInfo = JSON.parse(userInfoStr);
				observer.next(userInfo.userName || '');
			}
		})
	}

	public login(userName: string, password: string): boolean {
		localStorage.setItem('userInfo', JSON.stringify({
			userName,
		}));
		this.userInfoObserver.next(userName);
		this.loggedInObserver.next(true);
		return true;
	}

	public logout(): boolean {
		localStorage.removeItem('userInfo');
		this.loggedInObserver.next(false);
		return true;
	}

	public IsAuthenticated(): Observable<boolean> {
		return this.loggedInObservable;
	}

	public GetUserInfo(): Observable<string> {
		return this.userInfoObservable;
	}
}
