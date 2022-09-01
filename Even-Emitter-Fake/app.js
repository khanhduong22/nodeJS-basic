const Emitter = require('./emitter')

const emit = new Emitter()

emit.on('greet', () => console.log('Somewhere, someone said hello.'))

emit.on('greet', () => console.log('A greeting occurred!'))

console.log('Hello!')

emit.emit('greet')
