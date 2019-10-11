<template>
    <el-container>
        <el-main>
            <el-form :model="tmpRule" :label-position="labelPosition" style="width:300px;padding: 10px">
                <el-form-item label="正则表达式" style="">
                    <el-input v-model="tmpRule.pattern" style="width: 100px"></el-input>
                </el-form-item>
                <el-form-item label="是否为空">
                    <el-radio-group v-model="tmpRule.notNull" style="width: 200px">
                        <el-radio :label="0">可空</el-radio>
                        <el-radio :label="1">非空</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="最大值">
                    <el-input v-model="tmpRule.max" style="width: 100px"></el-input>
                </el-form-item>
                <el-form-item label="最小值">
                    <el-input v-model="tmpRule.min" style="width: 100px;"></el-input>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "PojoRule",
        props: {
            submit: Function,
            attr: Object
        },
        methods: {
            _submit: function () {
                if (this.submit instanceof Function) {
                    this.submit();
                }
                console.log(this.tmpRule)
            }
        },
        data() {
            return {
                labelPosition: "right",
                tmpRule: this.attr.rule
            }
        },
        watch: {
            attr: {
                immediate: true,
                handler(val) {
                    this.tmpRule = val.rule;
                }
            }
        }

    }
</script>

<style scoped>

</style>