import Rule from "./PojoAttrRuleEntity";
class PojoAttrEntity {
    constructor() {
        this.name = "";
        this.type = "";
        this.desc = "";
        this.rule = new Rule();
    }

    static createPojoAttrEntity(name, type, desc, rule) {
        let target = new PojoAttrEntity();
        target.desc = desc;
        target.name = name;
        target.type = type;
        target.rule = rule;
        return target;
    }


}

export default PojoAttrEntity;