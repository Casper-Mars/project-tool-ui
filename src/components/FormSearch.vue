<template>
    <div>
        <el-form :inline="true">
            <el-form-item v-for="(item,index) in condition" :key="index" :label="item.name">
                <el-input v-model="item.value" v-if="item.type==='string'"></el-input>
                <el-select v-else-if="item.type === 'select'" v-model="item.value" value="">
                    <el-option v-for="(sel,ind) in item.list" :key="ind" :label="sel.name"
                               :value="sel.value"></el-option>
                </el-select>
                <el-date-picker v-else-if="item.type === 'date'" type="daterange" range-separator="至"
                                value-format="yyyy-MM-dd" format="yyyy 年 MM 月 dd 日"
                                v-model="item.value" style="width: 100%;"></el-date-picker>
                <el-date-picker v-else-if="item.type === 'datetime'" type="datetimerange" range-separator="至"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                format="yyyy 年 MM 月 dd 日 HH:mm:ss" v-model="item.value"
                                style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="_submit" round>查询</el-button>
                <el-button @click="_clear" round>重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: "FormSearch",
        props: {
            submit: Function,
            clear: Function,
            condition: Array
        },
        methods: {
            _submit: function () {
                if (this.submit instanceof Function) {
                    this.submit();
                }
            },
            _clear: function () {
                let conditions = this.condition;
                for (let i = 0; i < conditions.length; i++) {
                    conditions[i].value = "";
                }
                if (this.clear instanceof Function) {
                    this.clear();
                }
            }
        },
        data() {
            return {
                tempCondition: [
                    {
                        name: "名称",
                        value: "",
                        type: "string"
                    },
                    {
                        name: "城市",
                        value: "",
                        type: "select",
                        list: [
                            {
                                name: "上海",
                                value: "1"
                            },
                            {
                                name: "广州",
                                value: "2"
                            }
                        ]
                    },
                    {
                        name: "创建日期",
                        value: "",
                        type: "date"
                    },
                    // {
                    //     name: "更新时间",
                    //     value: "",
                    //     type: "datetime"
                    // }
                ]
            }
        }
    }
</script>

<style scoped>

</style>