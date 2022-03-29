import { IRequest } from "../src/components/http/IRequest"
import { InstanceFactory } from "../src/components/ioc/InstanceFactory"

InstanceFactory.initIOC()

test('测试InstanceFactory成功', () => {
    const request = InstanceFactory.getInstance(IRequest)
    expect(request).toBeDefined()
})
