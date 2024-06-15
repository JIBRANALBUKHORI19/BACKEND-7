const express = require('express')
const routerMahasiswa = express.Router()

const controllerMahasiswa = require('../controller/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .post(controllerMahasiswa.post)
    .get(controllerMahasiswa.getMahasiswa)

routerMahasiswa.route('/mahasiswa/:nim')
    .get(controllerMahasiswa.getMahasiswaByNim)
    .put(controllerMahasiswa.update)
    .delete(controllerMahasiswa.delete)

routerMahasiswa.route('/mahasiswa/nilai/:nim')
    .get(controllerMahasiswa.getNilaiByNim)
    .put(controllerMahasiswa.InsertNilai)

module.exports = routerMahasiswa