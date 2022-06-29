import nestedDraggable from './nested-draggable'
import left from './left';
import './nested-example.scss'
export default {
    data() {
        return {
            allComponents: {
                container: [
                    {
                        type: 'block',
                        name: 'block',
                        children: [],
                        label: 'block'
                    }
                ],
                baseChunk: [
                    {
                        type: "el-input",
                        name: 'radio',
                        label: '输入框'
                    },
                    {
                        type: "el-time-picker",
                        name: 'radio1',
                        label: '时间选择'
                    }
                ]
            },
            list: [
                {
                    type: 'block',
                    name: 'block',
                    children: [],
                    label: 'block'
                }
            ],
        }
    },
    components: {
        nestedDraggable,
        left
    },
    render(h) {
        return (
            <div class='nested-example'>
                <div class='left'>
                    <left data={this.allComponents} />
                </div>
                <div class='center'>
                    <nestedDraggable tasks={this.list} />
                </div>
                <div class='right' />
            </div>
        );
    },
};
