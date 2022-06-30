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
                type: 'string',
                label: '容器名称'
              }
            },
            currentConfigValue: {
              name: 'block'
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
      list: [
        {
          type: "block",
          name: "block",
          children: [],
          label: "block",
        },
      ],
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
          <nestedDraggable tasks={this.list} />
        </div>
        <div class="right">
          <right />
        </div>
      </div>
    );
  },
};
