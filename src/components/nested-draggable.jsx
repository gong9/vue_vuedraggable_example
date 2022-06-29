import draggable from 'vuedraggable'
import './nested-draggable.scss'

export default {
    name: "nestedDraggable",
    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    components: {
        draggable
    },
    render(h) {
        return (
            <draggable class='container-node' tag="div" list={this.tasks} group={{ name: 'g1', put: true }}>
                {this.tasks.map(task => {
                    return (
                        <div key={task.name}>
                            {
                                task.children ? <nestedDraggable tag="div" class="container-node" tasks={task.children} /> : <div class='node-leaf'> {task.name}</div>
                            }
                        </div>
                    )
                })}
            </draggable >
        )
    }
}