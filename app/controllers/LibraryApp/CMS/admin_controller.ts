import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    view.share({
      title: 'Daftar Admin',
    })
    return view.render('pages/library/cms/admin/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    view.share({
      title: 'Tambah Admin',
    })
    return view.render('pages/library/cms/admin/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    view.share({
      title: 'Detail Admin',
    })
    return view.render('pages/library/cms/admin/detail')
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    view.share({
      title: 'Edit Admin',
    })
    return view.render('pages/library/cms/admin/edit')
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
