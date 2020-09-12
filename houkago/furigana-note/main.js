let app = document.getElementById('app')
let notes = [
    '公住<rt>くずみ</rt>清史朗<rt>きよしろ</rt>',
    '田寄<rt>たより</rt>多乃実<rt>たのみ</rt>',
    '雪子<rt>ゆきこ</rt>先輩<rt>せんぱい</rt>',
    '山<rt>やま</rt>道<rt>みち</rt>前<rt>まえ</rt>',
    '自然<rt>しぜん</rt>公園<rt>こうえん</rt>',
    '分<rt>わ</rt>かれ<rt></rt>道<rt>みち</rt>',
    '高<rt>たか</rt>台<rt>だい</rt>',
    'ビジネス<rt></rt>街<rt>がい</rt>',
    '学園<rt>がくえん</rt>前<rt>まえ</rt>の<rt></rt>通<rt>とお</rt>り',
    '公園<rt>こうえん</rt>横<rt>よこ</rt>の<rt></rt>住宅<rt>じゅうたく</rt>街<rt>がい</rt>',
    '新海<rt>しんかい</rt>幸<rt>ゆうき</rt>',
    '天満<rt>てんま</rt>八純<rt>はすみ</rt>',
    '雛山<rt>ひなやま</rt>吾郎<rt>ごろう</rt>',
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