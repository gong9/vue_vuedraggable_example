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
                        type: "chunk",
                        name: 'radio',
                        label: '单选框'
                    },
                    {
                        type: "chunk",
                        name: 'radio1',
                        label: '单选框1'
                    }
                ]
            },
            list: [
                {
                    type: 'block',
                    name: 'block',
                    children: [
                        {
                            type: "chunk",
                            name: 'radio1',
                            label: '单选框1'
                        }
                    ],
                    label: 'block'
                },
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
    watch: {
        list: {
            deep: true,
            immediate: true,
            handler(value) {
                console.log(value);
            }

        },
        allComponents: {
            deep: true,
            immediate: true,
            handler(value) {
                console.log(value);
            }
        }
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
