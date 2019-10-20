<template>
    <el-container>
        <el-main>
            <el-form>
                <el-form-item label="属性名称">
                    <el-input v-model="newAttr.name"></el-input>
                </el-form-item>
                <el-form-item label="属性类型">
                    <el-select v-model="newAttr.type">
                        <el-option v-for="(item,index) in typeList" :key="index" :value="item">
                            {{item}}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="属性描述">
                    <el-input v-model="newAttr.desc"></el-input>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <div style="float: right">
                <el-button type="primary" @click="addNewAttr">确认</el-button>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    import AttrEntity from "@/entity/AttrEntity";
    export default {
        name: "PojoAddNewAttr",
        props: {
            callBack: Function,
        },
        methods: {
            addNewAttr: function () {
                if (this.callBack instanceof Function) {
                    this.callBack(this.newAttr);
                }
            }
        },
        data() {
            return {
                newAttr: new AttrEntity(),
                typeList: []
            }
        }
    }
</script>

<style scoped>

</style>