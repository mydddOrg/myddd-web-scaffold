
export abstract class AuthService {

    abstract getAccessToken():Promise<String>
}