import draggable from "vuedraggable";
import eventBus from "../../util/eventBus";
import "./center.scss";

export default {
    name: "nestedDraggable",
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    components: {
        draggable,
    },
    methods: {
        renderChunk(schema, index, list) {
            const { type, label } = schema;
            return (
                <el-form-item label={label} class='chunk-node'>
                    <el-row gutter={20}>
                        <el-col span={19} class="cover">
                            <div class="cover-box" onClick={() => this.handleClickNode(schema)} />
                            <type />
                        </el-col>

                        <el-col span={1}>
                            <el-button type="info" plain icon="el-icon-delete" onClick={() => this.handleDelete(list, index)}></el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            );
        },
        renderContainer(containerNode) {
            const { type, children } = containerNode

            switch (type) {
                case 'step':
                    return (
                        <div>
                            <el-steps >
                                <el-step title="步骤 1"></el-step>
                                <el-step title="步骤 2"></el-step>
                                <el-step title="步骤 3"></el-step>
                            </el-steps>
                            <nestedDraggable tag="div" tasks={children} />
                        </div>
                    )

                default:
                    return (
                        <div onClick={() => this.handleClickNode(containerNode)}>
                            <nestedDraggable tag="div" tasks={children} />
                        </div>
                    )
            }

        },
        handleClickNode(data) {
            eventBus.emit('setConfig', data)
        },
        handleDelete(list, index) {
            list.splice(index, 1)
        }
    },
    render(h) {
        return (
            <el-form label-width="80px">
                <draggable
                    tag="div"
                    class="container-node"
                    list={this.tasks}
                    group={{ put: true }}
                    scrollSensitivity="10px"
                >
                    {this.tasks.map((task, index) => {
                        return (
                            <div>
                                {task.children ? (
                                    this.renderContainer(task)
                                ) : (
                                    this.renderChunk(task, index, this.tasks)
                                )}
                            </div>
                        );
                    })}
                </draggable>
            </el-form>
        );
    },
};
