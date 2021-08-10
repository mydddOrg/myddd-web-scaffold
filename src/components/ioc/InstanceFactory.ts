import { BaseRequest } from './../http/impl/BaseRequest';
import { Scope } from 'typescript-ioc';
import { Container } from 'typescript-ioc';
import { IRequest } from 'components/http/IRequest';


export class InstanceFactory {

    public static initIOC() {
        this.inject(IRequest,BaseRequest)
    }


    private static inject(source: Function, target: Object) {
        Container.bind(source).to(target).scope(Scope.Singleton);
    }


    private static injectLocal(source: Function, target: Object) {
        Container.bind(source).to(target).scope(Scope.Local);
    }

    public static getInstance<T>(source: Function): T {
        return Container.get(source);
    }
}