
export abstract class MessageNet {
    abstract sendTextMessage(text:String,userId:String,accessToken:String):Promise<boolean>
}