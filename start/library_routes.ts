import router from '@adonisjs/core/services/router'

const AuthController = () => import('#controllers/LibraryApp/Auth/auth_controller')
const DashboardController = () => import('#controllers/LibraryApp/CMS/dashboard_controller')
const BooksController = () => import('#controllers/LibraryApp/CMS/books_controller')
const AdminController = () => import('#controllers/LibraryApp/CMS/admin_controller')
const StudentsController = () => import('#controllers/LibraryApp/CMS/students_controller')
const CategoriesController = () => import('#controllers/LibraryApp/CMS/categories_controller')

router.get('/', (ctx) => {
    ctx.view.share({title: 'Silahkan Pilih Metode Login ke E-Perpustakaan'})
    return ctx.view.render('pages/library/home')
}).as('home')

router.group(() => {
    router.get('login', [AuthController, 'login']).as('auth.login')
    router.get('register', [AuthController, 'register']).as('auth.register')

    router.get('handle-login', [AuthController, 'handleLogin']).as('auth.handleLogin')
    router.get('handle-register', [AuthController, 'handleRegister']).as('auth.handleRegister')
}).prefix('auth')


router.group(() => {
    router.group(() => {
        router.get('dashboard', [DashboardController]).as('cms.dashboard')

        router.resource('books', BooksController)
        router.resource('admin', AdminController)
        router.resource('students', StudentsController)
        router.resource('categories', CategoriesController)
    }).prefix('cms')
}).prefix('perpustakaan')