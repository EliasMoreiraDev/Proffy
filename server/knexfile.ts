import path from 'path'

module.exports = {
    client: 'sqlite30',
    connection:{
        filename: path.resolve(__dirname, 'src', 'databgase', 'database.sqlite')
    },
    migrations: {
        diretory: path.resolve(__dirname, 'src', 'databgase', 'migrations')
    },
    useNullAsDefault:true,
}