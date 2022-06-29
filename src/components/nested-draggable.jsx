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
            <draggable class={this.tasks.length === 0 ? 'init-class' : ''} tag="div" list={this.tasks} group={{ put: true }}>
                {this.tasks.map(task => {
                    return (
                        <div>
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