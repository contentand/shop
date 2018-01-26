export class ConfigOptions {
    constructor(
        public login?: string,
        public id?: number,
        public email?: string,
    ) {
        this.login = login || null;
        this.id = id || null;
        this.email = email || null;
    }
}
