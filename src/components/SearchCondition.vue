<template>
    <el-container>
        <el-main>
            <el-row v-for="(item,index) in tempCondition" :key="index" :gutter="5" class="singleRow">
                <template v-for="(subItem,subIndex) in item">
                    <el-col>
                        <el-input style="float: left" v-model="subItem.value">
                            <template slot="prepend">
                                {{subItem.name}}:
                            </template>
                        </el-input>
                    </el-col>
                </template>
            </el-row>
            <div style="float: left;justify-content: flex-start">
                <el-button @click="_clear" round>重置</el-button>
                <el-button @click="_submit" type="primary" round>搜索</el-button>
            </div>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>


    export default {
        name: "SearchCondition",
        props: {
            condition: Array,
            num: Number,
            submit: Function,
            clear: Function
        },
        mounted: function () {
            let condition = this.condition;
            let num = this.num;
            if (num === undefined || num === null) {
                num = 3;
            }
            let tmp = [];
            let target = [];
            for (let i = 0; i < condition.length; i++) {
                if (i !== 0 && i % num === 0) {
                    target.push(tmp);
                    tmp = [];
                }
                tmp.push(condition[i]);
            }
            if (tmp.length > 0) {
                target.push(tmp);
            }
            this.tempCondition = target;
        },
        methods: {
            _clear: function () {
                let conditions = this.condition;
                for (let i = 0; i < conditions.length; i++) {
                    conditions[i].value = "";
                }
                if (this.clear instanceof Function) {
                    this.clear();
                }
            },
            _submit: function () {
                if (this.submit instanceof Function) {
                    this.submit();
                }
            }
        },
        data() {
            return {
                tempCondition: [
                    [
                        {
                            name: "名称",
                            value: ""
                        },
                        {
                            name: "类型",
                            value: ""
                        }
                    ],
                    [
                        {
                            name: "描述",
                            value: ""
                        },
                        {
                            name: "正文",
                            value: ""
                        }

                    ]
                ]
            }
        }


    }
</script>

<style scoped>

    .singleRow {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px;
    }

    /*.el-col {*/
    /*    background-color: #67C23A;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 160px;*/
    /*    margin: 5px;*/
    /*}*/

</style>