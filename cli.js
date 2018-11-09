#!/usr/bin/env node
const slurm = require('slurm')
const chalk = require('chalk')

const [name] = slurm()
if (!name) {
  fatal('must provide a package name')
}

const umd = require('.')
umd.fetch(name).then(buf => console.log(buf.toString()), console.error)

function fatal(msg) {
  console.error(chalk.red('error: ') + msg)
  process.exit(1)
}
