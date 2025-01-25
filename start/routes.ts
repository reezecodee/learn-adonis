/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

//   gunakan perintah node ace list:routes untuk melihat daftar route

router.on('/').render('pages/home')

// basic routing
router
  .group(() => {
    // router on digunakan untuk halaman statis saja
    router.on('/statis').render('pages/basic/routing/route-on').as('route.on')

    // router get
    router.get('return-view', async ({view}) => {
        return await view.render('pages/basic/routing/return-view', {
            title: 'GET mengembalikan view'
        })
    }).as('route.return-view')

    router.get('return-string', () => {
        return 'Ini adalah route get dengan return string'
    }).as('route.return-str')

    router.get('return-param/:id', ({params}) => {
        return `Ini adalah route get yang mengembalikan parameter id: ${params.id}`
    }).as('route.return-param')

    router.get('optional-param/:id?', ({params}) => {
        if(params.id){
            return `Parameter id ditemukan yaitu ${params.id}`
        }
        return 'Tidak ditemukan parameter id'
    }).as('route.optional-param')

    router.get('wildcard-param/:category/*', ({params}) => {
        // * digunakan untuk mengambil parameter liar
        return [
            `Ini akan mengambil data category yaitu ${params.category}`,
            `Ini akan mengambil parameter liar yaitu ${params['*']}`
        ]
    }).as('route.wildcard-param')

    // param matcher
    router.get('matcher/:id', ({params}) => {
        return `Matcher berhasil dengan ${params.id}`   
    })
    .where('id', {          
        match: /^[0-9]+$/,
        cast: (value) => Number(value)
    }).as('route.matcher-id')

    // inbuild param matcher. bisa juga untuk slug dan uuid
    router.get('inbuild-matcher/:id', ({params}) => {
        return `Param id adalah number ${params.id}`
    }).where('id', router.matchers.number()).as('route.inbuild-matcher')

    // global matcher (ini akan mendefinisikan semua param id pada route itu harus berupa uuid)
    // ini bisa di timpa dengan cara seperti in build param
    router.where('id', router.matchers.uuid())
  })
  .prefix('basic/routing')
  


//   HTTP Methods
router.group(() => {
    router.get('admin', () => {})
    router.post('admin', () => {})
    router.put('admin/:id', () => {})
    router.patch('admin/:id', () => {})
    router.delete('admin/:id', () => {})

    // any dapat menerima semua jenis http method
    router.any('atmint', () => {})
    // membuat http method khusus selain diatas
    router.route('atmin-gamtenk', ['TRACE'], () => {})
}).prefix('basic/routing/http')



// using controller
import TestingsController from '#controllers/Routing/testings_controller'

router.get('testing-controller', [TestingsController, 'index'])
router.get('testing-controller/:id', [TestingsController, 'getParam']).where('id', router.matchers.number())
