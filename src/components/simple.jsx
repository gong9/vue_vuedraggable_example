import draggable from "vuedraggable";

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
