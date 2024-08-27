function createDivWithTitleAndText(title, text, color) {
    // Create a new div element
    let div = document.createElement('div');
    div.className = 'dummy';
    div.style.backgroundColor = color;  // Set the background color

    // Create a h2 element for the title
    let h2 = document.createElement('h2');
    h2.innerText = title;
    div.appendChild(h2);

    // Create a p element for the text
    let p = document.createElement('p');
    p.innerText = text;
    div.appendChild(p);

    // Return the div element
    return div;
}

async function populateElementWithJsonData(jsonUrl, elementId) {
    // Fetch the JSON data from jsonUrl
    let response = await fetch(jsonUrl);

    // Parse the JSON data into a JavaScript object
    let data = await response.json();

    // Get the HTML element with the id elementId
    let element = document.getElementById(elementId);

    // For each object in the data array
    for (let item of data.data) {
        // Create a div with the title and text from the object
        let div = createDivWithTitleAndText(item.title, item.text, item.color);

        // Append the created div to the element
        element.appendChild(div);
    }
}