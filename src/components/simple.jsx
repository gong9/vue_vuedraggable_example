import draggable from "vuedraggable";
import Sortable from 'sortablejs'

export default {
  data() {
    return {
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
      ],
    };
  },
  components: {
    draggable,
  },
  render(h) {
    for (var i = 0; i < this.list.length; i++) {
      console.log(new Sortable(this.list[i], {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
      }));
    }
    return (
      <div>
        <div>{this.list.map(item => item.name)}</div>
        <draggable tag="ul" list={this.list}>
          {this.list.map((item) => (
            <li>{item.id}</li>
          ))}
        </draggable>
      </div>
    );
  },
};
