import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { WeiXinGroupNet } from "../../src/modules/group/WeiXinGroupNet"
import { AuthService } from "../../src/modules/auth/AuthService";


InstanceFactory.initIOC()

const authApplication:AuthService = InstanceFactory.getInstance(AuthService)
const weiXinGroupNet:WeiXinGroupNet = InstanceFactory.getInstance(WeiXinGroupNet)


var accessToken:String
beforeAll(async ()=>{
    accessToken = await authApplication.getAccessToken()
})

test('WeiXinGroupNet获取',()=>{
    expect(weiXinGroupNet).toBeDefined()
})

test('WeiXinGroupNet.createGroup',async ()=>{
    const weiXinGroupDTO  = await weiXinGroupNet.createGroup("测试群组",["LiuLin","KaFeiBuJiaTang"],accessToken)
    expect(weiXinGroupDTO).toBeDefined()
    expect(weiXinGroupDTO.groupId).toBeDefined()
})

test('WeiXinGroupNet.sendMessage',async ()=>{
    const weiXinGroupDTO  = await weiXinGroupNet.createGroup("测试群组",["LiuLin","KaFeiBuJiaTang"],accessToken)
    expect(weiXinGroupDTO).toBeDefined()
    expect(weiXinGroupDTO.groupId).toBeDefined()

    const sucess = await weiXinGroupNet.sendTextMessage(weiXinGroupDTO.groupId,"HELLO,TEXT",accessToken)
    expect(sucess).toBeTruthy()
})

test('WeiXinGroupNet.listGroups',async () =>{
    const weiXinGroupDTO  = await weiXinGroupNet.createGroup("测试群组",["LiuLin","KaFeiBuJiaTang"],accessToken)
    expect(weiXinGroupDTO).toBeDefined()
    expect(weiXinGroupDTO.groupId).toBeDefined()

    const groups = await weiXinGroupNet.listGroups(accessToken)
    expect(groups).toBeDefined()
})