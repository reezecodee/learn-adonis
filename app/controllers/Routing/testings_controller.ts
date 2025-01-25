import type { HttpContext } from '@adonisjs/core/http'

export default class TestingsController {
    public async index(context: HttpContext) {
        return context.view.render('pages/basic/routing/from-controller', {
            title: 'View dari controller'
        })
    }

    public async getParam(context: HttpContext) {
        return context.view.render('pages/basic/routing/param-controller', {
            id: context.params.id
        })
    }
}