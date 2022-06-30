import draggable from "vuedraggable";
import "./nested-draggable.scss";

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
        <el-form-item label={label}>
          <el-row gutter={20}>
            <el-col span={19} class="cover">
              <div class="cover-box" />
              <type />
            </el-col>

            <el-col span={1}>
              <el-button type="info" plain icon="el-icon-delete"></el-button>
            </el-col>
          </el-row>
        </el-form-item>
      );
    },
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
                  <nestedDraggable  class="container-node" tag="div" tasks={task.children} />
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
