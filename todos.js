function fetchTodos () {
    let todos = []

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => {
            todos = data
            const tbody = document.querySelector('.tbody')

            todos.map((t) => {
                const row = document.createElement('tr')

                Object.keys(t).forEach((key) => {
                    const cell = document.createElement('td')
                    const cellText = document.createTextNode(t[key])

                    cell.appendChild(cellText)
                    row.appendChild(cell)
                })
                tbody.appendChild(row)
            })
        })    

}

fetchTodos()