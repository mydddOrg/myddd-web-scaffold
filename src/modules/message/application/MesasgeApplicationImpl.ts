import { MesasgeApplication } from "../MessageApplication";


export class MesasgeApplicationImpl extends MesasgeApplication {
    
    sendMessage(text: String, userId: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}