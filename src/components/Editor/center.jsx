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
        renderChunk(schema) {
            const { type, label } = schema;
            return (
                <el-form-item label={label} class='chunk-node'>
                    <el-row gutter={20}>
                        <el-col span={19} class="cover">
                            <div class="cover-box" onClick={() => this.handleClickNode(schema)} />
                            <type />
                        </el-col>

                        <el-col span={1}>
                            <el-button type="info" plain icon="el-icon-delete"></el-button>
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
                            <nestedDraggable class="container-node" tag="div" tasks={children} />
                        </div>
                    )

                default:
                    return (
                        <div onClick={() => this.handleClickNode(containerNode)}>
                            <nestedDraggable class="container-node" tag="div" tasks={children} />
                        </div>
                    )
            }

        },
        handleClickNode(data) {
            eventBus.emit('setConfig', data)
        }
    },
    render(h) {
        return (
            <el-form label-width="80px">
                <draggable
                    tag="div"
                    list={this.tasks}
                    group={{ put: true }}
                >
                    {this.tasks.map((task) => {
                        return (
                            <div>
                                {task.children ? (
                                    this.renderContainer(task)
                                ) : (
                                    this.renderChunk(task)
                                )}
                            </div>
                        );
                    })}
                </draggable>
            </el-form>
        );
    },
};
