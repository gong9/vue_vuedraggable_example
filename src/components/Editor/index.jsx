import nestedDraggable from "./center";
import left from "./left";
import right from "./right";

import "./index.scss";

export default {
  data() {
    return {
      allComponents: {
        container: [
          {
            type: "block",
            name: "block",
            children: [],
            label: "block",
            config: {
              name: {
                component: 'el-input',
                label: '容器名称'
              },
              isCanvas: {
                component: 'el-switch',
                label: '是否设为画布'
              },
              isSort: {
                component: 'el-switch',
                label: 'chunk是否排序'
              }
            },
            currentConfigValue: {
              name: 'block',
              isCanvas: false,
              isSort: false
            }
          },
          {
            type: "rule",
            name: "rule",
            children: [],
            label: "rule",
            config: {}
          },
          {
            type: "task",
            name: "task",
            children: [],
            label: "task",
            config: {}
          },
          {
            type: "step",
            name: "step",
            children: [],
            label: "step",
            config: {}
          },
        ],
        baseChunk: [
          {
            type: "el-input",
            name: "radio",
            label: "输入框",
            config: {
              name: {
                component: 'el-input',
                label: '组件唯一值'
              }
            },
            currentConfigValue: {
              name: 'chunk'
            }
          },
          {
            type: "el-time-picker",
            name: "radio1",
            label: "时间选择",
          },
          {
            type: "el-select",
            name: "select",
            label: "下拉框",
          },
          {
            type: "el-switch",
            name: "swict",
            label: "开关",
          },
          {
            type: "el-slider",
            name: "slider",
            label: "滑块",
          },
        ],
      },
      list: [],
    };
  },
  components: {
    nestedDraggable,
    left,
    right
  },
  render(h) {
    return (
      <div class="nested-example">
        <div class="left">
          <left data={this.allComponents} />
        </div>
        <div class="center">
          <el-form label-width="80px">
            <nestedDraggable tasks={this.list} />
          </el-form>
        </div>
        <div class="right">
          <right />
        </div>
      </div>
    );
  },
};
