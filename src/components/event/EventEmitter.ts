
/**
 * 事件机制 
 */
export type EventCallback = (data:any)=>void;

export class EventEmitter {

    /**
     * 事件集
     */
    private static  events = new Map<string,Array<EventCallback>>();

    /**
     * 分发事件
     * @param event 
     * @param data 
     */
    public static dispatch = (event:string,data?:any) => {
        if(!EventEmitter.events.get(event)){
            return;
        }
        const callbacks:Array<EventCallback> = EventEmitter.events.get(event);
        callbacks.forEach(callback => {
            callback(data);
        });
    }


    /**
     * 订阅事件
     */
    public static subscribe = (event:string,callback:EventCallback)=>{
        let callbacks:Array<EventCallback> = EventEmitter.events.get(event);
        if(!callbacks){
            callbacks = Array<EventCallback>();
        }
        callbacks.push(callback);
        EventEmitter.events.set(event,callbacks);
    }


    /**
     * 取消事件订阅
     */
    public static unSubscribe = (event:string,callback:EventCallback) => {
        let callbacks:Array<EventCallback> = EventEmitter.events.get(event);
        if(callbacks){
            const index = callbacks.indexOf(callback,0);
            if(index > -1){
                callbacks.splice(index,1);
            }
            EventEmitter.events.set(event,callbacks);
        }
    }

}