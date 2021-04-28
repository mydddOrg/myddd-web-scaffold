import { BaseRequest } from './../http/impl/BaseRequest';
import { Scope } from 'typescript-ioc';
import { Container } from 'typescript-ioc';
import { IRequest } from 'components/http/IRequest';
import { AuthNet } from 'modules/auth/AuthNet';
import { AuthNetImpl } from 'modules/auth/net/AuthNetImpl';
import { AuthService } from 'modules/auth/AuthService';
import { AuthServieImpl } from 'modules/auth/domain/AuthServiceImpl';
import { EmployeeNet } from 'modules/employee/EmployeeNet';
import { EmployeeNetImpl } from 'modules/employee/net/EmployeeNetImpl';
import { MessageNetHttp } from 'modules/message/net/MessageNetHttp';
import { MessageNet } from 'modules/message/MessageNet';
import { EmployeeApplicationImpl } from 'modules/employee/application/EmployeeApplicationImpl';
import { EmployeeApplication } from 'modules/employee/EmployeeApplication';
import { MessageService } from 'modules/message/domain/MessageService';
import { WeiXinGroupNetImpl } from 'modules/group/net/WeiXinGroupNetImpl';
import { WeiXinGroupNet } from 'modules/group/WeiXinGroupNet';
import { WeiXinGroupApplicationImpl } from 'modules/group/application/WeiXinGroupApplicationImpl';
import { WeiXinGroupApplication } from 'modules/group/WeiXinGroupApplication';


export class InstanceFactory {

    public static initIOC() {
        this.inject(IRequest,BaseRequest)
        this.inject(AuthNet,AuthNetImpl)
        this.inject(AuthService,AuthServieImpl)

        this.inject(EmployeeNet,EmployeeNetImpl)
        this.inject(EmployeeApplication,EmployeeApplicationImpl)

        this.inject(MessageNet,MessageNetHttp)
        this.inject(MessageService,MessageService)


        this.inject(WeiXinGroupNet,WeiXinGroupNetImpl)
        this.inject(WeiXinGroupApplication,WeiXinGroupApplicationImpl)
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