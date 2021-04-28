import { Auth } from "./domain/Auth";

export abstract class AuthNet {

    abstract requestToken():Promise<Auth>

}