console.log('omfg')

var js = document.getElementById("button")
console.log(js)

var js1 = document.getElementById("linkFacebook")
console.log(js1)

var js2 = document.getElementById("linkGoogle")
console.log(js2)


var fun = function myFunction() {
    alert('Florin Salam mare sef la bani')
}

var fun2 = function myFunction() {
    alert('Redirecting to Facebook...')
}

var fun3 = function myFunction() {
    alert('Se stie!')
}


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.nume }} </li>'
})

Vue.component('telefonComponent', {
    props: ['telefon'],
    template: '<li> Am adaugat telefon </li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        styleMessage: 'color:red',
        anotherStyleMessage: 'color:blue',
        shouldAppear: true,
        shouldNotAppear: false,
        telefon: {
            idTelefon: 0,
            numeTelefon: '',
        },
        telefoane: [],
        myObject: {
            username: '',
            password: ''
        },
        elevi: [
            {
                id: 0,
                nume: 'Andrei'
            },
            {
                id: 1,
                nume: 'Jean'
            },
            {
                id: 2,
                nume: 'Camataru'
            }
        ],
        masini: [
            {
                numeDeMasina: 'Dacia'
            },
            {
                numeDeMasina: 'Jaguar'
            }
        ],
        flori: [
            {
                numeFloare: 'Trandafir',
                culoare: 'rosu'
            },
            {
                numeFloare: 'Stanjenel',
                culoare: 'indigo'
            }
        ]
    },
    methods: {
        myButton: function () {
            window.alert('You clicked the button!')
        },
        hoverFunction: function () {
            console.log('Over the button!')
        },
        addTelefon: function () {
            this.telefoane.push(
                {
                    id: this.telefon.idTelefon += 1,
                    nume: this.telefon.numeTelefon
                });
            this.telefon.numeTelefon = '';
        }
    }
});



