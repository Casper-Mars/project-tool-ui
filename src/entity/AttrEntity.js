import RuleEntity from "@/entity/RuleEntity";

class AttrEntity {
    constructor() {
        this.name = "";
        this.classpath = "";
        this.refId = "";
        this.desc = "";
        this.rule = new RuleEntity();
    }
}

export default AttrEntity