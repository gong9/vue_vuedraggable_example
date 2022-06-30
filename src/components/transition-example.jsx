import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 }
      ]
    }
  },
  render(h) {
    return (
      <div>
        <div>{this.list.map(item => item.name)}</div>
        <draggable list={this.list}>
          {this.list.map((item) => (
            <div>{item.id}</div>
          ))}
        </draggable>
      </div>
    )
  }
}
