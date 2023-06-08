let items = document.getElementsByClassName('item'); // accessing the items
let container1 = document.getElementById('container-1');
let container2 = document.getElementById('container-2');
let reset = document.getElementById('reset');
let originalContainer1 = container1.innerHTML;


// Creating funtion that will drag item(all item of container) between two containers
function dragAndDrop() {
    for (const item of items) {
        // we have added dragstart event
        item.addEventListener("dragstart", (e) => {
            // when we start dragging then that item  is targeted in the variable "selected"
            let selected = e.target;

            // we are dragging over to the 2nd container
            container2.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            // we are adding drop event
            container2.addEventListener("drop", (e) => {
                container2.appendChild(selected); // we are appending the selected item to the 2nd container
                selected = null; // we are clearing the selected item from the 1st container
                alert("Item dropped from Container-1 to Container-2");
            });

            // we are dragging over to the 1st container
            container1.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            // we are adding drop event
            container1.addEventListener("drop", (e) => {
                container1.appendChild(selected); // we are appending the selected item to the 1st container
                selected = null; // we are clearing the selected item from the 2nd container
                alert("Item dropped from Container-2 to Container-1");
            });

        })
    }
}

dragAndDrop(); // calling the function


reset.addEventListener('click', () => {
    //Reset Container-2 to original
    while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
    }

    //Reset Container-1 to original
    container1.innerHTML = originalContainer1;

    dragAndDrop();

});
