import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public handle({ view }: HttpContext) {
    view.share({ title: 'Dashboard Pustakawan' })
    return view.render('pages/library/cms/dashboard', {
        totalBook: 10,
        totalAdmin: 20,
        totalStudent: 20,
        totalCategory: 20
    })
  }
}
