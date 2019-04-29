const knex = require('knex');
// const express = require('express');

// const app = new express()

//create a sqlite client
const client =knex({
    client: 'sqlite3',
    connection:{
        filename:'storage.sqlite'
    },
    useNullAsDefault: true
})

//create a table

client.schema.createTable('user',function(table)
{
    table.string('name');
    table.string('email');
    table.boolean('verified');
})