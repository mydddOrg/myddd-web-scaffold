import { action, observable } from "mobx";
import { ChatItem } from "modules/message/domain/ChatItem";
import { createContext } from "react";
import { makeAutoObservable } from "mobx"


class MessageStore {

    constructor() {
        makeAutoObservable(this)
    }

    selectItem: any

    chats: ChatItem[] = []

    checkList: string[] = []

    addCheck(userId: string) {
        this.checkList.push(userId)
    }

    removeCheck(userId: string) {
        const index = this.checkList.indexOf(userId);
        if (index > -1) {
            this.checkList.splice(index, 1);
        }
    }

    clearCheck(){
        this.checkList = []
    }

    setSelectItem(employee: any) {
        this.selectItem = employee
    }

    addChat(chatItem: ChatItem) {
        this.chats.push(chatItem)
        this.chats = [...this.chats]
    }

    clearChat() {
        this.chats = []
    }
}

export default createContext(new MessageStore());
