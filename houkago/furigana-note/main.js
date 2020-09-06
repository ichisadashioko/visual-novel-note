let app = document.getElementById('app')
let notes = [
    '公住<rt>くずみ</rt>清史朗<rt>きよしろ</rt>',
    '田寄<rt>たより</rt>多乃実<rt>たのみ</rt>'
]

for (let i = 0, n = notes.length; i < n; i++) {
    let ruby_el = document.createElement('ruby')
    ruby_el.innerHTML = notes[i]
    let code_el = document.createElement('code')
    code_el.innerText = notes[i]

    code_el.addEventListener('click', function () {
        console.log(i)
        console.log(notes[i])
        navigator.clipboard.writeText(notes[i])
    })

    let container = document.createElement('div')
    container.className = 'entry'

    container.appendChild(ruby_el)
    container.appendChild(code_el)

    app.appendChild(container)
}
