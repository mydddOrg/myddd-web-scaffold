import { InstanceFactory } from "../../src/components/ioc/InstanceFactory"
import { AuthService } from "../../src/modules/auth/AuthService";
InstanceFactory.initIOC()


const authApplication:AuthService = InstanceFactory.getInstance(AuthService)

test('AuthService get getAccessToken', async ()=>{
    const accessToken = await authApplication.getAccessToken()
    expect(accessToken).not.toBeNull()
    expect(accessToken).toBeDefined()
})
