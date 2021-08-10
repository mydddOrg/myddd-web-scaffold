import { createContext } from "react";
import { makeAutoObservable } from "mobx"


class MessageStore {

    constructor() {
        makeAutoObservable(this)
    }

    selectItem: any

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
}

export default createContext(new MessageStore());
