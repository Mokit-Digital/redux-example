import { login } from '../../controllers/Login'

export default (req, res) =>{

    if (req.method === 'POST') {
        login(req, res)
    }
}