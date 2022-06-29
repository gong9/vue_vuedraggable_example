import nestedDraggable from './nested-draggable'
import './nested-example.scss'
export default {
    data() {
        return {
            allComponents: {
                container: [
                    {
                        type: 'block',
                        name: 'block2',
                        children: []
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
                    name: 'block2',
                    children: [
                        {
                            type: 'block',
                            name: 'block3',
                            children: [

                            ]
                        },
                    ]
                },
                {
                    type: 'block',
                    name: 'block1',
                    children: [
                        {
                            type: "chunk",
                            name: 'radio',
                            label: '单选框'
                        },
                        {
                            type: "chunk",
                            name: 'radio1',
                            label: '单选框1'
                        },
                    ]
                }
            ],
        }
    },
    components: {
        nestedDraggable
    },
    render(h) {
        return (
            <div class='nested-example'>
                <div class='left'>
                    <nestedDraggable tasks={this.list} />
                </div>
                <div class='center'>
                    <nestedDraggable tasks={this.list} />
                </div>
                <div class='right' />
            </div>
        );
    },
};
