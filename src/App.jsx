import Editor from './components'
import './App.css'

export default {
  data() {
    return {
      allComponents: {
        container: [
          {
            type: 'block',
            name: 'block',
            children: [],
            label: 'block',
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
            type: 'rule',
            name: 'rule',
            children: [],
            label: 'rule',
            config: {}
          },
          {
            type: 'task',
            name: 'task',
            children: [],
            label: 'task',
            config: {}
          },
          {
            type: 'step',
            name: 'step',
            children: [],
            label: 'step',
            config: {}
          }
        ],
        baseChunk: [
          {
            type: 'el-input',
            name: 'radio',
            label: '输入框',
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
            type: 'el-time-picker',
            name: 'radio1',
            label: '时间选择'
          },
          {
            type: 'el-select',
            name: 'select',
            label: '下拉框'
          },
          {
            type: 'el-switch',
            name: 'swict',
            label: '开关'
          },
          {
            type: 'el-slider',
            name: 'slider',
            label: '滑块'
          }
        ]
      }
    }
  },
  render(h) {
    return (
      <div class='app'>
        <Editor allComponents={this.allComponents}/>
      </div>
    )
  }
}
