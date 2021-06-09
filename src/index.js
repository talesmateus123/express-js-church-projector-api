const express = require('express')
const { exec } = require('child_process')

const app = express()

app.get('/poweroff', () => exec('poweroff'))

app.get('/reboot', () => exec('reboot'))

app.listen(3000)