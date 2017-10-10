class ListView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {

        return `
            ${model.tasks.map(n => `

                <li onclick="taskController.edit(${n.id}, '${n.taskTitle}', '${n.description}')">
                    <svg class="icon icon-check">
                        <use xlink:href="#icon-check"></use>
                    </svg>
                    ${n.taskTitle} -- ${n.id}
                </li>

            `).join('')}
        `;
    }
}

// ${n.description}
