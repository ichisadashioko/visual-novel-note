let notes = {
    '放課後シンデレラ': [
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
    ],
    '恋愛、借りちゃいました': [
        '新海<rt>しんかい</rt>幸<rt>ゆうき</rt>',
        '天満<rt>てんま</rt>八純<rt>はすみ</rt>',
        '雛山<rt>ひなやま</rt>吾郎<rt>ごろう</rt>',
    ],
    'ピュア×コネクト': [
        '紺野<rt>こんの</rt>彩里沙<rt>ありさ</rt>',
    ],
    'カノジョ＊ステップ': [
        '椎名<rt>しいな</rt>',
    ],
    '銀色、遥か': [
        '雪月<rt>ゆづき</rt>',
        '瑞羽<rt>みずは</rt>',
        '如月<rt>きさらぎ</rt>瑞羽<rt>みずは</rt>',
        '桧崎<rt>ひざき</rt>まりあ',
        '名白<rt>なしろ</rt>椛<rt>もみじ</rt>',
        '椛<rt>もみじ</rt>',
        '蒼井<rt>あおい</rt>雛多<rt>ひなた</rt>',
        '雛多<rt>ひなた</rt>',
    ],
    '紅月ゆれる恋あかり': [
        '村垣<rt>むらがき</rt>伊織<rt>いおり</rt>',
        '朱雀院<rt>すざくいん</rt>紅葉<rt>もみじ</rt>',
        '天王寺<rt>てんのうじ</rt>ヴィクトリア',
        '源<rt>みなもと</rt>雫<rt>しずく</rt>',
        '佐々木<rt>ささき</rt>巫琴<rt>みこと</rt>',
        '風嶺<rt>かざみね</rt>雪月花<rt>せつげっか</rt>',
        '九鬼<rt>くき</rt>旭<rt>あさひ</rt>',
    ],
}

class RubyNoteEntry extends React.Component {
    render() {
        let that = this
        let standalone_ruby_code = '<ruby>' + that.props.ruby_code + '</ruby>'

        return React.createElement(
            'div',
            {},
            React.createElement(
                'ruby',
                { dangerouslySetInnerHTML: { __html: that.props.ruby_code } },
            ),
            React.createElement(
                'button',
                {
                    title: that.props.ruby_code,
                    className: ['copy-button'],
                    onClick: function () {
                        navigator.clipboard.writeText(that.props.ruby_code)
                    },
                },
                'embedding',
            ),
            React.createElement(
                'button',
                {
                    title: standalone_ruby_code,
                    className: ['copy-button'],
                    onClick: function () {
                        navigator.clipboard.writeText(standalone_ruby_code)
                    },
                },
                'stand-alone',
            ),
        )
    }
}

class App extends React.Component {
    render() {
        let title_containers = []

        for (let title_name in notes) {
            let title_container = React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    title_name,
                ),
                React.createElement(
                    'div',
                    {},
                    notes[title_name].map(function (ruby_code) {
                        return React.createElement(
                            RubyNoteEntry,
                            { ruby_code: ruby_code },
                        )
                    }),
                )
            )

            title_containers.push(title_container)
        }

        return React.createElement('div', null, title_containers)
    }
}

let reactApp = React.createElement(App)
let containerElement = document.getElementById('app')

ReactDOM.render(reactApp, containerElement)
