import RuleEntity from "@/entity/RuleEntity";

class AttrEntity {
    constructor() {
        this.name = "";
        this.type = "";
        this.refId = "";
        this.desc = "";
        this.rule = new RuleEntity();
    }
}

export default AttrEntity