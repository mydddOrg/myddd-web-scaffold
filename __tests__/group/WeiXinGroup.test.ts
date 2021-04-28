import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { WeiXinGroup } from "../../src/modules/group/domain/WeiXinGroup";


InstanceFactory.initIOC()

var groupId:String
beforeAll(async ()=>{
    const weiXinGroupDTO  = await WeiXinGroup.createGroup("测试群组",["LiuLin","KaFeiBuJiaTang"])
    expect(weiXinGroupDTO).toBeDefined()
    expect(weiXinGroupDTO.groupId).toBeDefined()
    groupId = weiXinGroupDTO.groupId
})

test('WeiXinGroup.sendMessage',async ()=>{
    const sucess = await WeiXinGroup.sendMessage(groupId,"HELLO,TEXT")
    expect(sucess).toBeTruthy()
})

test('WeiXinGroup.listGroups',async () =>{
    const groups = await WeiXinGroup.listGroups()
    expect(groups).toBeDefined()
})