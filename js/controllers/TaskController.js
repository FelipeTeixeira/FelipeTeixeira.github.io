class TaskController {

        constructor() {

            let $ = document.querySelector.bind(document);

            this._id = 0;
            this._fieldTaskId = $('#taskId');
            this._fieldTaskTitle = $('#taskTitle');
            this._fieldDescription = $('#description');
            this._btnSubmit = $("#btnSend");
            this._cardAdd = $(".cardContainer");

            this._listTask = new ListTask();

            this._listView = new ListView($('#listView'));
            this._listView.update(this._listTask);

            this._message = new Message();
            this._messageView = new MessageView($('#messageView'));
            this._messageView.update(this._message);

        }

        addTask(event) {
            event.preventDefault();
            this._listTask.addTask(this._createTask());
            this._listView.update(this._listTask);

            this._message.messageText = 'Create Task';
            this._messageView.update(this._message);

            this._clearForm();

            // this._listTask.tasks.splice(id, 1);
            console.log(this._listTask.tasks[0]);
        }

        triggerTask() {
            this._btnSubmit.click();
        }

        closeTask(event) {
            event.preventDefault();
            this._cardAdd.classList.remove("is-cardAdd-show");
            this._clearForm();
        }

        _createTask() {
            return new Task(
                this._id++,
                this._fieldTaskTitle.value,
                this._fieldDescription.value);

        }

        edit(id, taskTitle, description) {
            var task = this._listTask.tasks[id];

            this._fieldTaskId.value = id;
            this._fieldTaskTitle.value = taskTitle;
            this._fieldDescription.value = description;
        }

        _clearForm() {
            this._fieldTaskId.value = "";
            this._fieldTaskTitle.value = "";
            this._fieldDescription.value = "";
        }
    }






            // console.log(task.id);



