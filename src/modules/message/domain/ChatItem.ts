
export class ChatItem {
    send:boolean
    text:String

    public static createSendItem(text:String):ChatItem {
        const chat = new ChatItem()
        chat.send = true
        chat.text = text
        return chat
    }

    public static createReceiveItem(text:String):ChatItem {
        const chat = new ChatItem()
        chat.send = false
        chat.text = text
        return chat
    }
}