import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public login({ view, request }: HttpContext) {
    view.share({
        title: 'Login ke Aplikasi E-Perpustakaan'
    })
    return view.render('pages/library/auth/login', {
        metode: request.qs().metode
    })
  }

  public register({view}: HttpContext){
    view.share({
        title: 'Daftar Akun E-Perpustakaan'
    })
    return view.render('pages/library/auth/register')
  }

  public handleLogin({request}: HttpContext){
    const data = request.body()
  }

  public handleRegister({request}: HttpContext){
    const data = request.body()
  }
}
