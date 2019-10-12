class BaseSettingApi {
    constructor(param){
        this.url="";
        this.method="";
        this.param=param;
    }
}

class DocSettingApi {
    constructor(param){
        this.url="";
        this.method="";
        this.param=param;
    }
}

class SettingApi {
    static getBaseApi(param){
        return new BaseSettingApi(param);
    }
}


export default SettingApi;