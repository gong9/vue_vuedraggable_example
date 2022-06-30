import nestedDraggable from './Editor/center'
import left from './Editor/left'
import right from './Editor/right'

import './index.scss'

export default {
  components: {
    nestedDraggable,
    left,
    right
  },
  props: {
    allComponents: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      list: []
    }
  },
  render(h) {
    return (
      <div class='editor'>
        <div class='editor-top'>
          布局编辑器
        </div>
        <div class='editor-main'>
          <div class='left'>
            <left data={this.allComponents} />
          </div>
          <div class='center'>
            <el-form label-width='80px'>
              <nestedDraggable tasks={this.list} />
            </el-form>
          </div>
          <div class='right'>
            <right />
          </div>
        </div>

      </div>
    )
  }
}
