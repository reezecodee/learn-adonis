import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    view.share({
      title: 'Daftar Kategori Buku',
    })
    return view.render('pages/library/cms/category/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    view.share({
      title: 'Tambah Kategori Buku',
    })
    return view.render('pages/library/cms/category/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    view.share({
      title: 'Edit Kategori Buku',
    })
    return view.render('pages/library/cms/category/edit')
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
