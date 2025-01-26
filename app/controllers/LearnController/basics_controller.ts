// import type { HttpContext } from '@adonisjs/core/http'

export default class BasicsController {
    index(){
        return [
            {
                name: 'Budi Budiman',
                age: 20
            },
            {
                name: 'Tono Wijoyo',
                age: 30
            }
        ]
    }
}