import MonacoEditor from '../MonacoEditor/index.jsx'
import { filterUselessData } from '../../util'
export default {
  props: {
    schema: {
      type: [Object, Array],
      default: () => []
    }
  },
  data() {
    return {
      drawerFlag: false
    }
  },
  computed: {

  },
  methods: {
    openDrawer() {
      this.drawerFlag = true
    },
    closeDrawer() {
      this.drawerFlag = false
    }
  },
  render(h) {
    return (
      <div>
        <el-row gutter={20}>
          <el-col span={6}>lego编辑器</el-col>
          <el-col span={1} offset={5}><div>
            <el-button size='mini' type='warning' plain onClick={this.openDrawer}>查看json</el-button>
          </div></el-col>
        </el-row>
        <el-drawer
          title='布局json'
          visible={this.drawerFlag}
          direction='rtl'
          beforeClose={this.closeDrawer}
        >
          <MonacoEditor
            language='json'
            editorHight='100%'
            editorWidth='100%'
            value={JSON.stringify(filterUselessData(this.schema), null, 2)}
          />
        </el-drawer>
      </div>
    )
  }
}
