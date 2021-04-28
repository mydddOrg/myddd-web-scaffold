import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { MessageService } from "../../src/modules/message/domain/MessageService";

InstanceFactory.initIOC()

const messageService:MessageService = InstanceFactory.getInstance(MessageService)

test('发送消息',async () => {
    const success = await messageService.sendMesasge("这是测试消息","LiuLin")
    expect(success).toBeTruthy()
})