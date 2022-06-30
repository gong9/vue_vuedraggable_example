import draggable from 'vuedraggable'
import eventBus from '../../util/eventBus'
import './center.scss'

export default {
  name: 'NestedDraggable',
  components: {
    draggable
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    /**
         * chunk渲染
         * @param {object} schema
         * @param {number} index
         * @param {array} list
         * @returns
         */
    renderChunk(schema, index, list) {
      const { type, label } = schema
      return (
        <el-form-item label={label} class='chunk-node' >
          <el-row gutter={20}>
            <el-col span={19} class='cover'>
              <div class='cover-box' />
              <type />
            </el-col>
            <el-col span={1}>
              <el-button type='info' plain icon='el-icon-delete' onClick={() => this.handleDelete(list, index)}></el-button>
            </el-col>
          </el-row>
        </el-form-item>
      )
    },

    /**
         * 容器节点渲染
         * @param {object} containerNode
         * @returns
         */
    renderContainer(containerNode, index, list) {
      const { type, children } = containerNode

      switch (type) {
        default:
          return (
            <div class='container-node-outside' >
              <el-row gutter={20}>
                <el-col span={19} class='cover'>
                  <nestedDraggable tag='div' tasks={children} />
                </el-col>
                <el-col span={1}>
                  <el-button type='info' plain icon='el-icon-delete' onClick={() => this.handleDelete(list, index)}></el-button>
                </el-col>
              </el-row>

            </div>
          )
      }
    },

    /**
         * 处理节点点击
         * @param {object} data
         */
    handleClickNode(data) {
      eventBus.emit('setConfig', data)
    },

    /**
         * 节点删除
         * @param {array} list
         * @param {number} index
         */
    handleDelete(list, index) {
      list.splice(index, 1)
    }
  },
  render(h) {
    return (
      <draggable
        tag='div'
        class='container-node'
        list={this.tasks}
        group={{ put: true }}
        scrollSensitivity='10px'
      >
        {this.tasks.map((task, index) => {
          return (
            <div onClick={(e) => { e.stopPropagation(); this.handleClickNode(task) }}>
              {task.children ? (
                this.renderContainer(task, index, this.tasks)
              ) : (
                this.renderChunk(task, index, this.tasks)
              )}
            </div>
          )
        })}
      </draggable>
    )
  }
}
