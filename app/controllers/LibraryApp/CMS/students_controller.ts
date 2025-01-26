import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    view.share({
      title: 'Daftar Siswa',
    })
    return view.render('pages/library/cms/student/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    view.share({
      title: 'Tambah Siswa',
    })
    return view.render('pages/library/cms/student/create')
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
      title: 'Detail Siswa',
    })
    return view.render('pages/library/cms/student/detail')
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    view.share({
      title: 'Edit Siswa',
    })
    return view.render('pages/library/cms/student/edit')
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
