export class User {
    constructor(
        public login: string,
        public password: string,
        public name: string,
        public isAdmin: boolean
    ) {}
}
