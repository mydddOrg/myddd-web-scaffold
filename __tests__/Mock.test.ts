import "reflect-metadata"
import { InstanceFactory } from "../src/components/ioc/InstanceFactory"
import { TYPES } from "../src/components/ioc/TYPES"
InstanceFactory.initIOC()

test('测试InstanceFactory成功', () => {
    const request = InstanceFactory.getInstance(TYPES.IRequest)
    expect(request).toBeDefined()
})