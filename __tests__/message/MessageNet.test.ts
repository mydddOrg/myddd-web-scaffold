import { IRequest } from "../../src/components/http/IRequest";
import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { MessageNet } from "../../src/modules/message/MessageNet";
import { AuthService } from "../../src/modules/auth/AuthService";

InstanceFactory.initIOC()

const employeeNet:MessageNet = InstanceFactory.getInstance(MessageNet)
const authApplication:AuthService = InstanceFactory.getInstance(AuthService)

var accessToken:String
beforeAll(async ()=>{
    accessToken = await authApplication.getAccessToken()
})

test('发送文本消息', async ()=>{
    const success = await employeeNet.sendTextMessage("hello","LiuLin",accessToken)
    expect(success).toBeTruthy()
})