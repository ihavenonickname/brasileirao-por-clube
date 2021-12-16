function defaultSorter(a, b) {
    return a > b ? 1 : -1
}

function predContemClube(clube) {
    return function (jogo) {
        return jogo.mandante === clube || jogo.visitante === clube
    }
}

function montarPlacar(clube) {
    return function (jogo) {
        return jogo.mandante === clube
            ? ({ feitos: jogo.gm, sofridos: jogo.gv })
            : ({ feitos: jogo.gv, sofridos: jogo.gm })
    }
}

const clubes = [...new Set(dataset.map(x => x.mandante))].sort(defaultSorter)

function campanha(placares) {
    const nJogos = placares.length

    const vitorias = placares.filter(x => x.feitos > x.sofridos).length
    const derrotas = placares.filter(x => x.feitos < x.sofridos).length
    const empates = nJogos - vitorias - derrotas
    const pontos = vitorias * 3 + empates
    const aproveitamento = +(pontos / (nJogos * 3) * 100).toFixed(1)
    const totalGolsFeitos = placares.map(x => x.feitos).reduce((a, b) => a + b, 0)
    const totalGolsSofridos = placares.map(x => x.sofridos).reduce((a, b) => a + b, 0)
    const mediaGolsFeitos = +(totalGolsFeitos / nJogos).toFixed(1)
    const mediaGolsSofridos = +(totalGolsSofridos / nJogos).toFixed(1)

    return {
        pontos,
        vitorias,
        derrotas,
        empates,
        aproveitamento,
        totalGolsFeitos,
        totalGolsSofridos,
        mediaGolsFeitos,
        mediaGolsSofridos
    }
}

Vue.filter('formatarData', function (value) {
    if (value) {
        return value.split('-').reverse().join('/')
    }
})

new Vue({
    el: '#app',
    data: {
        clubes,
        clubeSelecionado: clubes[0],
        abas: [
            { id: 'mandante', texto: 'Mandante' },
            { id: 'visitante', texto: 'Visitante' },
            { id: 'melhor-sprint', texto: 'Melhor sprint' },
            { id: 'pior-sprint', texto: 'Pior sprint' },
            { id: 'confrontos', texto: 'Confrontos' },
        ],
        abaSelecionada: 'mandante',
        tamanhoSprintPermitido: [...Array(17).keys()].map(x => x + 3),
        tamanhoSprint: 5,
    },
    computed: {
        campanhaMandante() {
            const jogos = dataset.filter(x => x.mandante === this.clubeSelecionado)

            const placares = jogos.map(({ gm, gv }) => ({ feitos: gm, sofridos: gv }))

            return {
                jogos,
                ...campanha(placares)
            }
        },
        campanhaVisitante() {
            const jogos = dataset.filter(x => x.visitante === this.clubeSelecionado)

            const placares = jogos.map(({ gm, gv }) => ({ feitos: gv, sofridos: gm }))

            return {
                jogos,
                ...campanha(placares)
            }
        },
        melhorSprint() {
            debugger
            const jogos = dataset.filter(predContemClube(this.clubeSelecionado))
            const placares = jogos.map(montarPlacar(this.clubeSelecionado))

            let melhorSprint = campanha(placares.slice(0, this.tamanhoSprint))
            let melhorSprintIndex = 0

            for (let i = 1; i < 38 - this.tamanhoSprint; i += 1) {
                const sprint = campanha(placares.slice(i, i + this.tamanhoSprint))

                if (sprint.aproveitamento < melhorSprint.aproveitamento) {
                    continue
                }

                if (sprint.aproveitamento > melhorSprint.aproveitamento) {
                    melhorSprint = sprint
                    melhorSprintIndex = i
                } else if (sprint.mediaGolsFeitos > melhorSprint.mediaGolsFeitos) {
                    melhorSprint = sprint
                    melhorSprintIndex = i
                }
            }

            return {
                jogos: jogos.slice(melhorSprintIndex, melhorSprintIndex + this.tamanhoSprint),
                ...melhorSprint
            }
        },
        piorSprint() {
            const jogos = dataset.filter(predContemClube(this.clubeSelecionado))
            const placares = jogos.map(montarPlacar(this.clubeSelecionado))

            let piorSprint = campanha(placares.slice(0, this.tamanhoSprint))
            let piorSprintIndex = 0

            for (let i = 1; i < 38 - this.tamanhoSprint; i += 1) {
                const sprint = campanha(placares.slice(i, i + this.tamanhoSprint))

                if (sprint.aproveitamento > piorSprint.aproveitamento) {
                    continue
                }

                if (sprint.aproveitamento < piorSprint.aproveitamento) {
                    piorSprint = sprint
                    piorSprintIndex = i
                } else if (sprint.mediaGolsSofridos > piorSprint.mediaGolsSofridos) {
                    piorSprint = sprint
                    piorSprintIndex = i
                }
            }

            return {
                jogos: jogos.slice(piorSprintIndex, piorSprintIndex + this.tamanhoSprint),
                ...piorSprint
            }
        },
        confrontosIndividuais() {
            const jogos = dataset.filter(predContemClube(this.clubeSelecionado))

            const campanhas = []

            for (const adversario of clubes.filter(x => x !== this.clubeSelecionado)) {
                const placares = jogos
                    .filter(predContemClube(adversario))
                    .map(montarPlacar(this.clubeSelecionado))

                campanhas.push({ adversario, ...campanha(placares) })
            }

            return campanhas
        }
    },
    methods: {
    },
    mounted() {
        setTimeout(() => {
            document.getElementById('load-div').style.display = 'none';
            document.getElementById('app').style.display = 'block';
        }, 600);
    },
});
