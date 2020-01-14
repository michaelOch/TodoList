function ProjectDisplayUI(project) {
    const element = document.createElement('div');
    element.innerHTML = `
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="title" type="text" class="">
                    <label for="title">Title</label>
                </div>
                <div class="input-field col s12">
                    <input id="description" type="text" class="">
                    <label for="description">Description</label>
                </div>
                <div class="input-field col s12">
                    <a href="" class="prefix">
                        <i class="material-icons left date">date_range</i>
                    </a>
                    <input id="dueDate" type="text" class="" placeholder="dd-mm-yy">
                    <label for="dueDate">Due Date</label>
                </div>
                <p class="col s12">
                    <label for="priority">
                        <input id="priority" type="checkbox" class="filled-in">
                        <span>Priority<span>
                    </label>
                </p>
                <button class="btn" type="submit" id="add-task">
                    Add New Task
                </button>
            </div>
        </form>
        <h5>${project}</h5>
        <ul class="collection"></ul>
    `;

    return element;
}

export default ProjectDisplayUI;