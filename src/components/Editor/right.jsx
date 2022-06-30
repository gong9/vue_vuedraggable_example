import eventBus from "../../util/eventBus"
import './right.scss'

export default {
    created() {
        eventBus.on('setConfig', (schema) => {
            this.currentSchema = schema
        })
    },
    data() {
        return {
            currentSchema: {},
            formData: {},
            activeName: 'component-config'
        }
    },
    methods: {
        renderConfig(schema) {
            const { config = {} } = schema
            return (
                <el-form label-width="80px" size="mini">
                    {Object.keys(config).map(
                        configItemKey => this.renderConfigFormItem(configItemKey, config[configItemKey])
                    )}
                </el-form>
            )
        },
        renderConfigFormItem(configItemKey, value) {
            const { label, component } = value
            switch (component) {
                case 'el-input':
                    return (
                        <el-form-item label={label}>
                            <el-input vModel={this.formData[configItemKey]}></el-input>
                        </el-form-item>
                    )
                default:
                    return null;
            }
        }
    },
    render(h) {
        return (
            <div class='right-config'>
                <el-tabs vModel={this.activeName} >
                    <el-tab-pane label="组件属性" name="component-config">
                        {
                            this.renderConfig(this.currentSchema)
                        }
                    </el-tab-pane>
                    <el-tab-pane label="表单属性" name="form-config">
                        表单属性
                    </el-tab-pane>
                </el-tabs>

            </div>
        )
    }
}