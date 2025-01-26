import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    view.share({
      title: 'Daftar Buku Perpustakaan',
    })
    return view.render('pages/library/cms/book/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    view.share({
      title: 'Tambah Buku Perpustakaan',
    })
    return view.render('pages/library/cms/book/create')
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
      title: 'Detail Buku Perpustakaan',
    })
    return view.render('pages/library/cms/book/detail')
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    view.share({
      title: 'Edit Buku Perpustakaan',
    })
    return view.render('pages/library/cms/book/edit')
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