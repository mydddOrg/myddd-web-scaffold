import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { WeiXinGroupApplication } from "../../src/modules/group/WeiXinGroupApplication";


InstanceFactory.initIOC()

const weiXinGroupApplication:WeiXinGroupApplication = InstanceFactory.getInstance(WeiXinGroupApplication)

var groupId:String
beforeAll(async ()=>{
    const weiXinGroupDTO  = await weiXinGroupApplication.createGroup("测试群组",["LiuLin","KaFeiBuJiaTang"])
    expect(weiXinGroupDTO).toBeDefined()
    expect(weiXinGroupDTO.groupId).toBeDefined()
    groupId = weiXinGroupDTO.groupId
})

test('weiXinGroupApplication.sendMessage',async ()=>{
    const sucess = await weiXinGroupApplication.sendTextMessage(groupId,"HELLO,TEXT")
    expect(sucess).toBeTruthy()
})

test('weiXinGroupApplication.listGroups',async () =>{
    const groups = await weiXinGroupApplication.listGroups()
    expect(groups).toBeDefined()
})