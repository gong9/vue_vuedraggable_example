import center from './Editor/center'
import top from './Editor/top'
import left from './Editor/left'
import right from './Editor/right'

import './index.scss'

export default {
  components: {
    center,
    left,
    right,
    top
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
        <top schema={this.list}/>
        <div class='editor-main'>
          <div class='left'>
            <left data={this.allComponents} />
          </div>
          <div class='center'>
            <el-form label-width='80px'>
              <center tasks={this.list} />
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
