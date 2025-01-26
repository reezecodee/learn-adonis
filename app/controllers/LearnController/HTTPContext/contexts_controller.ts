import type { HttpContext } from '@adonisjs/core/http'

export default class ContextsController {
    // https://docs.adonisjs.com/guides/concepts/http-context
    
    async renderView(ctx: HttpContext){
        return ctx.view.render('')
    }

    async reqRes({request, response}: HttpContext){
        // const name = request.input('name')
        // const address = request.input('address')
        const data = request.body()

        response.json({
            statusCode: 200,
            message: 'Ok',
            data: {
                name: data.name,
                address: data.address
            }
        })
    }
}