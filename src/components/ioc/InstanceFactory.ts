import { BaseRequest } from './../http/impl/BaseRequest';
import {container, Lifecycle} from "tsyringe";
import { TYPES } from './TYPES';


export class InstanceFactory {

    public static initIOC() {
        //http基础模块
        this.inject(TYPES.IRequest, BaseRequest);
    }


    private static inject(symbol: Symbol, target: any) {
        container.register(symbol.toString(), {useClass: target},{lifecycle: Lifecycle.Singleton});
    }

    private static injectLocal(symbol: Symbol, target: any) {
        container.register(symbol.toString(), {useClass: target},{lifecycle: Lifecycle.Transient});
    }

    public static getInstance<T>(symbol: Symbol): T {
        return container.resolve(symbol.toString())
    }
}