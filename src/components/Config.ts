
export interface ConfigData {
    api:string;

    oauthTokenApi:string;

    clientId:String

    clientSecret:String

    orgCode:String
}
export class Config{

    private static instance:Config;

    target?:string;


    data:ConfigData

    private constructor(config:string){
        const data = require('../../src/config/config-'+config+'.json');
        this.data = data
    }

    public static getInstance():Config{
        const targetConfig = require('../../src/config/base.json');
        const target = targetConfig.target;
        if (!this.instance || this.instance.target !== target){
            this.instance = new Config(target);
        }
        return this.instance;
    }


} 


export default Config