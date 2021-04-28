
export abstract class MesasgeApplication {
    abstract sendMessage(text:String,userId:String):Promise<boolean>
}